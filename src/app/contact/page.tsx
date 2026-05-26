import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { ContactPageContent } from "@/components/contact-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { CTACarousel } from "@/components/cta-carousel";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceFAQ } from "@/components/service-faq";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Contact Cliff's Towing Dispatch",
  description:
    "Call Cliff's Towing dispatch 24/7 for towing, recovery, transport, and roadside assistance in Edmonton and surrounding communities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cliff's Towing Dispatch",
    description:
      "Get 24/7 towing, recovery, transport, and roadside assistance from Cliff's Towing in Edmonton.",
    url: `${siteConfig.url}/contact`,
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <BreadcrumbHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <ContactPageContent />
      <ServiceAreas />
      <ServiceFAQ />
      <Testimonials />
      <CTACarousel />
    </>
  );
}
