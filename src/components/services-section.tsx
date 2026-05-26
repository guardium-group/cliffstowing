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

const allServices = [
  {
    icon: Truck,
    title: "Light & medium duty towing",
    shortDescription: "Fast towing for cars, SUVs, and light trucks.",
    href: "/services/light-duty-towing",
    badge: "Most popular",
  },
  {
    icon: HardHat,
    title: "Heavy duty towing",
    shortDescription: "Semi trucks, buses, and commercial vehicles.",
    href: "/services/heavy-duty-towing",
  },
  {
    icon: ArrowUpDown,
    title: "Flatbed towing",
    shortDescription: "Safest option for low-clearance or damaged vehicles.",
    href: "/services/flatbed-towing",
  },
  {
    icon: ShieldCheck,
    title: "Accident towing & recovery",
    shortDescription: "Post-accident towing and recovery services.",
    href: "/services/accident-recovery",
    badge: "24/7",
  },
  {
    icon: Wrench,
    title: "Roadside assistance",
    shortDescription: "Lockouts, tire changes, and more.",
    href: "/services/roadside-assistance",
  },
  {
    icon: Zap,
    title: "Jump start / battery boost",
    shortDescription: "Dead battery? We'll get you going.",
    href: "/services/roadside-assistance",
  },
  {
    icon: Fuel,
    title: "Fuel delivery",
    shortDescription: "Emergency fuel delivery to your location.",
    href: "/services/roadside-assistance",
  },
  {
    icon: Car,
    title: "Winching & recovery",
    shortDescription: "Stuck in snow, mud, or a ditch? We'll recover you.",
    href: "/services/winching-recovery",
  },
  {
    icon: Truck,
    title: "Equipment transport",
    shortDescription: "Forklifts, equipment, and specialty transport.",
    href: "/services/equipment-transport",
  },
];

interface ServicesSectionProps {
  limit?: number;
}

export function ServicesSection({ limit }: ServicesSectionProps) {
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Section header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
              What we do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4 text-wrap-balance">
              Every situation, covered.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-[50ch]">
              From a dead battery on a side street to a jackknifed semi on the highway, Cliff&apos;s Towing has the equipment and experience to handle it.
            </p>
            {limit && (
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group"
              >
                View all services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Right: Service cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100 transition-all duration-300"
                >
                  {service.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-primary font-semibold">
                      {service.badge}
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <service.icon className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-primary mt-auto transition-all duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
