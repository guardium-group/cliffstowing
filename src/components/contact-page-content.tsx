"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call dispatch",
    description: "Immediate towing assistance, 24/7",
    action: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  {
    icon: Mail,
    title: "Email dispatch",
    description: "For service requests and follow-up",
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Head office",
    description: "Edmonton, Alberta",
    action: "Get directions",
    href: siteConfig.address.mapUrl,
  },
  {
    icon: Clock,
    title: "Hours",
    description: "Emergency dispatch never closes",
    action: "24/7 - 365 days",
    href: null,
  },
];

export function ContactPageContent() {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
              <ContactForm className="order-2 lg:order-1" />

              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm h-64 sm:h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.display)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cliff's Towing head office in Edmonton, AB"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center"
                >
                  <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{card.description}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-block px-4 py-2 border border-primary text-primary rounded-lg text-xs font-medium hover:bg-red-50 transition-colors break-words"
                    >
                      {card.action}
                    </a>
                  ) : (
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                      {card.action}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
