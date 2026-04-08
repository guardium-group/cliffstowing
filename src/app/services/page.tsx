import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { ServicesSection } from "@/components/services-section";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Towing Services | Cliff's Towing Edmonton",
  description:
    "Full list of towing and roadside assistance services in Edmonton. Light, medium, heavy duty, flatbed, accident recovery, fuel delivery, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbHero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <CTABanner />
    </>
  );
}
