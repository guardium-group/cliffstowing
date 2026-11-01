import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { BookingForm } from "@/components/landing/booking-form";
import { BODY, Container, Eyebrow, H2, Lede, LiveDot, Mark, MUTED, PrimaryCta, Section } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function RequestSection() {
  return (
    <Section tone="muted" id="request" labelledBy="request-heading" className="scroll-mt-16">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Book a tow</Eyebrow>
          <h2 id="request-heading" className={cn("mt-5", H2)}>
            Book a tow.<br />Or just <Mark>call.</Mark>
          </h2>
          <Lede className="mt-6">
            For a job that can wait, send the details and we&apos;ll get back to you. Anything urgent, call dispatch.
          </Lede>
          <div className="mt-10">
            <PrimaryCta href={siteConfig.phone.href}>Call {siteConfig.phone.compact}</PrimaryCta>
          </div>
          <p className={cn(BODY, "mt-8 flex items-center gap-3", MUTED)}>
            <LiveDot /> Dispatch is answering now, 24/7.
          </p>
        </div>
        <BookingForm />
      </div>
    </Section>
  );
}

export function ClosingCall() {
  return (
    <section data-dark="true" aria-labelledby="closing-heading" className="group/s relative overflow-hidden bg-[#3e000c] text-white">
      <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
        <Image src="/images/hero/cliffs500rotator.jpg" alt="Cliff's heavy duty rotator" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-[#3e000c] to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
      </div>
      <Container className="relative py-24 lg:py-32">
        <div className="lg:w-1/2 lg:pr-16">
          <Eyebrow>24/7 dispatch</Eyebrow>
          <h2 id="closing-heading" className={cn("mt-5", H2)}>
            Snow on the roads?<br />Save this <Mark>number.</Mark>
          </h2>
          <Lede className="mt-6">Cliff&apos;s Towing, {siteConfig.foundedCopy}. One call gets the right truck moving.</Lede>
          <div className="mt-10">
            <PrimaryCta href={siteConfig.phone.href}>Call {siteConfig.phone.compact}</PrimaryCta>
          </div>
          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Serving {siteConfig.serviceArea.length} communities
            </p>
            <p className={cn(BODY, "mt-3 text-white/80")}>{siteConfig.serviceArea.join(" · ")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="bg-[#140a0b] text-sm text-white/60">
      <Container className="flex flex-col gap-4 py-8 pb-28 md:flex-row md:items-center md:justify-between md:pb-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName} · {siteConfig.address.display}
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6">
          <Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-white">Privacy</Link>
          <Link href="/cookies" className="inline-flex min-h-11 items-center hover:text-white">Cookies</Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-white">Terms</Link>
          <CookieSettingsButton className="inline-flex min-h-11 items-center hover:text-white" />
        </nav>
      </Container>
    </footer>
  );
}
