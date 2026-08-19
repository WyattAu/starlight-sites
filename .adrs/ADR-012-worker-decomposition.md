# ADR-012: Search Worker modular decomposition

- **Status:** Accepted
- **Date:** 2026-08-19
- **Deciders:** Wyatt (maintainer), Nexus (Principal Systems Architect)

## Context

`search-api/worker.js` had grown to 967 lines mixing eight concerns: CORS
and routing, rate limiting, query validation, search execution and ranking,
suggestion generation, analytics persistence, A/B experimentation, dashboard
serving, and static-asset redirects. The code-quality audit
(CODE_QUALITY_AUDIT.md F5) flagged it as a god-file, and
CODE_QUALITY_MATRIX.md rated SOLID-SRP 3/5 almost entirely on this module.
Its inline `SITES`/`SITE_AUTHORITY` data also carried the three ghost sites
and stranded 36 real sites without search enrichment (see ADR-011). The
`/api/track` endpoint accepted arbitrary JSON into KV with no schema
validation despite `zod` sitting unused in the root package.json.

## Decision

Decompose into single-purpose modules around the existing routing table,
preserving the public surface (default fetch export + named pure-function
exports) so the 52 existing worker tests import the real implementation
unchanged:

| Module | Concern |
|---|---|
| `config.js` | Site catalogue + ranking weights, built from `sites.meta.json` (ADR-011) |
| `log.js` | Structured JSON logging |
| `rate-limit.js` | In-memory IP rate limiter |
| `validate.js` | Declarative input schemas (`TRACK_SCHEMA`, search query bounds) |
| `ranking.js` | Search execution + scoring + snippets + language detection (pure) |
| `suggest.js` | Autocomplete + zero-result suggestions (pure) |
| `analytics.js` | KV persistence + aggregation (trending, metrics, track fold) |
| `dashboard.js` | Dashboard HTML renderer, fed the site config (no duplicated map) |
| `handlers.js` | One handler per route |
| `worker.js` | Entry point: CORS, routing table, error boundary, test re-exports |

Validation policy: a 60-line declarative schema table replaces the
installed-but-unused `zod` (and `@felte/*`), which are removed from the root
package.json. Dependency-free validation keeps the edge bundle small; the
schema table provides the same inversion (policy data, not inline checks)
without the dependency. Unknown `/api/track` events and out-of-bounds fields
are now rejected with 400 instead of being persisted verbatim.

`build-search-index.js` now enumerates all Astro sites from the SSOT module,
restoring search coverage from 6 live sites to all 45.

## Consequences

- SRP: each module has one reason to change; ranking experiments no longer
  edit the same file as dashboard security headers.
- The Worker bundle is verified with `wrangler deploy --dry-run` (JSON
  import attribute supported by the wrangler esbuild pipeline).
- Adding an endpoint = one handler module + one routing-table row.
- `zod` removal keeps the root dependency list honest (everything installed
  is imported).
