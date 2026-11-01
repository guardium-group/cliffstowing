import Image from "next/image";
import { Check } from "lucide-react";
import { BookLink, type BookingKind } from "@/components/landing/booking-context";
import { BODY, CONTENT_GAP, H3, Mark, Section, SectionIntro } from "@/components/landing/ui";
import { cn } from "@/lib/utils";

// Each point is backed by a service page on cliffstowing.ca.
const AUDIENCES: { label: string; title: string; points: string[]; image: string; alt: string; book: BookingKind; cta: string }[] = [
  {
    label: "For drivers",
    title: "Your car, SUV or pickup, handled with care.",
    points: ["Flatbed for AWD and electric vehicles", "An honest ETA when you call", "Accident towing with insurance coordination"],
    image: "/images/landing/wheel-lift-downtown.webp",
    alt: "Cliff's tow truck on a call in downtown Edmonton",
    book: "light",
    cta: "Book a tow for my vehicle",
  },
  {
    label: "For businesses and fleets",
    title: "Keep your trucks, vans and crews moving.",
    points: ["Work trucks, box trucks, semis and equipment", "We talk directly with your fleet coordinator", "Ask about priority dispatch for recurring needs"],
    image: "/images/hero/cliffs500rotator.jpg",
    alt: "Cliff's heavy duty rotator",
    book: "fleet",
    cta: "Set up fleet dispatch",
  },
];

export function AudienceSplit() {
  return (
    <Section tone="light" labelledBy="audience-heading">
      <SectionIntro
        id="audience-heading"
        eyebrow="Who we tow for"
        title={<>One dispatch.<br />Two kinds of <Mark>jobs.</Mark></>}
        lede="Whether it's the family SUV or a fleet of work trucks, it's the same 24/7 number and the same crew."
      />
      <div className={cn(CONTENT_GAP, "grid gap-6 md:grid-cols-2")}>
        {AUDIENCES.map((a) => (
          <article key={a.label} className="group flex flex-col overflow-hidden rounded-2xl bg-[#f4f5f7]">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image src={a.image} alt={a.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{a.label}</p>
              <h3 className={cn(H3, "mt-3")}>{a.title}</h3>
              <ul className="mt-6 grid gap-3">
                {a.points.map((p) => (
                  <li key={p} className={cn(BODY, "flex items-start gap-3 text-gray-700")}>
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={3} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <BookLink kind={a.book} source={`audience-${a.book}`} className="mt-8 self-start text-primary">{a.cta}</BookLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
