import Image from "next/image";
import { BookButton, type BookingKind } from "@/components/landing/booking-context";
import { CallButton } from "@/components/landing/call-button";
import { cn } from "@/lib/utils";

// Vehicle lists match the light/medium, heavy duty, winching and equipment pages.
const tiers: {
  kind: BookingKind;
  name: string;
  who: string;
  vehicles: string;
  detail: string;
  image: string;
  alt: string;
  span: string;
}[] = [
  {
    kind: "stuck",
    name: "Winching & recovery",
    who: "Drivers + businesses",
    vehicles: "Ditches, fields and snowbanks",
    detail: "Light and heavy duty winching, from a car in a snowbank to a tanker off the shoulder.",
    image: "/images/hero/recoverysnow1024x681.jpg",
    alt: "Two Cliff's wreckers winching a tanker truck out of a snowy ditch",
    span: "lg:col-span-2 lg:row-span-2 min-h-[420px] lg:min-h-[560px]",
  },
  {
    kind: "light",
    name: "Light duty",
    who: "Drivers",
    vehicles: "Cars, SUVs, minivans, pickups, EVs",
    detail: "Flatbed for AWD and electric vehicles.",
    image: "/images/landing/flatbed-sedan.jpg",
    alt: "Cliff's flatbed with a sedan strapped down",
    span: "min-h-[270px]",
  },
  {
    kind: "medium",
    name: "Medium duty",
    who: "Drivers + businesses",
    vehicles: "Work pickups, cargo vans, box trucks",
    detail: "For the vehicles your business runs on.",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    alt: "Cliff's deck truck carrying a tractor",
    span: "min-h-[270px]",
  },
  {
    kind: "heavy",
    name: "Heavy duty",
    who: "Businesses",
    vehicles: "Semis, buses, RVs, commercial",
    detail: "Rotator and heavy underlift, with traffic control for highway jobs.",
    image: "/images/landing/rotator-wrecker.jpg",
    alt: "Cliff's heavy rotator wrecker",
    span: "min-h-[270px]",
  },
  {
    kind: "equipment",
    name: "Equipment transport",
    who: "Businesses",
    vehicles: "Excavators, skid steers, forklifts",
    detail: "Construction and yard equipment, moved on our deck trucks.",
    image: "/images/landing/lowboy-excavators.jpg",
    alt: "Cliff's truck and trailer loaded with excavators",
    span: "min-h-[270px]",
  },
];

export function TowTiers() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="tiers-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">What we tow</p>
          <h2 id="tiers-heading" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            One call covers it, whatever you drive.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
          {tiers.map((t, i) => (
            <article key={t.kind} className={cn("group relative flex flex-col justify-end overflow-hidden rounded-3xl", t.span)}>
              <Image
                src={t.image}
                alt={t.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
              />
              <span
                className={cn(
                  "absolute inset-0 bg-gradient-to-t",
                  i === 0 ? "from-black/90 via-black/45 to-black/5" : "from-black/95 via-black/70 to-black/35"
                )}
                aria-hidden="true"
              />
              <div className="relative p-5 sm:p-6 text-white">
                <span className="inline-block rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-white/25 backdrop-blur">
                  {t.who}
                </span>
                <h3 className={cn("mt-3 font-bold", i === 0 ? "text-3xl sm:text-4xl" : "text-2xl")}>{t.name}</h3>
                <p className="mt-1 font-medium text-white/90">{t.vehicles}</p>
                <p className={cn("mt-2 text-sm text-white/75 leading-relaxed", i !== 0 && "hidden xl:block")}>{t.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <CallButton label="Call now" size="default" className="shadow-none" />
                  <BookButton kind={t.kind} source="tiers" label="Book" className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Been in a collision? We do accident towing too, with insurance coordination and delivery to the body shop you choose.
        </p>
      </div>
    </section>
  );
}
