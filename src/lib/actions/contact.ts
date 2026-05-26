"use server";

import { headers } from "next/headers";
import { type ContactFormData, contactSchema } from "@/lib/validations/contact";
import { escapeHtml } from "@/lib/security/html-escape";
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

const BREVO_API_URL = "https://api.brevo.com/v3";

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

export async function submitContact(
  rawData: ContactSubmission
): Promise<ContactResponse> {
  const clientIP = await getClientIP();

  try {
    // Layer 0: Cloudflare Turnstile
    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error("TURNSTILE_SECRET_KEY not configured");
    } else {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: rawData._turnstileToken ?? "",
            remoteip: clientIP !== "unknown" ? clientIP : undefined,
          }),
        }
      );
      const turnstileData = await turnstileRes.json() as { success: boolean };
      if (!turnstileData.success) {
        logSecurityEvent("TURNSTILE_FAILED", { ip: clientIP });
        return {
          success: false,
          message: "Human verification failed. Please try again.",
          code: "TURNSTILE_ERROR",
        };
      }
    }

    // Layer 1: Honeypot
    if (!validateHoneypot(rawData._honeypot)) {
      logSecurityEvent("HONEYPOT_TRIGGERED", { ip: clientIP });
      return { success: true, message: "Message sent successfully." };
    }

    // Layer 2: Timing
    const timingResult = validateFormTiming(rawData._formToken, rawData._timestamp);
    if (!timingResult.valid) {
      logSecurityEvent("TIMING_VIOLATION", { ip: clientIP, reason: timingResult.reason });
      return { success: false, message: timingResult.reason || "Please try again", code: "TIMING_ERROR" };
    }

    // Layer 3: Rate limit by IP
    const ipRateLimit = checkRateLimit(getRateLimitKey("contact_ip", clientIP), RATE_LIMITS.contact);
    if (!ipRateLimit.allowed) {
      logSecurityEvent("RATE_LIMIT_IP", { ip: clientIP, retryAfter: ipRateLimit.retryAfter });
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
    const spamCheck = performSpamCheck({ name: data.name, email: data.email, message: data.message });
    if (spamCheck.isSpam) {
      logSecurityEvent("SPAM_DETECTED", { ip: clientIP, score: spamCheck.score, reasons: spamCheck.reasons });
      checkRateLimit(getRateLimitKey("suspicious", clientIP), RATE_LIMITS.suspicious);
      return {
        success: false,
        message: `Your message could not be sent. Please call us directly at ${siteConfig.phone.display}.`,
        code: "VALIDATION_ERROR",
      };
    }

    // Layer 8: Config check
    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
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

    const eName = escapeHtml(data.name);
    const eEmail = escapeHtml(data.email);
    const ePhone = escapeHtml(data.phone);
    const eMessage = escapeHtml(data.message).replace(/\n/g, "<br>");

    const servicesHtml = data.services && data.services.length > 0
      ? `<tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #6b7280;">Service Needed:</strong></td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${data.services.map(escapeHtml).join(", ")}</td>
        </tr>`
      : "";

    const emailPayload = {
      sender: { name: "Cliff's Towing Website", email: "noreply@cliffstowing.ca" },
      to: [{ email: siteConfig.email, name: "Cliff's Towing Dispatch" }],
      replyTo: { email: data.email, name: data.name },
      subject: `New Towing Inquiry - ${eName}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #dc2626; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Towing Inquiry</h1>
          </div>
          <div style="padding: 30px; background-color: #f9fafb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #6b7280;">Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${eName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #6b7280;">Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${eEmail}" style="color: #dc2626;">${eEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #6b7280;">Phone:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${ePhone}" style="color: #dc2626;">${ePhone}</a></td>
              </tr>
              ${servicesHtml}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #6b7280;">Submitted:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${submittedAt}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <strong style="color: #6b7280;">Message:</strong>
              <div style="background-color: white; padding: 16px; border-radius: 8px; margin-top: 8px; border: 1px solid #e5e7eb;">
                ${eMessage}
              </div>
            </div>
          </div>
          <div style="padding: 20px; background-color: #3e000c; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              This message was sent from the Cliff's Towing website contact form.
            </p>
          </div>
        </div>
      `,
    };

    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo email error:", errorData);
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
