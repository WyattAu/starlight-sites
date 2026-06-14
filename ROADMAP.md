# Roadmap

## Current State (June 2026)

### Infrastructure

- 9 Starlight sites deployed to Cloudflare Pages
- Landing page at wyattsnotes.wyattau.com
- Cross-site search API at search.wyattau.com (9 sites, 2013 entries)
- CI/CD via GitHub Actions (ci.yml + deploy.yml)
- Uptime monitoring every 6 hours
- Pre-commit hooks (Husky + lint-staged)
- 134 automated tests (unit + integration)

### Sites

| Site | Domain | Status |
|------|--------|--------|
| DSE | dse.wyattau.com | Live |
| IB | ib.wyattau.com | Live |
| A-Level | alevel.wyattau.com | Live |
| University | university.wyattau.com | Live |
| Qualifications | qualifications.wyattau.com | Live |
| Programming | programming.wyattau.com | Live |
| Infrastructure | infrastructure.wyattau.com | Live |
| Languages | languages.wyattau.com | Live |
| Tools | tools.wyattau.com | Live |

### Technical Debt Resolved

- Removed 6 dead components (Breadcrumbs, ProgressTracker, PracticeQuiz, DifficultyBadge, LastUpdated, RelatedTopics)
- Consolidated 3 redundant CI workflows into 2 focused workflows
- Fixed hardcoded secrets in upload-index.js, deploy.yml, wrangler.toml
- Fixed deprecated API usage (Math.random().substr)
- Removed dead code from search worker (handleSearchWithPreview)
- Fixed generate-site.mjs to match actual site structure (SolidJS, not React)
- Created shared color constants to eliminate hardcoded color duplication
- Added accessibility improvements (skip links, ARIA labels, focus styles)

---

## Phase 1: Stabilization (Week 1-2)

### Priority 1: CI/CD Verification

- [ ] Verify CI workflow runs successfully on GitHub Actions
- [ ] Verify deploy workflow deploys all 9 sites to Cloudflare Pages
- [ ] Update actions/checkout from v4 to v5 (Node.js 24 compatibility)
- [ ] Add deployment status badges to README

### Priority 2: Legacy Cleanup

- [ ] Create Cloudflare Transform Rules for legacy subdomains
- [ ] Remove custom domains from old CF Pages projects
- [ ] Delete old CF Pages projects after redirect verification

### Priority 3: Search Console

- [ ] Add domain property in Google Search Console
- [ ] Verify via DNS TXT record
- [ ] Submit sitemaps for all 9 sites
- [ ] Request indexing for key pages

---

## Phase 2: Content Quality (Week 2-4)

### Priority 1: Thin Content

- [ ] Expand 24 thin content pages (< 50 words) identified by linter
- [ ] Add "Prerequisites" sections to complex topics
- [ ] Add "Related Topics" cross-links between sites

### Priority 2: Component Fixes

- [ ] Fix DiagnosticTest adaptive algorithm (scores always empty)
- [ ] Split FlashcardDeck.tsx into smaller modules (836 lines)
- [ ] Split DiagnosticTest.tsx into smaller modules (602 lines)
- [ ] Remove inline styles from .tsx components, use CSS classes

### Priority 3: Content Enrichment

- [ ] Add practice quizzes to key topics using PracticeProblem.tsx
- [ ] Add interactive code examples (StackBlitz/CodeSandbox)
- [ ] Add "Last Updated" timestamps via git blame

---

## Phase 3: SEO and Discoverability (Week 4-6)

### Priority 1: On-Page SEO

- [ ] Add Open Graph images to all pages
- [ ] Optimize meta descriptions
- [ ] Add structured data (JSON-LD) to all site configs
- [ ] Verify robots.txt includes sitemap references

### Priority 2: Search Console

- [ ] Monitor crawl errors weekly
- [ ] Fix any 404 errors identified
- [ ] Submit new/updated pages for indexing

---

## Phase 4: Performance (Week 6-8)

### Priority 1: Caching

- [ ] Configure Cloudflare Page Rules for aggressive caching
- [ ] Add Cache-Control headers to static assets
- [ ] Verify warm TTFB < 1s for all sites

### Priority 2: Optimization

- [ ] Optimize image loading (WebP, lazy loading)
- [ ] Reduce JavaScript bundle size
- [ ] Preload critical resources

---

## Phase 5: Developer Experience (Week 8-10)

### Priority 1: Testing

- [ ] Add Playwright E2E tests for critical user flows
- [ ] Add visual regression tests (screenshot comparison)
- [ ] Add search API unit tests (mock KV)

### Priority 2: Documentation

- [ ] Add API reference for search endpoints
- [ ] Add component storybook for interactive components
- [ ] Add architecture decision records (ADRs)

---

## Phase 6: Advanced Features (Month 3+)

### Priority 1: Search

- [ ] Search result previews (page thumbnails)
- [ ] Search filters by subject/difficulty
- [ ] Search analytics dashboard improvements

### Priority 2: Content

- [ ] Dark/light theme toggle per site
- [ ] Print-friendly versions
- [ ] PDF export for offline study
- [ ] Bookmarking system

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 9/9 | 9/9 |
| Test coverage | 134 tests | 200+ tests |
| CI/CD pass rate | Unknown | >99% |
| Google indexed pages | Unknown | >500 |
| Monthly visitors | Unknown | >1000 |
| TTFB (all sites) | <3s | <1s |
| Search entries | 2013 | 2500+ |
| Accessibility | Partial | WCAG 2.1 AA |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-14 | Remove 6 dead components | Zero imports across all content files |
| 2026-06-14 | Consolidate CI to 2 workflows | 3 workflows caused 27+ redundant builds per push |
| 2026-06-14 | Use SolidJS (not React) | All existing .tsx components use SolidJS primitives |
| 2026-06-14 | Extract shared color constants | Hardcoded colors duplicated across 3+ components |
| 2026-06-14 | Add Husky pre-commit hooks | Enforce linting before every commit |
| 2026-06-12 | Use Starlight over Docusaurus | Better performance, modern features |
| 2026-06-12 | Use Cloudflare Pages | Free, fast, integrated with CF |
| 2026-06-12 | Use Cross-site search API | Unified search across 9 sites |
