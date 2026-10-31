import Image from "next/image";
import { MapPin, PhoneCall, Snowflake, Truck } from "lucide-react";
import { siteConfig } from "@/lib/site";

const steps = [
  { icon: PhoneCall, title: "Call dispatch", body: `Call ${siteConfig.phone.compact}. Dispatch answers 24/7, storm nights included.` },
  { icon: MapPin, title: "Tell us where you are", body: "Cross streets, direction of travel or a GPS pin, plus what you drive and what happened." },
  { icon: Truck, title: "We get you moving", body: "A tow, a winch-out or both, with an honest ETA up front." },
];

export function LandingSteps() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="steps-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">How it works</p>
          <h2 id="steps-heading" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            Three steps out of the snow.
          </h2>
          <ol className="relative mt-10 grid gap-8">
            <span className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/10" aria-hidden="true" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-5">
                <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-gray-50">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="pt-1">
                  <span className="text-xs font-mono uppercase tracking-[0.16em] text-gray-500">Step {i + 1}</span>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src="/images/hero/HeavyTowing1024x680.jpg" alt="Cliff's heavy wrecker towing a bus on a slushy road" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm flex items-start gap-3 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-gray-100">
            <Snowflake className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm text-gray-700">
              <strong className="block font-semibold text-gray-900">Slid off the road?</strong>
              If you can&apos;t get safely away from traffic, stay belted in with your hazard lights on, then call us. If
              anyone is hurt, call emergency services first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
