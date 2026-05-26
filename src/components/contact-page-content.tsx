"use client";

import { useEffect, useRef, useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactSubmission } from "@/lib/actions/contact";
import { serviceOptions } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site";

function generateFormToken(): { token: string; timestamp: number } {
  const timestamp = Date.now();
  const token = btoa(`${timestamp}:${Math.random().toString(36)}`);
  return { token, timestamp };
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call dispatch",
    description: "Immediate towing assistance, 24/7",
    action: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  {
    icon: Mail,
    title: "Email dispatch",
    description: "For quote details and follow-up",
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Head office",
    description: "Edmonton, Alberta",
    action: "Get directions",
    href: siteConfig.address.mapUrl,
  },
  {
    icon: Clock,
    title: "Hours",
    description: "Emergency dispatch never closes",
    action: "24/7 - 365 days",
    href: null,
  },
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });
  const [formToken, setFormToken] = useState("");
  const [formTimestamp, setFormTimestamp] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<{ reset: () => void } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const { token, timestamp } = generateFormToken();
    setFormToken(token);
    setFormTimestamp(timestamp);
  }, []);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const submission: ContactSubmission = {
        ...formData,
        _honeypot: honeypot,
        _formToken: formToken,
        _timestamp: formTimestamp,
        _turnstileToken: turnstileToken ?? "",
      };

      const result = await submitContact(submission);

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", phone: "", message: "", services: [] });
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        const { token, timestamp } = generateFormToken();
        setFormToken(token);
        setFormTimestamp(timestamp);
      } else {
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: `Something went wrong. Please try again or call ${siteConfig.phone.display}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400 text-sm sm:text-base outline-none";

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you as
                  soon as possible. For immediate towing assistance, call{" "}
                  {siteConfig.phone.display}.
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

                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={setTurnstileToken}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                    options={{ theme: "light", size: "normal" }}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full rounded-lg py-3 text-base font-medium"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm h-64 sm:h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.display)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cliff's Towing head office in Edmonton, AB"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center"
                >
                  <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{card.description}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-block px-4 py-2 border border-primary text-primary rounded-lg text-xs font-medium hover:bg-red-50 transition-colors break-words"
                    >
                      {card.action}
                    </a>
                  ) : (
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                      {card.action}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
