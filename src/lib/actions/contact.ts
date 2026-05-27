"use server";

import { headers } from "next/headers";
import { type ContactFormData, contactSchema } from "@/lib/validations/contact";
import {
  checkRateLimit,
  getRateLimitKey,
  RATE_LIMITS,
} from "@/lib/security/rate-limiter";
import {
  validateHoneypot,
  validateFormTiming,
  performSpamCheck,
  sanitizeFormData,
} from "@/lib/security/spam-detection";
import { siteConfig } from "@/lib/site";

const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
const EXTERNAL_REQUEST_TIMEOUT_MS = 10_000;

export interface ContactSubmission extends ContactFormData {
  _honeypot?: string;
  _formToken?: string;
  _timestamp?: number;
  _turnstileToken?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
  code?: string;
}

interface TurnstileVerifyResult {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

interface Web3FormsResult {
  success: boolean;
  message?: string;
}

async function getClientIP(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIP = headersList.get("x-real-ip");
  if (realIP) return realIP;
  const cfConnectingIP = headersList.get("cf-connecting-ip");
  if (cfConnectingIP) return cfConnectingIP;
  return "unknown";
}

function logSecurityEvent(event: string, details: Record<string, unknown>): void {
  console.warn(`[SECURITY] ${event}:`, {
    ...details,
    timestamp: new Date().toISOString(),
  });
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs = EXTERNAL_REQUEST_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyTurnstileToken(
  token: string | undefined,
  clientIP: string
): Promise<{ valid: boolean; code?: string }> {
  if (!token) {
    return { valid: false, code: "missing-token" };
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY not configured");
    return { valid: false, code: "missing-secret" };
  }

  try {
    const response = await fetchWithTimeout(TURNSTILE_SITEVERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: clientIP,
      }),
    });

    if (!response.ok) {
      console.error("Turnstile verification request failed", {
        status: response.status,
        statusText: response.statusText,
      });
      return { valid: false, code: `request-failed-${response.status}` };
    }

    const result = (await response.json()) as TurnstileVerifyResult;
    if (!result.success) {
      const code = result["error-codes"]?.join(",") || "verification-failed";
      console.warn("Turnstile verification failed", {
        code,
        hostname: result.hostname,
        action: result.action,
      });
      return {
        valid: false,
        code,
      };
    }

    console.info("Turnstile verification passed", {
      hostname: result.hostname,
      action: result.action,
    });

    return { valid: true };
  } catch (error) {
    const code = error instanceof DOMException && error.name === "AbortError"
      ? "request-timeout"
      : "request-error";

    console.error("Turnstile verification request error", {
      code,
      error: error instanceof Error ? error.message : "Unknown",
    });

    return { valid: false, code };
  }
}

export async function submitContact(
  rawData: ContactSubmission
): Promise<ContactResponse> {
  const clientIP = await getClientIP();

  try {
    // Layer 1: Honeypot
    if (!validateHoneypot(rawData._honeypot)) {
      logSecurityEvent("HONEYPOT_TRIGGERED", { ip: clientIP });
      return { success: true, message: "Message sent successfully." };
    }

    // Layer 2: Timing
    const timingResult = validateFormTiming(rawData._formToken, rawData._timestamp);
    if (!timingResult.valid) {
      logSecurityEvent("TIMING_VIOLATION", { ip: clientIP, reason: timingResult.reason });
      return {
        success: false,
        message: timingResult.reason || "Please try again",
        code: "TIMING_ERROR",
      };
    }

    // Layer 3: Rate limit by IP
    const ipRateLimit = checkRateLimit(
      getRateLimitKey("contact_ip", clientIP),
      RATE_LIMITS.contact
    );
    if (!ipRateLimit.allowed) {
      logSecurityEvent("RATE_LIMIT_IP", {
        ip: clientIP,
        retryAfter: ipRateLimit.retryAfter,
      });
      return {
        success: false,
        message: `Too many requests. Please wait ${Math.ceil((ipRateLimit.retryAfter || 60) / 60)} minutes.`,
        code: "RATE_LIMIT",
      };
    }

    // Layer 4: Zod validation
    const parseResult = contactSchema.safeParse({
      name: rawData.name,
      email: rawData.email,
      phone: rawData.phone,
      message: rawData.message,
      services: rawData.services,
    });
    if (!parseResult.success) {
      return {
        success: false,
        message: parseResult.error.issues[0]?.message ?? "Please check your inputs and try again.",
        code: "VALIDATION_ERROR",
      };
    }

    // Layer 5: Sanitize
    const data = sanitizeFormData(rawData);

    // Layer 6: Rate limit by email
    const emailRateLimit = checkRateLimit(
      getRateLimitKey("contact_email", data.email.toLowerCase()),
      RATE_LIMITS.contactByEmail
    );
    if (!emailRateLimit.allowed) {
      const maskedEmail = data.email.replace(/(.{2})(.*)(@.*)/, "$1***$3");
      logSecurityEvent("RATE_LIMIT_EMAIL", { ip: clientIP, email: maskedEmail });
      return {
        success: false,
        message: "A message was recently sent from this email. Please wait or call us directly.",
        code: "RATE_LIMIT",
      };
    }

    // Layer 7: Spam check
    const spamCheck = performSpamCheck({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    if (spamCheck.isSpam) {
      logSecurityEvent("SPAM_DETECTED", {
        ip: clientIP,
        score: spamCheck.score,
        reasons: spamCheck.reasons,
      });
      checkRateLimit(getRateLimitKey("suspicious", clientIP), RATE_LIMITS.suspicious);
      return {
        success: false,
        message: `Your message could not be sent. Please call us directly at ${siteConfig.phone.display}.`,
        code: "VALIDATION_ERROR",
      };
    }

    // Layer 8: Turnstile verification
    const turnstileResult = await verifyTurnstileToken(rawData._turnstileToken, clientIP);
    if (!turnstileResult.valid) {
      logSecurityEvent("TURNSTILE_FAILED", { ip: clientIP, code: turnstileResult.code });
      return {
        success: false,
        message: `Security verification failed. Please refresh and try again, or call ${siteConfig.phone.display}.`,
        code: "TURNSTILE_ERROR",
      };
    }

    // Layer 9: Web3Forms
    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY not configured");
      return {
        success: false,
        message: `Contact service temporarily unavailable. Please call ${siteConfig.phone.display}.`,
        code: "CONFIG_ERROR",
      };
    }

    const submittedAt = new Date().toLocaleString("en-CA", {
      timeZone: "America/Edmonton",
      dateStyle: "full",
      timeStyle: "short",
    });

    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `New Towing Inquiry - ${data.name}`,
      from_name: "Cliff's Towing Website",
      name: data.name,
      email: data.email,
      phone: data.phone,
      services: data.services?.join(", ") || "None specified",
      message: data.message,
      submitted_at: submittedAt,
    };

    let response: Response;
    let result: Web3FormsResult;

    try {
      response = await fetchWithTimeout(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      result = (await response.json()) as Web3FormsResult;
    } catch (error) {
      const code = error instanceof DOMException && error.name === "AbortError"
        ? "request-timeout"
        : "request-error";

      console.error("Web3Forms request error:", {
        code,
        error: error instanceof Error ? error.message : "Unknown",
      });

      return {
        success: false,
        message: `Unable to send message. Please try again or call ${siteConfig.phone.display}.`,
        code: "EMAIL_ERROR",
      };
    }

    if (!response.ok || !result.success) {
      console.error("Web3Forms error:", {
        status: response.status,
        message: result.message,
      });
      return {
        success: false,
        message: `Unable to send message. Please try again or call ${siteConfig.phone.display}.`,
        code: "EMAIL_ERROR",
      };
    }

    console.log(`[CONTACT] Message sent from ${data.email}`);

    return {
      success: true,
      message: "Message sent successfully. We'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Contact submission error:", error);
    logSecurityEvent("SUBMISSION_ERROR", {
      ip: clientIP,
      error: error instanceof Error ? error.message : "Unknown",
    });
    return {
      success: false,
      message: `Unable to send message. Please try again or call ${siteConfig.phone.display}.`,
      code: "SERVER_ERROR",
    };
  }
}
