# Frontend & GUI Refactor Analysis

> **Date:** 2026-06-17
> **Status:** Analysis Complete — Awaiting Decision
> **Scope:** Full GUI and frontend architecture review for the starlight-sites monorepo

---

## 1. Current Stack Assessment

| Layer | Current | Version | Verdict |
|-------|---------|---------|---------|
| **Meta-Framework** | Astro + Starlight | 5.5.4 / 0.32.2 | Solid — keep |
| **UI Framework** | SolidJS (island hydration) | 1.9.13 | Solid — keep |
| **Styling** | Tailwind CSS v4 | 4.3.1 | Current — keep |
| **Headless UI** | Kobalte | 0.13.11 | Active — evaluate corvu |
| **Forms** | Felte | 1.4.4 | Active — evaluate Modular Forms |
| **Primitives** | solid-primitives (keyboard, media, utils) | 1.3.5 / 2.3.5 / 6.4.0 | Current — expand |
| **Icons** | unplugin-icons + Lucide | 23.0.1 | Good — keep |
| **Package Mgr** | Bun | 1.2+ | Current — keep |
| **Linter** | Biome | 2.5.0 | Current — keep |
| **Testing** | Vitest + Playwright + Node test runner | 4.1.9 / 1.61.0 | Good — keep |
| **Deployment** | Cloudflare Pages | — | Good — keep |
| **Landing Page** | Plain static HTML | — | **Migrate to Astro** |

### Strengths

- SolidJS choice is excellent (ADR-002): ~1.5KB gzipped vs ~42KB React
- Tailwind v4 CSS-first config is the modern approach
- Biome over ESLint+Prettier is the right call for 2026
- Island hydration means zero JS shipped for static content
- Shared component sync pattern is well-tested

### Weaknesses

1. **Landing page (`main`)** is plain HTML with inline CSS — no framework, no reuse, no type safety
2. **No animation library** — only basic CSS transitions
3. **No toast/notification system** — user feedback is ad-hoc
4. **No structured state management** — flashcards use raw localStorage
5. **Component primitives are thin** — only Kobalte Dialog, no other headless components
6. **No SEO meta management** — missing structured data, Open Graph, JSON-LD
7. **No form validation library** on the Felte core (only `@felte/core`, not the validator plugin)
8. **Content Layer API not utilized** — still using older markdown glob patterns

---

## 2. Package Evaluation

### 2.1 Meta-Framework: Stay on Astro + Starlight

**Recommendation: NO MIGRATION**

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Astro + Starlight** (current) | Content-focused, zero-JS default, Starlight is best-in-class docs theme, official Solid integration | Multi-framework overhead (unused) | **Keep** |
| SolidStart | Native Solid, full-stack | No Starlight equivalent, would rebuild docs theme from scratch, ecosystem smaller | Rejected |
| Next.js | RSC, large ecosystem | React overhead, not content-first, no Starlight | Rejected |
| SvelteKit | Compile-time, fast | Would require rewriting all Solid components | Rejected |
| TanStack Start | Type-safe, streaming | Too new, no docs framework, React-based | Rejected |

**Rationale:** Starlight is the single best documentation framework available. The SolidJS island integration means we get fine-grained reactivity where needed without sacrificing the content-first architecture. Migrating to SolidStart would mean losing Starlight and rebuilding the entire documentation layer.

### 2.2 Headless UI: Kobalte → Evaluate corvu

**Recommendation: SELECTIVE MIGRATION to corvu**

| Option | Bundle Size | Components | Accessibility | Active | Solid-native |
|--------|------------|------------|---------------|--------|--------------|
| **Kobalte** (current) | ~8KB | Dialog, Popover, Select, etc. | WCAG 2.1 | Yes | Yes |
| **corvu** | ~3KB tree-shaken | Dialog, Popover, Select, Tooltip, etc. | WCAG 2.1 | Highly active | Yes |
| Ark UI (Solid) | ~12KB | Full suite | WCAG 2.1 | Yes | Via Zag.js |
| Suid (MUI port) | ~40KB+ | Material Design | Varies | Yes | Yes |

**Rationale:** corvu is built natively for Solid (not a wrapper), has smaller bundle size, and is more actively maintained in 2026. However, Kobalte is stable and working. **Migration is optional — do it incrementally when adding new components, not as a big-bang rewrite.**

### 2.3 Forms: Felte → Evaluate Modular Forms

**Recommendation: KEEP Felte, add validator plugin**

| Option | Type Safety | Bundle Size | Solid-native | Validation |
|--------|------------|-------------|--------------|------------|
| **Felte** (current) | Good | ~3KB | Yes | Needs `@felte/validator-zod` |
| **Modular Forms** | Excellent | ~4KB | Yes | Built-in |
| Solid Form Handler | Basic | ~2KB | Yes | Basic |

**Rationale:** Felte is the community standard. Add `@felte/validator-zod` with Zod schemas for proper validation. Modular Forms is excellent but switching provides marginal benefit for the migration cost.

### 2.4 Animation: ADD Solid Motion + AutoAnimate

**Recommendation: ADD both**

| Option | Use Case | Bundle Size | Performance |
|--------|----------|-------------|-------------|
| **AutoAnimate** | List/layout transitions (zero-config) | ~2KB | Excellent |
| **Solid Motion** | Complex choreographed animations | ~15KB | Excellent (Web Animations API) |
| Solid Transition Group | Basic enter/exit | ~1KB | Good |
| StyleX | CSS-only animations | 0KB runtime | Excellent |

**Rationale:** AutoAnimate for zero-config list animations (flashcard deck, question lists). Solid Motion for complex interactions (dialog transitions, results reveals). Both use the Web Animations API, no runtime overhead.

### 2.5 Toast/Notifications: ADD Solid Sonner

**Recommendation: ADD**

| Option | Style | Bundle Size | Active |
|--------|-------|-------------|--------|
| **Solid Sonner** | Modern, clean | ~3KB | Highly active |
| Solid Toast | Basic | ~2KB | Stable |
| Hope UI Toast | Styled | ~5KB | Active |

**Rationale:** Solid Sonner is the community standard for toast notifications. Clean API, modern design, non-intrusive. Essential for user feedback on flashcard saves, settings changes, and error states.

### 2.6 State Management: ADD Solid Primitives Store

**Recommendation: ADD for flashcard state**

| Option | Use Case | Bundle Size | Complexity |
|--------|----------|-------------|------------|
| **solid-primitives/store** | Structured reactive state | ~2KB (already included) | Low |
| solid-zustand | External store integration | ~4KB | Medium |
| Nanostores (Solid) | Cross-framework state | ~1KB | Low |
| Jotai (Solid) | Atomic state | ~3KB | Medium |

**Rationale:** The flashcard system currently uses raw `localStorage` reads. Using `@solid-primitives/store` (already a dependency) with a structured store pattern would provide proper reactivity, persistence, and cleaner code. No need for Zustand/Jotai — this is local component state, not global state.

### 2.7 SEO: ADD astro-seo + astro-seo-graph

**Recommendation: ADD**

| Option | Features | Maintenance |
|--------|----------|-------------|
| **astro-seo** | OG tags, canonical, basic structured data | Active |
| **astro-seo-graph** | JSON-LD, by Joast de Valk (Yoast creator) | Active |
| Astro built-in `<Head>` | Basic meta | Built-in |

**Rationale:** Critical for discoverability. JSON-LD structured data helps search engines understand educational content. Open Graph tags improve social sharing. Both are lightweight additions.

### 2.8 Content Layer: Migrate to Content Layer API

**Recommendation: MIGRATE (Astro 5+ feature)**

The project uses Astro 5.5.4 which supports the Content Layer API. Currently, content is queried via older glob patterns. Migrating to Content Layer loaders provides:
- Type-safe content queries
- Better performance (caching, incremental builds)
- Remote content source support
- Standardized content schemas

### 2.9 Landing Page: Migrate `main` to Astro

**Recommendation: MIGRATE**

The `main` site is plain static HTML with inline CSS. This should be an Astro site like the others. Benefits:
- Reuse shared components (breadcrumbs, progress tracking)
- Tailwind CSS instead of inline styles
- Type safety
- Consistent build pipeline
- SEO meta management

### 2.10 Utilities: Radash over Lodash-es

**Recommendation: ADD Radash, DROP Lodash**

| Option | Bundle Size | Type Safety | Tree-shakeable |
|--------|-------------|-------------|----------------|
| **Radash** | ~2KB | Excellent | Yes |
| Lodash-es | ~15KB | Poor | Partial |
| Native JS | 0KB | Varies | N/A |

**Rationale:** Radash is a modern, type-safe Lodash alternative. For the few utility functions used (if any), Radash is smaller and fully typed.

---

## 3. What NOT to Migrate

| Package | Why Keep |
|---------|----------|
| **Astro + Starlight** | Best docs framework, no equivalent in Solid ecosystem |
| **SolidJS** | Already optimal (ADR-002) |
| **Tailwind CSS v4** | Current, CSS-first config is the standard |
| **Biome** | Fastest linter, replaces ESLint+Prettier |
| **Vitest** | Vite-native, fast, good Solid support |
| **Playwright** | Industry standard E2E |
| **Bun** | Fast package manager |
| **unplugin-icons** | Best icon solution |
| **Kobalte** | Stable, accessible — migrate to corvu incrementally |
| **Felte** | Community standard — add validator plugin |
| **Cloudflare Pages** | Good deployment target |

---

## 4. Migration Roadmap

### Phase 1: Foundation (Low Risk, High Value)

**Duration:** 1-2 days
**Risk:** Low

| Task | Effort | Impact |
|------|--------|--------|
| Add `@felte/validator-zod` + Zod for form validation | Low | High |
| Add `solid-sonner` for toast notifications | Low | High |
| Add `@formkit/auto-animate` for list animations | Low | Medium |
| Add `astro-seo` + `astro-seo-graph` for SEO | Low | High |

**Verification:**
- Flashcard settings form validates inputs
- Toast appears on save/error
- Flashcard list animates on reorder
- SEO meta tags present on all pages

### Phase 2: Landing Page Migration (Medium Risk)

**Duration:** 1-2 days
**Risk:** Medium

| Task | Effort | Impact |
|------|--------|--------|
| Create `sites/main/` as Astro project | Medium | High |
| Migrate HTML content to Astro components | Medium | High |
| Replace inline CSS with Tailwind | Medium | High |
| Add SEO meta tags | Low | High |
| Update deploy workflow | Low | Medium |

**Verification:**
- Landing page renders identically
- Build succeeds
- Deploy to Cloudflare Pages works
- Lighthouse score maintained or improved

### Phase 3: Component Library Expansion (Low Risk)

**Duration:** 2-3 days
**Risk:** Low

| Task | Effort | Impact |
|------|--------|--------|
| Add corvu Dialog (replace Kobalte Dialog incrementally) | Low | Medium |
| Add Solid Motion for dialog transitions | Low | Medium |
| Add `solid-primitives/store` for flashcard state | Medium | High |
| Refactor FlashcardDeck to use structured store | Medium | High |

**Verification:**
- All existing component tests pass
- New store-based flashcard persistence works
- Dialog transitions are smooth
- Bundle size impact measured

### Phase 4: Content Layer Migration (Medium Risk)

**Duration:** 2-3 days
**Risk:** Medium

| Task | Effort | Impact |
|------|--------|--------|
| Create Content Layer loaders for each site | Medium | Medium |
| Migrate content schemas to Content Layer API | Medium | Medium |
| Update content queries | Medium | Medium |
| Test all content renders correctly | Medium | High |

**Verification:**
- All content pages render
- Type safety improved
- Build times measured (should not regress)
- Content hot-reload works

### Phase 5: Advanced Interactions (Low Risk)

**Duration:** 1-2 days
**Risk:** Low

| Task | Effort | Impact |
|------|--------|--------|
| Add `@tanstack/solid-virtual` for large flashcard lists | Low | Medium |
| Add `solid-markdown` for dynamic content rendering | Low | Low |
| Add `@solid-primitives/i18n` for i18n (replace current config) | Medium | Medium |
| Standardize icon usage across all components | Low | Low |

**Verification:**
- Large flashcard lists virtualize correctly
- Markdown renders properly
- i18n works for enabled locales
- Icons consistent across all components

### Phase 6: Testing & Quality (Low Risk)

**Duration:** 1 day
**Risk:** Low

| Task | Effort | Impact |
|------|--------|--------|
| Add component tests for new components | Medium | High |
| Update Playwright tests for landing page | Low | Medium |
| Add visual regression tests for new UI | Low | Medium |
| Update CI pipeline if needed | Low | Low |

**Verification:**
- All tests pass
- Coverage maintained or improved
- CI pipeline runs successfully

---

## 5. Dependency Impact Summary

### New Dependencies (Root)

```json
{
  "@felte/validator-zod": "^1.1.3",
  "zod": "^3.24.0",
  "solid-sonner": "^0.5.0",
  "@formkit/auto-animate": "^0.8.2",
  "astro-seo": "^0.2.0",
  "@jdevalk/astro-seo-graph": "^0.1.0",
  "@solid-primitives/store": "^3.0.0",
  "corvu": "^0.5.0",
  "solid-motion": "^0.1.0"
}
```

### New Dependencies (Per-site)

```json
{
  "astro-seo": "^0.2.0",
  "@jdevalk/astro-seo-graph": "^0.1.0"
}
```

### Dependencies to Eventually Remove

- `@kobalte/core` — replaced by corvu (incremental)
- `@felte/core` — replaced by full Felte with validator (upgrade, not remove)

---

## 6. Risk Assessment

| Phase | Risk Level | Mitigation |
|-------|-----------|------------|
| Phase 1 | Low | Additive changes only, no refactoring |
| Phase 2 | Medium | Test landing page thoroughly, keep old version as fallback |
| Phase 3 | Low | Incremental migration, keep Kobalte as fallback |
| Phase 4 | Medium | Content Layer API is stable but migration touches all sites |
| Phase 5 | Low | Additive changes, no breaking changes |
| Phase 6 | Low | Tests are additive |

---

## 7. Decision Required

**Primary Question:** Should we proceed with the full roadmap, or prioritize specific phases?

**Recommended Approach:** Phased execution — start with Phase 1 (immediate value, zero risk), then assess before proceeding.

**Alternative:** Skip Phases 3-5 if the current stack is "good enough" and focus only on Phase 1 (toasts, validation, SEO) and Phase 2 (landing page migration).

---

*Analysis generated by Nexus — Principal Systems Architect*
