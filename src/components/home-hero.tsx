"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface HeroSlide {
  image: string;
  title: string;
  highlight: string;
  description: string;
}

interface HomeHeroProps {
  slides: HeroSlide[];
  intervalMs?: number;
}

const trustBadges = [
  { icon: Clock, label: "24/7 Available" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "40+ Years Experience" },
];

export function HomeHero({ slides, intervalMs = 5500 }: HomeHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;
  const current = slides[activeIndex];

  return (
    <section className="relative min-h-[100svh] sm:min-h-[650px] md:min-h-[700px] xl:h-[775px] overflow-hidden text-white">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-black/65 to-gray-900/70" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full min-h-[100svh] sm:min-h-[650px] md:min-h-[700px] flex items-center">
        <div className="flex h-full w-full items-center pb-16 sm:pb-20 pt-24 sm:pt-28">
          <div className="max-w-4xl border-l-2 sm:border-l pl-4 sm:pl-8 border-white/50 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="text-sm sm:text-base font-mono text-red-400 uppercase tracking-widest mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.5 }}
                >
                  Edmonton&apos;s Trusted Towing Service
                </motion.p>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold mb-2 sm:mb-4 leading-tight tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {current.title}{" "}
                  <span className="text-primary">{current.highlight}</span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {current.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-semibold w-full sm:w-auto rounded-full text-sm sm:text-base shadow-lg shadow-red-900/30"
                  >
                    <a href="tel:+17805550100">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now — +1 (780) 555-0100
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/40 bg-white/15 text-white hover:bg-white hover:text-gray-900 rounded-full backdrop-blur-sm text-sm sm:text-base"
                    asChild
                  >
                    <Link href="/contact">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  className="flex flex-wrap gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {trustBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90"
                    >
                      <badge.icon className="h-4 w-4 text-primary" />
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 sm:w-10 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-5 h-7 rounded-full border border-white/80 flex items-start justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-white/80" />
        </motion.div>
        <span className="text-xs text-white/70 font-medium tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
