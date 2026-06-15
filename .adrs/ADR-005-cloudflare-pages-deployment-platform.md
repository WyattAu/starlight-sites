# ADR-005: Cloudflare Pages as the deployment platform

## Status

Accepted

## Context

The repository is hosted on GitHub. The deployment task specification
suggested "GitHub Pages for a GitHub repository; Cloudflare Pages for a
Forgejo repository." Nine sites and a landing page are already live in
production on Cloudflare Pages, fronted by `*.wyattau.com` subdomains, with a
Cloudflare Worker powering cross-site search backed by a KV namespace. The
prior deployment (`feat: expand remaining roadmap items`) is the operational
baseline.

## Decision

Remain on Cloudflare Pages. Do not migrate to GitHub Pages.

## Rationale

- **Zero-disruption.** All nine sites, the landing page, and the search Worker
  are live and serving traffic. A platform migration would require DNS changes
  for ten subdomains, redirect setup, and re-verification of every property.
- **Worker + KV coupling.** The cross-site search API is a Cloudflare Worker
  reading a KV namespace. Moving the static sites to GitHub Pages would split
  the stack across two providers while the Worker remains on Cloudflare,
  adding latency and operational complexity.
- **Edge performance.** Cloudflare's edge caching and `Cache-Control` headers
  deliver sub-second warm TTFB; GitHub Pages is single-region (global CDN but
  origin-bound build) with a 1 GB repository size cap and 100 GB/month
  soft bandwidth limit.
- **The specification was conditional.** It directs Cloudflare Pages "if a
  landing or documentation site does not exist." Both exist and are live, so
  the conditional does not trigger.

## Consequences

- Positive: no DNS, redirect, or analytics re-verification churn.
- Positive: the static sites and the search Worker stay co-located.
- Negative: the project depends on Cloudflare for hosting and the secrets
  (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_KV_NAMESPACE_ID`).
- Negative: vendor lock-in for the Worker runtime.

## Alternatives considered

- Migrate to GitHub Pages. Rejected: high operational risk, no marginal
  benefit, would split the search Worker from the static sites.
- Dual-publish to both. Rejected: doubles CI minutes and drift surface with no
  traffic benefit.
