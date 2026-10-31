"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { reviews } from "@/lib/reviews";
import { GoogleG, Stars } from "@/components/review-icons";

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <Stars count={review.rating} />
        <GoogleG />
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
        <p className="text-xs text-gray-400">
          Google review{review.service && ` · ${review.service}`}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-5 sm:px-6 max-w-7xl mb-10 sm:mb-12 text-center"
      >
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
          Customer reviews
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-wrap-balance">
          Drivers trust Cliff&apos;s when the job matters.
        </h2>
        <p className="text-gray-500 text-base mt-3 max-w-[48ch] mx-auto leading-relaxed">
          Real reviews from real Edmonton-area customers on Google.
        </p>
      </motion.div>

      {/* Marquee */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "running";
        }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-4 px-4"
          style={{
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
