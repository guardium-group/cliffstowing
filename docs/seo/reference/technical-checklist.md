# Technical SEO Checklist — Reference

Pre-launch + ongoing technical health checks. Pass-fail-warning status
reflects the audit at 2026-05-25. Re-run after each phase.

---

## Pass (already in place)

- ✓ HTTPS (assumed via standard hosting)
- ✓ `robots.txt` allows all, references sitemap (`src/app/robots.ts`)
- ✓ Canonical tags via `alternates.canonical` on every page
- ✓ `lang="en-CA"` set in `src/app/layout.tsx`
- ✓ BreadcrumbList schema on `/services`, `/about`, `/contact`, `/blog/[slug]`
- ✓ BlogPosting schema with publisher, author, dates
- ✓ OpenGraph + Twitter Card on all pages
- ✓ Skip-to-content link in layout
- ✓ 404 page (`src/app/not-found.tsx`)
- ✓ Mobile responsive (Tailwind utilities throughout)

## Warning (needs improvement)

- ⚠ XML sitemap is static — does not yet include `/services/[slug]`
  or `/service-areas/[slug]` routes. Fix in Phase 1.
- ⚠ LocalBusiness schema missing `geo` and `aggregateRating`. Add
  `geo` in Phase 1, `aggregateRating` in Phase 2 (once ≥ 5 reviews).
- ⚠ FAQPage schema duplicated across pages. Keep on `/services` and
  service detail pages only. Fix in Phase 1.
- ⚠ Image optimization — verify every `<img>` is `next/image` and
  every alt is descriptive. Audit in Phase 1.
- ⚠ Internal linking depth is shallow (services link to fragments).
  Will improve once Phase 1 service/location pages exist.

## Fail (must fix)

- ✗ Service schema per service — not implemented. Add to each
  `/services/[slug]` page when built (Phase 1/2). See
  [schema-snippets.md](./schema-snippets.md).
- ✗ Google Search Console verified — not yet set up. Phase 1, week 1.
- ✗ Google Business Profile claimed — not yet. Phase 1, week 1.
- ✗ Bing Webmaster Tools — set up alongside GSC.
- ✗ AggregateRating schema — Phase 2, once reviews exist.

## Pending (cannot test on staging)

- ⏳ Core Web Vitals (LCP, INP, CLS) — measure once deployed
- ⏳ Local citation consistency (NAP) — submit + audit in Phase 2

---

## Ongoing checks (each phase)

After every phase, re-run:

- [ ] Lighthouse audit on 3 representative pages (home, a service
      page, a blog post)
- [ ] Rich Results test on each new page type
- [ ] GSC Coverage report — flag any "Excluded" or "Error" pages
- [ ] Search `site:cliffstowing.ca` — verify expected pages indexed
- [ ] Check for broken internal links (`npm run lint` or a link checker)
- [ ] Check for redirect chains
- [ ] Verify canonicals point to production domain

---

## Tools

- **Rich Results test:** https://search.google.com/test/rich-results
- **Schema validator:** https://validator.schema.org
- **Sitemap validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Lighthouse:** built into Chrome DevTools or `npx lighthouse <url>`
- **Mobile-friendly test:** https://search.google.com/test/mobile-friendly
  (deprecated — use Lighthouse instead)
