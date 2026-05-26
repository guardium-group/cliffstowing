"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

interface ServiceSpotlight {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  stat?: { value: string; label: string };
  urgentBadge?: string;
}

const spotlights: ServiceSpotlight[] = [
  {
    id: "light-duty",
    eyebrow: "Light & medium duty towing",
    title: "Your car, handled with care in any situation.",
    description:
      "Whether you've broken down on the Whitemud at midnight or locked your keys inside at a grocery store in Sherwood Park, Cliff's Towing dispatches fast. Our operators handle every make and model, from compact sedans to full-size pickups.",
    image: "/images/hero/decktruckoldcar1024x693.jpg",
    imageAlt: "Light duty tow truck securing a passenger vehicle",
    benefits: [
      "Average 30-minute response across Edmonton",
      "All makes and models, including AWD and EVs",
      "Flatbed available on request for low-clearance vehicles",
      "Works directly with all major insurance providers",
    ],
    stat: { value: "30 min", label: "Average response time" },
  },
  {
    id: "heavy-duty",
    eyebrow: "Heavy duty towing",
    title: "The horsepower to move what others can't.",
    description:
      "Semi-trucks, buses, RVs, and heavy construction equipment need the right gear. Cliff's heavy duty fleet handles commercial vehicles across the greater Edmonton region.",
    image: "/images/hero/HeavyTowing1024x680.jpg",
    imageAlt: "Heavy duty tow truck recovering a semi-truck",
    benefits: [
      "Full heavy-duty rotator and underlift equipment",
      "Highway and commercial route certified operators",
      "Coordination with fleet managers and dispatch",
      "Available 24/7 for commercial emergencies",
    ],
    stat: { value: "70+", label: "Years of towing and recovery experience" },
    urgentBadge: "Commercial service",
  },
  {
    id: "flatbed",
    eyebrow: "Flatbed towing",
    title: "All four wheels off the ground. Zero damage risk.",
    description:
      "Flatbed towing is the gold standard for vehicles that can't be towed on two wheels, including all-wheel drives, lowered cars, classic vehicles, and anything with severe undercarriage damage.",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    imageAlt: "Flatbed tow truck with vehicle loaded",
    benefits: [
      "Zero drivetrain stress with safer transport",
      "Required for AWD, 4WD, and most EVs",
      "Best option for vehicles with engine or steering damage",
      "Covered, secured loading with reduced road-debris risk",
    ],
    stat: { value: "Flatbed", label: "Drivetrain-safe transport" },
  },
  {
    id: "accident",
    eyebrow: "Accident towing & recovery",
    title: "Focus on yourself. We handle the rest.",
    description:
      "Accidents are stressful. Cliff's can help with documentation, insurance coordination, and delivery to the body shop or storage location you choose.",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Tow truck at an accident scene recovering a vehicle",
    benefits: [
      "Direct coordination with all major insurers (Intact, TD, Wawanesa and more)",
      "On-scene documentation assistance",
      "Vehicle delivered to your preferred body shop",
      "24/7 emergency response, including highway calls",
    ],
    urgentBadge: "24/7 emergency",
    stat: { value: "24/7", label: "Emergency response" },
  },
  {
    id: "roadside",
    eyebrow: "Roadside assistance",
    title: "Stranded doesn't have to mean waiting hours.",
    description:
      "Locked your keys inside. Flat tire on a dark road. Dead battery in extreme cold. These situations happen every day in Edmonton, and Cliff's is ready for them.",
    image: "/images/hero/recoverysnow1024x681.jpg",
    imageAlt: "Technician providing roadside assistance in winter conditions",
    benefits: [
      "Lockout service for many vehicle types",
      "Battery boost with commercial-grade boosters",
      "Tire change on any surface, any weather",
      "Emergency fuel delivery (gas & diesel) anywhere in Edmonton",
    ],
    stat: { value: "4", label: "Services in one call" },
  },
  {
    id: "recovery",
    eyebrow: "Winching & off-road recovery",
    title: "Stuck in a ditch, field, or snowbank? We'll get you out.",
    description:
      "Edmonton winters put vehicles in places they shouldn't be. Whether you've slid off an icy rural road, got a truck stuck in a field, or need a vehicle pulled from a steep embankment, Cliff's recovery operators know how to extract vehicles safely without causing additional damage.",
    image: "/images/hero/HeavyTowing1024x680.jpg",
    imageAlt: "Winching recovery operation pulling vehicle from ditch",
    benefits: [
      "High-capacity winching for cars, trucks, and commercial vehicles",
      "Rural and off-road recovery across the Edmonton region",
      "Safe extraction that protects your frame and undercarriage",
      "Operators trained in complex multi-point recovery scenarios",
    ],
    stat: { value: "Any", label: "Terrain, any weather" },
  },
  {
    id: "transport",
    eyebrow: "Equipment transport",
    title: "Heavy transport for equipment that has to arrive safely.",
    description:
      "Cliff's transports equipment and specialty vehicles across Edmonton and Alberta, including forklifts, earthmoving equipment, and other loads that need the right truck and careful handling.",
    image: "/images/hero/decktruckequipment31024x695.jpg",
    imageAlt: "Deck truck transporting heavy equipment",
    benefits: [
      "Specialty transport for equipment and commercial assets",
      "Support for loads up to 100,000 pounds when scoped correctly",
      "Dispatch coordination for job sites and fleet managers",
      "Secure loading for local and regional transport",
    ],
    stat: { value: "100k", label: "Pounds transport capacity" },
    urgentBadge: "Transport",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

interface ServiceSpotlightsProps {
  limit?: number;
}

export function ServiceSpotlights({ limit }: ServiceSpotlightsProps) {
  const items = limit ? spotlights.slice(0, limit) : spotlights;
  return (
    <div className="bg-white">
      {items.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className="relative py-20 sm:py-28 scroll-mt-24"
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                }`}
              >
                {/* Image column */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="lg:col-span-5"
                >
                  {/* Double-bezel container */}
                  <div className="rounded-[2rem] bg-gray-100 p-1.5 ring-1 ring-black/5">
                    <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/3] bg-gray-200">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      {/* Subtle gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3e000c]/20 to-transparent" />

                      {/* Stat badge on image */}
                      {service.stat && (
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                          <p className="text-2xl font-bold text-gray-900 leading-none">{service.stat.value}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{service.stat.label}</p>
                        </div>
                      )}

                      {/* Urgent badge */}
                      {service.urgentBadge && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {service.urgentBadge}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Content column */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="lg:col-span-7 flex flex-col gap-6"
                >
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
                    {service.eyebrow}
                  </p>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-wrap-balance">
                    {service.title}
                  </h2>


                  {/* Benefits */}
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full active:scale-[0.98] transition-transform duration-150"
                    >
                      <a href={siteConfig.phone.href}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call now - {siteConfig.phone.display}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full group active:scale-[0.98] transition-transform duration-150"
                    >
                      <Link href="/contact">
                        Get a free quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {limit && (
        <div className="bg-white border-gray-100 py-6 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-md font-semibold text-primary group"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
