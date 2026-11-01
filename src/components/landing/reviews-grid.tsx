"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GoogleG, Stars } from "@/components/review-icons";
import { CONTENT_GAP, Mark, QUOTE, Section, SectionIntro } from "@/components/landing/ui";
import { reviews } from "@/lib/reviews";
import { cn } from "@/lib/utils";

// Robert T.'s review praises a phone price quote; the ads never promise quotes, so it's left out here.
const shown = reviews.filter((r) => r.name !== "Robert T.");
const pad = (n: number) => String(n).padStart(2, "0");

export function ReviewsGrid() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const r = shown[i];
  const go = (d: 1 | -1) => setI((x) => (x + d + shown.length) % shown.length);

  return (
    <Section tone="light" labelledBy="reviews-heading">
      <SectionIntro
        id="reviews-heading"
        eyebrow="Google reviews"
        title={<>Drivers trust Cliff&apos;s<br />when it <Mark>matters.</Mark></>}
        lede="Real 5-star reviews from Cliff's Google Business Profile."
      />
      <div className={cn(CONTENT_GAP, "border-y border-gray-200 py-12 lg:py-16")}>
        <div className="flex items-center gap-3">
          <GoogleG />
          <span className="scale-125 origin-left"><Stars count={r.rating} /></span>
        </div>
        <div className="mt-8 min-h-[16rem] sm:min-h-[12rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className={cn(QUOTE, "max-w-5xl text-gray-950")}>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{r.name[0]}</span>
                <span>
                  <span className="block font-semibold text-gray-900">{r.name}</span>
                  <span className="block text-sm text-gray-500">Google review{r.service && ` · ${r.service}`}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-between gap-6">
          <span className="font-mono text-sm tabular-nums text-gray-500">{pad(i + 1)} / {pad(shown.length)}</span>
          <div className="flex gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gray-300 transition-colors hover:bg-gray-950 hover:text-white hover:ring-gray-950">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gray-300 transition-colors hover:bg-gray-950 hover:text-white hover:ring-gray-950">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
