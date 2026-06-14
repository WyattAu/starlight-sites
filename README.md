# Wyatt's Notes

Monorepo of 9 static documentation sites built with Astro Starlight, deployed to Cloudflare Pages.

## Sites

| Site | Domain | Scope |
|------|--------|-------|
| DSE | dse.wyattau.com | Hong Kong Diploma of Secondary Education |
| IB | ib.wyattau.com | International Baccalaureate Diploma Programme |
| A-Level | alevel.wyattau.com | UK A-Level revision notes |
| University | university.wyattau.com | Proof-based undergraduate STEM |
| Qualifications | qualifications.wyattau.com | GCSE, AP, Scottish Highers, Irish LC |
| Programming | programming.wyattau.com | C++ systems programming |
| Infrastructure | infrastructure.wyattau.com | Server administration, databases |
| Languages | languages.wyattau.com | Comparative programming languages |
| Tools | tools.wyattau.com | Algorithms, data structures |

## Architecture

```
starlight-sites/
  sites/                    9 Starlight sub-sites
  shared/                   Shared components, styles, integrations
  search-api/               Cloudflare Worker for cross-site search
  scripts/                  Validation and linting scripts
  tests/                    Unit, integration, and E2E tests
  .github/workflows/        CI/CD pipelines (ci.yml, deploy.yml, uptime.yml)
```

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

- **ci.yml** -- Runs on push/PR to main. Lints content, runs tests, builds all 9 sites.
- **deploy.yml** -- Runs on push to main. Builds, deploys to Cloudflare Pages, updates search index.

Pre-commit hooks (Husky + lint-staged) enforce linting before every commit.

## Search API

Cross-site search at search.wyattau.com:

```
GET /api/search?q=physics&limit=20
GET /api/sites
GET /api/health
GET /api/trending
GET /api/suggest?q=phys
```

## Content Conventions

- Precise, formal prose. Define terms before use.
- LaTeX notation: `$inline$` and `$$display$$`
- Code examples: complete, runnable, commented.
- No emojis in technical documentation.

## License

AGPLv3 -- See LICENSE.md
