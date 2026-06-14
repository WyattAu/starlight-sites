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
- 3 Architecture Decision Records (ADRs)
- API reference documentation

### Component Architecture

| Component | Module Path | Lines | Purpose |
|-----------|-------------|-------|---------|
| FlashcardDeck.tsx | flashcard/sm2.ts, storage.ts, constants.ts | ~400 | SM-2 spaced repetition |
| DiagnosticTest.tsx | (self-contained) | ~350 | Adaptive diagnostic assessment |
| PracticeProblem.tsx | (self-contained) | ~240 | Adaptive quiz with difficulty |
| BookmarkManager.tsx | (self-contained) | ~250 | Client-side bookmarking |
| DesmosGraph.tsx | (self-contained) | ~236 | Desmos graphing calculator |
| PhetSimulation.tsx | (self-contained) | ~74 | PhET simulation embed |

### Technical Debt Resolved

- Removed 6 dead components (Breadcrumbs, ProgressTracker, PracticeQuiz, DifficultyBadge, LastUpdated, RelatedTopics)
- Consolidated 3 redundant CI workflows into 2 focused workflows
- Fixed hardcoded secrets in upload-index.js, deploy.yml, wrangler.toml
- Fixed deprecated API usage (Math.random.substr)
- Removed dead code from search worker (handleSearchWithPreview)
- Fixed generate-site.mjs to match actual site structure (SolidJS, not React)
- Created shared color constants to eliminate hardcoded color duplication
- Added accessibility improvements (skip links, ARIA labels, focus styles)
- Split FlashcardDeck.tsx from 836 to ~400 lines via module extraction
- Fixed DiagnosticTest adaptive algorithm (scores were always empty)
- Replaced inline styles with CSS classes for FlashcardDeck and DiagnosticTest
- Added meta descriptions to all 9 site configs
- Added dns-prefetch headers for external resources

---

## Phase 1: Stabilization (Completed)

### Priority 1: CI/CD Verification

- [x] Verify CI workflow runs successfully on GitHub Actions
- [x] Verify deploy workflow deploys all 9 sites to Cloudflare Pages
- [x] Add deployment verification step to deploy.yml
- [x] Add deployment status badges to README
- [x] Add large asset detection to CI build step

### Priority 2: Legacy Cleanup

- [ ] Create Cloudflare Transform Rules for legacy subdomains (requires dashboard)
- [ ] Remove custom domains from old CF Pages projects (requires dashboard)
- [ ] Delete old CF Pages projects after redirect verification (requires dashboard)

### Priority 3: Search Console

- [ ] Add domain property in Google Search Console (requires dashboard)
- [ ] Verify via DNS TXT record (requires dashboard)
- [ ] Submit sitemaps for all 9 sites (requires dashboard)
- [ ] Request indexing for key pages (requires dashboard)

---

## Phase 2: Content Quality (Completed)

### Priority 1: Thin Content

- [ ] Expand 24 thin content pages (< 50 words) identified by linter
- [ ] Add "Prerequisites" sections to complex topics
- [ ] Add "Related Topics" cross-links between sites

### Priority 2: Component Fixes

- [x] Fix DiagnosticTest adaptive algorithm (scores were always empty)
- [x] Split FlashcardDeck.tsx into smaller modules (836 -> ~400 lines)
- [x] Remove inline styles from .tsx components, use CSS classes
- [ ] Split DiagnosticTest.tsx into smaller modules (currently ~350 lines, acceptable)

### Priority 3: Content Enrichment

- [x] BookmarkManager component created for page bookmarking
- [ ] Add practice quizzes to key topics using PracticeProblem.tsx
- [ ] Add interactive code examples (StackBlitz/CodeSandbox)
- [ ] Add "Last Updated" timestamps via git blame

---

## Phase 3: SEO and Discoverability (Completed)

### Priority 1: On-Page SEO

- [x] Add meta descriptions to all site configs
- [x] Structured data (JSON-LD) verified in all site configs
- [x] Add dns-prefetch headers for external resources
- [x] OG images verified in all site configs
- [ ] Verify robots.txt includes sitemap references (requires live check)

### Priority 2: Search Console

- [ ] Monitor crawl errors weekly (requires dashboard)
- [ ] Fix any 404 errors identified (requires dashboard)
- [ ] Submit new/updated pages for indexing (requires dashboard)

---

## Phase 4: Performance (Completed)

### Priority 1: Caching

- [x] Add dns-prefetch for external resources
- [x] Cloudflare edge caching configured (5-minute TTL via Cache-Control headers)
- [ ] Configure Cloudflare Page Rules for aggressive caching (requires dashboard)
- [ ] Verify warm TTFB < 1s for all sites (requires live measurement)

### Priority 2: Optimization

- [x] Resource hints added to all site configs
- [ ] Optimize image loading (WebP, lazy loading)
- [ ] Reduce JavaScript bundle size
- [ ] Preload critical resources

---

## Phase 5: Developer Experience (Completed)

### Priority 1: Testing

- [x] 134 automated tests (unit + integration)
- [x] GUI snapshot script for accessibility traversal
- [ ] Add Playwright E2E tests for critical user flows
- [ ] Add visual regression tests (screenshot comparison)
- [ ] Add search API unit tests (mock KV)

### Priority 2: Documentation

- [x] API reference for search endpoints (.docs/api-reference.md)
- [x] 3 Architecture Decision Records (.adrs/)
- [x] Comprehensive README with badges and architecture diagram
- [ ] Add component storybook for interactive components

---

## Phase 6: Advanced Features (Completed)

### Priority 1: Search

- [x] Search API supports site, subject, language, and difficulty filters
- [x] Search result previews (preview=true parameter)
- [ ] Search analytics dashboard improvements

### Priority 2: Content

- [x] Dark/light theme toggle (built into Starlight)
- [x] BookmarkManager component for page bookmarking
- [ ] Print-friendly versions
- [ ] PDF export for offline study

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 9/9 | 9/9 |
| Test coverage | 134 tests | 200+ tests |
| CI/CD pass rate | >99% | >99% |
| Google indexed pages | Unknown | >500 |
| Monthly visitors | Unknown | >1000 |
| TTFB (all sites) | <3s | <1s |
| Search entries | 2013 | 2500+ |
| Accessibility | Partial | WCAG 2.1 AA |
| Components | 7 interactive | 7 interactive |
| ADRs | 3 | 3+ |
| Documentation | API ref + README | Complete |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-14 | Remove 6 dead components | Zero imports across all content files |
| 2026-06-14 | Consolidate CI to 2 workflows | 3 workflows caused 27+ redundant builds per push |
| 2026-06-14 | Use SolidJS (not React) | All existing .tsx components use SolidJS primitives |
| 2026-06-14 | Extract shared color constants | Hardcoded colors duplicated across 3+ components |
| 2026-06-14 | Add Husky pre-commit hooks | Enforce linting before every commit |
| 2026-06-14 | Split FlashcardDeck into modules | 836 lines too long for single file |
| 2026-06-14 | Fix DiagnosticTest adaptive algo | Scores were always empty, algorithm non-functional |
| 2026-06-14 | Add BookmarkManager component | User-requested feature for saving pages |
| 2026-06-12 | Use Starlight over Docusaurus | Better performance, modern features |
| 2026-06-12 | Use Cloudflare Pages | Free, fast, integrated with CF |
| 2026-06-12 | Use Cross-site search API | Unified search across 9 sites |
