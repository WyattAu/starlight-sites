# Frontend & GUI Refactor Discussion

**Date:** 2026-06-17  
**Scope:** Full audit of current stack against 2026 JS/SolidJS/Astro ecosystem  
**Status:** Draft — pending decision

---

## 1. Current Stack Assessment

The project is already running a **remarkably modern stack**. Before proposing changes, let's establish baseline:

| Layer | Current | Version | Status |
|-------|---------|---------|--------|
| Meta-framework | Astro | v5.5+ | Current |
| UI Framework | SolidJS | v1.9+ | Current |
| Documentation | Starlight | Latest | Current |
| Styling | Tailwind CSS v4 | v4.3.1 | Current |
| Package Manager | Bun | v1.2 | Current |
| Bundler | Vite (via Astro) | Latest | Current |
| Linter/Formatter | Biome | v2.5 | Current |
| Unit Testing | Vitest + @solidjs/testing-library | v4.1.9 | Current |
| E2E Testing | Playwright | v1.61 | Current |
| Headless UI | Kobalte + Corvu | v0.13 / v0.7 | Current |
| Icons | unplugin-icons + Lucide | v23 | Current |
| Forms | Felte + Zod | v1.4 / v4.4 | Current |
| Toasts | solid-sonner | v0.3 | Current |
| Animation | solid-motion + AutoAnimate | alpha / v0.9 | Mixed |
| Primitives | @solid-primitives/* | Various | Current |
| CI/CD | GitHub Actions | — | Current |
| Hosting | Cloudflare (static + Workers) | — | Current |

**Verdict:** No legacy tools detected. No deprecated packages. The stack is already 2026-current.

---

## 2. Analysis of Provided Tool Lists

### 2.1 Runtimes & Package Managers

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Node.js | Already using Bun | **Skip** — Bun is faster, already adopted |
| Bun | Already using v1.2 | **Keep** — No action needed |
| Deno | No benefit for static Astro sites | **Skip** |
| pnpm | Bun workspaces already handle monorepo | **Skip** — Bun's workspace support is sufficient |
| ni | Nice DX but not critical | **Skip** — Low priority |

### 2.2 Build Tools & Bundlers

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Vite | Already using via Astro | **Keep** — Core of Astro |
| Rolldown | Will arrive in Vite naturally | **Wait** — No action needed, Vite team handles migration |
| Rspack/Rsbuild | Webpack replacement; Astro uses Vite, not Webpack | **Skip** |
| Esbuild | Used internally by Vite | **Skip** — Internal |
| tsdown | For library bundling; project produces sites, not libraries | **Skip** — Not applicable |
| Turbopack | Next.js specific | **Skip** |

### 2.3 Meta-Frameworks

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Next.js | React-based; would require full framework migration | **Skip** |
| Nuxt | Vue-based; would require full framework migration | **Skip** |
| SvelteKit | Would require full framework migration | **Skip** |
| SolidStart | SolidJS meta-framework; interesting but Astro+Starlight is superior for docs | **Evaluate** |
| Astro | Already using | **Keep** |
| Remix/React Router v7 | React-based | **Skip** |
| TanStack Start | React-based | **Skip** |

**SolidStart vs Astro+Starlight:** SolidStart is excellent for app-like experiences. However, this project is a **documentation monorepo** — Astro+Starlight is purpose-built for this. SolidStart would require rebuilding the entire content layer, sidebar routing, search integration, and theming. **No migration justified.**

### 2.4 State Management

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Zustand | Overkill for current needs; signals handle component state | **Skip** |
| Jotai | Atomic state; signals already provide this | **Skip** |
| Valtio | Proxy-based; signals are simpler | **Skip** |
| Redux Toolkit | Way too heavy for documentation sites | **Skip** |
| XState | FSM for complex workflows; current components are simple enough | **Skip** |

**Current approach:** SolidJS signals + props drilling. Components are self-contained (FlashcardDeck, DiagnosticTest, PracticeProblem). No shared state across components that would justify a state manager.

### 2.5 Data Fetching

| Tool | Relevance | Verdict |
|------|-----------|---------|
| TanStack Query | Could benefit search API caching | **Evaluate** |
| tRPC | No backend API to type-safe | **Skip** |
| Axios | Native fetch sufficient | **Skip** |
| Apollo/urql | No GraphQL | **Skip** |

### 2.6 Schema Validation

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Zod | Already using v4 | **Keep** |
| Valibot | Smaller bundle but Zod is working fine | **Skip** — Migration cost > benefit |
| ArkType | Interesting but Zod v4 is mature | **Skip** |
| TypeBox | JSON Schema focus; not needed | **Skip** |

### 2.7 Testing

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Vitest | Already using v4.1 | **Keep** |
| Playwright | Already using v1.61 | **Keep** |
| Cypress | Playwright is superior; no migration needed | **Skip** |
| Biome | Already using v2.5 | **Keep** |
| ESLint | Biome replaces this | **Skip** — Already migrated |

### 2.8 Styling

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Tailwind CSS v4 | Already using v4.3 | **Keep** |
| Panda CSS | CSS-in-JS; Tailwind is working well | **Skip** |
| Vanilla Extract | Zero-runtime CSS; Tailwind already is | **Skip** |
| StyleX | Facebook-specific; overkill | **Skip** |

### 2.9 Utilities

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Radash | Could replace manual utility functions | **Evaluate** |
| Lodash-es | Too heavy; Radash or native is better | **Skip** |
| date-fns | Only if date operations increase | **Skip** |
| Day.js | Only if date operations increase | **Skip** |

### 2.10 SolidJS Ecosystem

| Tool | Relevance | Verdict |
|------|-----------|---------|
| Solid Primitives | Already using keyboard, media, storage, utils | **Keep + Expand** |
| Mutative | Only if immutable updates become complex | **Skip** |
| Solid Zustand | No Zustand | **Skip** |
| Solid Router | Astro handles routing | **Skip** |
| Solid Meta | Astro handles head | **Skip** |
| Kobalte | Already using | **Keep** |
| Corvu | Already using (redundant with Kobalte) | **Evaluate** |
| Ark UI | Alternative to Kobalte; Zag.js-powered | **Evaluate** |
| Suid | Material UI port; design system uses Tailwind | **Skip** |
| Hope UI | Styled; design is Tailwind-based | **Skip** |
| Solid UI (Shadcn-Solid) | Shadcn port; could inform design system | **Evaluate** |
| Felte | Already using | **Keep** |
| Modular Forms | Felte alternative; Felte is working | **Skip** |
| Solid Query | Could benefit search integration | **Evaluate** |
| Solid Transition Group | Already using | **Keep** |
| Solid Motion | Already using (alpha) | **Monitor** |
| Solid Markdown | Already using | **Keep** |
| Solid Lucide | Via unplugin-icons | **Keep** |

### 2.11 Astro Ecosystem

| Tool | Relevance | Verdict |
|------|-----------|---------|
| @astrojs/solid-js | Already using | **Keep** |
| @astrojs/mdx | Already using | **Keep** |
| @astrojs/sitemap | Already using | **Keep** |
| @astrojs/rss | Could add for blog feeds | **Evaluate** |
| @astrojs/partytown | For third-party scripts; not currently needed | **Skip** |
| astro-seo | Already using @jdevalk/astro-seo-graph | **Keep** |
| astro-icon | Could replace unplugin-icons setup | **Evaluate** |
| astro-compress | Could optimize build output | **Evaluate** |
| astro-breadcrumbs | Already have custom PageTitle breadcrumbs | **Skip** |
| Starlight | Already using for 9 sites | **Keep** |

---

## 3. Identified Opportunities

### 3.1 Consolidate Headless UI: Kobalte vs Corvu vs Ark UI

**Current state:** Both `@kobalte/core` (v0.13) and `corvu` (v0.7) are installed. Only Kobalte is actively used (BaseDialog). Corvu is a dependency but appears unused or minimally used.

**Options:**
1. **Drop Corvu, keep Kobalte** — Kobalte is the community standard, well-documented, stable
2. **Drop Kobalte, switch to Corvu** — Corvu is newer, actively maintained, native Solid
3. **Migrate to Ark UI** — Zag.js-powered, cross-framework, excellent accessibility, more components
4. **Use Solid UI (Shadcn-Solid)** — Shadcn-style components, could provide design system foundation

**Recommendation:** **Option 1 — Drop Corvu, keep Kobalte.** Rationale:
- Kobalte is the established community standard for SolidJS headless UI
- Only used in BaseDialog; scope is minimal
- Removing Corvu reduces bundle and dependency surface
- If more components needed later, Kobalte has comprehensive coverage

### 3.2 Animation Library Stability

**Current state:** `solid-motion` is at `v1.0.0-alpha.8` — alpha quality in production.

**Options:**
1. **Keep solid-motion, monitor** — Risk: alpha may have breaking changes
2. **Replace with Solid Transition Group** — More limited but stable/official
3. **Replace with AutoAnimate** — Already using, covers most animation needs
4. **Use Motion One directly** — Web Animations API based, framework-agnostic

**Recommendation:** **Option 3 — Consolidate on AutoAnimate + Solid Transition Group.** Rationale:
- AutoAnimate already installed and working
- Solid Transition Group is official and stable
- solid-motion alpha is unnecessary risk for documentation site animations
- AutoAnimate covers list animations, layout transitions
- Solid Transition Group covers enter/exit CSS transitions

### 3.3 i18n System Upgrade

**Current state:** Custom `t()` function with hardcoded translation objects in `shared/i18n/config.ts`. Only English enabled; Chinese translations defined but disabled.

**Options:**
1. **Keep custom i18n** — Simple, no dependencies, works for current needs
2. **Switch to @solid-primitives/i18n** — Official, lightweight, fine-grained reactive
3. **Use Typesafe i18n** — End-to-end type safety for translation keys

**Recommendation:** **Option 2 — Switch to @solid-primitives/i18n.** Rationale:
- Already using other @solid-primitives/* packages
- Fine-grained reactive translations (only re-render affected components)
- Lightweight, no runtime overhead
- Better DX with type-safe keys
- Easy migration path from current custom function

### 3.4 Cross-Site Search Enhancement

**Current state:** Custom Cloudflare Worker + KV + Pagefind indexes. Client-side `page-search.js` and `cross-site-search.js` synced to all sites.

**Options:**
1. **Keep current architecture** — Working, custom, performant
2. **Add TanStack Query for search caching** — Reduce redundant API calls
3. **Add Solid Query for search** — Same benefit, Solid-native

**Recommendation:** **Option 1 — Keep current architecture.** Rationale:
- Search is Cloudflare Worker-based, not client-side state
- TanStack Query would add complexity without clear benefit
- Current Pagefind + Worker approach is solid and battle-tested
- Only reconsider if search UX degrades or API latency increases

### 3.5 Component Sync Script

**Current state:** `scripts/sync-shared.mjs` copies shared components to each site. Each site builds standalone.

**Options:**
1. **Keep sync script** — Simple, works, explicit
2. **Use Bun workspace imports** — Import directly from `../../shared/`
3. **Use Astro aliases** — Configure `@shared` alias in each site

**Recommendation:** **Option 1 — Keep sync script.** Rationale:
- Each site must build standalone for deployment
- Sync script ensures no cross-site imports at build time
- Explicit > implicit for monorepo architecture
- Already working and tested

### 3.6 Icon System

**Current state:** `unplugin-icons` (v23) + `@iconify-json/lucide` (v1.2). Auto-imports Lucide icons as components.

**Options:**
1. **Keep current setup** — Working, efficient, on-demand imports
2. **Switch to astro-icon** — Astro-native, supports 100k+ Iconify sets
3. **Add solid-icons** — Additional icon packs if needed

**Recommendation:** **Option 1 — Keep current setup.** Rationale:
- unplugin-icons works across Vite/Astro/SolidJS
- Lucide is comprehensive for documentation site needs
- astro-icon is Astro-specific; current setup is framework-agnostic
- Only switch if more icon sets are needed

### 3.7 Build Optimization

**Current state:** Astro static output + Vite + Tailwind v4. Build is already fast.

**Options:**
1. **Add astro-compress** — Minify HTML/CSS/SVG at build time
2. **Add @astrojs/partytown** — Offload third-party scripts (not currently needed)
3. **Wait for Rolldown** — Vite's Rust-based bundler will arrive naturally

**Recommendation:** **Option 1 — Add astro-compress.** Rationale:
- Zero-config compression of HTML/CSS/SVG
- Reduces final bundle size
- No runtime cost, build-time only
- Easy integration with existing pipeline

---

## 4. Migration Decision Matrix

| Change | Impact | Risk | Effort | Priority | Decision |
|--------|--------|------|--------|----------|----------|
| Drop Corvu | Low | Low | 1 hour | High | **DO** |
| Drop solid-motion, use AutoAnimate + Transition Group | Medium | Low | 2-4 hours | High | **DO** |
| Switch to @solid-primitives/i18n | Medium | Medium | 4-8 hours | Medium | **DO** |
| Add astro-compress | Low | Low | 30 min | Medium | **DO** |
| Upgrade solid-sonner to latest | Low | Low | 15 min | High | **DO** |
| Audit solid-primitives usage, add missing | Low | Low | 2-4 hours | Low | **CONSIDER** |
| Add @astrojs/rss for feeds | Low | Low | 1-2 hours | Low | **CONSIDER** |
| Solid UI (Shadcn-Solid) for design system | High | Medium | 20-40 hours | Low | **FUTURE** |
| TanStack Query for data fetching | Medium | Low | 4-8 hours | Low | **FUTURE** |
| SolidStart migration | Very High | High | 100+ hours | None | **REJECT** |

---

## 5. Recommended Migration Path

### Phase 1: Cleanup (Low Risk, High Value) — 1-2 days
1. Drop `corvu` dependency
2. Remove `solid-motion`, consolidate on AutoAnimate + Solid Transition Group
3. Upgrade `solid-sonner` to latest stable
4. Add `astro-compress` integration

### Phase 2: i18n Upgrade (Medium Risk, Medium Value) — 2-3 days
5. Install `@solid-primitives/i18n`
6. Migrate custom `t()` function to primitives i18n
7. Update all component translation calls
8. Test Chinese locale enablement

### Phase 3: Polish (Low Risk, Low Value) — 1 day
9. Audit `@solid-primitives/*` usage, add missing useful primitives
10. Add `@astrojs/rss` for site feeds (if blog content exists)
11. Review and consolidate any unused dependencies

### Phase 4: Future Consideration (When Needed)
12. Solid UI (Shadcn-Solid) if custom design system needed
13. TanStack Query if complex client-side data fetching added
14. SolidStart if project evolves from docs to app

---

## 6. Key Decision: What NOT to Migrate

The following tools were considered but **rejected**:

| Tool | Reason for Rejection |
|------|---------------------|
| Next.js / Nuxt / SvelteKit | Would require complete framework rewrite; Astro+SolidJS is superior for this use case |
| SolidStart | Not needed for static documentation sites; Astro+Starlight is purpose-built |
| Redux / Zustand / Jotai | Overkill; SolidJS signals handle all current state needs |
| Panda CSS / Vanilla Extract | Tailwind v4 is working perfectly; CSS-in-JS adds complexity |
| Moment.js / Day.js / date-fns | No significant date operations in codebase |
| Axios | Native fetch sufficient for Worker API calls |
| ESLint | Biome already replaces this |
| Webpack / Rollup | Astro handles bundling via Vite |

---

## 7. Summary

**The project is already running a 2026-current stack.** The recommended refactor is surgical cleanup, not wholesale migration:

1. **Drop unused Corvu dependency** — Reduce surface area
2. **Consolidate animation libraries** — Remove alpha-risk solid-motion
3. **Upgrade i18n** — Leverage solid-primitives ecosystem
4. **Add build compression** — astro-compress for smaller outputs
5. **Future-proof** — Monitor Solid UI and TanStack Query for when needs evolve

**Estimated total effort:** 3-5 days for all recommended changes.  
**Risk level:** Low-Medium. No framework migration required.

---

*This document should be reviewed before any implementation begins. All changes require updating tests and verifying build output.*
