"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, CalendarCheck, Phone, Zap } from "lucide-react";
import { BOOKINGS, useBooking, type BookingKind } from "@/components/landing/booking-context";
import { BODY, DISPLAY, H3 } from "@/components/landing/ui";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const TILES: { kind: BookingKind; image: string; alt: string }[] = [
  { kind: "light", image: "/images/landing/flatbed-sedan.jpg", alt: "Cliff's flatbed carrying a sedan" },
  { kind: "medium", image: "/images/hero/decktruckequipment31024x695.jpg", alt: "Cliff's deck truck carrying a tractor" },
  { kind: "heavy", image: "/images/landing/rotator-wrecker.jpg", alt: "Cliff's heavy rotator wrecker" },
  { kind: "stuck", image: "/images/hero/recoverysnow1024x681.jpg", alt: "Cliff's wreckers winching a tanker out of snow" },
];

const STEP = "text-xs font-semibold uppercase tracking-[0.16em] text-primary";

/** Two taps from "what needs a tow" to a call or a pre-filled booking. */
export function BookingPicker() {
  const { book } = useBooking();
  const [kind, setKind] = useState<BookingKind | null>(null);
  const [now, setNow] = useState(false);
  const chosen = kind ? BOOKINGS[kind] : null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,10,11,0.35)] ring-1 ring-gray-200 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className={STEP}>{chosen ? "Step 2 of 2" : "Step 1 of 2"}</p>
        {chosen && (
          <button type="button" onClick={() => { setKind(null); setNow(false); }} className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change
          </button>
        )}
      </div>

      {!chosen ? (
        <>
          <h3 className={cn(H3, "mt-3")}>What needs a tow?</h3>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {TILES.map((t) => (
              <button
                key={t.kind}
                type="button"
                onClick={() => { setKind(t.kind); setNow(false); }}
                className="group text-left focus-visible:outline-none"
              >
                <span className="relative block aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gray-200 group-focus-visible:ring-4 group-focus-visible:ring-primary/40">
                  <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                </span>
                <span className="mt-3 block text-sm font-semibold text-gray-900 group-hover:text-primary sm:text-base">{BOOKINGS[t.kind].label}</span>
              </button>
            ))}
          </div>
        </>
      ) : !now ? (
        <>
          <h3 className={cn(H3, "mt-3")}>{chosen.label}. When do you need us?</h3>
          <div className="mt-6 grid gap-4">
            <button
              type="button"
              onClick={() => { setNow(true); trackEvent("booking_picker", { vehicle: kind!, urgency: "now" }); }}
              className="flex items-center gap-5 rounded-xl bg-primary p-5 text-left text-white transition-colors hover:bg-[#c8161c]"
            >
              <Zap className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span><span className="block text-lg font-semibold">Right now</span><span className="block text-sm text-white/80">Stuck, broken down or in a ditch</span></span>
            </button>
            <button
              type="button"
              onClick={() => { trackEvent("booking_picker", { vehicle: kind!, urgency: "later" }); book(kind!, "picker"); }}
              className="flex items-center gap-5 rounded-xl p-5 text-left ring-1 ring-gray-200 transition-shadow hover:ring-2 hover:ring-primary"
            >
              <CalendarCheck className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
              <span><span className="block text-lg font-semibold text-gray-900">It can wait</span><span className="block text-sm text-gray-500">Send the details and we&apos;ll get back to you</span></span>
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className={cn(H3, "mt-3")}>Dispatch is ready for your call.</h3>
          <p className={cn(BODY, "mt-3 text-gray-600")}>Have your location handy: cross streets, direction of travel or a GPS pin.</p>
          <a href={siteConfig.phone.href} className="mt-6 flex items-center gap-5 rounded-xl bg-primary p-5 text-white transition-colors hover:bg-[#c8161c]">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-white/80">{chosen.call}</span>
              <span className={cn(DISPLAY, "block text-3xl font-extrabold tracking-[-0.03em]")}>{siteConfig.phone.compact}</span>
            </span>
          </a>
          <button type="button" onClick={() => book(kind!, "picker")} className="mt-4 text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-900 hover:underline">
            Can&apos;t talk? Send the details instead
          </button>
        </>
      )}
    </div>
  );
}
