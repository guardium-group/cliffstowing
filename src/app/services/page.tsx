import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { ServicesSection } from "@/components/services-section";
import { ServiceSpotlights } from "@/components/service-spotlights";
import { HowItWorks } from "@/components/how-it-works";
import { faqs, ServiceFAQ } from "@/components/service-faq";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { Testimonials } from "@/components/testimonials";
import { ServiceAreas } from "@/components/service-areas";
import { BlogPreview } from "@/components/blog-preview";
import { CTACarousel } from "@/components/cta-carousel";

export const metadata: Metadata = {
  title: "Towing, Recovery & Transport Services in Edmonton",
  description:
    "Explore 24/7 towing, recovery, transport, heavy duty towing, flatbed towing, winching, and roadside assistance from Cliff's Towing in Edmonton.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Towing, Recovery & Transport Services in Edmonton",
    description:
      "24/7 towing, recovery, transport, and roadside assistance across Edmonton and surrounding communities.",
    url: `${siteConfig.url}/services`,
    images: [siteConfig.ogImage],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <BreadcrumbHero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <ServiceSpotlights />
      <ServiceAreas />
      <HowItWorks />
      <ServiceFAQ />
      <Testimonials />
      <BlogPreview />
      <CTACarousel />
    </>
  );
}
