# Site Comparison Matrix

A comprehensive audit comparing feature parity, design system, interactive features, and infrastructure across all 10 sites in the [starlight-sites](https://github.com/WyattAu/starlight-sites) monorepo.

*Last updated: 2026-07-11*

---

## Overview

This monorepo houses 10 sites built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), using SolidJS for interactive components, Tailwind v4 for styling, and deployed to Cloudflare Pages. The sites share canonical components via a sync tool (`scripts/sync-shared.mjs`) but each builds independently.

| # | ID | Domain | Scope |
|---|----|--------|-------|
| 1 | main | wyattsnotes.wyattau.com | Hub / landing page |
| 2 | langs | languages.wyattau.com | Comparative programming languages (Dart, Go, Java, Python, Rust, etc.) |
| 3 | tools | tools.wyattau.com | Algorithms, data structures, version control, ML |
| 4 | prog | programming.wyattau.com | C++ systems programming (ownership, templates, concurrency) |
| 5 | uni | university.wyattau.com | Proof-based undergraduate STEM (linear algebra, calculus, physics) |
| 6 | infra | infrastructure.wyattau.com | Server administration, databases, networking, security |
| 7 | quals | qualifications.wyattau.com | GCSE, AP, Scottish Highers, Irish LC, CBSE, Gaokao |
| 8 | alevel | alevel.wyattau.com | UK A-Level (AQA, OCR, Edexcel) — 11 subjects |
| 9 | ib | ib.wyattau.com | International Baccalaureate Diploma Programme |
| 10 | dse | dse.wyattau.com | Hong Kong DSE — 8 subjects |

---

## Feature Parity Matrix

### Core Framework

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Starlight 0.40 | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Astro 6.4 | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| SolidJS 1.9 | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Tailwind v4 | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| MDX support | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Sitemap | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| HTML compression | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Search

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Cross-site search API | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Page-level search modal | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Starlight Search override | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Search with static fallback (no KV) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Content & Rendering

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Math (KaTeX) | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Mermaid diagrams | NO | YES | YES | YES | NO | YES | NO | NO | YES | NO |
| Edit link | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Last updated | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Pagination | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Table of contents | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Breadcrumbs | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Reading progress bar | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Design System

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Cinematic Brutalism design | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Amoebic UI (organic radii) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Spatial Materialism (elevation) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Fluid spacing scale (clamp) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Organic easing curves | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Self-hosted Inter + JetBrains Mono | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Dark/light/sepia/contrast themes | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Nord, Dracula, Monokai themes | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Ayu Mirage, Solarized, Papercolor | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| 100% component coverage per theme | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Reading Controls (Floating Settings Panel)

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Floating gear button (bottom-right) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Theme selector (10 themes) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Font size slider (80-150%) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Font weight slider (300-900) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Line height slider (1.0-2.5) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Letter spacing slider | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Paragraph gap slider (0.5-3x) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Content width (narrow/standard/wide/full) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Font family (sans/serif/mono) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Justify toggle | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Reduce motion toggle | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Dim images toggle | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Auto-hide nav on scroll | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Reading mode (hide sidebar/ToC/nav) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Locale switcher (en/zh) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Interactive Features

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Dictionary popup (text selection) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| 4-color text highlighting (persisted) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Keyboard shortcuts cheat sheet | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Reading position memory (session) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Flashcards (SM-2 spaced repetition) | NO | YES | NO | NO | YES | NO | NO | NO | YES | NO |
| Practice problems (interactive) | NO | YES | NO | YES | YES | YES | NO | YES | YES | NO |
| Diagnostic tests | NO | NO | NO | NO | NO | NO | YES | YES | YES | YES |
| Review queue (all-due-cards) | NO | YES | NO | NO | YES | NO | NO | NO | YES | NO |
| Desmos graph embed | NO | NO | YES | YES | YES | YES | YES | YES | NO | NO |
| PhET simulation embed | NO | NO | YES | YES | YES | YES | YES | YES | NO | NO |

### PWA / Offline

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Service worker (sw.js) | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Cache-first for static assets | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Stale-while-revalidate for HTML | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Network-first for search API | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Manifest.json in head | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Auto-activate SW updates | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### Infrastructure

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| KaTeX CDN | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Cloudflare analytics | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Web vitals monitoring | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Cloudflare _headers (caching) | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Font preloads | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| OG images | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Cross-site search scripts | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Page search scripts | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

### i18n / Internationalization

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| zh.json UI translations | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| zh locale in Starlight config | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Locale switcher in settings | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| zh content files | NO | NO | NO | NO | NO | NO | NO | NO | YES | NO |

### Nav & Branding

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Clean subject codes (no "Wyatt's Notes —") | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| WN monogram logo | YES | NO | NO | NO | NO | NO | NO | NO | NO | NO |
| Social links | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO |
| Logo image | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO |

### Integrations

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Tabs integration | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO |
| unplugin-icons | NO | NO | NO | NO | NO | NO | NO | YES | NO | NO |
| Client-only directives plugin | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Lazy images rehype plugin | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| Mobile menu | NO | YES | YES | YES | YES | YES | YES | YES | YES | YES |
| LocaleSwitcher component | YES | YES | YES | YES | YES | YES | YES | YES | YES | YES |

---

## Feature Gap Analysis

### Gaps Worth Closing

| Gap | Sites Affected | Impact | Effort |
|-----|---------------|--------|--------|
| **Mermaid diagrams missing** | uni, quals, alevel, dse | Medium — diagrams would help STEM content | Low (add to astro.config + package.json) |
| **Flashcards only on uni + ib** | 6 sites missing | Medium — spaced repetition is high-value | Medium (content creation) |
| **Practice problems inconsistent** | tools, quals, dse missing | Medium — interactive practice is core feature | Medium (content creation) |
| **Diagnostic tests only on 4 sites** | 5 sites missing | Low | Medium (content creation) |
| **Desmos/PhET missing on ib + dse** | ib, dse | Low — these are niche interactive embeds | Low (component exists, needs content) |
| **i18n zh content only on ib** | 9 sites missing zh content | Low (English is primary) | Very High (translation effort) |
| **Tabs integration missing** | All 10 sites | Low | Low (add to astro.config) |
| **Social links missing** | All 10 sites | Very Low | Low |
| **Logo image missing** | All 10 sites | Very Low | Low |
| **unplugin-icons only on alevel** | 9 sites missing | Very Low (icons are inlined) | Low |

### Intentional Gaps

| Gap | Rationale |
|-----|-----------|
| **main has no Starlight** | Landing page is a custom Astro page, not documentation |
| **main has no search** | Search button opens cross-site search modal; no local content to index |
| **main has no math/KaTeX** | No mathematical content on the landing page |

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **Custom Head.astro** | Discards Starlight's head array to avoid duplicate script tags; all head entries added explicitly |
| **pagefind: false** | Starlight's built-in Pagefind search disabled in favor of custom cross-site search API |
| **Custom Search component** | Replaces Starlight's default search button with one that opens the cross-site search modal |
| **shared/ as canonical source** | All components, styles, utils, i18n, and scripts synced to sites via sync-shared.mjs |
| **CSS custom properties for theming** | All theme colors use --sl-color and --wn-* CSS vars; switching theme = changing data-theme attribute |
| **reader.js as vanilla JS** | No framework dependency for the floating settings panel; uses same localStorage keys as SolidJS SettingsDialog |
| **Search worker with static fallback** | Bundles merged-index.js directly so search works without Cloudflare KV |

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Total content files | 2,030+ |
| Total sites | 10 |
| Themes | 10 (dark, light, sepia, nord, dracula, monokai, ayu-mirage, solarized, papercolor, contrast) |
| Reading controls | 13 (theme, font-size, font-weight, line-height, letter-spacing, para-gap, content-width, font-family, justify, reduce-motion, dim-images, auto-hide-nav, reading-mode) |
| Interactive components | FlashcardDeck, PracticeProblem, DiagnosticTest, DesmosGraph, PhetSimulation, ReviewQueue |
| Keyboard shortcuts | 12 (?, s, /, t, f, g+h, n, p, j, k, Esc, Cmd+,) |
| Cache layers | 3 (static, pages, API) |
| Pre-commit tests | 219 (all passing) |
