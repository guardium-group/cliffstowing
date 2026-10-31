"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const JOBS = [
  { src: "/images/landing/rotator-rv-snow.webp", caption: "RV lifted out of the snow", tag: "Heavy recovery" },
  { src: "/images/landing/lowboy-excavators.jpg", caption: "Excavators on the move", tag: "Equipment transport" },
  { src: "/images/landing/flatbed-sedan.jpg", caption: "Sedan secured on the flatbed", tag: "Light duty" },
  { src: "/images/hero/recoverysnow1024x681.jpg", caption: "Tanker winched out of a ditch", tag: "Winching" },
  { src: "/images/landing/wheel-lift-downtown.webp", caption: "Downtown Edmonton call", tag: "Light duty" },
  { src: "/images/landing/rotator-wrecker.jpg", caption: "Rotator ready to roll", tag: "Heavy duty" },
  { src: "/images/hero/decktruckequipment31024x695.jpg", caption: "Tractor on the deck truck", tag: "Medium duty" },
];

export function JobsStrip() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="jobs-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Real jobs, real trucks</p>
          <h2 id="jobs-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our trucks. Our operators.</h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous photos" className="h-11 w-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-900">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="More photos" className="h-11 w-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-900">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={track}
        className="landing-strip mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 px-5 sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {JOBS.map((j) => (
          <figure key={j.src} className="group relative flex-shrink-0 snap-start w-[78vw] sm:w-[420px] aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={j.src} alt={j.caption} fill sizes="(min-width: 640px) 420px, 78vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-4 bottom-4 text-white">
              <span className="inline-block rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">{j.tag}</span>
              <span className="mt-2 block text-lg font-semibold">{j.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
