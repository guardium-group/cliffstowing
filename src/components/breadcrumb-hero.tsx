"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export function BreadcrumbHero({ title, breadcrumbs }: BreadcrumbHeroProps) {
  return (
    <section className="relative h-[200px] sm:h-[240px] md:h-[300px] lg:h-[320px] overflow-hidden mt-0 bg-[#3e000c]">
      {/* Subtle red ambient glow, top right only */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/25 rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3" />
      </div>
      {/* Bottom edge fade */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.06]" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-10 md:px-16 lg:px-20 pb-10">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2 sm:mb-3"
        >
          <ol className="flex items-center gap-2 text-xs max-w-fit">
            {breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="w-3.5 h-3.5 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors uppercase tracking-widest font-light"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white uppercase tracking-widest font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-normal"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
