import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const primaryAreas = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Leduc",
  "Beaumont",
  "Devon",
  "Morinville",
  "Fort Saskatchewan",
  "Stony Plain",
  "Nisku",
  "Acheson",
];

export function ServiceAreas() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Service Area</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Serving Edmonton &amp; <span className="text-primary">Surrounding Areas</span>
          </h2>
          <p className="text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto">
            We provide fast towing and roadside assistance across the greater Edmonton region. If you&apos;re not sure if we cover your area, just call — we&apos;ll do our best to get to you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {primaryAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium shadow-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Not on the list? Call us — we serve a wide area and will do our best to help.
          </p>
        </div>
      </div>
    </section>
  );
}
