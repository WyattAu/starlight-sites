---
title: "Definition of Done"
description: "Formal criteria for completing work on Wyatt's Notes — prevents scope creep and ensures quality."
---

# Definition of Done

**Version:** 1.0
**Date:** 2026-08-28
**Owner:** Wyatt Au

---

## Purpose

This document defines the formal criteria for completing work on Wyatt's Notes. It prevents scope creep, ensures consistent quality, and provides a clear checklist for every phase of development.

---

## Per-Phase Completion Criteria

Every phase must satisfy ALL of the following before being marked complete:

### Code Quality
- [ ] All Biome lint checks pass (`bun run lint`)
- [ ] All content lint checks pass (`bun run lint:content`)
- [ ] All config parity checks pass (`bun run lint:config-parity`)
- [ ] No TypeScript errors (`bun run typecheck`)
- [ ] No secrets detected (`bun run lint:secrets`)

### Testing
- [ ] All vitest unit tests pass (289+ tests)
- [ ] All node:test integration tests pass (526+ tests)
- [ ] E2E test configs are valid
- [ ] No visual regressions (screenshot comparison)
- [ ] No accessibility violations (axe-core)

### Accessibility
- [ ] WCAG AA compliant (4.5:1 contrast minimum)
- [ ] Skip link present and functional
- [ ] Full keyboard navigation
- [ ] Screen reader compatible
- [ ] Reduced motion supported

### Performance
- [ ] Lighthouse score ≥ 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 300ms

### Visual Consistency
- [ ] All 10 themes render correctly
- [ ] No broken layouts at any viewport
- [ ] Consistent component styling
- [ ] Animations respect prefers-reduced-motion

### Documentation
- [ ] Starlight docs complete and accurate
- [ ] All code examples work
- [ ] All screenshots up-to-date

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile
- [ ] Responsive at 375px (iPhone SE)
- [ ] Responsive at 768px (iPad)
- [ ] Responsive at 1280px (desktop)
- [ ] Touch targets ≥ 44px
- [ ] No horizontal scrolling

---

## Overall Project Completion Criteria

### SEO
- [ ] All technical SEO fixes deployed and verified
- [ ] A11Y016 (lang attribute) confirmed fixed on live sites
- [ ] HREF003/ISEO003 (duplicate hreflang) confirmed fixed
- [ ] All broken links resolved (0 LINK002)
- [ ] All 404 pages resolved (0 HTTP004)

### Content Quality
- [ ] All pages meet tier minimums (3,194/3,194)
- [ ] All descriptions unique (no templated boilerplate)
- [ ] 664 capitalisation-corrupted files fixed
- [ ] 1,030 templated descriptions regenerated
- [ ] Stub sites expanded to 50-150 quality pages each

### Images
- [ ] Top-500 pages have Mermaid/SVG diagrams
- [ ] All diagrams render correctly
- [ ] Images optimized (WebP, lazy loading)

### Security
- [ ] CSP headers on all sites (nonce-based)
- [ ] Rate limiting active on search API
- [ ] CORS restricted to wyattau.com
- [ ] No unsafe-inline in production CSP

### Performance
- [ ] Lighthouse score ≥ 90 on all sites
- [ ] Core Web Vitals pass
- [ ] Bundle size within budget
- [ ] No performance regressions

### Internal Linking
- [ ] Subject hub pages created
- [ ] "Related Content" on all pages
- [ ] No broken internal links
- [ ] Cross-site linking active

### LLM SEO
- [ ] AI bot access verified (robots.txt)
- [ ] Structured definitions on key pages
- [ ] FAQ schema on study guides
- [ ] VideoObject schema on tutorials

### E-E-A-T
- [ ] Author/about page complete
- [ ] Author metadata on all pages
- [ ] Teaching credentials visible
- [ ] Wyatt Au identity consistent

---

## Change Control Process

### New Features
1. Add to roadmap with description
2. Estimate effort (hours/days)
3. Get approval before starting
4. Create implementation plan
5. Execute with tests
6. Verify against DoD

### Bug Fixes
- **< 1 day:** Fix immediately
- **> 1 day:** Add to roadmap, estimate, approve

### Scope Expansion
1. Document the change
2. Re-estimate timeline
3. Get approval
4. Update roadmap

### Timeline Changes
1. Document the reason
2. Propose new timeline
3. Get stakeholder approval
4. Update roadmap

---

## Quality Gates

### Pre-Commit
- Biome lint passes
- No secrets detected
- Shared assets in sync

### Pre-Deploy
- All vitest tests pass
- All node:test tests pass
- Config parity passes
- Typecheck passes

### Post-Deploy
- Smoke tests pass
- Core Web Vitals monitored
- No error spikes

---

## Review Schedule

| Review | Frequency | Participants |
|--------|-----------|--------------|
| Code review | Every PR | Wyatt Au |
| Phase review | End of each week | Wyatt Au |
| Sprint review | End of each 2-week sprint | Wyatt Au |
| Retrospective | End of each 4-week cycle | Wyatt Au |

---

*This document is the single source of truth for completion criteria. All work must satisfy these criteria before being marked complete.*
