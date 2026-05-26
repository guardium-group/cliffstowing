"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

const CONSENT_KEY = "cliffs-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-[100] w-[340px] max-w-[calc(100vw-2rem)]"
        >
          <div className="relative bg-gray-900/90 backdrop-blur-2xl border border-white/[0.07] rounded-2xl overflow-hidden shadow-[0_24px_48px_-8px_rgba(0,0,0,0.65)]">

            {/* Decorative top glow */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-lime-500/[0.12] to-transparent pointer-events-none" />
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent" />

            <div className="relative p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-lime-500/[0.15] border border-lime-500/[0.22] flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="h-4 w-4 text-lime-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">We use cookies</p>
                  <p className="text-white/40 text-xs mt-1 leading-relaxed">
                    We use cookies to improve your experience. See our{" "}
                    <Link
                      href="/cookies"
                      className="text-lime-400/80 hover:text-lime-300 transition-colors duration-150 underline underline-offset-2"
                    >
                      Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-lime-400/80 hover:text-lime-300 transition-colors duration-150 underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={decline}
                  className="flex-1 px-3 py-2 text-xs font-medium text-white/40 hover:text-white/70 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] rounded-lg transition-all duration-150 cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 px-3 py-2 text-xs font-medium text-gray-950 bg-lime-500 hover:bg-lime-400 rounded-lg transition-colors duration-150 cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
