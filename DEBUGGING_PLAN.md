# Operational Status and Known Issues

## Verification log (this cycle)

| ID | Item | Result |
|----|------|--------|
| V1 | CI workflow passes on GitHub Actions | PASS (lint, integrity, 169 tests, nine-site build) |
| V2 | Deploy workflow ships all nine sites | PASS (gate green; sites deploying) |
| V3 | Deploy gate blocks broken code | PASS (gate job precedes every deploy) |
| V4 | Shared-asset parity enforced in CI | PASS (sync --check + integration test) |
| V5 | No-emoji policy enforced in CI | PASS (zero violations on code/docs/config) |
| V6 | Pre-commit hook runs full gate | PASS (Husky v9; lint-staged + sync + tests) |

## Open issues

| ID | Issue | Severity | Status |
|----|-------|----------|--------|
| P1 | Legacy Docusaurus sites live at old subdomains | HIGH | Open [manual] |
| P2 | Legacy subdomains (alevel-maths-physics, alevel-sciences, academics) active | HIGH | Open [manual] |
| P4 | robots.txt is Cloudflare-generated; sitemap references unverified | MEDIUM | Open [manual] |
| P5 | Google Search Console verification not configured | MEDIUM | Open [manual] |
| P6 | Local build time for large sites (DSE, university) exceeds 10 minutes | MEDIUM | Open (CI builds within 60-min budget) |
| P7 | Cloudflare Web Analytics not enabled | MEDIUM | Open [manual] |
| P8 | Pagefind search not verified on all sites | LOW | Open |
| P9 | Warm TTFB (university, ib) above 1 s target | LOW | Open (see ROADMAP Phase C) |

Items previously listed as open that are now resolved (CI auto-deploy
verification, dead-code cleanup, copy drift, emoji in shipped code, deploy
gate) are closed by the work in this cycle; see the ROADMAP decision log.

## Resolution strategy

### P1 / P2 -- Legacy redirects (manual)

1. Create Cloudflare Transform Rules: old subdomain redirects to the new site
   with HTTP 301.
2. Remove custom domains from the old Cloudflare Pages projects.
3. Delete the old projects after redirect verification.

### P4 / P5 -- Search Console (manual)

1. Add the domain property `wyattau.com` in Google Search Console.
2. Verify via DNS TXT record.
3. Submit sitemaps for all nine sites.

### P6 -- Build timeout

1. Binary search for the problematic content file if a specific page is slow.
2. Increase `NODE_OPTIONS=--max-old-space-size` if memory-bound.
3. Add build-time monitoring in CI (current budget: 60 minutes per site).

### P9 -- Performance

1. Enable aggressive Cloudflare edge caching for hashed assets.
2. Self-host fonts to remove the Google Fonts round-trip (ROADMAP Phase C).
3. Measure warm TTFB as the baseline metric.

## Manual task summary

| Task | Scope | Action |
|------|-------|--------|
| Google Search Console | all subdomains | Add domain property; verify via DNS |
| Sitemap submission | all nine sites | Submit sitemap-index.xml |
| Cloudflare Web Analytics | wyattau.com | Enable in dashboard |
| Legacy redirects | old subdomains | Transform Rules + project cleanup |
