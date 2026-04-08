import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { name: "Light & Medium Duty Towing", href: "/services#light-duty" },
  { name: "Heavy Duty Towing", href: "/services#heavy-duty" },
  { name: "Flatbed Towing", href: "/services#flatbed" },
  { name: "Accident Towing & Recovery", href: "/services#accident" },
  { name: "Roadside Assistance", href: "/services#roadside" },
  { name: "Fuel Delivery & Jump Start", href: "/services#roadside" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-red-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-red-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-10 sm:pt-12 md:pt-16 pb-8 sm:pb-10 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-center lg:text-left">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">CT</span>
                </div>
                <span className="text-white font-bold text-xl">Cliff&apos;s Towing</span>
              </Link>

              <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                Edmonton&apos;s trusted towing and roadside assistance service. Available 24 hours a day,
                7 days a week — whenever you need us most.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* Services */}
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm">
                    Our Services
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {serviceLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm">
                    Company
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm">
                    Legal
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="tel:+17805550100"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (780) 555-0100</span>
              </a>
              <a
                href="mailto:info@cliffstowing.ca"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@cliffstowing.ca</span>
              </a>
              <span className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Edmonton, AB</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-white/40 text-center sm:text-left">
              <p>
                &copy; {new Date().getFullYear()} Cliff&apos;s Towing. All rights reserved.
              </p>
              <p>
                Built by{" "}
                <a
                  href="https://guardiumtech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Guardium Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
