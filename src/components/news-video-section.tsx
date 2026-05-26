import { RadioTower } from "lucide-react";

const announcementPoints = [
  {
    label: "Status",
    value: "Fully operational",
    description: "Dispatch, towing, recovery, and roadside response are active.",
  },
  {
    label: "Leadership",
    value: "Under new management",
    description: "A renewed operating team is running day-to-day service.",
  },
  {
    label: "Coverage",
    value: "24/7 dispatch restored",
    description: "Edmonton drivers can call for urgent help at any hour.",
  },
];

export function NewsVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#3e000c] py-20 sm:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 hidden h-40 bg-[radial-gradient(circle_at_50%_100%,rgba(210,30,45,0.16),transparent_56%)] lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-primary">
              <RadioTower className="h-4 w-4" />
              CTV News announcement
            </div>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white text-wrap-balance sm:text-4xl lg:text-5xl">
              Cliff&apos;s Towing is back on Edmonton roads.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-xl text-base leading-relaxed text-white/55 lg:ml-auto">
              The CTV segment confirms Cliff&apos;s Towing is fully operational
              again under new management, with dispatch and recovery service
              active for Edmonton customers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="relative rounded-2xl bg-white/[0.06] p-1.5 ring-1 ring-white/10 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.95)]">
              <div
                className="absolute -right-px -top-px h-20 w-20 rounded-tr-2xl border-r border-t border-primary/40"
                aria-hidden="true"
              />
              <div className="relative aspect-video overflow-hidden rounded-[0.875rem] bg-black">
                <iframe
                  title="CTV News announcement: Cliff's Towing is back under new management"
                  src="https://embed.jasperplayer.com?brand=CTV_NEWS&destination=ctvnews_web&language=EN&contentId=3367418"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>

          <aside className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1 xl:col-span-3">
            {announcementPoints.map((point) => (
              <div
                key={point.value}
                className="rounded-2xl bg-white/[0.06] py-6 px-6 ring-1 ring-white/20 transition-colors hover:bg-white/[0.08]"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/35">
                  {point.label}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">
                  {point.value}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {point.description}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
