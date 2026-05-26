import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, MapPin } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceLocations, getServiceLocation } from "@/lib/service-locations";
import { getService } from "@/lib/services";
import { getArea } from "@/lib/service-areas";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { Testimonials } from "@/components/testimonials";
import { CTACarousel } from "@/components/cta-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ComboPageProps = {
  params: Promise<{ slug: string; service: string }>;
};

export function generateStaticParams() {
  return serviceLocations.map((loc) => ({
    slug: loc.citySlug,
    service: loc.serviceSlug,
  }));
}

export async function generateMetadata({ params }: ComboPageProps): Promise<Metadata> {
  const { slug, service } = await params;
  const loc = getServiceLocation(slug, service);

  if (!loc) {
    return { title: "Page not found", robots: { index: false, follow: false } };
  }

  const canonical = `/service-areas/${loc.citySlug}/${loc.serviceSlug}`;

  return {
    title: `${loc.title} | Cliff's Towing`,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${loc.title} | Cliff's Towing`,
      description: loc.metaDescription,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
      images: [{ url: `${siteConfig.url}${siteConfig.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${loc.title} | Cliff's Towing`,
      description: loc.metaDescription,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export default async function ServiceLocationPage({ params }: ComboPageProps) {
  const { slug, service } = await params;
  const loc = getServiceLocation(slug, service);

  if (!loc) notFound();

  const serviceData = getService(loc.serviceSlug);
  const areaData = getArea(loc.citySlug);
  const siblingCombos = serviceLocations.filter(
    (l) => l.citySlug === loc.citySlug && l.serviceSlug !== loc.serviceSlug
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
          { name: loc.cityName, url: `${siteConfig.url}/service-areas/${loc.citySlug}` },
          { name: loc.serviceName, url: `${siteConfig.url}/service-areas/${loc.citySlug}/${loc.serviceSlug}` },
        ])}
      />
      {serviceData && <JsonLd data={serviceJsonLd(serviceData)} />}
      <JsonLd data={faqJsonLd(loc.faqs)} />

      <article className="bg-white">
        {/* Hero header */}
        <header className="relative overflow-hidden bg-[#3e000c] pt-36 sm:pt-40 pb-16 sm:pb-20 text-white">
          <div className="absolute inset-0 bg-linear-to-br from-[#3e000c] via-[#3e000c]/85 to-[#3e000c]/60" aria-hidden="true" />

          <div className="relative z-10 container mx-auto px-4 max-w-7xl">
            <Link
              href={`/service-areas/${loc.citySlug}`}
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {loc.cityName}
            </Link>

            <div className="flex flex-wrap items-center gap-3 border-l border-lime-300 pl-3 text-xs font-mono uppercase tracking-[0.16em] text-lime-300 mb-5">
              <span className="text-white flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {loc.cityName}
              </span>
              <span>·</span>
              <span>{loc.serviceName}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-wrap-balance max-w-7xl mb-6">
              {loc.title}
            </h1>
            <p className="text-white/70 text-lg sm:text-lg leading-relaxed max-w-5xl mb-8">
              {loc.intro}
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

        {/* Content */}
        <div className="container mx-auto px-4 max-w-7xl py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-8 space-y-12">

              {/* Scenario */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  What a typical call looks like in {loc.cityName}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {loc.scenario}
                </p>
                {loc.landmarks.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key areas we cover:</p>
                    <ul className="space-y-1.5">
                      {loc.landmarks.map((landmark) => (
                        <li key={landmark} className="flex items-center gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Optional content sections */}
              {loc.sections?.map((section, i) => (
                <section key={i}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                    {section.heading}
                  </h2>
                  {section.body.map((para, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed text-base sm:text-lg mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 space-y-1.5">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* FAQs */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-6">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {loc.faqs.map((faq, i) => (
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

                {/* Phone CTA */}
                <div className="rounded-2xl bg-[#3e000c] text-white p-6 sm:p-7">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">
                    {loc.cityName} Dispatch
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Need {loc.serviceName.toLowerCase()} in {loc.cityName}? We&apos;re available 24/7.
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

                {/* Related links */}
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-gray-400 mb-3">
                    More info
                  </p>
                  {areaData && (
                    <Link
                      href={`/service-areas/${loc.citySlug}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                      All services in {loc.cityName}
                    </Link>
                  )}
                  {serviceData && (
                    <Link
                      href={`/services/${loc.serviceSlug}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                      {loc.serviceName} — all areas
                    </Link>
                  )}
                  {siblingCombos.length > 0 && (
                    <>
                      <p className="text-xs font-mono uppercase tracking-[0.16em] text-gray-400 pt-2 border-t border-gray-200">
                        Other services in {loc.cityName}
                      </p>
                      {siblingCombos.map((sibling) => (
                        <Link
                          key={sibling.serviceSlug}
                          href={`/service-areas/${loc.citySlug}/${sibling.serviceSlug}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                          {sibling.serviceName}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Testimonials />
      <CTACarousel />
    </>
  );
}
