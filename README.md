# Wyatt's Notes

[![CI](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/ci.yml)
[![Deploy](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml/badge.svg)](https://github.com/WyattAu/starlight-sites/actions/workflows/deploy.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Monorepo of 40+ static documentation sites, a landing page, and a cross-site
search API. Each site is built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build), uses SolidJS for interactive
components, and is deployed to Cloudflare Pages.

## Sites

### Exam Boards
| Site | Domain |
|------|--------|
| DSE | [dse.wyattau.com](https://dse.wyattau.com) |
| IB | [ib.wyattau.com](https://ib.wyattau.com) |
| A-Level | [alevel.wyattau.com](https://alevel.wyattau.com) |
| GCSE | [gcse.wyattau.com](https://gcse.wyattau.com) |
| AP | [ap.wyattau.com](https://ap.wyattau.com) |
| Highers | [highers.wyattau.com](https://highers.wyattau.com) |
| Leaving Cert | [leaving-cert.wyattau.com](https://leaving-cert.wyattau.com) |
| CBSE | [cbse.wyattau.com](https://cbse.wyattau.com) |
| Gaokao | [gaokao.wyattau.com](https://gaokao.wyattau.com) |
| HSC | [hsc.wyattau.com](https://hsc.wyattau.com) |
| SAT | [sat.wyattau.com](https://sat.wyattau.com) |

### Computer Science
| Site | Domain |
|------|--------|
| C++ | [cpp.wyattau.com](https://cpp.wyattau.com) |
| Java | [java.wyattau.com](https://java.wyattau.com) |
| Python | [python.wyattau.com](https://python.wyattau.com) |
| Rust | [rust.wyattau.com](https://rust.wyattau.com) |
| Go | [go.wyattau.com](https://go.wyattau.com) |
| Kotlin | [kotlin.wyattau.com](https://kotlin.wyattau.com) |
| TypeScript | [typescript.wyattau.com](https://typescript.wyattau.com) |
| Dart | [dart.wyattau.com](https://dart.wyattau.com) |
| Swift | [swift.wyattau.com](https://swift.wyattau.com) |
| Ruby | [ruby.wyattau.com](https://ruby.wyattau.com) |
| Haskell | [haskell.wyattau.com](https://haskell.wyattau.com) |
| Elixir | [elixir.wyattau.com](https://elixir.wyattau.com) |
| Language Hub | [languages.wyattau.com](https://languages.wyattau.com) |
| Tools | [tools.wyattau.com](https://tools.wyattau.com) |

### Further Studies
| Site | Domain |
|------|--------|
| Mathematics | [mathematics.wyattau.com](https://mathematics.wyattau.com) |
| Physics | [physics.wyattau.com](https://physics.wyattau.com) |
| Chemistry | [chemistry.wyattau.com](https://chemistry.wyattau.com) |
| CS Theory | [computer-science.wyattau.com](https://computer-science.wyattau.com) |
| Admissions | [admissions.wyattau.com](https://admissions.wyattau.com) |

### Infrastructure
| Site | Domain |
|------|--------|
| Networking | [networking.wyattau.com](https://networking.wyattau.com) |
| Linux | [linux.wyattau.com](https://linux.wyattau.com) |
| Security | [security.wyattau.com](https://security.wyattau.com) |
| Databases | [databases.wyattau.com](https://databases.wyattau.com) |
| TrueNAS | [truenas.wyattau.com](https://truenas.wyattau.com) |
| Tuning | [tuning.wyattau.com](https://tuning.wyattau.com) |
| Licensing | [licensing.wyattau.com](https://licensing.wyattau.com) |
| ML | [machine-learning.wyattau.com](https://machine-learning.wyattau.com) |

### Hub
| Site | Domain |
|------|--------|
| Landing | [wyattsnotes.wyattau.com](https://wyattsnotes.wyattau.com) |
| Search | [search.wyattau.com](https://search.wyattau.com) |

## Architecture

```
starlight-sites/
  sites/          40+ Starlight sub-sites + landing page (main/)
  shared/         Canonical source for components, utils, styles, integrations
  search-api/     Cloudflare Worker (search) + canonical client search scripts
  packages/       Rust WASM widgets (starlight-widgets)
  scripts/        Linters, sync tool, site generators
  tests/          unit, integration, component (Vitest), e2e (Playwright)
  .github/        ci.yml, deploy.yml, preview.yml, uptime.yml
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
- Bun 1.2+

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
bun run test           # unit + integration tests (465+ tests)
bun run test:components # Vitest component tests (SolidJS components)
```

## Linting

```bash
bun run lint              # Biome lint + format check
bun run lint:fix          # Biome auto-fix
bun run lint:content      # Markdown/MDX content validation
bun run lint:config       # Astro config validation
bun run lint:no-emoji     # Pictograph prohibition (code, docs, config)
bun run lint:links        # Internal link integrity
bun run lint:all          # Everything
```

## CI/CD

- **ci.yml** -- On PR: Biome lint, content validation, shared-asset integrity, tests, build matrix.
- **deploy.yml** -- On push to main: quality gate + deploy all sites to Cloudflare Pages.
- **preview.yml** -- On PR: builds preview versions, posts URL as PR comment.
- **uptime.yml** -- Every 6 hours: probes all sites, opens issues on failures.

Pre-commit (Husky v9 + lint-staged) enforces per-file checks, shared-asset
integrity, and tests before each commit.

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
| `/api/search` | GET | `q`, `limit`, `site`, `subject` | Full-text search across all sites |
| `/api/sites` | GET | -- | List all indexed sites |
| `/api/health` | GET | -- | Index health |
| `/api/trending` | GET | -- | Top trending queries |
| `/api/suggest` | GET | `q` | Query autocomplete |
| `/api/analytics` | GET | -- | Search analytics |

## Content conventions

- Precise, formal prose. Define terms before use.
- LaTeX notation: `$inline$` and `$$display$$`.
- Code examples: complete, runnable, commented.
- No emojis in technical documentation.

## License

AGPLv3. See [LICENSE.md](LICENSE.md).
