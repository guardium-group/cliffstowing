import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

/** Phone-only call bar. globals.css lifts the cookie banner above it via data-sticky-call-bar. */
export function StickyCallBar() {
  return (
    <div
      data-sticky-call-bar
      className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
    >
      <a
        href={siteConfig.phone.href}
        className="flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground font-semibold py-3 text-base shadow-lg shadow-primary/25"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call dispatch 24/7 · {siteConfig.phone.compact}
      </a>
    </div>
  );
}
