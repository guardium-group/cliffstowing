"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { requestCallback } from "@/lib/actions/callback";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "cliffs_popup_v1";
const SHOW_AGAIN_AFTER_MS = 7 * 24 * 60 * 60 * 1000;
const DELAY_MS = 5000;
const EXPIRES_AT = new Date("2026-08-25");

export function LeadCapturePopup() {
  const [visible, setVisible]       = useState(false);
  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState("");

  const dismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    if (Date.now() > EXPIRES_AT.getTime()) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && Date.now() - Number(stored) < SHOW_AGAIN_AFTER_MS) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const result = await requestCallback({ name: name.trim(), phone: phone.trim() });
    if (result.success) {
      setSuccess(true);
      setTimeout(dismiss, 2500);
    } else {
      setError(result.message);
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[199] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Request a callback"
            className="fixed z-[200] bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[400px]"
            initial={{ opacity: 0, y: 56, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 56, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <div className="relative bg-gray-950/[0.94] backdrop-blur-2xl border border-white/[0.07] rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.7)]">

              {/* Decorative top glow */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-lime-500/[0.09] to-transparent pointer-events-none" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-32 bg-lime-500/[0.07] blur-3xl pointer-events-none" />
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-500/40 to-transparent" />

              <div className="relative p-6 sm:p-7">

                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lime-500/[0.12] border border-lime-500/[0.18] flex items-center justify-center shrink-0">
                      <Phone className="h-4.5 w-4.5 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-lime-400 font-semibold">
                        24/7 Dispatch
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        <span className="text-[9px] text-white/30 font-mono tracking-wide">Available now</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={dismiss}
                    aria-label="Close"
                    className="w-7 h-7 rounded-lg bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 transition-all duration-150"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="h-7 w-7 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">We&rsquo;ll call you back shortly!</p>
                      <p className="text-sm text-white/40 mt-1">Our dispatch team will be in touch.</p>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white leading-snug tracking-tight mb-1.5">
                      Need a tow right now?
                    </h3>
                    <p className="text-sm text-white/45 mb-5 leading-relaxed">
                      Leave your number and we&rsquo;ll call you back in minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoFocus
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-lime-500/50 focus:bg-white/[0.08] transition-all duration-150"
                      />
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-lime-500/50 focus:bg-white/[0.08] transition-all duration-150"
                      />

                      {error && (
                        <p className="text-xs text-rose-400/80 leading-relaxed">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 disabled:opacity-50 text-gray-950 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150 active:scale-[0.98] mt-1"
                      >
                        {submitting ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            Request callback
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>

                    {/* Direct call fallback */}
                    <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-center gap-2">
                      <span className="text-[11px] text-white/25 font-mono">or call directly</span>
                      <a
                        href={siteConfig.phone.href}
                        className="text-[11px] font-mono font-semibold text-white/50 hover:text-white transition-colors duration-150"
                      >
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
