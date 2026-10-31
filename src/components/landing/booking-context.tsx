"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactFormPreset } from "@/components/contact-form";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** What the visitor can book from the landing page. Service names match serviceOptions. */
export const BOOKINGS = {
  light: {
    label: "Car, SUV or pickup",
    services: ["Light Duty Towing"],
    title: "Book a tow for your vehicle",
    call: "Call dispatch about your vehicle",
    ask: "Vehicle (year, make, model):",
  },
  medium: {
    label: "Work truck or van",
    services: ["Medium Duty Towing"],
    title: "Book a work vehicle tow",
    call: "Call dispatch about your work vehicle",
    ask: "Vehicle (pickup, cargo van, box truck):",
  },
  heavy: {
    label: "Semi, bus or RV",
    services: ["Heavy Duty Towing"],
    title: "Book a heavy duty tow",
    call: "Call dispatch about your semi, bus or RV",
    ask: "Vehicle and load:",
  },
  stuck: {
    label: "Stuck in snow or a ditch",
    services: ["Winching & Recovery"],
    title: "Book a winch-out",
    call: "Call dispatch for a winch-out",
    ask: "Vehicle, and how it's stuck:",
  },
  equipment: {
    label: "Equipment to move",
    services: ["Equipment Transport"],
    title: "Book equipment transport",
    call: "Call dispatch about equipment transport",
    ask: "Equipment (make, model, weight if known):",
  },
  fleet: {
    label: "Fleet or business vehicles",
    services: ["Medium Duty Towing", "Heavy Duty Towing"],
    title: "Set up fleet dispatch",
    call: "Call dispatch about your fleet",
    ask: "Company and the vehicles you run:",
  },
} as const;

export type BookingKind = keyof typeof BOOKINGS;

function presetFor(kind: BookingKind, nonce: number): ContactFormPreset {
  const b = BOOKINGS[kind];
  return {
    services: [...b.services],
    title: b.title,
    message: `${b.ask}\nWhere it is:\nWhat happened:`,
    nonce,
  };
}

interface BookingState {
  preset: ContactFormPreset | null;
  book: (kind: BookingKind, source: string) => void;
}

const BookingContext = createContext<BookingState | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [preset, setPreset] = useState<ContactFormPreset | null>(null);

  const book = useCallback((kind: BookingKind, source: string) => {
    setPreset(presetFor(kind, Date.now()));
    trackEvent("booking_start", { vehicle: kind, source });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("request")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);

  return <BookingContext.Provider value={{ preset, book }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

/** Scrolls to the request form with the service ticked and the message started. */
export function BookButton({
  kind,
  source,
  label = "Book online",
  variant = "outline",
  size = "default",
  className,
}: {
  kind: BookingKind;
  source: string;
  label?: string;
  variant?: "outline" | "secondary" | "default";
  size?: "default" | "lg" | "xl";
  className?: string;
}) {
  const { book } = useBooking();
  return (
    <Button type="button" variant={variant} size={size} className={cn("rounded-full font-semibold", className)} onClick={() => book(kind, source)}>
      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
      {label}
    </Button>
  );
}
