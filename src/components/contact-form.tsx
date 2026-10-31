"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  validateContactSubmission,
  type ContactDeliveryPayload,
  type ContactSubmission,
} from "@/lib/actions/contact";
import { serviceOptions } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site";
import { trackEvent, trackMetaEvent } from "@/lib/analytics";

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
const DELIVERY_TIMEOUT_MS = 10_000;

type ContactDeliveryResult =
  | { success: true; message: string }
  | { success: false; message: string };

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
  error?: string;
  statusCode?: number;
  body?: {
    message?: string;
  };
}

function generateFormToken(): { token: string; timestamp: number } {
  const timestamp = Date.now();
  const token = btoa(`${timestamp}:${Math.random().toString(36)}`);
  return { token, timestamp };
}

function getWeb3FormsMessage(result: Web3FormsResponse | null): string {
  return result?.message || result?.body?.message || result?.error || "";
}

function formatDeliveryError(
  code: string,
  message: string,
  providerMessage?: string
): string {
  const detail = providerMessage ? ` Provider response: ${providerMessage}` : "";
  return `${message}${detail} Please call ${siteConfig.phone.display}. (${code})`;
}

async function submitToWeb3Forms(
  payload: ContactDeliveryPayload,
  fallbackFormId?: string
): Promise<ContactDeliveryResult> {
  const configuredFormId = process.env.NEXT_PUBLIC_WEB3FORMS_FORM_ID?.trim();
  const formId = configuredFormId || fallbackFormId?.trim();

  if (!formId) {
    return {
      success: false,
      message: formatDeliveryError(
        "CONTACT_CONFIG_ERROR",
        "Contact form is missing its delivery configuration."
      ),
    };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), DELIVERY_TIMEOUT_MS);

  try {
    const response = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: formId, ...payload }),
      signal: controller.signal,
    });

    let result: Web3FormsResponse | null = null;
    try {
      result = (await response.json()) as Web3FormsResponse;
    } catch {
      result = null;
    }

    if (response.ok && result?.success !== false) {
      return {
        success: true,
        message: "Message sent successfully. We'll get back to you as soon as possible.",
      };
    }

    const providerMessage = getWeb3FormsMessage(result);

    if (response.status === 429) {
      return {
        success: false,
        message: formatDeliveryError(
          "CONTACT_RATE_LIMITED",
          "Too many form attempts.",
          providerMessage
        ),
      };
    }

    if (response.status >= 500) {
      return {
        success: false,
        message: formatDeliveryError(
          "CONTACT_DELIVERY_UNAVAILABLE",
          "The message provider is temporarily unavailable.",
          providerMessage
        ),
      };
    }

    return {
      success: false,
      message: formatDeliveryError(
        "CONTACT_DELIVERY_REJECTED",
        "The message provider rejected the request.",
        providerMessage
      ),
    };
  } catch (error) {
    const code = error instanceof DOMException && error.name === "AbortError"
      ? "CONTACT_DELIVERY_TIMEOUT"
      : "CONTACT_DELIVERY_UNAVAILABLE";

    return {
      success: false,
      message: formatDeliveryError(
        code,
        "The message provider could not be reached."
      ),
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

function withErrorCode(message: string, code: string): string {
  return message.includes(`(${code})`) ? message : `${message} (${code})`;
}

interface ContactFormProps {
  /** Sent with the generate_lead event so GA4 can tell the forms apart. */
  formName?: string;
  title?: string;
  intro?: React.ReactNode;
  submitLabel?: string;
  className?: string;
  /** Pre-fills services, message and heading; a new nonce applies it again. */
  preset?: ContactFormPreset | null;
}

export interface ContactFormPreset {
  services: string[];
  message: string;
  title: string;
  nonce: number;
}

export function ContactForm({
  formName = "contact",
  title = "Send a Message",
  intro,
  submitLabel = "Send Message",
  className,
  preset,
}: ContactFormProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  // Keep anything the visitor typed; replace an empty message or an untouched earlier template.
  const lastTemplate = useRef("");
  useEffect(() => {
    if (!preset) return;
    setFormData((prev) => {
      const untouched = !prev.message.trim() || prev.message === lastTemplate.current;
      return { ...prev, services: preset.services, message: untouched ? preset.message : prev.message };
    });
    lastTemplate.current = preset.message;
  }, [preset]);
  const [formToken, setFormToken] = useState("");
  const [formTimestamp, setFormTimestamp] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const pendingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const { token, timestamp } = generateFormToken();
    setFormToken(token);
    setFormTimestamp(timestamp);
  }, []);

  const clearPendingTimer = () => {
    if (pendingTimerRef.current) {
      clearTimeout(pendingTimerRef.current);
      pendingTimerRef.current = null;
    }
  };

  const resetTurnstile = () => {
    setTurnstileToken(null);
    turnstileRef.current?.reset();
  };

  const resetFormToken = () => {
    const { token, timestamp } = generateFormToken();
    setFormToken(token);
    setFormTimestamp(timestamp);
  };

  const abortPendingVerification = (message: string) => {
    clearPendingTimer();
    setPendingSubmit(false);
    setIsSubmitting(false);
    resetTurnstile();
    setSubmitStatus({ type: "error", message });
  };

  useEffect(() => () => {
    clearPendingTimer();
  }, []);

  const performSubmit = async (token: string) => {
    clearPendingTimer();
    setPendingSubmit(false);
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const submission: ContactSubmission = {
        ...formData,
        _honeypot: honeypot,
        _formToken: formToken,
        _timestamp: formTimestamp,
        _turnstileToken: token,
      };
      const preflight = await validateContactSubmission(submission);

      if (!preflight.success) {
        resetTurnstile();
        setSubmitStatus({
          type: "error",
          message: withErrorCode(preflight.message, preflight.code),
        });
        return;
      }

      const delivery = await submitToWeb3Forms(
        preflight.payload,
        preflight.web3formsFormId
      );

      if (delivery.success) {
        trackEvent("generate_lead", {
          form: formName,
          services: formData.services.join(", ") || undefined,
        });
        trackMetaEvent("Lead");
        setSubmitStatus({ type: "success", message: delivery.message });
        setFormData({ name: "", email: "", phone: "", message: "", services: [] });
        setHoneypot("");
        resetTurnstile();
        resetFormToken();
      } else {
        resetTurnstile();
        setSubmitStatus({ type: "error", message: delivery.message });
      }
    } catch {
      resetTurnstile();
      setSubmitStatus({
        type: "error",
        message: `Something went wrong. Please try again or call ${siteConfig.phone.display}.`,
      });
    } finally {
      clearPendingTimer();
      setPendingSubmit(false);
      setIsSubmitting(false);
    }
  };

  // When Turnstile resolves after a pending submit, fire automatically
  useEffect(() => {
    if (pendingSubmit && turnstileToken) {
      if (pendingTimerRef.current) {
        clearTimeout(pendingTimerRef.current);
        pendingTimerRef.current = null;
      }
      setPendingSubmit(false);
      void performSubmit(turnstileToken);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingSubmit, turnstileToken]);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!turnstileSiteKey) {
      setSubmitStatus({
        type: "error",
        message: `Security verification is unavailable. Please call ${siteConfig.phone.display}.`,
      });
      return;
    }

    if (turnstileToken) {
      void performSubmit(turnstileToken);
    } else {
      // Token not yet ready, so wait for Turnstile to resolve.
      clearPendingTimer();
      setIsSubmitting(true);
      setPendingSubmit(true);
      pendingTimerRef.current = setTimeout(() => {
        abortPendingVerification(
          `Verification timed out. Please try again or call ${siteConfig.phone.display}.`
        );
      }, 15000);
    }
  };

  const inputClass =
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400 text-sm sm:text-base outline-none";

  return (
    <div className={cn("bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm", className)}>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {preset?.title ?? title}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {intro ?? (
          <>
            Fill out the form below and we&apos;ll get back to you as
            soon as possible. For immediate towing assistance, call{" "}
            {siteConfig.phone.display}.
          </>
        )}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="_honey"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className={inputClass}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              className={inputClass}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
              className={inputClass}
              placeholder={siteConfig.phone.display}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Service Needed
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceOptions.map((service) => (
              <label
                key={service}
                onClick={() => handleServiceToggle(service)}
                className="flex items-center gap-2 cursor-pointer group p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                    formData.services.includes(service)
                      ? "bg-primary border-primary"
                      : "border-gray-300 group-hover:border-primary/50"
                  }`}
                >
                  {formData.services.includes(service) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Describe your situation, vehicle type, and location."
            required
          />
        </div>

        {submitStatus.type && (
          <div
            className={`flex items-start gap-2 p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            )}
            <span className="text-sm">{submitStatus.message}</span>
          </div>
        )}

        {turnstileSiteKey ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() =>
              abortPendingVerification(
                `Security verification failed. Please refresh the page and try again, or call us directly at ${siteConfig.phone.display}.`
              )
            }
            onTimeout={() =>
              abortPendingVerification(
                `Verification timed out. Please try again or call ${siteConfig.phone.display}.`
              )
            }
            options={{ execution: "render", size: "normal", refreshExpired: "auto" }}
          />
        ) : (
          <div className="flex items-start gap-2 p-4 rounded-lg bg-red-50 text-red-700">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Security verification is unavailable. Please call {siteConfig.phone.display}.
            </span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg py-3 text-base font-medium"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            submitLabel
          )}
        </Button>
        <p className="text-xs text-gray-500 leading-relaxed">
          We use these details to respond to your request and provide the service you ask
          for. Some of the providers that deliver and store messages are outside Canada.
          Questions about your information? Contact our Operations Manager at{" "}
          {siteConfig.email}. See our{" "}
          <Link href="/privacy-policy" className="text-primary underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
