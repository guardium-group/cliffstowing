import Image from "next/image";
import Link from "next/link";
import { CarFront, Clock, MapPin, MessageSquareText, Phone } from "lucide-react";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { BookingForm } from "@/components/landing/booking-form";
import { CallButton } from "@/components/landing/call-button";
import { LiveDot } from "@/components/landing/landing-hero";
import { siteConfig } from "@/lib/site";

const haveReady = [
  { icon: MapPin, label: "Where the vehicle is", body: "Cross streets, highway and direction, or a GPS pin" },
  { icon: CarFront, label: "What it is", body: "Year, make and model, or the equipment type" },
  { icon: MessageSquareText, label: "What happened", body: "Won't start, in a ditch, collision, or a planned move" },
];

export function RequestSection() {
  return (
    <section id="request" className="scroll-mt-20 py-16 sm:py-24 bg-gray-50" aria-labelledby="request-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 lg:sticky lg:top-24">
          <div className="relative aspect-[16/9]">
            <Image src="/images/landing/flatbed-sedan.jpg" alt="Cliff's flatbed with a sedan secured on the deck" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
            <p className="absolute left-5 bottom-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-gray-900">
              <LiveDot /> Dispatch is answering now
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Book a tow</p>
            <h2 id="request-heading" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 text-balance">
              Need it now? Call dispatch.
            </h2>
            <p className="mt-3 text-gray-600">For a job that can wait, send the details and we&apos;ll get back to you. Either way, have these ready:</p>
            <ul className="mt-5 grid gap-4">
              {haveReady.map(({ icon: Icon, label, body }) => (
                <li key={label} className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span><span className="block font-semibold text-gray-900">{label}</span><span className="block text-sm text-gray-600">{body}</span></span>
                </li>
              ))}
            </ul>
            <CallButton className="mt-7 w-full sm:w-auto" />
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

export function ServiceAreaStrip() {
  return (
    <section className="relative overflow-hidden text-white" aria-labelledby="area-heading">
      <Image src="/images/hero/decktruckoldcar1024x693.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" aria-hidden="true" />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl py-16 sm:py-24">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/70">Where we tow</p>
        <h2 id="area-heading" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-balance">
          {siteConfig.serviceArea.length} communities across the Edmonton area
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3 max-w-4xl">
          {siteConfig.serviceArea.map((place) => (
            <li key={place} className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm sm:text-base font-medium ring-1 ring-white/20 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#ff5a5f]" aria-hidden="true" />
              {place}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCall() {
  return (
    <section className="relative overflow-hidden bg-[#3e000c] text-white">
      <Image src="/images/hero/cliffs500rotator.jpg" alt="Cliff's heavy duty rotator" fill sizes="100vw" className="object-cover object-[50%_60%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3e000c] via-[#3e000c]/80 to-[#3e000c]/30" aria-hidden="true" />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl pt-40 pb-16 sm:pt-56 sm:pb-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl sm:text-6xl font-bold tracking-tight text-balance">
          Snow on the roads? Save this number.
        </h2>
        <a
          href={siteConfig.phone.href}
          className="mt-8 inline-flex items-center gap-4 rounded-full bg-primary px-8 sm:px-10 py-5 text-3xl sm:text-5xl font-extrabold tracking-tight shadow-2xl shadow-black/40 hover:bg-primary/90"
        >
          <Phone className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
          {siteConfig.phone.compact}
        </a>
        <p className="mt-6 flex items-center justify-center gap-2 text-white/80">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Cliff&apos;s Towing, {siteConfig.foundedCopy}. 24/7 dispatch.
        </p>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl py-8 pb-28 md:pb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName} · {siteConfig.address.display}
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <CookieSettingsButton className="hover:text-white" />
        </nav>
      </div>
    </footer>
  );
}
