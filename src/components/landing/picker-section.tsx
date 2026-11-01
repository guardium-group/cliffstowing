import { BookingPicker } from "@/components/landing/booking-picker";
import { Eyebrow, H2, Lede, Mark, Section, TextLink } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PickerSection() {
  return (
    <Section tone="muted" labelledBy="picker-heading">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
        <div>
          <Eyebrow>Two taps to a tow</Eyebrow>
          <h2 id="picker-heading" className={cn("mt-5", H2)}>
            Tell us what<br />needs a <Mark>tow.</Mark>
          </h2>
          <Lede className="mt-6">
            Pick your vehicle and how soon you need us. We&apos;ll put you straight through to dispatch, or start your
            booking for you.
          </Lede>
          <TextLink href={siteConfig.phone.href} className="mt-8 text-primary">
            Or call {siteConfig.phone.compact}
          </TextLink>
        </div>
        <BookingPicker />
      </div>
    </Section>
  );
}
