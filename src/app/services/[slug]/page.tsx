import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { services, getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/structured-data";
import { ServiceAreas } from "@/components/service-areas";
import { Testimonials } from "@/components/testimonials";
import { CTACarousel } from "@/components/cta-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found", robots: { index: false, follow: false } };
  }

  const canonical = `/services/${service.slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | Cliff's Towing`,
      description: service.metaDescription,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Cliff's Towing`,
      description: service.metaDescription,
      images: [`${siteConfig.url}${service.heroImage}`],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <article className="bg-white">
        {/* Hero header */}
        <header className="relative overflow-hidden bg-[#3e000c] pt-36 sm:pt-40 pb-16 sm:pb-20 text-white">
          <div className="absolute inset-0 opacity-35" aria-hidden="true">
            <Image
              src={service.heroImage}
              alt={service.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#3e000c] via-[#3e000c]/70 to-[#3e000c]/30" />
          </div>

          <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>

            <div className="flex flex-wrap items-center gap-3 border-l border-lime-300 pl-3 text-xs font-mono uppercase tracking-[0.16em] text-lime-300 mb-5">
              <span className="text-white">{service.name}</span>
              <span>·</span>
              <span>Edmonton &amp; area</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-wrap-balance max-w-4xl mb-6">
              {service.title}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mb-8">
              {service.intro}
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
        <div className="container mx-auto px-5 sm:px-6 max-w-7xl py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {service.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4 text-wrap-balance">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg max-w-[68ch]">
                      {section.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    {section.list && (
                      <ul className="mt-6 space-y-2.5 max-w-2xl">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                            </span>
                            <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</span>
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
                    {service.faqs.map((faq, i) => (
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
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-4">

                {/* Phone CTA */}
                <div className="rounded-2xl bg-[#3e000c] text-white p-6 sm:p-7">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">
                    24/7 Dispatch
                  </p>
                  <p className="text-white/70 leading-relaxed mb-5 text-sm">
                    Need this service now? Our dispatch team picks up every call — day or night.
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

                {/* Related services */}
                {relatedServices.length > 0 && (
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                    <p className="text-xs font-mono uppercase tracking-[0.16em] text-gray-400 mb-4">
                      Related services
                    </p>
                    <ul className="space-y-3">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group"
                          >
                            <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </article>

      <ServiceAreas />
      <Testimonials />
      <CTACarousel />
    </>
  );
}
