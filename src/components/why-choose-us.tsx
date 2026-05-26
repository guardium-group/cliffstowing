"use client";

import { Clock, ShieldCheck, Star, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: "70+", label: "Years serving Edmonton" },
  { value: "~30", label: "Min avg. response time" },
  { value: "24/7", label: "Always available" },
  { value: "AB", label: "Locally operated" },
];

const features = [
  {
    icon: Clock,
    title: "We never close",
    description:
      "Whether it's 3am on a Sunday or a holiday, our team is on standby. When you call, someone picks up.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    description:
      "Fully licensed operators with comprehensive coverage protect your vehicle from the moment we arrive.",
  },
  {
    icon: Star,
    title: "Seven decades of experience",
    description:
      `Cliff's has been ${siteConfig.foundedCopy}. Our drivers know local roads, weather, and recovery conditions.`,
  },
  {
    icon: Headphones,
    title: "Fast dispatch",
    description:
      "We aim to be on-scene within 30 minutes in the Edmonton area. Every minute stranded matters.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#3e000c] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Top: headline + stats row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 sm:mb-20">

          {/* Left: heading */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
              Why Cliff&apos;s Towing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-wrap-balance">
              Edmonton&apos;s most trusted towing company.
            </h2>
          </div>

          {/* Right: description */}
          <div className="lg:col-span-7 lg:flex lg:items-end">
            <p className="text-white/50 leading-relaxed text-base lg:text-lg max-w-[60ch]">
              When you call Cliff&apos;s Towing, you&apos;re calling on decades of experience, reliable equipment, and operators who genuinely care about getting you back on the road safely.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16 sm:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#3e000c] px-8 py-8 flex flex-col gap-1"
            >
              <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm text-white/40 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Features: 2 by 2 grid with pure spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i + 4}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#3e000c] p-8 lg:p-10 flex flex-col gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <feature.icon className="h-4.5 w-4.5 text-primary" style={{ width: "1.125rem", height: "1.125rem" }} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 text-base">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
