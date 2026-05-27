import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceSpotlights } from "@/components/service-spotlights";
import { HowItWorks } from "@/components/how-it-works";
import { ServiceFAQ } from "@/components/service-faq";
import { CTACarousel } from "@/components/cta-carousel";
import { ServiceAreas } from "@/components/service-areas";
import { BlogPreview } from "@/components/blog-preview";
import { Testimonials } from "@/components/testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cliff's Towing | 24/7 Tow Truck & Roadside Assistance Edmonton",
  description:
    "Edmonton's most trusted towing company for 70+ years. Light duty, flatbed, heavy haul, accident recovery, and roadside assistance — available 24/7 across 12 Alberta communities.",
  alternates: { canonical: "/" },
};

const heroSlides = [
  {
    image: "/images/hero/cliffs500rotator.jpg",
    title: "24/7 Towing & Recovery",
    highlight: "in Edmonton",
    description: `Cliff's Towing has been ${siteConfig.foundedCopy}. When you're stranded, we're on our way.`,
  },
  {
    image: "/images/hero/decktruckequipment31024x695.jpg",
    title: "24/7 Roadside",
    highlight: "Assistance",
    description:
      "Flat tire, dead battery, locked out - whatever the situation, our experienced team is ready to help any time of day or night.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero
        slides={heroSlides}
        ctvVideoUrl="https://embed.jasperplayer.com?brand=CTV_NEWS&destination=ctvnews_web&language=EN&contentId=3367418"
      />
      <ServicesSection limit={4} />
      <WhyChooseUs />
      <ServiceSpotlights limit={3} />
      <ServiceAreas />
      <HowItWorks />
      <ServiceFAQ />
      <Testimonials />
      <BlogPreview />
      <CTACarousel />
      {/* <MapEmbed /> */}
     
      
    </>
  );
}
