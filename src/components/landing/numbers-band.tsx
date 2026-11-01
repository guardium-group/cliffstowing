import { BODY, CONTENT_GAP, H3, Mark, MUTED, STAT, Section, SectionIntro } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

// Every figure is on cliffstowing.ca.
const stats = [
  { value: "24/7", title: "Day or night", body: "Towing, winching and recovery every day of the year, storm nights included.", ring: true },
  { value: "70+", title: "Years in Edmonton", body: `Cliff's Towing has been ${siteConfig.foundedCopy}.` },
  { value: String(siteConfig.serviceArea.length), title: "Communities", body: "From St. Albert to Leduc, Spruce Grove to Fort Saskatchewan." },
];

/** Slow sweeping dial on the 24/7 card. */
function DispatchDial() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
      <g className="origin-center motion-safe:animate-[spin_14s_linear_infinite]">
        <path d="M32 4 A28 28 0 0 1 56.2 18" fill="none" stroke="#ff5a5f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="56.2" cy="18" r="3.5" fill="#ff5a5f" />
      </g>
    </svg>
  );
}

export function NumbersBand() {
  return (
    <Section tone="dark" labelledBy="ready-heading">
      <SectionIntro
        id="ready-heading"
        eyebrow="Why drivers call Cliff's"
        title={<>Built for<br />snow <Mark>days.</Mark></>}
        lede="Ditch recovery is one of our most frequent winter calls, and dispatch answers around the clock."
      />
      <div className={cn(CONTENT_GAP, "grid gap-6 md:grid-cols-3")}>
        {stats.map((s) => (
          <div key={s.title} className="flex flex-col rounded-2xl bg-white/[0.05] p-8 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <span className={cn(STAT, "text-[#ff5a5f]")}>{s.value}</span>
              {s.ring && <DispatchDial />}
            </div>
            <h3 className={cn(H3, "mt-10")}>{s.title}</h3>
            <p className={cn(BODY, "mt-3", MUTED)}>{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
