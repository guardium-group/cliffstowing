"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, CalendarCheck, Phone, Zap } from "lucide-react";
import { BOOKINGS, useBooking, type BookingKind } from "@/components/landing/booking-context";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const TILES: { kind: BookingKind; image: string; alt: string }[] = [
  { kind: "light", image: "/images/landing/flatbed-sedan.jpg", alt: "Cliff's flatbed carrying a sedan" },
  { kind: "medium", image: "/images/hero/decktruckequipment31024x695.jpg", alt: "Cliff's deck truck carrying a tractor" },
  { kind: "heavy", image: "/images/landing/rotator-wrecker.jpg", alt: "Cliff's heavy rotator wrecker" },
  { kind: "stuck", image: "/images/hero/recoverysnow1024x681.jpg", alt: "Cliff's wreckers winching a tanker out of snow" },
];

/** Two taps from "what needs a tow" to a call or a pre-filled booking. */
export function BookingPicker() {
  const { book } = useBooking();
  const [kind, setKind] = useState<BookingKind | null>(null);
  const [now, setNow] = useState(false);
  const chosen = kind ? BOOKINGS[kind] : null;

  const pick = (k: BookingKind) => { setKind(k); setNow(false); };
  const reset = () => { setKind(null); setNow(false); };

  return (
    <div className="rounded-3xl bg-white p-5 sm:p-6 shadow-2xl shadow-black/40 ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
          {chosen ? "Step 2 of 2" : "Step 1 of 2"}
        </p>
        {chosen && (
          <button type="button" onClick={reset} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change
          </button>
        )}
      </div>

      {!chosen ? (
        <>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">What needs a tow?</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {TILES.map((t) => (
              <button
                key={t.kind}
                type="button"
                onClick={() => pick(t.kind)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left ring-1 ring-gray-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              >
                <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 200px, 45vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-3 bottom-3 text-sm sm:text-base font-semibold leading-tight text-white">
                  {BOOKINGS[t.kind].label}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            In a hurry? Call{" "}
            <a href={siteConfig.phone.href} className="font-semibold text-primary">{siteConfig.phone.compact}</a>
          </p>
        </>
      ) : !now ? (
        <>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">{chosen.label}. When do you need us?</h2>
          <div className="mt-5 grid gap-3">
            <button
              type="button"
              onClick={() => { setNow(true); trackEvent("booking_picker", { vehicle: kind!, urgency: "now" }); }}
              className="flex items-center gap-4 rounded-2xl bg-primary p-4 text-left text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
            >
              <Zap className="h-7 w-7 flex-shrink-0" aria-hidden="true" />
              <span><span className="block text-lg font-bold">Right now</span><span className="block text-sm text-white/85">Stuck, broken down or in a ditch</span></span>
            </button>
            <button
              type="button"
              onClick={() => { trackEvent("booking_picker", { vehicle: kind!, urgency: "later" }); book(kind!, "picker"); }}
              className="flex items-center gap-4 rounded-2xl border-2 border-gray-200 p-4 text-left hover:border-primary"
            >
              <CalendarCheck className="h-7 w-7 flex-shrink-0 text-primary" aria-hidden="true" />
              <span><span className="block text-lg font-bold text-gray-900">It can wait</span><span className="block text-sm text-gray-500">Send the details and we&apos;ll get back to you</span></span>
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Dispatch is ready for your call.</h2>
          <p className="mt-2 text-gray-600">Have your location handy: cross streets, direction of travel or a GPS pin.</p>
          <a
            href={siteConfig.phone.href}
            className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-5 text-center text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
          >
            <Phone className="h-7 w-7 motion-safe:animate-pulse" aria-hidden="true" />
            <span><span className="block text-sm font-medium text-white/85">{chosen.call}</span><span className="block text-2xl sm:text-3xl font-extrabold tracking-tight">{siteConfig.phone.compact}</span></span>
          </a>
          <button type="button" onClick={() => book(kind!, "picker")} className={cn("mt-3 w-full text-sm text-gray-500 hover:text-gray-900 underline-offset-2 hover:underline")}>
            Can&apos;t talk? Send the details instead
          </button>
        </>
      )}
    </div>
  );
}
