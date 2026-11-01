import Image from "next/image";
import { Container, Eyebrow, H1, LiveDot, PrimaryCta, TextLink } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LandingTopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Image src="/cliffs_logo.png" alt="Cliff's Towing" width={130} height={36} className="h-10 w-auto object-contain sm:h-11" priority />
        <div className="flex items-center gap-6">
          <span className="hidden items-center gap-2 text-sm font-medium text-gray-700 sm:flex">
            <LiveDot /> Dispatch live 24/7
          </span>
          <PrimaryCta href={siteConfig.phone.href} size="sm" className="shadow-none">
            {siteConfig.phone.compact}
          </PrimaryCta>
        </div>
      </Container>
    </div>
  );
}

export function LandingHero() {
  return (
    <section data-dark="true" className="group/s relative flex min-h-[640px] flex-col overflow-hidden bg-[#140a0b] text-white lg:min-h-[760px]">
      <div className="absolute inset-0 landing-kenburns">
        <Image
          src="/images/landing/rotator-rv-snow.webp"
          alt="Cliff's rotator lifting an RV out of the snow"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[60%_40%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />

      <Container className="relative flex flex-1 flex-col justify-center py-24 lg:py-32">
        <Eyebrow>24/7 towing &amp; winching · Edmonton area</Eyebrow>
        <h1 className={cn("mt-6 max-w-4xl", H1)}>
          <span className="landing-rise block">Stuck in the snow.</span>
          <span className="landing-rise block text-[#ff5a5f] [animation-delay:120ms]">We&apos;ll get you out.</span>
        </h1>
        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-white/80">
          Light, medium and heavy duty towing plus winching, from cars and pickups to semis, for drivers and businesses
          across the Edmonton area.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <PrimaryCta href={siteConfig.phone.href}>Call {siteConfig.phone.compact}</PrimaryCta>
          <TextLink href="#request">Book a tow</TextLink>
        </div>
      </Container>

      <Container className="relative pb-8 lg:pb-10">
        <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-3">
            <LiveDot />
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">Need help now?</span> Dispatch is answering 24/7.
            </p>
          </div>
          <a href={siteConfig.phone.href} className="text-2xl font-extrabold tracking-[-0.02em] hover:text-[#ff8a8e] font-[family-name:var(--font-display)]">
            {siteConfig.phone.compact}
          </a>
        </div>
      </Container>
    </section>
  );
}
