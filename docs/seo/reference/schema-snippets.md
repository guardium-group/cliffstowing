# Schema Snippets — Reference

Drop-in JSON-LD patches for the codebase. All snippets target
`src/lib/structured-data.ts` unless noted.

---

## Patch 1 — LocalBusiness with geo + priceRange (Phase 1)

Add these properties inside the object returned by `localBusinessJsonLd()`:

```ts
geo: {
  "@type": "GeoCoordinates",
  latitude: 53.5461,   // Edmonton centroid; refine to your exact address
  longitude: -113.4938,
},
priceRange: "$$",
hasMap: "https://maps.google.com/?cid=YOUR_GBP_CID",  // once GBP is claimed
```

How to get your exact lat/long:
1. Go to Google Maps
2. Right-click on your business pin
3. The first item in the menu is the coordinates — click to copy

How to get your `cid` for `hasMap`:
1. Open your GBP-rendered place card on Google Maps
2. Click "Share" → "Embed a map"
3. The `cid=` value in the iframe `src` is what you want

---

## Patch 2 — AggregateRating (Phase 2, once ≥ 5 reviews)

Add inside the object returned by `localBusinessJsonLd()`:

```ts
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: 4.8,    // pull current value from GBP
  reviewCount: 15,     // pull current count from GBP
  bestRating: 5,
  worstRating: 1,
},
```

**Do not hard-code stale values.** Update this whenever the GBP count
moves by ≥ 5. Alternatively, refactor to fetch from a CMS or env var.

---

## Patch 3 — Service schema generator (Phase 1)

Add this new exported function to `src/lib/structured-data.ts`:

```ts
import type { ServiceData } from "@/lib/services";

export function serviceJsonLd(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    serviceType: service.name,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: siteConfig.serviceArea.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
  };
}
```

Call it in `src/app/services/[slug]/page.tsx`:

```tsx
<JsonLd data={serviceJsonLd(service)} />
```

---

## Patch 4 — Location-page LocalBusiness schema (Phase 1)

For city pages, generate a LocalBusiness JSON-LD scoped to that city.
Add to `src/lib/structured-data.ts`:

```ts
export function cityLocalBusinessJsonLd(city: string) {
  const base = localBusinessJsonLd();
  return {
    ...base,
    "@id": `${siteConfig.url}/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}#business`,
    areaServed: {
      "@type": "City",
      name: city,
    },
  };
}
```

Call it in `src/app/service-areas/[slug]/page.tsx`:

```tsx
<JsonLd data={cityLocalBusinessJsonLd(area.name)} />
```

---

## Patch 5 — Sitemap iterating services + service areas (Phase 1)

Update `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";          // new
import { serviceAreas } from "@/lib/service-areas"; // new
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
  ].map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: now,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  const areaRoutes = serviceAreas.map((a) => ({
    url: `${siteConfig.url}/service-areas/${a.slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
```

---

## Patch 6 — Service × location sitemap extension (Phase 3)

Once the catch-all route at `/service-areas/[city]/[service]` exists,
extend the sitemap to enumerate the 32 combos:

```ts
const serviceLocationRoutes = serviceLocationCombos.map((combo) => ({
  url: `${siteConfig.url}/service-areas/${combo.citySlug}/${combo.serviceSlug}`,
  lastModified: now,
  priority: 0.75,
}));

return [
  ...staticRoutes,
  ...serviceRoutes,
  ...areaRoutes,
  ...serviceLocationRoutes,
  ...blogRoutes,
];
```

Where `serviceLocationCombos` comes from `src/lib/service-locations.ts`
and contains exactly the 32 combos you decided to ship (not all 108).

---

## Validation

After each schema patch:

1. Run the dev server: `bun dev`
2. View the page source — confirm the `<script type="application/ld+json">`
   block renders the new schema
3. Test in Rich Results: https://search.google.com/test/rich-results
4. Test in schema validator: https://validator.schema.org

If a patch breaks validation, the test tools will tell you which
property is wrong. Most common issue: missing required field (e.g.,
`@context`, `@type`, or `name`).
