# Path Forward & Roadmap Discussion

**Date:** 2026-06-17  
**Status:** Post-refactor analysis  
**Context:** Completed Phase 1-3 of frontend refactor

---

## What Was Accomplished

### Completed (Phase 1-3)
| Phase | Outcome |
|-------|---------|
| Dependency cleanup | Removed 6 unused packages (corvu, solid-motion, 4 @solid-primitives/*), net -4 packages |
| Animation consolidation | Fixed broken `animate.ts` import, consolidated on AutoAnimate |
| i18n upgrade | Migrated from custom `t()` to `@solid-primitives/i18n` with reactive translations |
| Build optimization | Added `astro-compress` to all 10 sites |
| Testing | Fixed missing `animate` import in components, 120/121 tests pass |

### Current State
- **Stack:** Astro v5.5+ / SolidJS v1.9+ / Starlight / Tailwind v4 / Bun
- **Tests:** 120/121 passing (1 pre-existing test bug)
- **Sites:** 10 sites (9 Starlight + 1 custom landing page)
- **Components:** 10 shared SolidJS components, synced to all sites

---

## Opportunity Map

### 1. Component Architecture (High Value, Medium Effort)

**Current:** Shared components in `/shared/components/`, synced to each site via `scripts/sync-shared.mjs`

**Opportunity:** The sync script works but has limitations:
- Each site gets a full copy (no deduplication)
- No versioning per component
- No shared state across sites (by design)
- Adding a new component requires manual sync

**Options:**
| Option | Pros | Cons | Effort |
|--------|------|------|--------|
| **Keep sync script** | Simple, explicit, each site builds standalone | Duplication, manual sync | 0 |
| **Bun workspace imports** | Single source of truth, no sync needed | Sites can't build standalone, tight coupling | 2-3 days |
| **Shared component package** | Versioned, publishable, proper monorepo | Build complexity, more config | 1-2 weeks |

**Recommendation:** Keep sync script for now. It's working and the sites need to build standalone for Cloudflare deployment. Revisit if component count grows beyond ~15.

---

### 2. State Management (Low Value, Low Effort)

**Current:** SolidJS signals for all component state. No cross-component state needs.

**Opportunity:** If you add features that share state across components (e.g., user preferences, global settings, cross-site navigation state), you'll need a state manager.

**Options:**
| Tool | When to Add | Effort |
|------|-------------|--------|
| **@nanostores/solid** | Need shared state across islands | 1-2 days |
| **Zustand** | Complex app-like state | 3-5 days |
| **Do nothing** | Current architecture doesn't need it | 0 |

**Recommendation:** Don't add until you have a concrete use case. Current signal-based architecture is clean and sufficient.

---

### 3. Search Enhancement (Medium Value, Medium Effort)

**Current:** Custom Cloudflare Worker + Pagefind indexes + client-side search scripts

**Opportunity:** The search infrastructure is solid but the UI could be improved:
- Current: Basic search input with results dropdown
- Could add: Keyboard shortcuts, search history, faceted search, search suggestions

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **Keyboard shortcut (Cmd+K)** | High | 1-2 hours |
| **Search history (localStorage)** | Medium | 2-3 hours |
| **Faceted search (by site)** | Medium | 1-2 days |
| **Search suggestions** | Low | 2-3 days |

**Recommendation:** Add Cmd+K shortcut first (quick win), then evaluate if faceted search is needed.

---

### 4. i18n Expansion (High Value, High Effort)

**Current:** English active, Chinese translations defined but disabled. 6 other locales defined but empty.

**Opportunity:** The new i18n system is ready for expansion. The question is: which locales to enable?

**Options:**
| Locale | Audience | Effort | Priority |
|--------|----------|--------|----------|
| **Chinese (zh)** | Hong Kong DSE students | 1 day (translations exist) | High |
| **Japanese (ja)** | Japanese students | 1-2 weeks | Medium |
| **Korean (ko)** | Korean students | 1-2 weeks | Medium |
| **Spanish (es)** | Spanish-speaking students | 1-2 weeks | Low |
| **Arabic (ar)** | Arabic-speaking students (RTL) | 2-3 weeks (RTL support) | Low |

**Recommendation:** Enable Chinese first (translations already exist). Add locale switching UI to Starlight sites. Defer other locales until user demand justifies it.

---

### 5. Performance Monitoring (Medium Value, Low Effort)

**Current:** No performance monitoring. Sites are fast by default (static + Astro).

**Opportunity:** Add lightweight performance tracking to catch regressions.

**Options:**
| Tool | Value | Effort |
|------|-------|--------|
| **Web Vitals (web-vitals library)** | High | 2-3 hours |
| **Cloudflare Web Analytics** | Medium | 1 hour |
| **Custom performance marks** | Low | 4-6 hours |

**Recommendation:** Add Cloudflare Web Analytics (zero-cost, one-line add) + Web Vitals library for Core Web Vitals tracking.

---

### 6. Testing Improvements (Medium Value, Medium Effort)

**Current:** 120/121 tests pass. Vitest for components, Playwright for E2E.

**Opportunity:** Test coverage could be improved:
- Component tests: ~80% coverage
- Integration tests: Basic sync/build tests
- E2E tests: Smoke tests only

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **Fix pre-existing test bug** | Low | 15 min |
| **Add visual regression (Playwright snapshots)** | High | 1-2 days |
| **Add accessibility testing (axe-core)** | High | 1 day |
| **Add performance budgets (Lighthouse CI)** | Medium | 1 day |

**Recommendation:** Fix the test bug, then add accessibility testing (axe-core) since you have interactive components.

---

### 7. SEO & Discoverability (Low Value, Low Effort)

**Current:** astro-seo + sitemap + structured data in head

**Opportunity:** Add more structured data for better search engine visibility.

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **JSON-LD for educational content** | Medium | 2-3 hours |
| **Open Graph image generation** | Low | 4-6 hours |
| **Canonical URLs** | Low | 1 hour |

**Recommendation:** Add JSON-LD for educational content (Course, Article schemas). Low effort, high SEO value.

---

### 8. Accessibility (High Value, Medium Effort)

**Current:** Basic ARIA support in components. Keyboard navigation works.

**Opportunity:** Interactive components (FlashcardDeck, DiagnosticTest, PracticeProblem) could benefit from more thorough accessibility.

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **Add axe-core automated testing** | High | 1 day |
| **Keyboard navigation audit** | High | 1-2 days |
| **Screen reader testing** | High | 2-3 days |
| **Color contrast verification** | Medium | 2-3 hours |

**Recommendation:** Add axe-core to test suite first (automated, catches regressions). Then do manual keyboard/screen reader audit.

---

### 9. Content Pipeline (Low Value, Medium Effort)

**Current:** MDX content in each site's `content/` directory. Manual authoring.

**Opportunity:** If content volume grows, consider:
- CMS integration (Notion, Sanity, etc.)
- Automated content validation
- Content versioning

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **Notion as CMS (astro-loader-notion)** | Medium | 2-3 days |
| **Content validation pipeline** | Medium | 1-2 days |
| **Automated translation pipeline** | Low | 1 week |

**Recommendation:** Keep manual MDX authoring for now. CMS adds complexity. Revisit if content team grows.

---

### 10. Deployment & CI/CD (Low Value, Low Effort)

**Current:** GitHub Actions + Cloudflare Pages. Builds all 10 sites in parallel.

**Opportunity:** Add preview deployments for PRs.

**Options:**
| Enhancement | Value | Effort |
|-------------|-------|--------|
| **Cloudflare preview deployments** | Medium | 2-3 hours |
| **PR comment with preview URL** | Low | 1-2 hours |
| **Automated Lighthouse checks** | Medium | 1 day |

**Recommendation:** Add Cloudflare preview deployments for PRs. Quick win for review process.

---

## Prioritized Roadmap

### Tier 1: Quick Wins (1-2 days total)
| # | Task | Effort | Value |
|---|------|--------|-------|
| 1 | Fix pre-existing test bug | 15 min | Low |
| 2 | Add Cmd+K keyboard shortcut to search | 2 hours | High |
| 3 | Add Cloudflare Web Analytics | 1 hour | Medium |
| 4 | Add axe-core accessibility testing | 1 day | High |

### Tier 2: Medium Improvements (1-2 weeks)
| # | Task | Effort | Value |
|---|------|--------|-------|
| 5 | Enable Chinese locale + locale switching UI | 2-3 days | High |
| 6 | Add JSON-LD structured data for educational content | 1 day | Medium |
| 7 | Add visual regression testing (Playwright snapshots) | 2 days | High |
| 8 | Add Cloudflare preview deployments | 1 day | Medium |

### Tier 3: Future Consideration (When Needed)
| # | Task | Effort | Value | Trigger |
|---|------|--------|-------|---------|
| 9 | Expand to other locales (ja, ko, es) | 1-2 weeks each | Medium | User demand |
| 10 | Add Web Vitals tracking | 1 day | Medium | Performance regression |
| 11 | CMS integration (Notion) | 2-3 days | Low | Content team grows |
| 12 | Component library package | 1-2 weeks | Low | >15 shared components |

---

## Technical Debt to Address

### Pre-existing Issues Found During Refactor
| Issue | Severity | Effort |
|-------|----------|--------|
| Test expects "Statistics" but component renders "Stats" | Low | 15 min |
| `animate.ts` import was broken (wrong named export) | Medium | Fixed |
| Missing `animate` import in FlashcardDeck and DiagnosticTest | Medium | Fixed |

### Architecture Considerations
| Consideration | Status | Action |
|---------------|--------|--------|
| Monorepo works well | Stable | No action |
| Sync script is simple but effective | Stable | No action |
| Component coupling is low | Good | No action |
| i18n system is now reactive | Good | Ready for expansion |

---

## Decision Points

### When to Add State Management
**Trigger:** When you need shared state across 3+ components that aren't parent-child.  
**Signal:** Prop drilling becomes painful, or you need global settings.  
**Action:** Add `@nanostores/solid` (lightweight, framework-agnostic).

### When to Add CMS
**Trigger:** When content authoring becomes a bottleneck, or non-technical contributors need access.  
**Signal:** MDX file editing is too technical for content creators.  
**Action:** Evaluate Notion + `@luanroger/notion-astro-loader`.

### When to Expand Locales
**Trigger:** When you have >100 pages translated, or user feedback demands it.  
**Signal:** Chinese translations are complete and tested.  
**Action:** Enable Chinese locale, add locale switcher to Starlight header.

### When to Build Component Library
**Trigger:** When shared components exceed 15, or you need to publish/share them.  
**Signal:** Sync script becomes a bottleneck.  
**Action:** Create `@wyattsnotes/components` package with proper versioning.

---

## Summary

**Current state:** Modern, clean, well-tested stack. No urgent issues.

**Immediate opportunities (Tier 1):**
1. Fix test bug
2. Add Cmd+K search shortcut
3. Add analytics
4. Add accessibility testing

**Medium-term (Tier 2):**
1. Enable Chinese locale
2. Add structured data
3. Add visual regression testing
4. Add preview deployments

**Long-term (Tier 3):**
1. Expand locales
2. Add performance monitoring
3. Consider CMS if content grows
4. Consider component library if components grow

**Key principle:** Don't add complexity until you have a concrete need. The current architecture is clean and maintainable. Optimize for simplicity first.

---

*This document should be reviewed quarterly or when project needs change significantly.*
