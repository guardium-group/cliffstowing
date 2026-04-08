import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael T.",
    context: "Edmonton resident",
    rating: 5,
    quote:
      "Called Cliff's at 2am after my car broke down on the Whitemud. They were there in under 30 minutes. Professional, friendly, and fast. Would absolutely call again.",
  },
  {
    name: "Sarah L.",
    context: "Sherwood Park",
    rating: 5,
    quote:
      "Locked my keys in the car in a mall parking lot. Cliff's Towing was there quickly and had me back in my car within minutes. Reasonable price too. Highly recommend!",
  },
  {
    name: "James R.",
    context: "Edmonton — accident recovery",
    rating: 5,
    quote:
      "After a fender bender on the Henday, Cliff's helped coordinate everything with my insurance. Took my car directly to the body shop. Stress-free experience during a stressful time.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <Badge variant="secondary" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Hear from real Edmontonians we&apos;ve helped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <CardContent className="p-0 space-y-4">
                <StarRating rating={t.rating} />
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.context}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
