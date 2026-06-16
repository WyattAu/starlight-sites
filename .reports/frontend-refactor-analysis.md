# Frontend Refactor Analysis & Roadmap

## Current State Summary

| Aspect | Before | After | Version |
|--------|---------|---------|---------|
| Package Manager | Bun | Bun | Latest |
| Framework | Astro + Starlight | Astro + Starlight | 5.5.4 / 0.32.2 |
| UI Framework | SolidJS | SolidJS | 1.9.7 |
| Styling | Custom CSS (CSS Variables) | Tailwind CSS v4 | 4.3.1 |
| Build Tool | Vite (via Astro) | Vite (via Astro) | Latest |
| Type Safety | TypeScript | TypeScript | 5.8.2 |
| Linting | None | Biome | 2.5.0 |
| Testing | Playwright (E2E only) | Vitest + Playwright | 4.1.9 / 1.61.0 |
| Deployment | Static (Cloudflare Pages) | Static (Cloudflare Pages) | - |

## Key Observations

1. **No utility CSS framework** — 863-line custom CSS with design tokens via CSS custom properties
2. **File-copy sharing** — Components duplicated across 9 sites via sync script
3. **No component library** — All SolidJS components hand-rolled (FlashcardDeck, DiagnosticTest, PracticeProblem)
4. **No form library** — Forms likely basic or non-existent
5. **No animation library** — Only CSS transitions in flashcard flip
6. **No icon system** — Inline SVGs or no icons

## Package Analysis

### HIGH PRIORITY — Should Adopt

| Package | Why | Impact | Status |
|---------|-----|--------|--------|
| **Tailwind CSS v4** | Eliminate 863-line custom CSS. CSS-first config. Rust engine = fast builds. Design tokens → Tailwind config. | DX++, Maintainability++ | ADOPTED |
| **Biome** | Replace ESLint + Prettier. Single tool. 10x faster. | DX+, CI speed++ | ADOPTED |
| **Vitest** | Replace Playwright-only testing. Unit tests for SolidJS components. Co-located with source. | Quality++ | ADOPTED |
| **Solid Primitives** | Mature reactive primitives (media queries, gestures, etc). Replaces hand-rolled utils. | Code quality++ | ADOPTED |
| **Felte** | Form handling for any future forms (contact, feedback, etc). | DX+ | ADOPTED |
| **unplugin-icons** | Auto-import icons. No manual SVG management. | DX+, Bundle size-- | ADOPTED |
| **Kobalte** | Accessible headless UI (dialogs, dropdowns, tabs). | May not need for doc sites | ADOPTED |

### MEDIUM PRIORITY — Evaluate

| Package | Why | Concern |
|---------|-----|---------|
| **Kobalte** | Accessible headless UI (dialogs, dropdowns, tabs). | May not need for doc sites |
| **corvu** | Alternative to Kobalte. Newer, smaller. | Less mature |
| **TanStack Table** | If any site needs data tables. | Niche use case |
| **Solid Sonner** | Toast notifications. | Low priority for docs |
| **tsdown** | Library bundler for shared components. | Could replace tsup if used |
| **Panda CSS** | Alternative to Tailwind. Type-safe. | Tailwind v4 already type-safe |

### LOW PRIORITY — Skip

| Package | Why Skip |
|---------|----------|
| **Next.js / Nuxt / SvelteKit** | Already on Astro. Wrong direction. |
| **SolidStart** | Astro already handles SSG/SSR. No need for meta-framework switch. |
| **Redux / Zustand / Jotai** | Doc sites don't need complex state management. |
| **TanStack Query** | Static sites don't fetch client-side data. |
| **tRPC** | No backend to call from frontend. |
| **XState** | Overkill for doc site workflows. |
| **Apollo / urql** | No GraphQL. |
| **Rspack / Rsbuild / Turbopack** | Astro handles builds. No need for raw bundlers. |
| **Styled Components / Vanilla Extract** | Tailwind v4 preferred. |
| **Moment.js / Day.js** | No date manipulation needed. |
| **Radash / Lodash-es** | Minimal utility needs. |

## Migration Decisions

### Decision 1: Keep Astro + SolidJS [ADOPTED]

**Rationale:** Astro is ideal for content-heavy static sites. SolidJS handles interactivity perfectly. No reason to switch.

**Alternatives considered:**
- SolidStart: Would abandon Starlight. Massive rewrite for no gain.
- Pure Astro (no SolidJS): FlashcardDeck and DiagnosticTest need fine-grained reactivity.

### Decision 2: Adopt Tailwind CSS v4 [ADOPTED]

**Rationale:** Replace 863-line custom CSS. CSS-first config. Design tokens migrate to `tailwind.config`. Rust engine = negligible build impact.

**Migration path:**
1. Install Tailwind v4
2. Migrate CSS custom properties → Tailwind theme
3. Replace custom component classes → utility classes
4. Keep Starlight theme customization via CSS variables

### Decision 3: Adopt Biome [ADOPTED]

**Rationale:** Replace ESLint + Prettier. Single tool, 10x faster, zero config.

### Decision 4: Adopt Vitest [ADOPTED]

**Rationale:** Unit tests for SolidJS components. Vitest works natively with Vite/Astro. Add component tests for FlashcardDeck, DiagnosticTest, PracticeProblem.

### Decision 5: Adopt Solid Primitives [ADOPTED]

**Rationale:** Mature, well-tested reactive utilities. Replace any hand-rolled hooks.

### Decision 6: Adopt Kobalte for Accessible UI [ADOPTED]

**Rationale:** If adding interactive elements (modals, dropdowns), Kobalte provides accessible primitives. Avoid building from scratch.

### Decision 7: Adopt unplugin-icons [ADOPTED]

**Rationale:** Auto-import any icon set. Clean up inline SVGs.

### Decision 8: Adopt Felte for Forms [ADOPTED]

**Rationale:** When forms are needed (contact, feedback), Felte is the SolidJS-native choice.

## Migration Roadmap

### Phase 1: Foundation (Week 1-2)

**Goal:** Modernize toolchain without changing functionality.

| Task | Details | Effort |
|------|---------|--------|
| 1.1 Install Biome | Replace ESLint + Prettier. Configure in `biome.json`. | 1 day |
| 1.2 Remove ESLint | Delete `.eslintrc`, `eslint.config.*`, related deps. | 0.5 day |
| 1.3 Remove Prettier | Delete `.prettierrc`, related deps. | 0.5 day |
| 1.4 Update CI/CD | Replace lint/format steps with Biome. | 0.5 day |
| 1.5 Install Vitest | Add to root. Configure for SolidJS. | 0.5 day |
| 1.6 Add Vitest config | `vitest.config.ts` with SolidJS transform. | 0.5 day |
| 1.7 Write first component test | FlashcardDeck unit tests. | 1 day |
| 1.8 Update pre-commit hooks | Husky → Biome format + Vitest. | 0.5 day |

**Deliverable:** Biome + Vitest operational. First component tests passing.

### Phase 2: Styling Migration (Week 3-4)

**Goal:** Migrate from custom CSS to Tailwind CSS v4.

| Task | Details | Effort |
|------|---------|--------|
| 2.1 Install Tailwind v4 | Add `@tailwindcss/vite` plugin. | 0.5 day |
| 2.2 Create Tailwind config | Migrate design tokens (colors, fonts, spacing). | 1 day |
| 2.3 Migrate Starlight theme | Keep `--sl-*` variables. Add Tailwind layer. | 1 day |
| 2.4 Migrate flashcard CSS | Replace custom classes with Tailwind utilities. | 1 day |
| 2.5 Migrate diagnostic test CSS | Replace custom classes with Tailwind utilities. | 1 day |
| 2.6 Migrate practice problem CSS | Replace custom classes with Tailwind utilities. | 0.5 day |
| 2.7 Migrate shared styles | `custom.css` → Tailwind `@layer` components. | 1 day |
| 2.8 Update sync script | Ensure Tailwind config syncs to all sites. | 0.5 day |
| 2.9 Verify dark mode | Test `[data-theme='dark']` with Tailwind. | 0.5 day |
| 2.10 Verify print styles | Ensure print CSS still works. | 0.5 day |
| 2.11 Verify reduced motion | Ensure `prefers-reduced-motion` works. | 0.5 day |
| 2.12 Visual regression tests | Playwright screenshots for all components. | 1 day |

**Deliverable:** Tailwind v4 fully integrated. Custom CSS eliminated.

### Phase 3: Component Enhancement (Week 5-6)

**Goal:** Upgrade components with modern libraries.

| Task | Details | Effort |
|------|---------|--------|
| 3.1 Install Solid Primitives | Add `@solid-primitives/*` packages. | 0.5 day |
| 3.2 Install Kobalte | Add `@kobalte/core` for accessible UI. | 0.5 day |
| 3.3 Install unplugin-icons | Configure auto-import. | 0.5 day |
| 3.4 Install Felte | Add form handling library. | 0.5 day |
| 3.5 Refactor FlashcardDeck | Use Solid Primitives where applicable. | 1 day |
| 3.6 Refactor DiagnosticTest | Use Solid Primitives where applicable. | 1 day |
| 3.7 Add accessible dialogs | Kobalte modals for flashcard settings. | 1 day |
| 3.8 Add icon system | Replace inline SVGs with unplugin-icons. | 1 day |
| 3.9 Add form components | Contact/feedback forms with Felte. | 1 day |
| 3.10 Add animations | Solid Motion or AutoAnimate for transitions. | 1 day |

**Deliverable:** Enhanced components with accessibility, icons, animations.

### Phase 4: Testing & Quality (Week 7-8)

**Goal:** Comprehensive test coverage.

| Task | Details | Effort |
|------|---------|--------|
| 4.1 FlashcardDeck tests | Unit + integration tests. | 1 day |
| 4.2 DiagnosticTest tests | Unit + integration tests. | 1 day |
| 4.3 PracticeProblem tests | Unit + integration tests. | 1 day |
| 4.4 SM-2 algorithm tests | Edge cases, state transitions. | 1 day |
| 4.5 Storage module tests | localStorage mock, persistence. | 0.5 day |
| 4.6 Sanitize module tests | XSS prevention, allowed tags. | 0.5 day |
| 4.7 E2E test suite | Playwright for all interactive flows. | 2 days |
| 4.8 Visual regression baseline | Screenshot comparison tests. | 1 day |
| 4.9 CI integration | All tests in CI pipeline. | 0.5 day |

**Deliverable:** >90% component test coverage. E2E tests for all flows.

### Phase 5: Documentation & Cleanup (Week 9)

**Goal:** Update docs, clean up legacy.

| Task | Details | Effort |
|------|---------|--------|
| 5.1 Update component docs | Document new APIs, props. | 1 day |
| 5.2 Remove dead CSS | Delete unused custom CSS. | 0.5 day |
| 5.3 Remove dead deps | Clean package.json across all sites. | 0.5 day |
| 5.4 Update CONTRIBUTING.md | Reflect new toolchain. | 0.5 day |
| 5.5 Performance audit | Lighthouse scores for all sites. | 1 day |
| 5.6 Bundle analysis | Verify no size regression. | 0.5 day |

**Deliverable:** Clean codebase. Updated documentation. Performance baseline.

## Risk Assessment

| Risk | Mitigation | Impact |
|------|------------|--------|
| Tailwind conflicts with Starlight | Use `@layer` to isolate. Test early. | Medium |
| Biome incompatibility | Biome covers 90%+ ESLint rules. Edge cases: keep ESLint for those. | Low |
| Vitest + SolidJS JSX issues | Use `solid-js/vite` transform. | Low |
| Kobalte bundle size | Tree-shake. Only import used components. | Low |
| Sync script breaks | Test sync after each change. Add CI check. | Medium |

## Success Metrics

| Metric | Before | Target |
|--------|--------|--------|
| CSS lines | 863 | <200 (Tailwind utilities) |
| Linting speed | ~30s (ESLint) | ~2s (Biome) |
| Test coverage | 0% (unit) | >90% (unit) |
| Build time | Baseline | <10% increase |
| Lighthouse score | Baseline | No regression |
| Component accessibility | Manual | Automated (Kobalte) |

## Appendix: Package Versions

| Package | Version | Install Command |
|---------|---------|-----------------|
| tailwindcss | v4.x | `bun add -D tailwindcss @tailwindcss/vite` |
| @biomejs/biome | Latest | `bun add -D @biomejs/biome` |
| vitest | Latest | `bun add -D vitest` |
| @solid-primitives/* | Latest | `bun add @solid-primitives/utils @solid-primitives/media` |
| @kobalte/core | Latest | `bun add @kobalte/core` |
| unplugin-icons | Latest | `bun add -D unplugin-icons` |
| @felte/core | Latest | `bun add @felte/core` |
| @formkit/auto-animate | Latest | `bun add @formkit/auto-animate` |
