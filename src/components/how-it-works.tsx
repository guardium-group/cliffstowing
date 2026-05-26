"use client";

import { Phone, Navigation, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call dispatch",
    description: `Reach us any time at ${siteConfig.phone.display}. A dispatcher confirms your location, vehicle, and the service you need.`,
  },
  {
    number: "02",
    icon: Navigation,
    title: "We send the right truck",
    description:
      "The nearest suitable unit is dispatched. We confirm an ETA and keep the job focused on the safest tow, recovery, or roadside solution.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Problem solved, you're moving",
    description:
      "The operator assesses the situation and gets to work, whether it is a boost, a flatbed load, or a full accident recovery.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-[#3e000c] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-wrap-balance">
              From your call to back on the road in three steps.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:flex lg:items-end">
            <p className="text-white/40 leading-relaxed max-w-[55ch]">
              We keep the process direct. When you need a tow, recovery, or
              roadside help, dispatch gathers the details and sends the right
              equipment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#3e000c] p-8 lg:p-10 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-bold text-white/50 leading-none tracking-tighter select-none">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-white/25 text-xs font-mono">
          Available 24 hours a day, 365 days a year, including every holiday.
        </p>
      </div>
    </section>
  );
}
