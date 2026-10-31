import Image from "next/image";
import { siteConfig } from "@/lib/site";

// Every figure is on cliffstowing.ca (80,000+ lb is from the heavy duty FAQ).
const numbers = [
  { value: "70+", label: "years towing in Edmonton" },
  { value: "24/7", label: "dispatch, storms included" },
  { value: String(siteConfig.serviceArea.length), label: "communities covered" },
  { value: "80,000+", unit: "lb", label: "heavy recovery capacity" },
];

export function NumbersBand() {
  return (
    <section className="relative overflow-hidden bg-[#3e000c] text-white">
      <Image src="/images/hero/cliffs500rotator.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3e000c] via-[#3e000c]/85 to-[#3e000c]/60" aria-hidden="true" />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl py-14 sm:py-20">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {numbers.map((n) => (
            <div key={n.label} className="border-l-2 border-[#ff5a5f] pl-4 sm:pl-6">
              <dt className="sr-only">{n.label}</dt>
              <dd>
                <span className="block text-4xl sm:text-6xl font-extrabold tracking-tight tabular-nums">
                  {n.value}
                  {n.unit && <span className="ml-1 text-xl sm:text-2xl font-bold text-white/70">{n.unit}</span>}
                </span>
                <span className="mt-2 block text-sm sm:text-base text-white/75" aria-hidden="true">{n.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
