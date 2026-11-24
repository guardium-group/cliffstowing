import { siteConfig } from "@/lib/site";

const { address } = siteConfig;

export function MapEmbed() {
  return (
    <section className="w-full" aria-label="Our location">
      <iframe
        src={`https://maps.google.com/maps?q=${encodeURIComponent(address.display)}&output=embed`}
        width="100%"
        height="420"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Cliff's Towing location — ${address.street}, ${address.city}, ${address.region}`}
        className="h-[320px] sm:h-[380px] lg:h-[420px]"
      />
    </section>
  );
}
