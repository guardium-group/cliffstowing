import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for using the Cliff's Towing website and contacting dispatch for towing, recovery, transport, or roadside assistance.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Cliff's Towing",
    description:
      "Website and service-request terms for Cliff's Towing in Edmonton.",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbHero
        title="Terms of Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-gray-500">Last updated: May 11, 2026</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Website Use
              </h2>
              <p>
                This website provides general information about Cliff&apos;s
                Towing services and ways to contact dispatch. Content may be
                updated without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Service Requests
              </h2>
              <p>
                Submitting a form does not guarantee immediate service. For
                urgent towing, recovery, or roadside assistance, call dispatch
                directly at{" "}
                <a href={siteConfig.phone.href} className="text-primary">
                  {siteConfig.phone.display}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Pricing and Scope
              </h2>
              <p>
                Quotes and estimates depend on vehicle type, location,
                distance, equipment required, and job conditions. Pricing may
                change if the job scope or site conditions differ from the
                information first provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
