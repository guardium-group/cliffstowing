import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceAreas, getArea } from "@/lib/service-areas";
import { serviceLocations } from "@/lib/service-locations";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, cityLocalBusinessJsonLd, faqJsonLd } from "@/lib/structured-data";
import { ServicesSection } from "@/components/services-section";
import { Testimonials } from "@/components/testimonials";
import { CTACarousel } from "@/components/cta-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return { title: "Area not found", robots: { index: false, follow: false } };
  }

  const canonical = `/service-areas/${area.slug}`;

  return {
    title: `Tow Truck ${area.name} | 24/7 Towing | Cliff's Towing`,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical },
    openGraph: {
      title: `Tow Truck ${area.name} | Cliff's Towing`,
      description: area.metaDescription,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
      images: [{ url: `${siteConfig.url}${siteConfig.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Tow Truck ${area.name} | Cliff's Towing`,
      description: area.metaDescription,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export default async function ServiceAreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) notFound();

  const cityComboSlugs = new Set(
    serviceLocations.filter((l) => l.citySlug === area.slug).map((l) => l.serviceSlug)
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
          { name: area.name, url: `${siteConfig.url}/service-areas/${area.slug}` },
        ])}
      />
      <JsonLd data={cityLocalBusinessJsonLd(area.name)} />
      <JsonLd data={faqJsonLd(area.faqs)} />

      <article className="bg-white">
        {/* Hero header */}
        <header className="relative overflow-hidden bg-[#3e000c] pt-36 sm:pt-40 pb-16 sm:pb-20 text-white">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <Image
              src={siteConfig.ogImage}
              alt={`Cliff's Towing serving ${area.name}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#3e000c] via-[#3e000c]/75 to-[#3e000c]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl">
            <Link
              href="/#service-areas"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Service areas
            </Link>

            <div className="flex flex-wrap items-center gap-3 border-l border-lime-300 pl-3 text-xs font-mono uppercase tracking-[0.16em] text-lime-300 mb-5">
              <span className="text-white flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {area.name}
              </span>
              <span>·</span>
              <span>Alberta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-wrap-balance max-w-7xl mb-4">
              Towing &amp; Roadside Assistance in {area.name}
            </h1>
            <p className="text-white/70 text-lg sm:text-lg leading-tight max-w-5xl mb-8">
              {area.intro}
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

        {/* Key facts bar */}
        <div className="bg-gray-950 text-white">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wide">Response time</p>
                  <p className="font-semibold">{area.responseTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wide">Dispatch</p>
                  <p className="font-semibold">24/7 — {siteConfig.phone.compact}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wide">Coverage</p>
                  <p className="font-semibold">{area.name} &amp; surrounding roads</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-5 sm:px-6 max-w-7xl py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-8 space-y-12">

              {/* Routes we cover */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  Roads and routes we cover in {area.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our dispatch covers the main corridors in and around {area.name}, including:
                </p>
                <ul className="space-y-2">
                  {area.mainRoutes.map((route) => (
                    <li key={route} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {route}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Service links */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  Services available in {area.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  All of our services are available across {area.name} and the surrounding area.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Light duty towing", slug: "light-duty-towing" },
                    { label: "Heavy duty towing", slug: "heavy-duty-towing" },
                    { label: "Flatbed towing", slug: "flatbed-towing" },
                    { label: "Accident recovery", slug: "accident-recovery" },
                    { label: "Roadside assistance", slug: "roadside-assistance" },
                    { label: "Winching & recovery", slug: "winching-recovery" },
                    { label: "Equipment transport", slug: "equipment-transport" },
                  ].map((s) => (
                    <Link
                      key={s.slug}
                      href={
                        cityComboSlugs.has(s.slug)
                          ? `/service-areas/${area.slug}/${s.slug}`
                          : `/services/${s.slug}`
                      }
                      className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-6">
                  Frequently asked questions about towing in {area.name}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {area.faqs.map((faq, i) => (
                    <AccordionItem key={faq.q} value={`faq-${i}`}>
                      <AccordionTrigger className="text-base text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-4">
                <div className="rounded-2xl bg-[#3e000c] text-white p-6 sm:p-7">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">
                    {area.name} Dispatch
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Stranded in {area.name}? Call dispatch — we're available 24/7 and will give you an honest ETA.
                  </p>
                  <a
                    href={siteConfig.phone.href}
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors w-full"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone.display}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-colors w-full mt-3"
                  >
                    Request a quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-gray-400 mb-3">
                    Other areas we serve
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceAreas
                      .filter((a) => a.slug !== area.slug)
                      .slice(0, 8)
                      .map((a) => (
                        <Link
                          key={a.slug}
                          href={`/service-areas/${a.slug}`}
                          className="text-xs font-mono text-gray-500 bg-white border border-gray-200 hover:border-primary/40 hover:text-gray-800 rounded-full px-3 py-1.5 transition-colors duration-200"
                        >
                          {a.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* <ServicesSection limit={4} /> */}
      <Testimonials />
      <CTACarousel />
    </>
  );
}
