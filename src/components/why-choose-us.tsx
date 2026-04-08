"use client";

import { Clock, ShieldCheck, Star, Headphones } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We never close. Whether it's 3am on a Sunday or a holiday, our team is on standby ready to help.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed operators and comprehensive insurance coverage for your complete peace of mind.",
  },
  {
    icon: Star,
    title: "40+ Years Experience",
    description:
      "Serving Edmonton and surrounding areas for decades. Our expertise means your vehicle is in trusted hands.",
  },
  {
    icon: Headphones,
    title: "Fast Response Time",
    description:
      "We aim to be on-scene within 30 minutes in the Edmonton area. When you're stranded, every minute counts.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Why Cliff&apos;s Towing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Edmonton&apos;s Most Trusted <span className="text-primary">Towing Company</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            When you call Cliff&apos;s Towing, you&apos;re calling on decades of experience, reliable equipment, and operators who genuinely care.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
