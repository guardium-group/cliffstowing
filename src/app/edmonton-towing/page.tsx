import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { BookingProvider } from "@/components/landing/booking-context";
import { LandingHero, LandingTopBar } from "@/components/landing/landing-hero";
import { TowTiers } from "@/components/landing/tow-tiers";
import { NumbersBand } from "@/components/landing/numbers-band";
import { PickerSection } from "@/components/landing/picker-section";
import { AudienceSplit } from "@/components/landing/audience-split";
import { LandingSteps } from "@/components/landing/landing-steps";
import { ReviewsGrid } from "@/components/landing/reviews-grid";
import { ClosingCall, LandingFooter, RequestSection } from "@/components/landing/landing-closing";
import { StickyCallBar } from "@/components/landing/sticky-call-bar";

// Display face for every landing-page heading (see components/landing/ui.tsx for the type scale).
const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

// Landing page for the Google and Meta ads. Kept out of search (and the sitemap) so it
// doesn't compete with the service pages; the site header and footer are hidden by SiteChrome.
export const metadata: Metadata = {
  title: "24/7 Towing & Winching in Edmonton",
  description:
    "Light, medium and heavy duty towing plus winching across the Edmonton area, for drivers and businesses. Call Cliff's Towing dispatch 24/7.",
  alternates: { canonical: "/edmonton-towing" },
  robots: { index: false, follow: true },
};

export default function EdmontonTowingPage() {
  return (
    <div className={archivo.variable}>
      <BookingProvider>
        <LandingTopBar />
        <LandingHero />
        <TowTiers />
        <NumbersBand />
        <PickerSection />
        <AudienceSplit />
        <LandingSteps />
        <ReviewsGrid />
        <RequestSection />
        <ClosingCall />
        <LandingFooter />
        <StickyCallBar />
      </BookingProvider>
    </div>
  );
}
