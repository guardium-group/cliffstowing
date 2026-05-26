# Phase 2 — Scale & Review Acquisition (Days 31–60)

> **Goal:** Complete the service and city page sets, kick off review
> velocity, scale blog cadence, and clean up local citations. This is
> the phase that turns the launched site into a competitive ranker.

**Prerequisite:** All of [phase-1-foundation.md](./phase-1-foundation.md)
ticked off. Do not start Phase 2 until GBP is verified and the first
4 service + 4 city pages are live.

**Exit criteria (you cannot move to Phase 3 until):**
- All 9 service pages live
- All 12 city pages live
- ≥ 15 verified GBP reviews
- AggregateRating schema live (once ≥ 5 reviews)
- 12 blog posts published total (8 more this phase)
- NAP submitted to ≥ 10 directories
- Review acquisition flow firing automatically

---

## 2.1 Complete the service-pages set

Ship the remaining 5 service pages using the route created in Phase 1.

- [ ] **`/services/winching-recovery`**
  - Target: `winch out service edmonton`, `vehicle stuck in ditch edmonton`
- [ ] **`/services/equipment-transport`**
  - Target: `equipment transport edmonton`, `forklift transport edmonton`,
    `heavy haul edmonton`
- [ ] **`/services/light-duty-towing`**
  - Target: `light duty towing edmonton`, `car towing edmonton`
- [ ] **`/services/medium-duty-towing`**
  - Target: `medium duty towing edmonton`, `truck towing edmonton`
- [ ] **`/services/battery-boost`**
  - Target: `jump start service edmonton`, `battery boost edmonton`,
    `dead battery edmonton`

Each page must have:
- [ ] 800–1,500 unique words
- [ ] Service-specific H1 with city + service keyword
- [ ] 5+ service-specific FAQs (Q&A)
- [ ] Service + FAQPage JSON-LD
- [ ] Internal links to 2–3 related service pages
- [ ] Internal link to ≥ 1 relevant blog post
- [ ] Hero image with keyword-aware alt text
- [ ] Phone CTA above the fold

---

## 2.2 Complete the city-pages set

Ship the remaining 8 city pages.

- [ ] **`/service-areas/leduc`**
- [ ] **`/service-areas/beaumont`**
- [ ] **`/service-areas/devon`**
- [ ] **`/service-areas/morinville`**
- [ ] **`/service-areas/fort-saskatchewan`**
- [ ] **`/service-areas/stony-plain`**
- [ ] **`/service-areas/nisku`** (industrial — emphasize equipment transport)
- [ ] **`/service-areas/acheson`** (industrial — emphasize heavy duty)

Each page must have:
- [ ] 300–500+ words of unique content (city-specific details)
- [ ] Mention of local routes / landmarks
- [ ] Realistic response time for that city
- [ ] City-specific testimonial if available
- [ ] Embedded Google Map centered on that city
- [ ] LocalBusiness JSON-LD with that city as primary `areaServed`
- [ ] Internal links to 3+ relevant service pages

---

## 2.3 Review acquisition program **[manual + light dev]**

Reviews drive ~16–20% of local pack ranking. Velocity (new reviews
arriving consistently) matters more than total count.

- [ ] **Build the review request flow**
  - After dispatch closes a job, fire an automated SMS or email
  - Plain-language: "Thanks for choosing Cliff's. If we did the job
    right, would you mind leaving a quick Google review? [shortlink to GBP]"
  - Time it ~1 hour after job completion (not too early, not too late)
- [ ] **Build the GBP review shortlink**
  - Get the direct review link from GBP dashboard
    (Share profile → Get more reviews)
  - Wrap it in a short URL (bit.ly or your own redirect like `/r`)
- [ ] **Train dispatch + operators**
  - When closing a job in person, mention "we'll send a quick text —
    a review really helps us"
- [ ] **Reply to every review within 24 hours** **[manual]**
  - Businesses replying to ≥ 80% of reviews see measurable ranking lift
  - Mention the service + city in your reply for keyword signal
    (e.g., "Glad we could get your truck moved safely in Sherwood Park")
- [ ] **Target: 15+ reviews by end of Phase 2, all ≥ 4 stars**
- [ ] **Once you hit 5 reviews, add AggregateRating schema**
  - File: `src/lib/structured-data.ts`
  - Add to LocalBusiness:
    ```ts
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,  // pull from GBP
      reviewCount: 15,   // pull from GBP
    },
    ```

---

## 2.4 NAP citation cleanup **[manual]**

NAP = Name, Address, Phone. Consistency across directories signals
trust to Google. Submit to (in priority order):

- [ ] Google Business Profile (done in Phase 1)
- [ ] **Apple Maps Connect** — claim listing
- [ ] **Bing Places for Business** — claim listing
- [ ] **Yelp Canada** — claim listing
- [ ] **Yellow Pages CA** (yellowpages.ca) — claim or submit
- [ ] **Canada411** — claim or submit
- [ ] **Better Business Bureau Alberta** — apply for accreditation
- [ ] **Foursquare for Business** — claim listing
- [ ] **AlbertaListings.com** — submit
- [ ] **Edmonton Chamber of Commerce** — verify member directory listing
- [ ] **Industry-specific:** TowingDirectory.com, any AAA-approved lists
      (if eligible)

For each: name = "Cliff's Towing", phone = "(780) 451-1555",
address = "4918 Roper Rd NW Suite 206, Edmonton, AB T6B 3T7".
**Use the exact same format everywhere.**

- [ ] **NAP audit:** Google `"Cliff's Towing" "780-451-1555"` — verify
      every result shows the same address format. Fix any discrepancies.

---

## 2.5 Second blog wave (8 new posts)

Maintain 2 posts/week cadence. Target reaches 12 total posts by end of
Phase 2.

Organize into clusters that link to service pages.

### Heavy-duty / Commercial cluster
- [ ] **Post 5:** "What size tow truck do I need? A guide for fleets"
  - Target: `commercial towing edmonton`, `fleet towing`
- [ ] **Post 6:** "How we recovered a jackknifed semi on the QEII"
  - Target: `semi truck towing edmonton`, `heavy recovery alberta`

### Roadside / Driver-help cluster
- [ ] **Post 7:** "Locked out of your car in Edmonton? Step-by-step"
  - Target: `car lockout service edmonton`
- [ ] **Post 8:** "Dead battery on a cold morning — what to try before calling"
  - Target: `dead battery edmonton`, `winter car wont start`

### Flatbed / Specialty cluster
- [ ] **Post 9:** "Flatbed vs. wheel-lift vs. dolly — which is safe for your car?"
  - Target: `flatbed towing edmonton`, decision-stage content
- [ ] **Post 10:** "Towing a classic or lowered car in Edmonton"
  - Target: `classic car towing edmonton`, `lowered car towing`

### Accident / Recovery cluster
- [ ] **Post 11:** "After a minor fender-bender — when do you actually need a tow?"
  - Target: `accident towing edmonton`, decision content
- [ ] **Post 12:** "Towing across the Henday — what dispatch needs to know"
  - Target: hyper-local Edmonton route content (no competitor covers this)

For each post:
- [ ] Add entry to `blogPosts` array in `src/lib/blog.ts`
- [ ] Choose hero image from `/public/images/hero/` (or add new)
- [ ] Set `keywords[]` for OG and schema
- [ ] Link to ≥ 1 service page and ≥ 1 other blog post
- [ ] Set `relatedService` so the sidebar CTA points to the right service

---

## 2.6 Internal linking pass

Now that you have 9 service pages + 12 city pages + 12 blog posts,
make sure they reinforce each other.

- [ ] **Service pages link to relevant city pages.** Example:
      `/services/heavy-duty-towing` lists "Heavy duty towing in
      Acheson, Nisku, and Edmonton" with links.
- [ ] **City pages link to all relevant service pages.** Example:
      `/service-areas/nisku` lists "Equipment transport, heavy-duty
      towing, and roadside assistance in Nisku" with links.
- [ ] **Blog posts link to the related service page** in body copy and
      via the existing `relatedService` sidebar.
- [ ] **Blog posts link to 1–2 other related posts** at the bottom.
- [ ] **Footer:** add a "Service areas" column listing all 12 cities
      as links (File: `src/components/layout/footer.tsx`).
- [ ] **Header:** consider adding a "Service Areas" dropdown
      (File: `src/components/layout/header.tsx`).

---

## 2.7 Phase 2 verification

- [ ] All 9 service pages indexed in GSC
- [ ] All 12 city pages indexed in GSC
- [ ] GBP shows ≥ 15 reviews with ≥ 4.5 average rating
- [ ] AggregateRating schema validates in Rich Results test
- [ ] NAP shows up consistently across ≥ 10 directories (spot-check 3)
- [ ] First impressions appearing in GSC Performance report for
      "tow truck [city]" queries
- [ ] Local pack appearance for at least one search (could be
      "Cliff's Towing Edmonton" — that's a start)
- [ ] No broken internal links (use `npm run lint` or a link checker)

---

## Phase 2 deliverables checklist (summary)

- [ ] 5 additional service pages live
- [ ] 8 additional city pages live
- [ ] Automated review acquisition flow firing
- [ ] ≥ 15 GBP reviews
- [ ] AggregateRating schema live
- [ ] NAP submitted to ≥ 10 directories
- [ ] 8 additional blog posts live (12 total)
- [ ] Footer + header updated with service-area links
- [ ] Internal link pass complete

→ When all green, proceed to [phase-3-authority.md](./phase-3-authority.md).
