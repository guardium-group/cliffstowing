import { Check, Snowflake } from "lucide-react";
import { BODY, CONTENT_GAP, H3, Mark, MUTED, NUMERAL, Section, SectionIntro } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Share your location.",
    body: "Give dispatch your location so the right truck finds you.",
    ready: ["Cross streets or highway and direction", "Nearby exits, businesses or a GPS pin"],
  },
  {
    title: "Describe the vehicle.",
    body: "What you drive and how it's stuck decides which truck we send.",
    ready: ["Year, make and model, or the equipment", "In a ditch, won't start, or a collision"],
  },
  {
    title: "We get you moving.",
    body: "A tow, a winch-out or both, with an honest ETA up front.",
    ready: ["Where the vehicle should go", "Your insurance details, if it's a collision"],
  },
];

export function LandingSteps() {
  return (
    <Section tone="dark" labelledBy="steps-heading">
      <SectionIntro
        id="steps-heading"
        eyebrow="How it works"
        title={<>Three steps.<br />One phone <Mark>call.</Mark></>}
        lede={`Call ${siteConfig.phone.compact} and dispatch walks you through it. Having these ready helps.`}
      />
      <ol className={cn(CONTENT_GAP, "border-b border-white/10")}>
        {steps.map((s, i) => (
          <li key={s.title} className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <span
                className={cn(NUMERAL, "[-webkit-text-stroke-color:#ff5a5f]")}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={H3}>{s.title}</h3>
                <p className={cn(BODY, "mt-2 max-w-[44ch]", MUTED)}>{s.body}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.05] p-8 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b70]">Have ready</p>
              <ul className="mt-4 grid gap-3">
                {s.ready.map((r) => (
                  <li key={r} className={cn(BODY, "flex items-start gap-3 text-white/85")}>
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#ff6b70]" strokeWidth={3} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <p className={cn(BODY, "mt-10 flex items-start gap-3", MUTED)}>
        <Snowflake className="mt-1 h-4 w-4 flex-shrink-0 text-[#ff6b70]" aria-hidden="true" />
        <span>
          <span className="font-semibold text-white">Slid off the road?</span>{" "}If you can&apos;t get safely away from
          traffic, stay belted in with your hazard lights on, then call. If anyone is hurt, call emergency services first.
        </span>
      </p>
    </Section>
  );
}
