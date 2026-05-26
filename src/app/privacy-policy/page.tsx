import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Cliff's Towing contact forms, dispatch requests, and website communications.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Cliff's Towing",
    description:
      "How Cliff's Towing handles information submitted through the website and dispatch contact forms.",
    url: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-gray-500">Last updated: May 11, 2026</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Information We Collect
              </h2>
              <p>
                When you use our contact form, call dispatch, or email us, we
                may collect your name, email address, phone number, vehicle
                details, service details, location details, and the message you
                provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                How We Use Information
              </h2>
              <p>
                We use submitted information to respond to towing, transport,
                recovery, roadside assistance, and quote requests. We may also
                use it to prevent spam, protect the website, and maintain
                service records.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Sharing
              </h2>
              <p>
                We do not sell personal information. We may share information
                with service providers who help operate the website or deliver
                customer support, or when required for legal, safety, insurance,
                or dispatch-related reasons.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy, contact{" "}
                {siteConfig.name} at{" "}
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
