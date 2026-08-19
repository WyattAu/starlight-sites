# ADR-011: Site list derived from sites/ (single source of truth)

- **Status:** Accepted
- **Date:** 2026-08-19
- **Deciders:** Wyatt (maintainer), Nexus (Principal Systems Architect)

## Context

The repository grew from 9 sites to 46 between June and August 2026. The site
enumeration was hand-copied into at least seven surfaces: two test files, the
CI build matrix, the deploy matrix, the preview matrix, the uptime probe
list, the Lighthouse URL list, the Playwright project list, and three
search-api files (worker site map, dashboard map, index builder). When the
`university`, `qualifications`, and `infrastructure` sites were split and
renamed, every copy drifted:

- `preview.yml` referenced three non-existent sites and **failed on every run**
- `tests/unit/shared-sync.test.js` omitted 7 sites and contained a duplicate
  `alevel` entry, silently under-covering the sync it claimed to guarantee
- the CI build matrix omitted 6 sites (they were never build-gated)
- `search-api/build-search-index.js` indexed only 9 sites (3 defunct), so
  cross-site search covered **6 of 45 live sites** for months

This is the classic Defence-configuration-management failure mode: the same
enumeration maintained by hand in N places is N-1 opportunities for drift,
and nothing detects the divergence.

## Decision

1. **The sites/ directory is the authoritative enumeration.** Any directory
   with an `astro.config.mjs` is an Astro site; `main` is the landing page.
2. **`scripts/lib/sites.cjs` is the only module permitted to enumerate
   sites.** It derives the list via `readdir`, cross-validates it against
   `sites.meta.json` (display name, color, ranking authority), and throws on
   drift in either direction.
3. **`sites.meta.json` holds per-site policy data** (name/color/authority) --
   pure JSON so it is importable by the Cloudflare Worker bundle without
   node:fs.
4. **Workflows derive their matrices at resolve time.** ci.yml, deploy.yml,
   and preview.yml run `node scripts/list-sites.js` in a `resolve-sites` job
   and consume the JSON via `fromJson()`. No site slug may appear in
   workflow YAML except as policy subsets defined in the SSOT module.
5. **`tests/unit/no-ghost-sites.test.js` is the enforcement gate**: every
   `<slug>.wyattau.com` reference in configuration surfaces must resolve to a
   real site directory. A removal that leaves any reference behind fails CI
   immediately.

## Consequences

- Adding a site: create `sites/<slug>/` + one `sites.meta.json` entry. Every
  matrix, probe, index, and enrichment updates automatically.
- Removing a site: delete the directory + meta entry; the no-ghost test
  enumerates every stale reference that must be cleaned.
- The preview subset and Playwright projects remain a *policy* choice (one
  representative site per structural variant) but are membership-validated
  against the real list.
- Hand-adding a slug to a workflow matrix now fails the ghost test by
  construction (it would reference a site the derived list doesn't know
  about).
