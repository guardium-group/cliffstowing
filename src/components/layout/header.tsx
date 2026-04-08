"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  X,
  Megaphone,
  ArrowRight,
  Phone,
  Tag,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { feedItems, type FeedItemType } from "@/lib/feed-items";
import { motion, AnimatePresence } from "framer-motion";

const FEED_ROTATE_INTERVAL_MS = 5000;

function getFeedIcon(type: FeedItemType) {
  switch (type) {
    case "announcement":
      return Megaphone;
    case "blog":
      return Newspaper;
    case "deal":
      return Tag;
    default:
      return Megaphone;
  }
}

function AnnouncementFeed() {
  const [index, setIndex] = useState(0);
  const item = feedItems[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % feedItems.length);
    }, FEED_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const Icon = getFeedIcon(item.type);
  const isExternal = item.href.startsWith("tel:") || item.href.startsWith("http");
  const ctaLabel =
    item.type === "announcement"
      ? "Learn more"
      : item.type === "blog"
        ? "Read more"
        : "Call now";

  const linkClass =
    "hidden sm:inline-flex items-center gap-1 font-medium text-gray-300 hover:text-white transition-colors";

  return (
    <div className="flex min-w-0 items-center lg:gap-2 gap-2">
      <Icon className="h-3.5 w-3.5 text-gray-300 shrink-0" />
      <AnimatePresence mode="wait">
        <motion.span
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="truncate tracking-tighter text-[12px] sm:text-sm font-medium text-white"
        >
          {item.label}
        </motion.span>
      </AnimatePresence>
      {isExternal ? (
        <a href={item.href} className={linkClass}>
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <Link href={item.href} className={linkClass}>
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

const services = [
  { name: "Light & Medium Duty Towing", href: "/services#light-duty" },
  { name: "Heavy Duty Towing", href: "/services#heavy-duty" },
  { name: "Flatbed Towing", href: "/services#flatbed" },
  { name: "Accident Towing & Recovery", href: "/services#accident" },
  { name: "Roadside Assistance", href: "/services#roadside" },
  { name: "Fuel Delivery & Jump Start", href: "/services#roadside" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed announcement bar */}
      <div className="fixed top-0 inset-x-0 z-60 bg-linear-to-r from-red-700 to-red-800 backdrop-blur-2xl shadow-xs border-b border-red-600 px-2">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between gap-3 font-mono text-xs">
          <AnnouncementFeed />
          <a
            href="tel:+17805550100"
            className="hidden sm:flex items-center gap-1.5 text-white font-semibold text-xs shrink-0 hover:text-red-200 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            +1 (780) 555-0100
          </a>
        </div>
      </div>

      <motion.header
        className="fixed top-8 inset-x-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <motion.div
            className={cn(
              "flex items-center justify-between border bg-white/95 backdrop-blur-xl rounded-full py-1.5 px-4 transition-all duration-300",
              scrolled ? "border-gray-200 shadow-lg" : "border-gray-100 shadow-sm"
            )}
          >
            {/* Logo / Brand */}
            <Link href="/" className="z-50 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <span className="font-bold text-gray-900 text-sm sm:text-base">
                Cliff&apos;s Towing
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block bg-none">
              <Menu setActive={setActive}>
                <Link href="/" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  Home
                </Link>

                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="flex flex-col space-y-4 text-gray-900 font-mono text-sm">
                    <HoveredLink href="/services">
                      <div className="flex flex-col pb-3 border-b border-gray-200">
                        <span className="font-bold text-primary">View All Services</span>
                        <span className="text-xs text-gray-500">Full list of towing services</span>
                      </div>
                    </HoveredLink>
                    {services.map((service) => (
                      <HoveredLink key={service.href} href={service.href}>
                        <span className="font-medium text-gray-800 hover:text-primary">{service.name}</span>
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>

                <Link href="/about" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  About
                </Link>

                <Link href="/contact" className="text-gray-900 hover:text-primary font-medium transition-colors">
                  Contact
                </Link>
              </Menu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+17805550100" className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" />
                +1 (780) 555-0100
              </a>
              <Button asChild size="sm" className="rounded-full">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                <Link
                  href="/"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Services</p>
                  <Link
                    href="/services"
                    className="block py-2 pl-4 text-primary font-semibold hover:text-primary/80 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block py-2 text-gray-800 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a href="tel:+17805550100" className="flex items-center gap-2 text-primary font-semibold">
                    <Phone className="h-5 w-5" />
                    +1 (780) 555-0100
                  </a>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
