# Wyatt's Notes

Free, rigorous study notes for IB, A-Level, GCSE, AP, DSE, university STEM, and programming.

## Overview

Wyatt's Notes is a collection of 9 static documentation sites built with Astro Starlight, deployed to Cloudflare Pages. The sites cover:

- **DSE** (dse.wyattau.com) — Hong Kong Diploma of Secondary Education
- **IB** (ib.wyattau.com) — International Baccalaureate Diploma Programme
- **A-Level** (alevel.wyattau.com) — UK A-Level revision notes
- **University** (university.wyattau.com) — Proof-based undergraduate STEM
- **Qualifications** (qualifications.wyattau.com) — GCSE, AP, Scottish Highers, Irish LC
- **Programming** (programming.wyattau.com) — C++ systems programming
- **Infrastructure** (infrastructure.wyattau.com) — Server administration, databases
- **Languages** (languages.wyattau.com) — Comparative programming languages
- **Tools** (tools.wyattau.com) — Algorithms, data structures, developer tools

## Architecture

```
wyattsnotes/
├── sites/                    # 9 Starlight sites
│   ├── dse/
│   ├── ib/
│   ├── alevel/
│   ├── university/
│   ├── qualifications/
│   ├── programming/
│   ├── infrastructure/
│   ├── languages/
│   └── tools/
├── shared/                   # Shared components
├── search-api/               # Cloudflare Worker for cross-site search
├── scripts/                  # Validation and linting scripts
└── .github/workflows/        # CI/CD pipelines
```

## Development

### Prerequisites

- Node.js 18+
- Bun 1.2+

### Local Development

```bash
# Install dependencies
bun install

# Start dev server for a specific site
cd sites/dse
bun run dev

# Run validation
node scripts/lint-content.js
node scripts/lint-config.js
```

### Building

```bash
# Build a specific site
cd sites/dse
bun run build

# Build all sites
for site in sites/*/; do
  cd $site
  bun install && bun run build
  cd ..
done
```

## Deployment

Sites are automatically deployed to Cloudflare Pages on push to `main` via GitHub Actions.

### Manual Deployment

```bash
# Deploy a specific site
cd sites/dse
npx wrangler pages deploy dist --project-name wyattsnotes-dse
```

## Search API

Cross-site search is available at `search.wyattau.com`:

```
GET /api/search?q=physics&limit=20
GET /api/sites
GET /api/health
GET /api/trending
```

## Content Guidelines

### Writing Style

- Precise and formal
- Define terms before using them
- Include worked examples
- Use consistent notation

### Mathematical Content

- Use LaTeX notation: `$inline$` and `$$display$$`
- Verify formulas render correctly

### Code Examples

- Include complete, runnable examples
- Add comments explaining key lines
- Test examples before submitting

## License

AGPLv3 — See [LICENSE.md](LICENSE.md)
