import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { ServiceAreas } from "@/components/service-areas";
import { CTABanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Truck, ShieldCheck, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Cliff's Towing Edmonton",
  description:
    "Learn about Cliff's Towing — Edmonton's trusted towing company serving the community for over 40 years with professional, reliable service.",
};

const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "10K+", label: "Vehicles Towed" },
  { value: "24/7", label: "Service Hours" },
  { value: "100%", label: "Licensed & Insured" },
];

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description:
      "When you call, we show up. We maintain a fleet of well-maintained trucks and a team of experienced operators so we can always deliver on our promise.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honest pricing, no hidden fees. We tell you the cost upfront and we never charge for services you didn't need.",
  },
  {
    icon: Truck,
    title: "Expertise",
    description:
      "Our operators are trained professionals with years of hands-on experience. Your vehicle is in safe hands from the moment we arrive.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're proud to be an Edmonton business serving our neighbours. We care about this community and it shows in every job we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Serving Edmonton for <span className="text-primary">Over 40 Years</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Cliff&apos;s Towing was founded right here in Edmonton with one simple goal: to provide fast, honest, and professional towing and roadside assistance when people need it most.
              </p>
              <p>
                Over the decades, we&apos;ve grown from a small operation to a trusted name across the greater Edmonton region — but our commitment to service hasn&apos;t changed. Every call we take is treated with the same urgency and care, whether it&apos;s a simple lockout or a major accident recovery.
              </p>
              <p>
                Our fleet is regularly maintained and updated, our operators are fully trained and licensed, and we work closely with insurance companies to make the process as smooth as possible for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <CTABanner />
    </>
  );
}
