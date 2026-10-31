import { Snowflake } from "lucide-react";
import { siteConfig } from "@/lib/site";

const steps = [
  { title: "Call dispatch", body: `Call ${siteConfig.phone.compact}. Dispatch answers 24/7, including storm nights.` },
  { title: "Tell us where you are", body: "Cross streets, direction of travel or a GPS pin, plus what you drive and what happened." },
  { title: "We get you moving", body: "A tow, a winch-out or both, with an honest ETA up front." },
];

export function LandingSteps() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">How it works</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Three steps to get out of the snow.</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100">
              <span className="text-sm font-mono text-primary">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-gray-100 max-w-3xl">
          <Snowflake className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-gray-700">
            <strong className="font-semibold text-gray-900">Slid off the road?</strong> If you can&apos;t
            get safely away from traffic, stay belted in with your hazard lights on, then call us. If
            anyone is hurt, call emergency services first.
          </p>
        </div>
      </div>
    </section>
  );
}
