"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, CircleCheck, UserRound } from "lucide-react";
import { BookButton, type BookingKind } from "@/components/landing/booking-context";
import { CallButton } from "@/components/landing/call-button";
import { cn } from "@/lib/utils";

// Each point is backed by a service page on cliffstowing.ca.
const AUDIENCES: {
  id: string;
  tab: string;
  icon: typeof UserRound;
  heading: string;
  points: string[];
  image: string;
  alt: string;
  book: BookingKind;
  bookLabel: string;
}[] = [
  {
    id: "drivers",
    tab: "I'm a driver",
    icon: UserRound,
    heading: "Your car, SUV or pickup, handled with care.",
    points: [
      "Cars, SUVs, pickups and EVs",
      "Flatbed for AWD and electric vehicles",
      "An honest ETA when you call",
      "Accident towing with insurance coordination",
    ],
    image: "/images/landing/wheel-lift-downtown.webp",
    alt: "Cliff's tow truck on a call in downtown Edmonton",
    book: "light",
    bookLabel: "Book a tow for my vehicle",
  },
  {
    id: "business",
    tab: "I run a business or fleet",
    icon: Building2,
    heading: "Keep your trucks, vans and crews moving.",
    points: [
      "Work trucks, cargo vans and box trucks",
      "Semis, buses, RVs and equipment",
      "We talk directly with your fleet coordinator",
      "Ask about priority dispatch for recurring needs",
    ],
    image: "/images/hero/cliffs500rotator.jpg",
    alt: "Cliff's heavy duty rotator",
    book: "fleet",
    bookLabel: "Set up fleet dispatch",
  },
];

export function AudienceSplit() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const a = AUDIENCES[active];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="audience-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Who we tow for</p>
        <h2 id="audience-heading" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 text-balance">
          Drivers and businesses, same 24/7 dispatch.
        </h2>

        <div role="tablist" aria-label="Who are you?" className="mt-8 inline-flex flex-wrap gap-1 rounded-full bg-gray-100 p-1.5">
          {AUDIENCES.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${x.id}`}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-colors",
                active === i ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-gray-900"
              )}
            >
              <x.icon className="h-4 w-4" aria-hidden="true" />
              {x.tab}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${a.id}`}
          aria-labelledby={`tab-${a.id}`}
          className="mt-8 grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div
            key={a.image}
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <Image src={a.image} alt={a.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">{a.heading}</h3>
            <ul className="mt-6 grid gap-4">
              {a.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-lg text-gray-700">
                  <CircleCheck className="h-6 w-6 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <BookButton kind={a.book} source={`audience-${a.id}`} label={a.bookLabel} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
