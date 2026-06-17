# Frontend Refactor Migration Roadmap

**Date:** 2026-06-17  
**Status:** Draft — pending approval  
**Estimated Total Effort:** 3-5 days  
**Risk Level:** Low-Medium

---

## Overview

Surgical cleanup of the existing modern stack. No framework migration. Focus on:
- Removing unused dependencies
- Consolidating redundant libraries
- Upgrading key integrations
- Adding build optimizations

---

## Phase 1: Dependency Cleanup (Day 1)

### 1.1 Drop Corvu

**Rationale:** Only `@kobalte/core` is actively used (BaseDialog.tsx). Corvu is a dependency but not meaningfully used.

**Steps:**
1. Search codebase for corvu imports: `grep -r "corvu" shared/ sites/`
2. If unused, remove from `package.json` dependencies
3. Run `bun install` to update lockfile
4. Verify build still passes: `bun run build:site` in each site

**Files affected:**
- `package.json` — Remove `"corvu": "^0.7.2"`
- `bun.lock` — Auto-updated

**Verification:**
- [ ] All 10 sites build successfully
- [ ] No runtime errors in components
- [ ] Bundle size slightly reduced

**Time:** 30 minutes  
**Risk:** Very low

---

### 1.2 Remove solid-motion, Consolidate Animation

**Rationale:** `solid-motion` is at `v1.0.0-alpha.8` — alpha quality in production. AutoAnimate (`@formkit/auto-animate`) and Solid Transition Group already cover animation needs.

**Steps:**
1. Search for solid-motion imports: `grep -r "solid-motion" shared/ sites/`
2. Document current solid-motion usage (if any)
3. Migrate any solid-motion animations to:
   - `@formkit/auto-animate` (for list/layout animations)
   - `solid-transition-group` (for enter/exit CSS transitions)
4. Remove `solid-motion` from `package.json`
5. Run `bun install`
6. Verify all animations work correctly

**Files affected:**
- `package.json` — Remove `"solid-motion": "^1.0.0-alpha.8"`
- Any component using `solid-motion` — Migrate to AutoAnimate/TransitionGroup
- `bun.lock` — Auto-updated

**Verification:**
- [ ] All 10 sites build successfully
- [ ] Flashcard deck flip animation works
- [ ] Dialog open/close transitions work
- [ ] List animations (if any) work
- [ ] No console errors

**Time:** 2-4 hours  
**Risk:** Low

---

### 1.3 Upgrade solid-sonner

**Rationale:** Current version is `v0.3.1`. Check for latest stable.

**Steps:**
1. Check latest version: `npm view solid-sonner version`
2. Update `package.json`: `"solid-sonner": "^<latest>"`
3. Run `bun install`
4. Test toast notifications in FlashcardDeck and DiagnosticTest

**Files affected:**
- `package.json` — Version bump
- `bun.lock` — Auto-updated

**Verification:**
- [ ] Toast notifications display correctly
- [ ] Toast dismiss works
- [ ] No console errors

**Time:** 15 minutes  
**Risk:** Very low

---

### 1.4 Add astro-compress

**Rationale:** Build-time compression of HTML/CSS/SVG reduces final bundle size with zero runtime cost.

**Steps:**
1. Install: `bun add -D astro-compress`
2. Add to each site's `astro.config.mjs` integrations array (after all other integrations)
3. Test build output size before/after
4. Verify no broken HTML/CSS

**Files affected:**
- `package.json` — Add `"astro-compress": "^<latest>"` to devDependencies
- All 10 `sites/*/astro.config.mjs` — Add `compress()` integration
- `bun.lock` — Auto-updated

**Verification:**
- [ ] All 10 sites build successfully
- [ ] Build output size reduced (measure before/after)
- [ ] No broken HTML/CSS/JS
- [ ] Site renders correctly in browser

**Time:** 30 minutes  
**Risk:** Very low

---

## Phase 2: i18n Upgrade (Days 2-3)

### 2.1 Install @solid-primitives/i18n

**Rationale:** Replace custom `t()` function with official SolidJS i18n primitives. Benefits:
- Fine-grained reactive translations
- Type-safe keys
- Already using other @solid-primitives/* packages
- Better DX and performance

**Steps:**
1. Install: `bun add @solid-primitives/i18n`
2. Review current i18n implementation in `shared/i18n/config.ts`

**Files affected:**
- `package.json` — Add `"@solid-primitives/i18n": "^<latest>"`
- `bun.lock` — Auto-updated

**Time:** 15 minutes  
**Risk:** Very low

---

### 2.2 Migrate i18n Implementation

**Rationale:** Replace custom `t()` function with `@solid-primitives/i18n` `createI18n` or `genConfig`/`genComponent`.

**Current implementation:**
```typescript
// shared/i18n/config.ts
export function t(key: string, locale: string = defaultLocale): string {
  const translations = getTranslations(locale)
  return translations[key] ?? getTranslations(defaultLocale)[key] ?? key
}
```

**Target implementation:**
```typescript
// shared/i18n/config.ts
import { genConfig, genComponent } from '@solid-primitives/i18n'

const dict = {
  en: {
    practice: { submit: 'Submit', next: 'Next Question', ... },
    flashcard: { study_now: 'Study Now', ... },
    ...
  },
  zh: {
    practice: { submit: '提交', ... },
    ...
  }
}

export const { t, locale } = genConfig(dict)
export const T = genComponent(t)
```

**Migration steps:**
1. Restructure flat translation keys into nested objects
2. Replace `genConfig` with dict structure
3. Export `t` function and `locale` signal
4. Update all component imports
5. Replace `t('key')` calls with `t('key')` (same API, different implementation)
6. Enable locale switching via `locale()` signal

**Files affected:**
- `shared/i18n/config.ts` — Complete rewrite
- `shared/components/FlashcardDeck.tsx` — Update imports
- `shared/components/DiagnosticTest.tsx` — Update imports
- `shared/components/PracticeProblem.tsx` — Update imports
- All sites that use i18n — Update imports if changed

**Verification:**
- [ ] All translation keys resolve correctly
- [ ] English locale works
- [ ] Chinese locale works (when enabled)
- [ ] Fallback to English works for missing keys
- [ ] No console errors
- [ ] All 10 sites build successfully

**Time:** 4-6 hours  
**Risk:** Medium — requires careful migration of all translation calls

---

### 2.3 Update Component Translation Calls

**Rationale:** Ensure all components use the new i18n API correctly.

**Current usage pattern:**
```tsx
import { t } from '../i18n/config'
// ...
<span>{t('practice.submit')}</span>
```

**New usage pattern (if API changes):**
```tsx
import { t } from '../i18n/config'
// ...
<span>{t('practice.submit')}</span>
// Same API, different internal implementation
```

**Steps:**
1. Search all component files for i18n imports
2. Update imports if path changed
3. Verify all translation keys exist in new dict structure
4. Test each component with both locales

**Files affected:**
- All `.tsx` files in `shared/components/`

**Verification:**
- [ ] No broken translation keys
- [ ] All UI text renders correctly
- [ ] Locale switching works in real-time

**Time:** 2 hours  
**Risk:** Low

---

## Phase 3: Polish & Verification (Day 4)

### 3.1 Audit solid-primitives Usage

**Rationale:** Review current usage of `@solid-primitives/keyboard`, `@solid-primitives/media`, `@solid-primitives/storage`, `@solid-primitives/utils`. Consider adding useful missing primitives.

**Current packages:**
- `@solid-primitives/keyboard` — Keyboard shortcuts
- `@solid-primitives/media` — Media queries
- `@solid-primitives/storage` — Storage abstraction
- `@solid-primitives/utils` — General utilities

**Potentially useful additions:**
- `@solid-primitives/clipboard` — Clipboard API
- `@solid-primitives/intersection-observer` — Lazy loading, analytics
- `@solid-primitives/event-listener` — Event handling
- `@solid-primitives/fetch` — Data fetching (if needed)

**Steps:**
1. Review current solid-primitives usage across codebase
2. Identify missing functionality that primitives could provide
3. Add useful primitives (if any)
4. Remove unused primitives (if any)

**Files affected:**
- `package.json` — Add/remove @solid-primitives/* packages
- Components using new primitives

**Verification:**
- [ ] All sites build successfully
- [ ] New primitives integrate correctly
- [ ] No unused dependencies

**Time:** 2-4 hours  
**Risk:** Low

---

### 3.2 Add RSS Feed (Optional)

**Rationale:** If blog/news content exists, `@astrojs/rss` provides automatic feed generation.

**Steps:**
1. Check if any site has blog/news content worth syndicating
2. If yes, install: `bun add -D @astrojs/rss`
3. Create `src/pages/rss.xml.ts` in relevant sites
4. Configure feed with site content

**Files affected:**
- `package.json` — Add `"@astrojs/rss": "^<latest>"`
- Sites with blog content — Add RSS endpoint

**Verification:**
- [ ] RSS feed generates valid XML
- [ ] Feed includes correct content
- [ ] Feed URL is accessible

**Time:** 1-2 hours  
**Risk:** Very low

---

### 3.3 Full Regression Test

**Rationale:** Verify all changes work together across all sites.

**Steps:**
1. Run full test suite: `bun run test`
2. Build all sites: `bun run build:site` in each
3. Visual regression check (manual or Playwright snapshots)
4. Verify search functionality
5. Verify component interactivity (FlashcardDeck, DiagnosticTest, PracticeProblem)
6. Verify responsive design
7. Verify dark mode

**Files affected:** None (verification only)

**Verification:**
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] All E2E tests pass
- [ ] All 10 sites build successfully
- [ ] No console errors in any site
- [ ] All interactive components work
- [ ] Search works across all sites
- [ ] Dark mode works
- [ ] Mobile responsive

**Time:** 2-4 hours  
**Risk:** Very low

---

## Phase 4: Future Consideration (When Needed)

These are NOT part of the current migration. Document for future reference.

### 4.1 Solid UI (Shadcn-Solid) — When Custom Design System Needed

**Trigger:** When current Tailwind utility classes become insufficient for consistent design system.

**Benefits:**
- Shadcn-style component library ported to SolidJS
- Accessible, customizable, themeable
- Could replace individual Kobalte components

**Effort:** 20-40 hours  
**Risk:** Medium  
**Status:** NOT NOW

### 4.2 TanStack Query — When Complex Client-Side Data Fetching Added

**Trigger:** When client-side needs exceed simple Worker API calls.

**Benefits:**
- Caching, background refetching, optimistic updates
- Excellent developer experience
- Solid-native support

**Effort:** 4-8 hours  
**Risk:** Low  
**Status:** NOT NOW

### 4.3 SolidStart — If Project Evolves from Docs to App

**Trigger:** When project needs SSR, server functions, or app-like features.

**Benefits:**
- Full-stack SolidJS framework
- Streaming SSR, edge deployment
- File-based routing

**Effort:** 100+ hours  
**Risk:** High  
**Status:** NOT NOW — Astro+Starlight is superior for documentation

---

## Dependency Changes Summary

### Remove
| Package | Version | Reason |
|---------|---------|--------|
| `corvu` | ^0.7.2 | Unused, Kobalte covers needs |
| `solid-motion` | ^1.0.0-alpha.8 | Alpha quality, AutoAnimate covers needs |

### Add
| Package | Version | Reason |
|---------|---------|--------|
| `@solid-primitives/i18n` | ^latest | Official i18n primitives |
| `astro-compress` | ^latest | Build-time compression |

### Upgrade
| Package | From | To | Reason |
|---------|------|----|--------|
| `solid-sonner` | ^0.3.1 | ^latest | Latest stable |

### Keep (No Change)
| Package | Version | Reason |
|---------|---------|--------|
| `astro` | ^5.5.4 | Current |
| `solid-js` | ^1.9.13 | Current |
| `@astrojs/solid-js` | ^5.0.1 | Current |
| `@astrojs/starlight` | latest | Current |
| `tailwindcss` | ^4.3.1 | Current |
| `@tailwindcss/vite` | ^4.3.1 | Current |
| `@kobalte/core` | ^0.13.11 | Current, keeping |
| `@solid-primitives/*` | various | Current |
| `@formkit/auto-animate` | ^0.9.0 | Current, keeping |
| `solid-sonner` | ^0.3.1 | Upgrading |
| `unplugin-icons` | ^23.0.1 | Current |
| `@iconify-json/lucide` | ^1.2.113 | Current |
| `zod` | ^4.4.3 | Current |
| `@felte/core` | ^1.4.4 | Current |
| `@felte/validator-zod` | ^1.0.18 | Current |
| `@biomejs/biome` | ^2.5.0 | Current |
| `vitest` | ^4.1.9 | Current |
| `@solidjs/testing-library` | ^0.8.10 | Current |
| `@playwright/test` | ^1.61.0 | Current |

---

## Rollback Plan

If any migration phase causes issues:

1. **Phase 1 (Cleanup):** Revert `package.json` changes, run `bun install`
2. **Phase 2 (i18n):** Restore `shared/i18n/config.ts` from git history, revert package changes
3. **Phase 3 (Polish):** Revert specific changes

**Git strategy:** Create a branch for each phase, merge after verification.

---

## Success Criteria

- [ ] All 10 sites build successfully
- [ ] All tests pass (unit, integration, E2E)
- [ ] No console errors in any site
- [ ] All interactive components work
- [ ] Bundle size reduced (measure before/after)
- [ ] i18n system works with both locales
- [ ] No breaking changes to user-facing functionality

---

*This roadmap should be executed sequentially. Each phase must be verified before proceeding to the next.*
