import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";

export const faqs = [
  {
    q: "How quickly can you get to me in Edmonton?",
    a: "Our average response time within Edmonton city limits is under 30 minutes. Surrounding areas like Sherwood Park, St. Albert, and Spruce Grove are typically 30-45 minutes depending on traffic and our nearest available unit. We'll give you an honest ETA when you call.",
  },
  {
    q: "Do you tow AWD and 4WD vehicles?",
    a: "Yes. AWD and 4WD vehicles should be transported on a flatbed or with all four wheels off the ground using a wheel-lift system. Towing on two wheels can cause serious drivetrain damage.",
  },
  {
    q: "Can you tow my vehicle to any body shop or dealership?",
    a: "Absolutely. We'll deliver your vehicle to any shop, dealership, or storage location you choose in the Edmonton region. Your vehicle goes where you want it.",
  },
  {
    q: "Do you work with insurance companies directly?",
    a: "Yes. We can coordinate with your adjuster and provide required towing or recovery documentation to help move your claim forward.",
  },
  {
    q: "What happens if I need a tow on a highway or major road?",
    a: "Cliff's is equipped to respond to highway incidents on major routes including the Henday, the Whitemud, Highway 2, and the QEII. Operators carry safety equipment and follow highway recovery procedures.",
  },
  {
    q: "Can you tow my electric vehicle (EV)?",
    a: "Yes. EVs should always be transported on a flatbed. Most EVs cannot be towed with the wheels on the ground without risking damage to the motor and regenerative braking system.",
  },
  {
    q: "How much does a tow cost in Edmonton?",
    a: `Pricing depends on the vehicle, distance, and type of service needed. We provide upfront pricing before work begins. Call ${siteConfig.phone.display} or submit a quote request for an accurate estimate.`,
  },
  {
    q: "Do you offer roadside assistance without towing?",
    a: "Yes. We provide battery boosts, lockout service, emergency fuel delivery, and tire changes as standalone services. If we can resolve your situation on the spot, we will.",
  },
];

export function ServiceFAQ() {
  return (
    <section className="py-24 sm:py-36 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
              Frequently asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4 text-wrap-balance">
              Questions we hear every day.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Can&apos;t find your answer? Call us directly - we pick up every
              time.
            </p>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              {siteConfig.phone.display}
            </a>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-8 text-xs text-gray-400">
              Still have questions?{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4">
                Send us a message
              </Link>{" "}
              and we&apos;ll get back to you quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
