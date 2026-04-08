import type { Metadata } from "next";
import { BreadcrumbHero } from "@/components/breadcrumb-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Cliff's Towing",
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
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 mb-8">Last updated: {new Date().getFullYear()}</p>

            <h2>Information We Collect</h2>
            <p>
              When you use our contact form, we collect your name, email address, phone number, and the message you provide. This information is used solely to respond to your inquiry.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your towing or roadside assistance request. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:info@cliffstowing.ca" className="text-primary">
                info@cliffstowing.ca
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
