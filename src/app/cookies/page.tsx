import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for the Cliff's Towing website, including essential cookies, analytics, maps, and embedded services.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy | Cliff's Towing",
    description:
      "How Cliff's Towing uses cookies and embedded services on the website.",
    url: `${siteConfig.url}/cookies`,
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbHero
        title="Cookie Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-gray-500">Last updated: May 11, 2026</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                How Cookies Are Used
              </h2>
              <p>
                This website may use essential cookies or similar browser
                storage to keep forms secure, reduce spam, improve reliability,
                and remember basic preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Embedded Services
              </h2>
              <p>
                Pages may include third-party services such as Google Maps.
                Those services may set their own cookies or collect technical
                information according to their own policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Managing Cookies
              </h2>
              <p>
                You can block or delete cookies through your browser settings.
                Some embedded features may not work as expected if cookies are
                disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact
              </h2>
              <p>
                Questions about this cookie policy can be sent to{" "}
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
