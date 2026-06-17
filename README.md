# Wyatt's Notes

[![CI](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml)
[![Deploy](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Monorepo of nine static documentation sites, a landing page, and a cross-site
search API. Each site is built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build), uses SolidJS for interactive
components, and is deployed to Cloudflare Pages.

## Sites

| Site | Domain | Scope |
|------|--------|-------|
| DSE | [dse.wyattau.com](https://dse.wyattau.com) | Hong Kong Diploma of Secondary Education |
| IB | [ib.wyattau.com](https://ib.wyattau.com) | International Baccalaureate Diploma Programme |
| A-Level | [alevel.wyattau.com](https://alevel.wyattau.com) | UK A-Level revision notes |
| University | [university.wyattau.com](https://university.wyattau.com) | Proof-based undergraduate STEM |
| Qualifications | [qualifications.wyattau.com](https://qualifications.wyattau.com) | GCSE, AP, Scottish Highers, Irish LC |
| Programming | [programming.wyattau.com](https://programming.wyattau.com) | C++ systems programming |
| Infrastructure | [infrastructure.wyattau.com](https://infrastructure.wyattau.com) | Server administration, databases |
| Languages | [languages.wyattau.com](https://languages.wyattau.com) | Comparative programming languages |
| Tools | [tools.wyattau.com](https://tools.wyattau.com) | Algorithms, data structures |
| Landing | [wyattsnotes.wyattau.com](https://wyattsnotes.wyattau.com) | Hub page |
| Search | [search.wyattau.com](https://search.wyattau.com) | Cross-site search API |

## Architecture

```
starlight-sites/
  sites/          9 Starlight sub-sites + landing page (main/)
  shared/         Canonical source for components, utils, styles, integrations
  search-api/     Cloudflare Worker (search) + canonical client search scripts
  scripts/        Linters, sync tool, site generator
  tests/          unit, integration, component (Vitest), e2e (Playwright)
  .github/        ci.yml, deploy.yml, preview.yml, uptime.yml
  .adrs/          Architecture Decision Records
```

### Single-source-of-truth model

`shared/` holds the canonical components, utilities, and styles. Each site
receives a standalone copy so it builds independently. The tool
`scripts/sync-shared.mjs` propagates the canonical sources to every site and
detects drift (`bun run sync:check`). The same model applies to the client
search scripts canonicalised under `search-api/`. An integration test
(`tests/unit/shared-sync.test.js`) enforces byte-for-byte parity in CI.

### Component inventory

| Component | Type | Purpose |
|-----------|------|---------|
| BaseDialog.tsx | SolidJS | Reusable dialog shell (size parameter) |
| QuestionDialog.tsx | SolidJS | Large dialog (wraps BaseDialog) |
| ResultsDialog.tsx | SolidJS | Large dialog (wraps BaseDialog) |
| SettingsDialog.tsx | SolidJS | Medium dialog (wraps BaseDialog) |
| PageTitle.astro | Starlight override | Breadcrumbs and h1 derived from slug |
| MarkdownContent.astro | Starlight override | Content wrapper and progress tracking |
| Head.astro | Starlight override | JSON-LD structured data injection |
| PracticeProblem.tsx | SolidJS | Adaptive multiple-choice practice with keyboard nav |
| FlashcardDeck.tsx | SolidJS | SM-2 spaced-repetition flashcards |
| DiagnosticTest.tsx | SolidJS | Adaptive diagnostic assessment |
| DesmosGraph.tsx | SolidJS | Desmos graphing-calculator embed |
| PhetSimulation.tsx | SolidJS | PhET interactive simulation embed |
| LocaleSwitcher.tsx | SolidJS | Language switching dropdown |
| ToastProvider.tsx | SolidJS | Toast notification wrapper (solid-sonner) |

## Prerequisites

- Node.js 20+
- Bun 1.2+

## Development

```bash
# Install dependencies (also initialises Husky hooks)
bun install

# Develop a specific site
cd sites/dse && bun run dev

# Run the full quality gate (linters + tests)
bun run verify
```

### Editing shared assets

Modify the canonical source under `shared/` (components, utils, styles) or
`search-api/` (client search scripts), then synchronise every site:

```bash
bun run sync          # propagate canonical sources to all sites
bun run sync:check    # CI mode: exit non-zero on drift
```

Never edit per-site copies directly; they are regenerated.

## Testing

```bash
bun run test:unit         # Vitest component tests (SolidJS components)
bun run test:legacy       # Node built-in unit + integration tests
bun run test:integration  # integration tests (repo structure, CI/CD config)
bun run test:gui dse      # GUI DOM + accessibility snapshot for one site
bun run test:gui --all    # all sites (optional PNG screenshots if Playwright present)
bun run test:e2e          # Playwright end-to-end tests
bun run test              # unit + legacy tests (177 tests)
bun run test:coverage     # Vitest with V8 coverage report
```

The GUI traversal script captures DOM structural snapshots, runs a WCAG-oriented
accessibility audit, detects drift against committed baselines
(`tests/e2e/baseline/`), and captures PNG screenshots when a Playwright chromium
installation is available (graceful DOM-only fallback otherwise).

## Linting

```bash
bun run lint              # Biome lint + format check
bun run lint:fix          # Biome auto-fix
bun run lint:content      # Markdown/MDX content validation
bun run lint:config       # Astro config validation
bun run lint:no-emoji     # Pictograph prohibition (code, docs, config)
bun run lint:links        # Internal link integrity
bun run lint:all          # Everything (biome + content + config + no-emoji + links)
bun run format            # Biome format (write)
bun run format:check      # Biome format (check only)
```

### No-emoji policy

Emoji and pictograph symbols are prohibited in code, configuration, and
repository documentation. Content pages (`.md`/`.mdx` under `sites/*/src/content`)
are exempt where Unicode code examples and typographic answer markers are
pedagogically required. The linter flags the dedicated pictograph planes
(U+2600-U+27BF, U+1F000-U+1FAFF); mathematical arrows and geometric shapes are
out of scope as legitimate notation.

## CI/CD

Four GitHub Actions workflows:

- **ci.yml** -- On push/PR to main: Biome lint, no-emoji lint, content/config
  validation, shared-asset integrity, unit + integration + Vitest tests, and a
  build matrix across all nine sites.
- **deploy.yml** -- On push to main: a gate job (the full quality suite) must
  pass before any site, the landing page, or the search index is deployed to
  Cloudflare Pages.
- **preview.yml** -- On PR to main: builds and deploys preview versions of all
  sites to Cloudflare Pages, posts preview URL as PR comment.
- **uptime.yml** -- Scheduled every six hours: probes every site and opens an
  issue on non-200 responses.

Pre-commit (Husky v9 + lint-staged) enforces per-file checks, shared-asset
integrity, and unit + integration tests before each commit.

### Required secrets

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Pages + Worker deployment |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account identifier |
| `CLOUDFLARE_KV_NAMESPACE_ID` | Search index KV namespace |

## Search API

Cross-site search at search.wyattau.com:

| Endpoint | Method | Parameters | Description |
|----------|--------|------------|-------------|
| `/api/search` | GET | `q`, `limit`, `site`, `subject`, `preview` | Full-text search across all sites |
| `/api/sites` | GET | -- | List all indexed sites |
| `/api/health` | GET | -- | Index health and version |
| `/api/trending` | GET | -- | Top trending queries |
| `/api/suggest` | GET | `q` | Query autocomplete suggestions |
| `/api/analytics` | GET | -- | Search analytics dashboard data |

## Content conventions

- Precise, formal prose. Define terms before use.
- LaTeX notation: `$inline$` and `$$display$$`.
- Code examples: complete, runnable, commented.
- No emojis in technical documentation.

## License

AGPLv3. See [LICENSE.md](LICENSE.md).
