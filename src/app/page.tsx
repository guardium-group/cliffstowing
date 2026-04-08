import { HomeHero } from "@/components/home-hero";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceAreas } from "@/components/service-areas";
import { Testimonials } from "@/components/testimonials";
import { CTABanner } from "@/components/cta-banner";

const heroSlides = [
  {
    image: "/images/hero/hero-bg1.jpg",
    title: "Fast, Reliable",
    highlight: "Towing Service",
    description:
      "Cliff's Towing has been serving Edmonton and surrounding areas for over 40 years. When you're stranded, we're on our way.",
  },
  {
    image: "/images/hero/hero-bg2.jpg",
    title: "24/7 Roadside",
    highlight: "Assistance",
    description:
      "Flat tire, dead battery, locked out — whatever the situation, our experienced team is ready to help any time of day or night.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero slides={heroSlides} />
      <ServicesSection limit={4} />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <CTABanner />
    </>
  );
}
