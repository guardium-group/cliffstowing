"use server";

import { headers } from "next/headers";
import { checkRateLimit, getRateLimitKey, RATE_LIMITS } from "@/lib/security/rate-limiter";
import { escapeHtml } from "@/lib/security/html-escape";
import { siteConfig } from "@/lib/site";

const BREVO_API_URL = "https://api.brevo.com/v3";

export interface CallbackRequest {
  name: string;
  phone: string;
}

export interface CallbackResponse {
  success: boolean;
  message: string;
}

export async function requestCallback(data: CallbackRequest): Promise<CallbackResponse> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  // Basic input validation
  if (
    typeof data.name !== "string" || data.name.trim().length < 2 || data.name.length > 120 ||
    typeof data.phone !== "string" || data.phone.trim().length < 7 || data.phone.length > 30
  ) {
    return { success: false, message: "Please provide a valid name and phone number." };
  }

  const rateLimit = checkRateLimit(getRateLimitKey("callback_ip", ip), RATE_LIMITS.contact);
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: `Too many requests. Please call us directly at ${siteConfig.phone.display}.`,
    };
  }

  if (!process.env.BREVO_API_KEY) {
    console.error("[callback] BREVO_API_KEY not configured");
    return {
      success: false,
      message: `Service temporarily unavailable. Please call ${siteConfig.phone.display}.`,
    };
  }

  const submittedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Edmonton",
    dateStyle: "full",
    timeStyle: "short",
  });

  const name = escapeHtml(data.name.slice(0, 120));
  const phone = escapeHtml(data.phone.slice(0, 30));

  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Cliff's Towing Website", email: "noreply@cliffstowing.ca" },
        to: [{ email: siteConfig.email, name: "Cliff's Towing Dispatch" }],
        subject: `Callback Request — ${name}`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#dc2626;padding:20px;text-align:center;">
              <h1 style="color:white;margin:0;font-size:22px;">Callback Request</h1>
            </div>
            <div style="padding:30px;background:#f9fafb;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-weight:bold;width:120px;">Name:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-weight:bold;">Phone:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color:#dc2626;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#6b7280;font-weight:bold;">Submitted:</td>
                  <td style="padding:10px 0;">${submittedAt}</td>
                </tr>
              </table>
              <p style="margin-top:20px;color:#9ca3af;font-size:12px;">
                Submitted via the callback popup on the Cliff's Towing website.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      console.error("[callback] Brevo error", await response.json().catch(() => ({})));
      return {
        success: false,
        message: `Unable to send request. Please call ${siteConfig.phone.display}.`,
      };
    }

    return { success: true, message: "We'll call you back shortly!" };
  } catch (err) {
    console.error("[callback] Submission error", err);
    return {
      success: false,
      message: `Something went wrong. Please call ${siteConfig.phone.display}.`,
    };
  }
}
