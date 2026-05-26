"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mike T.",
    location: "Edmonton",
    rating: 5,
    quote:
      "Cliff's saved us on a cold January night. Truck was there in under 30 minutes. Professional, fast, and fair price.",
  },
  {
    name: "Sarah K.",
    location: "Sherwood Park",
    rating: 5,
    quote:
      "Called at 2am after hitting black ice. Dispatch was calm and helpful, driver arrived quickly and got my SUV safely home. Highly recommend.",
  },
  {
    name: "Dave L.",
    location: "Leduc",
    rating: 5,
    quote:
      "Used Cliff's for equipment transport on a tight deadline. They handled our skid steer with care and were on time. Great experience.",
  },
  {
    name: "James R.",
    location: "Edmonton",
    rating: 5,
    quote:
      "Best towing company in Edmonton. Been using them for 15 years for our fleet. Always reliable, always professional.",
  },
  {
    name: "Anita P.",
    location: "St. Albert",
    rating: 5,
    quote:
      "Locked out of my truck at -35°C. They were there in 20 minutes. Saved my night. Thank you Cliff's!",
  },
  {
    name: "Trevor B.",
    location: "Spruce Grove",
    rating: 5,
    quote:
      "Flatbed towing for my lowered car, handled with care. Driver was friendly and professional. Will use again.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

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
        <p className="text-xs text-gray-400">{review.location}</p>
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
