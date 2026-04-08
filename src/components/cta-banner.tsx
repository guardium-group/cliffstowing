import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Stranded? We&apos;ll Be There Fast.
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Available 24 hours a day, 7 days a week — including holidays.
          One call gets help on the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-lg text-base sm:text-lg px-8"
          >
            <a href="tel:+17805550100">
              <Phone className="mr-2 h-5 w-5" />
              +1 (780) 555-0100
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/50 text-white bg-white/10 hover:bg-white hover:text-primary rounded-full backdrop-blur-sm text-base sm:text-lg px-8"
          >
            <Link href="/contact">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
