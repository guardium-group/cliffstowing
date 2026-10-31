import { GoogleG, Stars } from "@/components/review-icons";
import { reviews } from "@/lib/reviews";

// Robert T.'s review praises a phone price quote; the ads never promise quotes, so it's left out here.
const shown = reviews.filter((r) => r.name !== "Robert T.");

export function ReviewsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">Google reviews</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-balance">
          Drivers trust Cliff&apos;s when the job matters.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {shown.map((review) => (
            <figure key={review.name} className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
              <div className="flex items-center justify-between gap-3">
                <Stars count={review.rating} />
                <GoogleG />
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">Google review{review.service && ` · ${review.service}`}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
