# Phase 1 — Foundation (Days 0–30)

> **Goal:** Ship the site with technical SEO bulletproofed, Google Business
> Profile live, and the first wave of service + city pages published. This
> is the phase that gets you indexable and visible.

**Exit criteria (you cannot move to Phase 2 until):**
- All "Quick wins" boxes ticked
- GBP claimed, fully populated, and live
- 4 service pages live
- 4 city pages live
- 4 new blog posts published
- Sitemap submitted to GSC and Bing
- All Phase 1 verification checks pass

---

## 1.1 Quick wins (each < 2 hours)

These have the highest impact-to-effort ratio. Do them in week 1.

- [ ] **Add geo coordinates to LocalBusiness JSON-LD**
  - File: `src/lib/structured-data.ts`, function `localBusinessJsonLd()`
  - Add inside the returned object:
    ```ts
    geo: { "@type": "GeoCoordinates", latitude: 53.5461, longitude: -113.4938 },
    priceRange: "$$",
    ```
- [ ] **Uncomment or replace `<MapEmbed />` on the homepage**
  - File: `src/app/page.tsx`, line 46
  - Either uncomment, or replace with a lighter static map pointing to GBP
- [ ] **Update homepage hero H1 to include "Edmonton" + service keyword**
  - File: `src/components/home-hero.tsx`
  - Current pattern is brand-first ("Fast, Reliable Towing Service")
  - Change to something like: "24/7 Towing & Recovery in Edmonton"
- [ ] **Audit image alt text across all components**
  - Search the codebase for `<Image` and `alt=`
  - Replace generic alts (`"Cliff's truck"`) with descriptive,
    keyword-aware text (e.g. `"Flatbed tow truck loading SUV on Anthony Henday Edmonton"`)
- [ ] **Remove duplicate FAQ JSON-LD from non-service pages**
  - Remove `<JsonLd data={faqJsonLd(faqs)} />` from `/about`, `/contact`,
    and the blog `[slug]` page
  - Keep only on `/services` (and later on each `/services/[slug]`)
  - The FAQ section can still render visually — just drop the structured data
- [ ] **Add a "Last updated" line to existing blog posts (visual + JSON-LD)**
  - Already in JSON-LD as `dateModified` — verify it renders visually in
    the blog post layout for E-E-A-T signal
- [ ] **Set up Google Search Console** **[manual]**
  - Verify domain ownership
  - Submit `sitemap.xml`
  - Set preferred international targeting (Canada)
- [ ] **Set up Bing Webmaster Tools** **[manual]**
  - Verify domain
  - Submit sitemap
- [ ] **Wire up GA4 conversion events**
  - Track: phone-click (tel: anchors), form-submit (contact form), GBP-directions-click
  - File: add a small analytics helper or wire into existing event handlers

---

## 1.2 Google Business Profile **[manual — highest priority]**

GBP is ~32% of local-pack ranking. Without it, you do not exist in the
3-pack. Do this in week 1, parallel to the code work above.

- [ ] **Claim the listing** at business.google.com
- [ ] **Verify** (postcard, phone, or video — Google's choice)
- [ ] **Set primary category:** `Towing service`
- [ ] **Add secondary categories:**
  - `Roadside assistance service`
  - `Auto wrecker`
  - `Equipment rental agency` (if applicable for transport jobs)
- [ ] **Service area:** Add all 12 cities from `siteConfig.serviceArea`
- [ ] **Business hours:** 24/7 — toggle "Open 24 hours"
- [ ] **Phone:** `+1 (780) 451-1555` (must match site exactly — NAP consistency)
- [ ] **Address:** `4918 Roper Rd NW Suite 206, Edmonton, AB T6B 3T7`
- [ ] **Description:** 750-character description that includes "Edmonton",
      "24/7", "towing", "heavy duty", "roadside assistance", and "70+ years"
- [ ] **Photos:** Upload at least 15:
  - Exterior shots of trucks (multiple angles)
  - Heavy recovery in action
  - Flatbed loading
  - Team/operators (faces build trust)
  - Logo and signage
- [ ] **Services:** Add each of the 9 services from `siteConfig.services`
      with short descriptions
- [ ] **Attributes:** Enable "24/7 emergency", "On-site services",
      "Online estimates" if applicable
- [ ] **Q&A:** Seed 5–8 questions yourself and answer them
- [ ] **Posts:** Publish first GBP post announcing 24/7 service

---

## 1.3 Build the service-pages route

This is the single biggest code change in Phase 1. The current `/services`
page has all 9 services as anchor fragments — Google cannot rank fragments
as separate pages.

- [ ] **Create `src/lib/services.ts`** — data model for service pages.
      Use the same shape pattern as `src/lib/blog.ts`. Each entry needs:
  - `slug` (kebab-case)
  - `title` (includes "Edmonton")
  - `metaDescription` (150–160 chars, includes CTA)
  - `h1`
  - `intro` (first 100 words, includes primary keyword)
  - `sections[]` (heading + body[] + optional list)
  - `faqs[]` (5+ service-specific Q&A)
  - `keywords[]`
  - `relatedServices[]` (slugs)
  - `heroImage`, `heroImageAlt`
- [ ] **Create `src/app/services/[slug]/page.tsx`**
  - Mirror the structure of `src/app/blog/[slug]/page.tsx`
  - Implement `generateStaticParams()`
  - Implement `generateMetadata()` returning page-specific title, description, canonical, OG
  - Render breadcrumb + Service JSON-LD + FAQPage JSON-LD
- [ ] **Add Service schema generator to `src/lib/structured-data.ts`**
  - See `reference/schema-snippets.md` for the exact code
- [ ] **Update `src/components/services-section.tsx`** to link to
      `/services/[slug]` instead of `/services#anchor`
- [ ] **Update `src/app/sitemap.ts`** to iterate over services
- [ ] **Publish the top 4 service pages first:**
  - [ ] `/services/heavy-duty-towing`
  - [ ] `/services/flatbed-towing`
  - [ ] `/services/accident-recovery`
  - [ ] `/services/roadside-assistance`

> Remaining 5 service pages (winching, equipment transport, light-duty,
> medium-duty, battery boost) ship in Phase 2.

---

## 1.4 Build the service-areas (city) route

12 cities are declared in `siteConfig.serviceArea` but have no landing
pages. Without them, you cannot rank for "tow truck [city]" queries.

- [ ] **Create `src/lib/service-areas.ts`** with per-city data:
  - `slug`, `name`, `intro`, `responseTime`, `mainRoutes[]`,
    `localLandmarks[]`, `testimonial?`, `faqs[]`, `mapEmbedUrl`,
    `keywords[]`, `metaDescription`
- [ ] **Create `src/app/service-areas/[slug]/page.tsx`**
- [ ] **Each page must include ≥ 300–500 words of unique content** —
      not just swapped city names. Avoid doorway-page risk.
- [ ] **Add LocalBusiness JSON-LD per page** with that city as primary
      `areaServed`
- [ ] **Update `src/app/sitemap.ts`** to iterate over service areas
- [ ] **Update `src/components/service-areas.tsx`** — convert the city
      pills from plain `<span>` to `<Link href="/service-areas/[slug]">`
- [ ] **Publish the top 4 city pages first:**
  - [ ] `/service-areas/edmonton`
  - [ ] `/service-areas/sherwood-park`
  - [ ] `/service-areas/st-albert`
  - [ ] `/service-areas/spruce-grove`

> Remaining 8 city pages ship in Phase 2.

---

## 1.5 First blog wave (4 new posts)

Target question-format keywords that compete for People Also Ask
snippets. Each post follows the existing `BlogPost` schema in
`src/lib/blog.ts` — no code changes, just data entries.

- [ ] **Post 1:** "How much does a tow cost in Edmonton?"
  - Target: `how much does a tow cost in edmonton`
  - Angle: Pricing structure, what changes a quote, what to ask dispatch
  - Link to: `/services/roadside-assistance`, `/services/flatbed-towing`
- [ ] **Post 2:** "Do you have to use the tow truck the police called?"
  - Target: `do i have to use the tow truck the police call`
  - Angle: Driver rights, choosing your own tow, insurance implications
  - Link to: `/services/accident-recovery`
- [ ] **Post 3:** "Towing an EV in Edmonton — what every owner should know"
  - Target: `ev towing edmonton`
  - Angle: Why flatbed is mandatory, what to tell dispatch, battery concerns
  - Link to: `/services/flatbed-towing`
- [ ] **Post 4:** "Insurance and towing in Alberta — what you need to know"
  - Target: `accident towing edmonton`, `insurance towing alberta`
  - Angle: How to handle insurance after a tow, getting reimbursed, what dispatch can provide
  - Link to: `/services/accident-recovery`

---

## 1.6 Technical SEO hardening

- [ ] **Run `npm run build`** and verify no errors
- [ ] **Run Lighthouse / PageSpeed Insights** on the deployed staging URL
  - Target: ≥ 90 Performance, ≥ 95 SEO, ≥ 95 Accessibility, ≥ 95 Best Practices
- [ ] **Verify Core Web Vitals**
  - LCP < 2.5s
  - CLS < 0.1
  - INP < 200ms
- [ ] **Validate JSON-LD** at https://validator.schema.org
  - Test homepage, /services, /services/heavy-duty-towing, /service-areas/edmonton, one blog post
- [ ] **Validate sitemap.xml** at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] **Check `robots.txt`** is publicly accessible at `/robots.txt`
- [ ] **Verify all canonicals** point to the production domain (not staging)
- [ ] **Check no `noindex` headers** are leaking from staging config

---

## 1.7 Phase 1 verification

Run these checks before declaring Phase 1 complete:

- [ ] Search `site:cliffstowing.ca` in Google — should return at least
      the homepage, /services, /about, /contact (full indexing usually
      takes 1–4 weeks post-launch)
- [ ] GBP listing appears when searching `"Cliff's Towing" Edmonton`
- [ ] All 4 new service pages render correctly on mobile
- [ ] All 4 new city pages render correctly on mobile
- [ ] Rich Results test (https://search.google.com/test/rich-results)
      passes on the homepage (LocalBusiness), a service page (Service),
      and a blog post (BlogPosting)
- [ ] GSC has received and processed the sitemap (Coverage > Submitted)
- [ ] No critical Lighthouse SEO issues remain

---

## Phase 1 deliverables checklist (summary)

- [ ] Geo coordinates + AggregateRating-ready LocalBusiness schema
- [ ] Map embedded on homepage
- [ ] Keyword-optimized H1 on homepage
- [ ] Duplicate FAQ schema removed
- [ ] GA4 + GSC + Bing Webmaster live
- [ ] GBP claimed, populated, verified
- [ ] 4 service pages live (`/services/[slug]`)
- [ ] 4 city pages live (`/service-areas/[slug]`)
- [ ] 4 new blog posts live
- [ ] Sitemap iterates over services + service areas
- [ ] Lighthouse + Rich Results validation passed

→ When all green, proceed to [phase-2-scale.md](./phase-2-scale.md).
