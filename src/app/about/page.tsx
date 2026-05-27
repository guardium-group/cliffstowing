import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { ServiceAreas } from "@/components/service-areas";
import { Badge } from "@/components/ui/badge";
import { Truck, ShieldCheck, Clock, Users } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { ServiceFAQ } from "@/components/service-faq";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { CTACarousel } from "@/components/cta-carousel";

export const metadata: Metadata = {
  title: "About Cliff's Towing Edmonton",
  description:
    "Learn about Cliff's Towing, Edmonton's 24/7 towing, transport, recovery, and roadside assistance company serving drivers and fleets for over 70 years.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cliff's Towing Edmonton",
    description:
      "Edmonton towing, recovery, transport, and roadside assistance backed by decades of local experience.",
    url: `${siteConfig.url}/about`,
    images: [siteConfig.ogImage],
  },
};

const stats = [
  { value: "70+", label: "Years Serving Edmonton" },
  { value: "24/7", label: "Emergency Dispatch" },
  { value: "100k", label: "Pounds Transport Capacity" },
  { value: "AB", label: "Local Operators" },
];

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description:
      "When you call, dispatch is available. Cliff's maintains equipment and operators for urgent towing, recovery, and transport needs.",
  },
  {
    icon: ShieldCheck,
    title: "Clear pricing",
    description:
      "We confirm the scope before work begins and explain what can change a quote, so customers are not left guessing.",
  },
  {
    icon: Truck,
    title: "Heavy capability",
    description:
      "From passenger vehicles to heavy recovery and equipment transport, the fleet is built for demanding Alberta conditions.",
  },
  {
    icon: Users,
    title: "Local accountability",
    description:
      "Cliff's is an Edmonton business serving drivers, fleets, property managers, and surrounding communities around the clock.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <BreadcrumbHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Edmonton towing experience built over{" "}
              <span className="text-primary">70+ years</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Cliff&apos;s Towing has served Edmonton drivers, property
                managers, commercial fleets, and heavy-equipment operators for
                generations. The work is practical: answer the call, dispatch
                the right truck, and move the vehicle or equipment safely.
              </p>
              <p>
                Today the team handles towing, roadside assistance, recovery,
                private parking support, and transport jobs across Edmonton and
                surrounding Alberta communities. Emergency dispatch remains
                available 24 hours a day, 7 days a week.
              </p>
              <p>
                Cliff&apos;s Towing is owned and operated by {siteConfig.owner}.
                Dispatch can be reached any time at {siteConfig.phone.display}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Standards
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <ServiceFAQ />
      <Testimonials />
      <BlogPreview   />
      <CTACarousel />
    </>
  );
}
