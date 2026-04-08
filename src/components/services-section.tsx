import Link from "next/link";
import {
  Truck,
  HardHat,
  ArrowUpDown,
  ShieldCheck,
  Wrench,
  Zap,
  Fuel,
  Car,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allServices = [
  {
    icon: Truck,
    title: "Light & Medium Duty Towing",
    shortDescription: "Fast towing for cars, SUVs, and light trucks.",
    description:
      "We tow all makes and models of passenger vehicles, SUVs, minivans, and light trucks. Our operators arrive quickly and handle your vehicle with care.",
    href: "/services#light-duty",
    badge: "Most Popular",
  },
  {
    icon: HardHat,
    title: "Heavy Duty Towing",
    shortDescription: "Semi trucks, buses, and commercial vehicles.",
    description:
      "Equipped for large commercial vehicles including semi-trucks, buses, RVs, and heavy equipment. We have the horsepower to get the job done.",
    href: "/services#heavy-duty",
  },
  {
    icon: ArrowUpDown,
    title: "Flatbed Towing",
    shortDescription: "Safest option for low-clearance or damaged vehicles.",
    description:
      "Our flatbed trucks keep all four wheels off the ground — ideal for low-clearance vehicles, all-wheel drive, classic cars, and damaged vehicles.",
    href: "/services#flatbed",
  },
  {
    icon: ShieldCheck,
    title: "Accident Towing & Recovery",
    shortDescription: "Post-accident towing and recovery services.",
    description:
      "We work with all major insurance companies and can tow your vehicle safely after an accident. Available 24/7 for emergency response.",
    href: "/services#accident",
    badge: "24/7",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    shortDescription: "Lockouts, tire changes, and more.",
    description:
      "Locked your keys in the car? Flat tire? We provide fast roadside assistance including lockout service, tire changes, and minor repairs.",
    href: "/services#roadside",
  },
  {
    icon: Zap,
    title: "Jump Start / Battery Boost",
    shortDescription: "Dead battery? We'll get you going.",
    description:
      "Our technicians carry commercial-grade battery boosters to get your vehicle started quickly — no waiting for a tow if a boost will do.",
    href: "/services#roadside",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    shortDescription: "Emergency fuel delivery to your location.",
    description:
      "Ran out of gas? We'll bring fuel to you wherever you are in the Edmonton area — get back on the road without a tow.",
    href: "/services#roadside",
  },
  {
    icon: Car,
    title: "Winching & Recovery",
    shortDescription: "Stuck in snow, mud, or a ditch? We'll recover you.",
    description:
      "Stuck off-road or in a ditch? Our winching and vehicle recovery service can extract vehicles from difficult situations safely.",
    href: "/services#recovery",
  },
];

interface ServicesSectionProps {
  limit?: number;
}

export function ServicesSection({ limit }: ServicesSectionProps) {
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, <span className="text-primary">When You Need It</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From light-duty towing to heavy commercial recovery, Cliff&apos;s Towing has the equipment and expertise to handle any situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                    {service.badge && (
                      <Badge variant="default" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
