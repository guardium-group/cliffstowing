# Product Marketing Context — Cliff's Towing

## Business Overview

**Company:** Cliff's Towing  
**Site:** https://cliffstowing.ca  
**Type:** Local service business — towing, transport & roadside assistance  
**Location:** 4918 Roper Rd NW Suite 206, Edmonton, AB T6B 3T7  
**Phone:** +1 (780) 451-1555  
**Hours:** 24/7 emergency dispatch  
**Founded:** Serving Edmonton for over 70 years  
**Parent:** Guardium Group of Companies

---

## Primary SEO Goal

Rank organically for towing and roadside assistance keywords across Edmonton and 11 surrounding Alberta communities. Drive inbound calls and quote requests directly from search — no paid ads.

---

## Priority Keywords

### Head terms
- tow truck Edmonton
- towing Edmonton
- 24 hour towing Edmonton
- roadside assistance Edmonton
- emergency towing Edmonton

### Service variants
- flatbed towing Edmonton
- heavy duty towing Edmonton
- accident recovery Edmonton
- winching and recovery Edmonton
- equipment transport Edmonton
- jump start Edmonton
- fuel delivery Edmonton

### City variants (repeat above patterns for each)
- tow truck Sherwood Park / St. Albert / Spruce Grove / Leduc / Beaumont / Devon / Morinville / Fort Saskatchewan / Stony Plain / Nisku / Acheson
- roadside assistance [city]
- towing near me [city]

### Long-tail / informational
- how much does towing cost Edmonton
- what to do after car accident Edmonton
- towing company near me open now
- best towing company Edmonton reviews

---

## Service Areas

Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, Beaumont, Devon, Morinville, Fort Saskatchewan, Stony Plain, Nisku, Acheson

---

## Services Offered

1. Light & medium duty towing
2. Heavy duty towing
3. Flatbed towing
4. Accident towing & recovery
5. Roadside assistance (fuel, jump start, lockout)
6. Winching & recovery
7. Equipment transport

---

## Known SEO Concerns

- New domain — no organic baseline yet, building from zero
- Competitive local market with established incumbents on Google Maps 3-pack
- 84 programmatic city×service pages need to be substantive enough to rank vs. directories (Yelp, YellowPages)
- Blog has 4 posts — needs more topical authority content
- No Google reviews integrated yet (AggregateRating schema opportunity)

---

## Site Architecture (already built)

- `/` — Home
- `/services` — Services hub
- `/services/[slug]` — 7 individual service pages
- `/service-areas` — Areas hub
- `/service-areas/[slug]` — 12 city pages
- `/service-areas/[slug]/[service]` — 84 city×service combo pages
- `/blog` — Blog hub
- `/blog/[slug]` — 4 individual posts
- `/about`, `/contact`, `/privacy-policy`, `/terms`, `/cookies`

---

## Target Competitors

Local Edmonton towing companies ranking in Google Maps 3-pack and top 10 organic results for "tow truck Edmonton". Also directory listings from Yelp, YellowPages, HomeStars.

---

## Organic Traffic Baseline

New site — no historical data. Zero organic sessions currently.

---

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS
- Deployed to Vercel (expected)
- JSON-LD structured data: LocalBusiness, BreadcrumbList, FAQPage, Service, BlogPosting, CityLocalBusiness
- Sitemap: auto-generated via `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
