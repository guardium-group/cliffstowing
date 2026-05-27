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

  const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
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
    console.error("Turnstile verification request failed", response.status);
    return { valid: false, code: "request-failed" };
  }

  const result = (await response.json()) as TurnstileVerifyResult;
  if (!result.success) {
    console.warn("Turnstile verification failed", result["error-codes"]);
    return {
      valid: false,
      code: result["error-codes"]?.join(",") || "verification-failed",
    };
  }

  return { valid: true };
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
      "cf-turnstile-response": rawData._turnstileToken ?? "",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { success: boolean; message?: string };

    if (!response.ok || !result.success) {
      console.error("Web3Forms error:", result);
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
