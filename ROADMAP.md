# Roadmap — Wyatt's Notes

## Current State (June 2026)

### Infrastructure
- 9 Starlight sites deployed to Cloudflare Pages
- Landing page at wyattsnotes.wyattau.com
- Cross-site search API at search.wyattau.com
- CI/CD via GitHub Actions (build + deploy workflows)
- Uptime monitoring via GitHub Actions (every 6 hours)

### Sites
| Site | URL | Status |
|------|-----|--------|
| DSE | dse.wyattau.com | Live |
| IB | ib.wyattau.com | Live |
| A-Level | alevel.wyattau.com | Live |
| University | university.wyattau.com | Live |
| Qualifications | qualifications.wyattau.com | Live |
| Programming | programming.wyattau.com | Live |
| Infrastructure | infrastructure.wyattau.com | Live |
| Languages | languages.wyattau.com | Live |
| Tools | tools.wyattau.com | Live |

### Features
- Cross-site search with ranking algorithm
- A/B testing for search variants
- Edge caching for popular queries
- Analytics dashboard at search.wyattau.com
- Mermaid diagram support
- KaTeX math rendering
- Tabs and admonitions (Starlight components)
- Structured data (JSON-LD)
- Security headers (HSTS, X-Frame, etc.)
- Legacy redirects for old subdomains

---

## Phase 1: Immediate (This Week)

### Completed
- [x] Content validation scripts
- [x] Config validation scripts
- [x] CI workflow with linting
- [x] README documentation
- [x] UI audit screenshots

### Remaining
- [ ] Enable Cloudflare Web Analytics (manual)
- [ ] Submit sitemaps to Google Search Console (manual)

---

## Phase 2: Content Enhancement (Month 2)

### Priority 1: Content Quality
- [ ] Add practice quizzes to key topics
- [ ] Add interactive code examples (StackBlitz/CodeSandbox)
- [ ] Add progress tracking (localStorage)
- [ ] Add "Prerequisites" sections to complex topics

### Priority 2: Content Structure
- [ ] Add "Related Topics" cross-links between sites
- [ ] Add "Last Updated" timestamps to pages
- [ ] Add difficulty levels (Beginner/Intermediate/Advanced)
- [ ] Add video embeds for complex concepts

---

## Phase 3: SEO & Discoverability (Month 2)

### Priority 1: Search Console
- [ ] Submit all 9 sitemaps
- [ ] Request indexing for key pages
- [ ] Monitor crawl errors

### Priority 2: On-Page SEO
- [ ] Add breadcrumbs to all pages
- [ ] Optimize meta descriptions
- [ ] Add Open Graph images to all pages
- [ ] Create XML sitemaps with lastmod dates

---

## Phase 4: Performance (Month 3)

### Priority 1: Caching
- [ ] Configure Cloudflare Page Rules for aggressive caching
- [ ] Add Cache-Control headers to static assets
- [ ] Implement service worker for offline access

### Priority 2: Optimization
- [ ] Optimize image loading (WebP, lazy loading)
- [ ] Preload critical resources
- [ ] Reduce JavaScript bundle size

---

## Phase 5: Developer Experience (Month 3)

### Priority 1: Contributing
- [ ] Add issue templates for content corrections
- [ ] Add PR templates with checklist
- [ ] Add code owners for content areas
- [ ] Create content authoring guide

### Priority 2: Local Development
- [ ] Document local development setup
- [ ] Add pre-commit hooks for content validation
- [ ] Create content validation scripts

---

## Phase 6: Advanced Features (Month 3+)

### Priority 1: Search Enhancements
- [ ] Search result previews (page thumbnails)
- [ ] Search filters by subject/difficulty
- [ ] Search analytics dashboard improvements

### Priority 2: Content Features
- [ ] Dark/light theme toggle per site
- [ ] Print-friendly versions
- [ ] PDF export for offline study
- [ ] Bookmarking system

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Google indexed pages | Unknown | >500 |
| Monthly visitors | Unknown | >1000 |
| Bounce rate | Unknown | <50% |
| Average session | Unknown | >2 min |
| Search usage | Unknown | >100/month |
| TTFB (all sites) | <0.2s | <0.1s |
| Test coverage | 0% | >80% |

---

## Technical Debt

| Item | Priority | Effort |
|------|----------|--------|
| Add unit tests for search API | Medium | 4 hours |
| Add integration tests for CI/CD | Medium | 2 hours |
| Add E2E tests for all sites | Low | 8 hours |
| Optimize build times | Low | 4 hours |
| Add TypeScript strict mode | Low | 2 hours |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-12 | Use Starlight over Docusaurus | Better performance, modern features |
| 2026-06-12 | Use Cloudflare Pages for hosting | Free, fast, integrated with CF |
| 2026-06-12 | Use Pagefind for search | Zero-config, fast, free |
| 2026-06-12 | Use astro-mermaid for diagrams | Official Starlight integration |
| 2026-06-12 | Use KV for search index | Fast, scalable, free tier |

---

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| CF Pages outage | All sites down | Low | CF has 99.99% SLA |
| Search API failure | No search | Low | KV caching, fallback to per-site |
| Build failure | Deploy blocked | Medium | CI validation, retry logic |
| Content drift | Inaccurate notes | Low | Contributing guidelines, reviews |
| Performance degradation | Slow sites | Low | Monitoring, optimization |
