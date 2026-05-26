# Phase 3 — Depth, Authority & Measurement (Days 61–90)

> **Goal:** Build the long-tail compounding moat (service × location
> matrix), launch link-building, and start an optimization loop
> driven by real Search Console data.

**Prerequisite:** All of [phase-2-scale.md](./phase-2-scale.md) ticked off.
You should already be ranking for at least a few "tow truck [city]"
queries and have ≥ 15 GBP reviews live.

**Exit criteria (Phase 3 done):**
- 32 service × location pages live
- 20+ blog posts published total
- ≥ 30 GBP reviews
- First 5 quality backlinks acquired
- GSC-based optimization loop running monthly
- Baseline organic-traffic and ranking dashboard set up

---

## 3.1 Service × Location matrix (the long-tail compound play)

This is where most competitors stop and where you pull ahead.
9 services × 12 cities = 108 possible combinations. Build the
**top 32** — do NOT build all 108 on day one (looks thin and spammy).

### Phasing within Phase 3

Build the 4 highest-value services × top 8 cities = 32 pages:

**Services to use:**
- Heavy-duty towing
- Flatbed towing
- Accident recovery
- Roadside assistance

**Cities to use:**
- Edmonton
- Sherwood Park
- St. Albert
- Spruce Grove
- Leduc
- Fort Saskatchewan
- Nisku
- Acheson

- [ ] **Create catch-all route:** `src/app/service-areas/[city]/[service]/page.tsx`
- [ ] **Build a generator** in `src/lib/service-locations.ts` that
      produces unique content per `{city, service}` combo. Each combo needs:
  - city-specific intro paragraph (response time, local routes)
  - service-specific value-prop paragraph
  - a sample call/scenario (e.g., "Heavy-duty recovery at the Nisku
    industrial park…")
  - city-specific landmark mention
  - relevant FAQs (mix of service + city-specific)
- [ ] **Validate `generateStaticParams()`** returns exactly 32 combos,
      not 108
- [ ] **Update `src/app/sitemap.ts`** to enumerate the 32 combos
- [ ] **Cross-link** each service-page lists its city variants;
      each city-page lists its service variants
- [ ] **Add structured data:** Service + Place schema with `areaServed`
      set to the specific city
- [ ] **Avoid templated boilerplate** — Google's helpful-content
      algorithm penalizes near-duplicate pages. Each must read like a
      human wrote it.

### 32 URLs to ship

```
/service-areas/edmonton/heavy-duty-towing
/service-areas/edmonton/flatbed-towing
/service-areas/edmonton/accident-recovery
/service-areas/edmonton/roadside-assistance
/service-areas/sherwood-park/heavy-duty-towing
/service-areas/sherwood-park/flatbed-towing
/service-areas/sherwood-park/accident-recovery
/service-areas/sherwood-park/roadside-assistance
/service-areas/st-albert/heavy-duty-towing
/service-areas/st-albert/flatbed-towing
/service-areas/st-albert/accident-recovery
/service-areas/st-albert/roadside-assistance
/service-areas/spruce-grove/heavy-duty-towing
/service-areas/spruce-grove/flatbed-towing
/service-areas/spruce-grove/accident-recovery
/service-areas/spruce-grove/roadside-assistance
/service-areas/leduc/heavy-duty-towing
/service-areas/leduc/flatbed-towing
/service-areas/leduc/accident-recovery
/service-areas/leduc/roadside-assistance
/service-areas/fort-saskatchewan/heavy-duty-towing
/service-areas/fort-saskatchewan/flatbed-towing
/service-areas/fort-saskatchewan/accident-recovery
/service-areas/fort-saskatchewan/roadside-assistance
/service-areas/nisku/heavy-duty-towing
/service-areas/nisku/flatbed-towing
/service-areas/nisku/accident-recovery
/service-areas/nisku/roadside-assistance
/service-areas/acheson/heavy-duty-towing
/service-areas/acheson/flatbed-towing
/service-areas/acheson/accident-recovery
/service-areas/acheson/roadside-assistance
```

---

## 3.2 Third blog wave (8 more posts → 20 total)

- [ ] **Post 13:** "Winter towing in Edmonton — extreme cold playbook"
- [ ] **Post 14:** "What to keep in your trunk year-round (Edmonton edition)"
- [ ] **Post 15:** "Towing an RV or motorhome in Alberta — what to know"
- [ ] **Post 16:** "Motorcycle towing in Edmonton — when to call a flatbed"
- [ ] **Post 17:** "Glossary: 22 towing terms every Edmonton driver should know"
- [ ] **Post 18:** "Property managers — how to handle parking-lot tows legally"
      (opens a B2B audience funnel)
- [ ] **Post 19:** "Comparing Edmonton towing companies — what to actually look for"
- [ ] **Post 20:** "Behind the scenes — what a typical Cliff's dispatch shift looks like"
      (humanizes the brand, builds E-E-A-T)

---

## 3.3 Link-building outreach **[manual]**

Backlinks remain a top-3 ranking factor outside the local pack.
Quality > quantity. Target 5–10 real, contextually relevant backlinks
in this phase.

- [ ] **Alberta Motor Association (AMA)** — apply to be an approved
      service provider
- [ ] **Edmonton Chamber of Commerce** — member directory link
- [ ] **Local insurance broker partnerships** — offer to be their
      preferred towing referral in exchange for a website mention
- [ ] **Driving school sponsorships** — content partnership: "What to
      do if you break down" with a backlink to your roadside page
- [ ] **Local news outreach** — pitch CTV Edmonton or Edmonton Journal
      a winter-driving safety story with quotes from your dispatcher
- [ ] **HARO / Qwoted / Connectively** — answer journalist queries
      about roadside emergencies, vehicle recovery, winter driving
- [ ] **Industry associations** — Provincial Towing Association of
      Alberta, if applicable
- [ ] **Property management associations** — REIBC, REIM Alberta
      members directory

For each backlink attempt, track in a simple sheet: target, contact,
date, status, link acquired (yes/no).

---

## 3.4 GSC-driven optimization loop

This is the discipline that turns SEO from a project into a system.

- [ ] **Pull 90-day GSC report**
  - Identify top 20 queries by impressions
  - Identify top 10 queries with high impressions but low CTR
    (these are meta-description optimization opportunities)
  - Identify queries you rank #11–20 for — these are the "almost"
    rankings to push to page 1
- [ ] **For each high-impression / low-CTR query:**
  - [ ] Rewrite the page's `<title>` and `metaDescription` to better
        match the query intent and include a stronger CTA
  - [ ] Wait 2–4 weeks, re-check CTR
- [ ] **For each "almost" ranking (position 11–20):**
  - [ ] Identify the ranking page
  - [ ] Add 200–500 more words of relevant content
  - [ ] Add an internal link from a higher-authority page
  - [ ] Add 1–2 FAQ entries targeting related long-tail variants
- [ ] **Identify orphan pages** in GSC (pages not linked from anywhere) —
      fix internal linking
- [ ] **Identify 404s and redirect chains** in GSC — clean up

Set up a recurring monthly review to repeat this loop.

---

## 3.5 GBP review velocity

By end of Phase 3, target **≥ 30 total reviews** with steady velocity.

- [ ] Maintain the automated review-request flow from Phase 2
- [ ] Reply to every review (positive and negative) within 24 hours
- [ ] Add GBP posts weekly — service updates, weather tips, before/after photos
- [ ] Upload 5+ new GBP photos this phase
- [ ] Update GBP services if new offerings have been added
- [ ] Update AggregateRating schema in `structured-data.ts` to reflect
      current count and average

---

## 3.6 Measurement dashboard

Build the dashboard so you stop guessing whether SEO is working.

- [ ] **GA4 dashboard** — organic sessions, organic conversions,
      organic-attributed phone calls, top landing pages
- [ ] **GSC dashboard** — total impressions, total clicks, average
      position, top 25 queries, top 25 pages
- [ ] **GBP insights** — total views, calls, direction requests
- [ ] **Local pack tracker** — use Local Falcon or BrightLocal
      (paid tools, ~$30–50/mo) to track rankings by zip code for
      "tow truck near me" and the 8 city queries
- [ ] **Backlink tracker** — connect Ahrefs or Semrush MCP if
      available, otherwise manual spreadsheet
- [ ] **Weekly snapshot** sent to the team (Cowork can run this on
      a schedule once GSC/GA4 are connected — see "Scheduling" below)

---

## 3.7 Phase 3 verification

- [ ] All 32 service × location pages indexed in GSC
- [ ] ≥ 20 blog posts indexed in GSC
- [ ] GSC shows ranking positions for ≥ 30 distinct queries
- [ ] ≥ 5 quality backlinks acquired (excludes directory citations)
- [ ] Local pack appearance for ≥ 5 distinct "tow truck [city]" queries
- [ ] GBP ≥ 30 reviews, ≥ 4.5 average
- [ ] Monthly optimization loop running and documented

---

## Phase 3 deliverables checklist (summary)

- [ ] 32 service × location pages live
- [ ] 8 additional blog posts (20 total)
- [ ] ≥ 5 quality backlinks
- [ ] GSC-driven monthly optimization loop in place
- [ ] ≥ 30 GBP reviews
- [ ] Measurement dashboards live (GA4, GSC, GBP, local pack)

---

## What comes after Phase 3

Phases 1–3 build the foundation. Beyond day 90, the work shifts from
"build" to "compound":

- Continue 2 blog posts / week → ~96 posts by end of year 1
- Continue review acquisition → 100+ reviews by end of year 1
- Expand the service × location matrix to all 108 combos as ranking
  data proves out the demand
- Run quarterly competitor gap analyses
- Open a second front: paid Google Local Service Ads (LSAs) — these
  appear above the local pack and are pay-per-lead

---

## Scheduling (Cowork)

Once GSC + GA4 are connected, you can ask Cowork to run a weekly SEO
snapshot automatically:

> _"Every Monday at 8am, pull GSC clicks, impressions, and top 5 new
> queries from last week, plus GBP review count and average rating.
> Summarize what changed vs. the prior week."_

This keeps the loop honest without anyone having to remember.
