# Wyatt's Notes

[![CI](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml)
[![Deploy](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Monorepo of 45 static documentation sites, a landing page, and a cross-site
search API. Each site is built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build), uses SolidJS for interactive
components, and is deployed to Cloudflare Pages.

## Sites

Site list is derived from `sites/` via the SSOT module
(`scripts/lib/sites.cjs`, ADR-011). Never hand-copy site lists.

| Site | Domain |
|------|--------|
| Admissions | https://admissions.wyattau.com |
| A-Level | https://alevel.wyattau.com |
| AP | https://ap.wyattau.com |
| CBSE | https://cbse.wyattau.com |
| Chemistry | https://chemistry.wyattau.com |
| Civics Tests | https://civics-tests.wyattau.com |
| Computer Science | https://computer-science.wyattau.com |
| C++ | https://cpp.wyattau.com |
| Dart | https://dart.wyattau.com |
| Databases | https://databases.wyattau.com |
| Driving (EU) | https://driving-eu.wyattau.com |
| Driving (UK) | https://driving-uk.wyattau.com |
| Driving (US) | https://driving-us.wyattau.com |
| DSE | https://dse.wyattau.com |
| Elixir | https://elixir.wyattau.com |
| Gaokao | https://gaokao.wyattau.com |
| GCSE | https://gcse.wyattau.com |
| Go | https://go.wyattau.com |
| Haskell | https://haskell.wyattau.com |
| Highers | https://highers.wyattau.com |
| HSC | https://hsc.wyattau.com |
| IB | https://ib.wyattau.com |
| Java | https://java.wyattau.com |
| Kotlin | https://kotlin.wyattau.com |
| Language Tests | https://language-tests.wyattau.com |
| Languages | https://languages.wyattau.com |
| Leaving Cert | https://leaving-cert.wyattau.com |
| Licensing | https://licensing.wyattau.com |
| Linux | https://linux.wyattau.com |
| Machine Learning | https://machine-learning.wyattau.com |
| Mathematics | https://mathematics.wyattau.com |
| Networking | https://networking.wyattau.com |
| Physics | https://physics.wyattau.com |
| Professional Certs | https://professional-certs.wyattau.com |
| Programming | https://programming.wyattau.com |
| Python | https://python.wyattau.com |
| Ruby | https://ruby.wyattau.com |
| Rust | https://rust.wyattau.com |
| SAT | https://sat.wyattau.com |
| Security | https://security.wyattau.com |
| Swift | https://swift.wyattau.com |
| Tools | https://tools.wyattau.com |
| TrueNAS | https://truenas.wyattau.com |
| Tuning | https://tuning.wyattau.com |
| TypeScript | https://typescript.wyattau.com |

### Hub

| Site | Domain |
|------|--------|
| Landing | https://wyattsnotes.wyattau.com |
| Search | https://search.wyattau.com |

## Architecture

```
starlight-sites/
  sites/          45 Starlight sub-sites + landing page (main/)
  shared/         Canonical source for components, utils, styles, integrations
  search-api/     Cloudflare Worker (search) + canonical client search scripts
  packages/       Rust WASM widgets (starlight-widgets)
  scripts/        Linters, sync tool, site generators, archived one-offs
  tests/          unit, integration, component (Vitest), e2e (Playwright)
  .github/        ci.yml, deploy.yml, preview.yml, e2e.yml, uptime.yml, ...
```

### Single-source-of-truth model

`shared/` holds the canonical components, utilities, and styles. Each site
receives a standalone copy so it builds independently. The tool
`scripts/sync-shared.mjs` propagates the canonical sources to every site and
detects drift (`bun run sync:check`). The same model applies to the client
search scripts canonicalised under `search-api/`. An integration test
(`tests/unit/shared-sync.test.js`) enforces byte-for-byte parity in CI.

### Rendering pipeline

**KaTeX math:** `rehype-katex` + `remark-math` in `astro.config.mjs` convert
`$inline$` and `$$display$$` to HTML. KaTeX CSS is loaded via Starlight's
`head` config array, rendered by the custom `Head.astro` component.

**Mermaid diagrams:** Starlight's Expressive Code intercepts ` ```mermaid `
code blocks and wraps them in `<pre data-language="mermaid">`. The
`mermaid-render.js` script converts these back to plain `<pre class="mermaid">`
elements, loads mermaid.min.js from CDN, and renders SVG diagrams.

**Admonitions:** Starlight's `remark-asides` plugin doesn't work with
Astro 6's Content Layer. All `:::caution`, `:::tip`, `:::note`, `:::info`,
and `:::danger` directives have been converted to:
- `.md` files: raw `<aside>` HTML matching Starlight's structure
- `.mdx` files: Starlight `<Aside>` component

## Prerequisites

- Node.js 20+
- Bun 1.3+

## Development

```bash
# Install dependencies (also initialises Husky hooks)
bun install

# Develop a specific site
cd sites/ib && bun run dev

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
bun run test           # unit + integration tests
bun run test:components # Vitest component tests (SolidJS components)
bun run test:coverage  # with v8 coverage thresholds
```

## Linting

```bash
bun run lint              # Biome lint + format check
bun run lint:fix          # Biome auto-fix
bun run lint:content      # Markdown/MDX content validation
bun run lint:config       # Astro config validation
bun run lint:config-parity # Astro config parity (ADR-013)
bun run lint:no-emoji     # Pictograph prohibition (code, docs, config)
bun run lint:links        # Internal link integrity
bun run lint:secrets      # Secret pattern scan
bun run lint:all          # Everything
```

## CI/CD

- **ci.yml** -- On PR: Biome lint, content validation, sync integrity,
  typecheck, tests, config parity.
- **deploy.yml** -- On push to main: staged deploy -- canary (2 sites) ->
  rollout (43 sites) -> landing -> search index. Includes `mark-good` tag
  and auto-rollback on failure (ADR-014).
- **preview.yml** -- On PR: builds preview versions, posts URL as PR comment.
- **e2e.yml** -- Daily + on push to main: Playwright visual regression and
  smoke tests against live URLs.
- **uptime.yml** -- Every 6 hours: probes all sites, opens issues on failures.
- **slo-alert.yml** -- Every 30 minutes: monitors search API health
  (zero-result rate, latency), opens issues on SLO breach.
- **audit.yml** -- Weekly: `bun audit` opens dependency vulnerability issues.

Pre-commit (Husky v9 + lint-staged) enforces per-file checks, shared-asset
integrity, and tests before each commit.

### Required secrets

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Pages + Worker deployment |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account identifier |
| `CLOUDFLARE_KV_NAMESPACE_ID` | Search index KV namespace (optional -- static fallback when unset) |

## Search API

Cross-site search at search.wyattau.com:

| Endpoint | Method | Parameters | Description |
|----------|--------|------------|-------------|
| `/api/search` | GET | `q`, `limit`, `site`, `subject`, `variant`, `lang`, `preview` | Full-text search across all sites |
| `/api/sites` | GET | -- | List all indexed sites |
| `/api/health` | GET | -- | Index health and SLO metrics |
| `/api/trending` | GET | -- | Top trending queries |
| `/api/suggest` | GET | `q` | Query autocomplete |
| `/api/analytics` | GET | -- | Search analytics dashboard data |
| `/api/track` | POST | JSON body | Client-side event tracking |
| `/api/errors` | GET | -- | Client error log |
| `/api/ab-test` | GET | -- | A/B test variant status |
| `/` | GET | -- | Analytics dashboard |

## Content conventions

- Precise, formal prose. Define terms before use.
- LaTeX notation: `$inline$` and `$$display$$`.
- Code examples: complete, runnable, commented.
- No emojis in technical documentation.

## License

AGPLv3. See [LICENSE.md](LICENSE.md).
