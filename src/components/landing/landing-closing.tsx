import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { CallButton } from "@/components/landing/call-button";
import { siteConfig } from "@/lib/site";

export function RequestSection() {
  return (
    <section id="request" className="scroll-mt-4 py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">
        <div className="lg:sticky lg:top-8">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Request service</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-balance">
            Need a tow right now? Calling is quickest.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Dispatch answers 24/7 and can give you an ETA on the call. For a job that can wait, like moving
            a work vehicle or booking fleet help, send the details and we&apos;ll get back to you.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-gray-700">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" aria-hidden="true" />{siteConfig.phone.display}</p>
            <p className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" aria-hidden="true" />{siteConfig.hours}</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{siteConfig.address.display}</p>
          </div>
          <CallButton className="mt-8" />
        </div>
        <ContactForm
          formName="landing"
          title="Send the details"
          intro={<>Tell us the vehicle, where it is and what you need. For anything urgent, call {siteConfig.phone.compact}.</>}
          submitLabel="Send request"
        />
      </div>
    </section>
  );
}

export function ServiceAreaStrip() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Where we tow</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          {siteConfig.serviceArea.length} communities across the Edmonton area
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {siteConfig.serviceArea.map((place) => (
            <li key={place} className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700">{place}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCall() {
  return (
    <section className="py-16 sm:py-20 bg-[#3e000c] text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">Snow on the roads? Save this number.</h2>
          <p className="mt-3 text-white/75">Cliff&apos;s Towing, {siteConfig.foundedCopy}. 24/7 dispatch.</p>
        </div>
        <CallButton size="xl" className="self-start md:self-auto" />
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
