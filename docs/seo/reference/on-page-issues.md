# On-Page Issues — Reference

File-and-line level issues identified in the codebase audit, ordered
by severity. Each ties back to a Phase task.

---

## Critical

### 1. Service pages collapsed to anchor fragments
- **File:** `src/app/services/page.tsx`
- **Issue:** All 9 services live on one URL with `#anchor` fragments
  (e.g., `/services#flatbed`). Google does not rank URL fragments
  as separate pages.
- **Fix:** Create `/services/[slug]/page.tsx` with 9 dedicated routes.
  Update `src/components/services-section.tsx` links from
  `/services#anchor` to `/services/[slug]`.
- **Phase:** 1 (top 4 pages) + Phase 2 (remaining 5).

### 2. No location pages
- **File:** `src/lib/site.ts` declares 12 service-area cities but
  none have a dedicated landing page.
- **Fix:** Build `/service-areas/[slug]/page.tsx` and generate 12
  city pages.
- **Phase:** 1 (top 4) + Phase 2 (remaining 8).

---

## High

### 3. Missing geo + AggregateRating in LocalBusiness schema
- **File:** `src/lib/structured-data.ts`, `localBusinessJsonLd()`
- **Fix:** Add `geo: { '@type': 'GeoCoordinates', latitude: 53.5461,
  longitude: -113.4938 }` and `aggregateRating` (once ≥ 5 reviews exist).
- **Phase:** 1 (geo) + Phase 2 (rating).

### 4. MapEmbed commented out on homepage
- **File:** `src/app/page.tsx`, line 46
- **Fix:** Uncomment `<MapEmbed />` or replace with a lighter static
  map that points to the GBP listing once claimed.
- **Phase:** 1.

### 5. Thin blog (only 4 posts)
- **File:** `src/lib/blog.ts`
- **Fix:** Publish 16 more posts in 90 days at 2/week cadence,
  organized into 4 service clusters.
- **Phase:** 1 (+4), Phase 2 (+8), Phase 3 (+8).

---

## Medium

### 6. Duplicate FAQ schema across pages
- **File:** `src/components/service-faq.tsx` is rendered with
  `<JsonLd data={faqJsonLd(faqs)} />` on `/services`, `/about`,
  `/contact`, and every `/blog/[slug]`.
- **Fix:** Keep FAQ schema only on `/services` and on the new
  `/services/[slug]` pages. Render the FAQ visually elsewhere
  without the `JsonLd` component.
- **Phase:** 1.

### 7. Sitemap is static
- **File:** `src/app/sitemap.ts`
- **Fix:** Refactor to iterate over `siteConfig.services` and
  `siteConfig.serviceArea` once the dynamic routes exist.
- **Phase:** 1 (add services + areas), Phase 3 (add service × area).

### 8. Hero H1 lacks primary keyword
- **File:** `src/components/home-hero.tsx`
- **Issue:** Current hero copy is brand-focused ("Fast, Reliable
  Towing Service"). Lacks "Edmonton".
- **Fix:** "24/7 Towing & Recovery in Edmonton" (or similar that
  pairs city + service in H1).
- **Phase:** 1.

### 9. Image alt-text audit needed
- **Issue:** Verify every `<Image>` has descriptive alt that includes
  service or location keyword where natural.
- **Fix:** Search for `alt=` across `src/components/`. Replace
  generic alts (`"Cliff's truck"`) with specific ones
  (`"Flatbed tow truck loading SUV on Anthony Henday Edmonton"`).
- **Phase:** 1.

---

## Low

### 10. Title-tag pattern
- **File:** `src/app/layout.tsx`
- **Issue:** Default title template is good. Verify new service/location
  pages set unique titles like `"Heavy Duty Towing in Edmonton |
  Cliff's Towing"`.
- **Fix:** Per-page metadata overrides already work — just verify on
  new pages.
- **Phase:** 1.

### 11. No /thank-you confirmation page after lead capture
- **Issue:** Confirmation pages help with GA4 conversion tracking and
  give a clean post-conversion experience.
- **Fix:** Add `/thank-you` (`noindex`) page that fires GA4 conversion
  event.
- **Phase:** 1 (during GA4 setup).
