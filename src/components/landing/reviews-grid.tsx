import { Quote } from "lucide-react";
import { GoogleG, Stars } from "@/components/review-icons";
import { reviews } from "@/lib/reviews";

// Robert T.'s review praises a phone price quote; the ads never promise quotes, so it's left out here.
const shown = reviews.filter((r) => r.name !== "Robert T.");
const featured = shown.find((r) => r.name === "Dan Can Traveller") ?? shown[0];
const others = shown.filter((r) => r !== featured);

export function ReviewsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Google reviews</p>
            <h2 id="reviews-heading" className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              Drivers trust Cliff&apos;s when the job matters.
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 ring-1 ring-gray-200">
            <GoogleG />
            <span className="scale-125 origin-left"><Stars count={5} /></span>
            <span className="ml-2 text-sm font-medium text-gray-700">5-star reviews</span>
          </span>
        </div>

        <figure className="relative mt-10 overflow-hidden rounded-3xl bg-[#3e000c] p-8 sm:p-12 text-white">
          <Quote className="absolute -top-2 right-6 h-32 w-32 text-white/[0.06]" aria-hidden="true" />
          <div className="scale-150 origin-left w-fit"><Stars count={featured.rating} /></div>
          <blockquote className="relative mt-6 text-xl sm:text-2xl lg:text-3xl font-medium leading-snug text-balance">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-white/80">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-semibold">{featured.name[0]}</span>
            <span><span className="block font-semibold text-white">{featured.name}</span>Google review{featured.service && ` · ${featured.service}`}</span>
          </figcaption>
        </figure>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {others.map((review) => (
            <figure key={review.name} className="flex flex-col gap-4 rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-100">
              <div className="flex items-center justify-between gap-3">
                <Stars count={review.rating} />
                <GoogleG />
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{review.name[0]}</span>
                <span>
                  <span className="block font-semibold text-gray-900 text-sm">{review.name}</span>
                  <span className="block text-xs text-gray-500">Google review{review.service && ` · ${review.service}`}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
