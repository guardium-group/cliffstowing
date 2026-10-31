import { Building2, CircleCheck, UserRound } from "lucide-react";

// Each point is backed by a service page on cliffstowing.ca.
const audiences = [
  {
    icon: UserRound,
    title: "For drivers",
    points: [
      "Cars, SUVs, pickups and EVs",
      "Flatbed for AWD and electric vehicles",
      "An honest ETA when you call",
      "Accident towing with insurance coordination",
    ],
  },
  {
    icon: Building2,
    title: "For businesses and fleets",
    points: [
      "Work trucks, cargo vans and box trucks",
      "Semis, buses, RVs and equipment",
      "We talk directly with your fleet coordinator",
      "Ask about priority dispatch for recurring needs",
    ],
  },
];

export function AudienceSplit() {
  return (
    <section className="py-16 sm:py-24 bg-[#3e000c] text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl grid gap-6 md:grid-cols-2">
        {audiences.map(({ icon: Icon, title, points }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Icon className="h-6 w-6 text-[#ff5a5f]" aria-hidden="true" />
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <ul className="mt-6 grid gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/85">
                  <CircleCheck className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#ff5a5f]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
