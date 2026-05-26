import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceAreas } from "@/lib/service-areas";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { CTACarousel } from "@/components/cta-carousel";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Towing Service Areas Near Edmonton | Cliff's Towing",
  description:
    "Cliff's Towing serves Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, and 7 more communities across the greater Edmonton region. 24/7 dispatch.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Towing Service Areas Near Edmonton | Cliff's Towing",
    description:
      "Cliff's Towing serves Edmonton and 11 communities across the greater Edmonton region. 24/7 towing, roadside assistance, and recovery.",
    url: `${siteConfig.url}/service-areas`,
    type: "website",
    images: [{ url: `${siteConfig.url}${siteConfig.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
        ])}
      />

      <main className="bg-white">
        {/* Hero */}
        <header className="bg-[#3e000c] pt-36 sm:pt-40 pb-16 sm:pb-20 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap items-center gap-3 border-l border-lime-300 pl-3 text-xs font-mono uppercase tracking-[0.16em] text-lime-300 mb-5">
              <span className="text-white flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                Alberta
              </span>
              <span>·</span>
              <span>Greater Edmonton Region</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-wrap-balance max-w-7xl mb-4">
              Towing service areas we cover
            </h1>
            <p className="text-white/70 text-lg sm:text-lg leading-tracking max-w-5xl mb-6">
              Cliff&apos;s Towing dispatches 24/7 to Edmonton and 11 surrounding communities across the greater Edmonton region. Pick your city below to see response times, routes covered, and local details.
            </p>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </header>

        {/* Areas grid */}
        <div className="container mx-auto px-4 max-w-7xl py-14 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-semibold text-gray-900 text-lg leading-snug group-hover:text-gray-950">
                      {area.name}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">Alberta</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {area.intro}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-auto">
                  <Clock className="h-3 w-3 text-primary/70 flex-shrink-0" />
                  <span>{area.responseTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Testimonials/>
      <CTACarousel />
    </>
  );
}
