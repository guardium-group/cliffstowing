import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#3e000c] border-t border-white/[0.06]">

      {/* Red accent slash on the right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-primary/90 [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]" />
        {/* Subtle inner texture on accent */}
        <div className="absolute inset-0 opacity-10 [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
        {/* Large phone number watermark */}
        <div className="absolute inset-0 flex items-center justify-center [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]">
          <span className="text-white/10 font-bold text-[clamp(1rem,5vw,3rem)] tracking-tighter select-none whitespace-nowrap rotate-[-8deg]">
            {siteConfig.phone.compact}
          </span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl py-20 sm:py-28">
        <div className="max-w-[52ch]">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
            24/7 emergency service
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-wrap-balance">
            Stranded? We&apos;ll be there fast.
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-[45ch]">
            One call gets help on the way - any time, any day, including holidays.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-[0_4px_20px_-4px_rgba(232,30,37,0.5)] active:scale-[0.98] transition-all duration-200 text-base px-8"
            >
              <a href={siteConfig.phone.href}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phone.display}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-full active:scale-[0.98] transition-all duration-200 text-base px-8 group"
            >
              <Link href="/contact">
                Get a quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
