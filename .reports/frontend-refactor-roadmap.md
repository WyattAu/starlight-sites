**Status:** Draft; pending approval  
- `package.json`; Remove `"corvu": "^0.7.2"`
- `bun.lock`; Auto-updated
**Rationale:** `solid-motion` is at `v1.0.0-alpha.8`; alpha quality in production. AutoAnimate (`@formkit/auto-animate`) and Solid Transition Group already cover animation needs.
- `package.json`; Remove `"solid-motion": "^1.0.0-alpha.8"`
- Any component using `solid-motion`; Migrate to AutoAnimate/TransitionGroup
- `bun.lock`; Auto-updated
- `package.json`; Version bump
- `bun.lock`; Auto-updated
- `package.json`; Add `"astro-compress": "^<latest>"` to devDependencies
- All 10 `sites/*/astro.config.mjs`; Add `compress()` integration
- `bun.lock`; Auto-updated
- `package.json`; Add `"@solid-primitives/i18n": "^<latest>"`
- `bun.lock`; Auto-updated
- `shared/i18n/config.ts`; Complete rewrite
- `shared/components/FlashcardDeck.tsx`; Update imports
- `shared/components/DiagnosticTest.tsx`; Update imports
- `shared/components/PracticeProblem.tsx`; Update imports
- All sites that use i18n; Update imports if changed
**Risk:** Medium; requires careful migration of all translation calls
- `@solid-primitives/keyboard`; Keyboard shortcuts
- `@solid-primitives/media`; Media queries
- `@solid-primitives/storage`; Storage abstraction
- `@solid-primitives/utils`; General utilities
- `@solid-primitives/clipboard`; Clipboard API
- `@solid-primitives/intersection-observer`; Lazy loading, analytics
- `@solid-primitives/event-listener`; Event handling
- `@solid-primitives/fetch`; Data fetching (if needed)
- `package.json`; Add/remove @solid-primitives/* packages
- `package.json`; Add `"@astrojs/rss": "^<latest>"`
- Sites with blog content; Add RSS endpoint
### 4.1 Solid UI (Shadcn-Solid): When Custom Design System Needed
### 4.2 TanStack Query: When Complex Client-Side Data Fetching Added
### 4.3 SolidStart: If Project Evolves from Docs to App
**Status:** NOT NOW; Astro+Starlight is superior for documentation