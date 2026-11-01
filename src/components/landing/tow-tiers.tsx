import Image from "next/image";
import { BookLink, type BookingKind } from "@/components/landing/booking-context";
import { BODY, CONTENT_GAP, H3, Mark, MUTED, NUMERAL, Section, SectionIntro } from "@/components/landing/ui";
import { cn } from "@/lib/utils";

// Vehicle lists match the light/medium, heavy duty and winching service pages.
const tiers: { kind: BookingKind; name: string; vehicles: string; detail: string; image: string; alt: string }[] = [
  {
    kind: "light",
    name: "Light duty",
    vehicles: "Cars, SUVs, minivans, pickups and EVs",
    detail: "Flatbed or wheel-lift, matched to your vehicle. Flatbed for AWD and electric vehicles.",
    image: "/images/landing/flatbed-sedan.jpg",
    alt: "Cliff's flatbed with a sedan strapped down",
  },
  {
    kind: "medium",
    name: "Medium duty",
    vehicles: "Work pickups, cargo vans and box trucks",
    detail: "For the vehicles your business runs on, and the big pickup in your driveway.",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    alt: "Cliff's deck truck carrying a tractor",
  },
  {
    kind: "heavy",
    name: "Heavy duty",
    vehicles: "Semis, buses, RVs and commercial vehicles",
    detail: "Rotator and heavy underlift trucks, with traffic control equipment for highway jobs.",
    image: "/images/landing/rotator-wrecker.jpg",
    alt: "Cliff's heavy rotator wrecker",
  },
  {
    kind: "stuck",
    name: "Winching & recovery",
    vehicles: "Ditches, fields and snowbanks",
    detail: "Light and heavy duty winching, from a car in a snowbank to a tanker off the shoulder.",
    image: "/images/hero/recoverysnow1024x681.jpg",
    alt: "Cliff's wreckers winching a tanker truck out of a snowy ditch",
  },
];

export function TowTiers() {
  return (
    <Section tone="light" labelledBy="tiers-heading">
      <SectionIntro
        id="tiers-heading"
        eyebrow="What we tow"
        title={<>Light to heavy.<br />Cars to <Mark>semis.</Mark></>}
        lede="One dispatch number for every class of vehicle, and the winch to pull it out of the snow first."
      />
      <ol className={cn(CONTENT_GAP, "border-b border-gray-200")}>
        {tiers.map((t, i) => (
          <li key={t.kind} className="group grid gap-6 border-t border-gray-200 py-10 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,17rem)] md:items-start md:gap-8 lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,26rem)] lg:gap-12">
            <span aria-hidden="true" className={cn(NUMERAL, "[-webkit-text-stroke-color:#e81e25]")}>{String(i + 1).padStart(2, "0")}</span>
            <div className="order-last md:order-none">
              <h3 className={H3}>{t.name}</h3>
              <p className={cn(BODY, "mt-2 font-medium")}>{t.vehicles}</p>
              <p className={cn(BODY, "mt-2 max-w-[52ch]", MUTED)}>{t.detail}</p>
              <BookLink kind={t.kind} source="tiers" className="mt-5 text-primary">Book {t.name.toLowerCase()}</BookLink>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 26rem, (min-width: 768px) 17rem, 100vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
            </div>
          </li>
        ))}
      </ol>
      <p className={cn(BODY, "mt-8", MUTED)}>
        Been in a collision? We do accident towing too, with insurance coordination and delivery to the body shop you choose.
      </p>
    </Section>
  );
}
