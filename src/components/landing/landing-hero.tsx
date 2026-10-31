import Image from "next/image";
import { ArrowDown, Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/landing/call-button";
import { siteConfig } from "@/lib/site";

const trust = [
  { icon: Clock, label: "24/7 dispatch" },
  { icon: ShieldCheck, label: "70+ years in Edmonton" },
  { icon: MapPin, label: `${siteConfig.serviceArea.length} communities` },
  { icon: Star, label: "5-star Google reviews" },
];

export function LandingTopBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl h-16 sm:h-20 flex items-center justify-between gap-4">
        <Image
          src="/cliffs_logo.png"
          alt="Cliff's Towing"
          width={130}
          height={36}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
        />
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs font-mono uppercase tracking-[0.18em] text-gray-500">
            24/7 dispatch
          </span>
          <CallButton label={siteConfig.phone.compact} size="default" className="shadow-none" />
        </div>
      </div>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#3e000c]">
      <Image
        src="/images/hero/recoverysnow1024x681.jpg"
        alt="Cliff's Towing heavy wreckers winching a tanker truck out of a snowy ditch"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[60%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" aria-hidden="true" />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/80">
            24/7 towing &amp; winching · Edmonton area
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
            Stuck in the snow? <span className="text-[#ff5a5f]">We&apos;ll get you out.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/85 leading-relaxed">
            Light, medium and heavy duty towing plus winching, from cars and pickups to semis. For
            drivers and for businesses, day or night, across {siteConfig.serviceArea.length}{" "}
            communities in the Edmonton area.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton size="xl" />
            <Button asChild size="xl" variant="outline" className="rounded-full bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
              <a href="#request">
                Request service
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#ff5a5f]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
