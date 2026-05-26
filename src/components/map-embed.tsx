export function MapEmbed() {
  return (
    <section className="w-full" aria-label="Our location">
      <iframe
        src="https://maps.google.com/maps?q=4918%20Roper%20Rd%20NW%20Suite%20206%2C%20Edmonton%2C%20AB%20T6B%203T7&output=embed"
        width="100%"
        height="420"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cliff's Towing location — 4918 Roper Rd NW Suite 206, Edmonton, AB"
        className="h-[320px] sm:h-[380px] lg:h-[420px]"
      />
    </section>
  );
}
