import { Anchor, Car, Container, Truck } from "lucide-react";
import { CallButton } from "@/components/landing/call-button";

// Vehicle lists match the light/medium and heavy duty service pages.
const tiers = [
  {
    icon: Car,
    name: "Light duty towing",
    who: "Personal",
    vehicles: "Cars, SUVs, minivans and pickups",
    detail: "Flatbed or wheel-lift, matched to your vehicle. Flatbed for AWD and electric vehicles.",
  },
  {
    icon: Truck,
    name: "Medium duty towing",
    who: "Personal + commercial",
    vehicles: "Work pickups, cargo vans and box trucks",
    detail: "For the vehicles your business runs on, and the big pickup in your driveway.",
  },
  {
    icon: Container,
    name: "Heavy duty towing",
    who: "Commercial",
    vehicles: "Semis, buses, RVs and commercial vehicles",
    detail: "Rotator and heavy underlift trucks, with traffic control equipment for highway jobs.",
  },
  {
    icon: Anchor,
    name: "Winching & recovery",
    who: "Everyone",
    vehicles: "Ditches, fields and snowbanks",
    detail: "Light and heavy duty winching, from a car in a snowbank to a semi off the shoulder.",
  },
];

export function TowTiers() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">What we tow</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-balance">
            One call covers it, whatever you drive.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map(({ icon: Icon, name, who, vehicles, detail }) => (
            <div key={name} className="flex flex-col rounded-2xl border border-gray-200 p-6 bg-gray-50/60">
              <div className="flex items-center justify-between gap-3">
                <span className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-gray-500">{who}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-800">{vehicles}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{detail}</p>
              <CallButton label="Call for this" size="default" className="mt-5 self-start shadow-none" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Been in a collision? We do accident towing too, with insurance coordination and delivery to
          the body shop you choose.
        </p>
      </div>
    </section>
  );
}
