# Wyatt's Notes

[![CI](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml)
[![Deploy](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Monorepo of 9 static documentation sites built with Astro Starlight, deployed to Cloudflare Pages.

## Sites

| Site | Domain | Status | Scope |
|------|--------|--------|-------|
| DSE | [dse.wyattau.com](https://dse.wyattau.com) | Live | Hong Kong Diploma of Secondary Education |
| IB | [ib.wyattau.com](https://ib.wyattau.com) | Live | International Baccalaureate Diploma Programme |
| A-Level | [alevel.wyattau.com](https://alevel.wyattau.com) | Live | UK A-Level revision notes |
| University | [university.wyattau.com](https://university.wyattau.com) | Live | Proof-based undergraduate STEM |
| Qualifications | [qualifications.wyattau.com](https://qualifications.wyattau.com) | Live | GCSE, AP, Scottish Highers, Irish LC |
| Programming | [programming.wyattau.com](https://programming.wyattau.com) | Live | C++ systems programming |
| Infrastructure | [infrastructure.wyattau.com](https://infrastructure.wyattau.com) | Live | Server administration, databases |
| Languages | [languages.wyattau.com](https://languages.wyattau.com) | Live | Comparative programming languages |
| Tools | [tools.wyattau.com](https://tools.wyattau.com) | Live | Algorithms, data structures |
| Landing | [wyattsnotes.wyattau.com](https://wyattsnotes.wyattau.com) | Live | Hub page |
| Search | [search.wyattau.com](https://search.wyattau.com) | Live | Cross-site search API |

## Architecture

```
starlight-sites/
  sites/                    9 Starlight sub-sites + landing page
  shared/                   Shared components, styles, integrations, utils
  search-api/               Cloudflare Worker for cross-site search
  scripts/                  Validation and linting scripts
  tests/                    Unit, integration, and E2E tests
  .github/workflows/        CI/CD pipelines (ci.yml, deploy.yml, uptime.yml)
```

### Component Inventory

| Component | Type | Purpose |
|-----------|------|---------|
| PageTitle.astro | Starlight override | Breadcrumbs + h1 title from slug |
| MarkdownContent.astro | Starlight override | Content wrapper + progress tracking |
| PracticeProblem.tsx | SolidJS | Adaptive quiz with difficulty levels |
| FlashcardDeck.tsx | SolidJS | SM-2 spaced repetition flashcards |
| DiagnosticTest.tsx | SolidJS | Adaptive diagnostic assessment |
| DesmosGraph.tsx | SolidJS | Desmos graphing calculator embed |
| PhetSimulation.tsx | SolidJS | PhET interactive simulation embed |

## Prerequisites

- Node.js 18+
- Bun 1.2+

## Development

```bash
# Install all dependencies
bun install

# Start dev server for a specific site
cd sites/dse && bun run dev

# Run all linters
bun run lint

# Run all tests
bun run test

# Build a specific site
cd sites/dse && bun run build

# Generate a new site from template
bun run generate <name> <title> <url> <content-dir>
```

## Testing

```bash
# Unit tests (lint scripts, search API logic)
bun run test:unit

# Integration tests (repo structure, CI/CD config)
bun run test:integration

# GUI traversal and accessibility snapshots
bun run test:gui dse
bun run test:gui --all

# All tests
bun run test:all
```

## CI/CD

Two GitHub Actions workflows:

- **ci.yml** -- Runs on push/PR to main. Lints content, runs tests (134 tests), builds all 9 sites.
- **deploy.yml** -- Runs on push to main. Builds, deploys to Cloudflare Pages, updates search index.

Pre-commit hooks (Husky + lint-staged) enforce linting before every commit.

### Required Secrets

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Pages deployment |
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

## Content Conventions

- Precise, formal prose. Define terms before use.
- LaTeX notation: `$inline$` and `$$display$$`
- Code examples: complete, runnable, commented.
- No emojis in technical documentation.

## License

AGPLv3 -- See LICENSE.md
