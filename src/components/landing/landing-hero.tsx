import Image from "next/image";
import { Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { BookingPicker } from "@/components/landing/booking-picker";
import { CallButton } from "@/components/landing/call-button";
import { siteConfig } from "@/lib/site";

const trust = [
  { icon: Clock, label: "24/7 dispatch" },
  { icon: ShieldCheck, label: "70+ years in Edmonton" },
  { icon: MapPin, label: `${siteConfig.serviceArea.length} communities` },
  { icon: Star, label: "5-star Google reviews" },
];

export function LiveDot() {
  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
    </span>
  );
}

export function LandingTopBar() {
  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl h-16 sm:h-20 flex items-center justify-between gap-4">
        <Image src="/cliffs_logo.png" alt="Cliff's Towing" width={130} height={36} className="h-10 sm:h-12 w-auto object-contain" priority />
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700">
            <LiveDot /> Dispatch live 24/7
          </span>
          <CallButton label={siteConfig.phone.compact} size="default" className="shadow-none" />
        </div>
      </div>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#1a0005]">
      <div className="absolute inset-0 landing-kenburns">
        <Image
          src="/images/landing/rotator-rv-snow.webp"
          alt="Cliff's rotator lifting an RV out of the snow"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[65%_40%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />

      <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl py-12 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <div className="text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.16em] text-white/90 ring-1 ring-white/20 backdrop-blur">
            <LiveDot /> 24/7 towing &amp; winching · Edmonton area
          </p>
          <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-balance">
            Stuck in the snow? <span className="text-[#ff5a5f]">We&apos;ll get you out.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">
            Light, medium and heavy duty towing plus winching, from cars and pickups to semis. For drivers and for
            businesses, day or night.
          </p>
          <div className="mt-7">
            <CallButton size="xl" label={`Call ${siteConfig.phone.compact}`} />
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#ff5a5f]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <BookingPicker />
      </div>
    </section>
  );
}
