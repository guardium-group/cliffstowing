import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/ui/social-icons";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/cliffstowing", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/cliffstowing", icon: InstagramIcon },
  { name: "Twitter", href: "https://x.com/cliffstowing", icon: TwitterIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cliffstowing", icon: LinkedinIcon },
];

const serviceLinks = [
  { name: "Light & medium duty towing", href: "/services/light-duty-towing" },
  { name: "Heavy duty towing", href: "/services/heavy-duty-towing" },
  { name: "Flatbed towing", href: "/services/flatbed-towing" },
  { name: "Accident towing & recovery", href: "/services/accident-recovery" },
  { name: "Roadside assistance", href: "/services/roadside-assistance" },
  { name: "Winching & recovery", href: "/services/winching-recovery" },
  { name: "Equipment transport", href: "/services/equipment-transport" },
];

const serviceAreaLinks = [
  { name: "Edmonton", href: "/service-areas/edmonton" },
  { name: "Sherwood Park", href: "/service-areas/sherwood-park" },
  { name: "St. Albert", href: "/service-areas/st-albert" },
  { name: "Spruce Grove", href: "/service-areas/spruce-grove" },
  { name: "Leduc", href: "/service-areas/leduc" },
  { name: "Beaumont", href: "/service-areas/beaumont" },
  { name: "Devon", href: "/service-areas/devon" },
  { name: "Morinville", href: "/service-areas/morinville" },
  { name: "Fort Saskatchewan", href: "/service-areas/fort-saskatchewan" },
  { name: "Stony Plain", href: "/service-areas/stony-plain" },
  { name: "Nisku", href: "/service-areas/nisku" },
  { name: "Acheson", href: "/service-areas/acheson" },
];

const companyLinks = [
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Articles", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Terms of service", href: "/terms" },
  { name: "Cookie policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[#3e000c] relative overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 max-w-7xl">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-16 pb-12 border-b border-white/[0.08]">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/cliffs_logo.png"
                alt="Cliff's Towing"
                width={150}
                height={42}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-white/45 text-sm leading-relaxed max-w-[220px]">
              Edmonton&apos;s trusted towing and recovery team — on call every
              hour of every day.
            </p>

            <div className="flex items-center gap-2 mt-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#3e000c] transition-all duration-200"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/35 font-mono text-[10px] uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm leading-snug transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white/35 font-mono text-[10px] uppercase tracking-[0.2em] mb-5">
              Service Areas
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {serviceAreaLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm leading-snug transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal stacked */}
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-white/35 font-mono text-[10px] uppercase tracking-[0.2em] mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/35 font-mono text-[10px] uppercase tracking-[0.2em] mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Cliff&apos;s Towing. All rights reserved.</p>
          <p>
            A{" "}
            <Link
              href="https://guardiumgroup.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Guardium Group
            </Link>{" "}
            company &middot; Built by{" "}
            <Link
              href="https://guardiumgroup.com/companies/technologies"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Guardium Technologies
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
