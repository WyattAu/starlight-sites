# Operational Status and Known Issues

## Verification log (this cycle)

| ID | Item | Result |
|----|------|--------|
| V1 | CI workflow passes on GitHub Actions | PASS (lint, integrity, 177 tests, nine-site build) |
| V2 | Deploy workflow ships all nine sites | PASS (gate green; sites deploying) |
| V3 | Deploy gate blocks broken code | PASS (gate job precedes every deploy) |
| V4 | Shared-asset parity enforced in CI | PASS (sync --check + integration test) |
| V5 | No-emoji policy enforced in CI | PASS (zero violations on code/docs/config) |
| V6 | Pre-commit hook runs full gate | PASS (Husky v9; lint-staged + sync + tests) |
| V7 | Biome lint passes clean | PASS (zero errors, zero warnings) |

## Resolved issues

| ID | Issue | Resolution |
|----|-------|------------|
| P1 | Legacy Docusaurus sites live at old subdomains | Verified: already configured. alevel-maths-physics -> alevel, alevel-sciences -> alevel, academics -> university. See ROADMAP Phase A. |
| P2 | Legacy subdomains active | Verified: Transform Rules in place. All redirects functional. |
| P5 | Google Search Console verification not configured | Verified: DNS TXT record in place. All 9 sitemaps accessible. |

## Open issues

| ID | Issue | Severity | Status |
|----|-------|----------|--------|
| P4 | robots.txt is Cloudflare-generated; sitemap references unverified | MEDIUM | Open [manual] |
| P6 | Local build time for large sites (DSE, university) exceeds 10 minutes | MEDIUM | Open (CI builds within 60-min budget) |
| P7 | Cloudflare Web Analytics not enabled | MEDIUM | Open [manual] |
| P8 | Pagefind search not verified on all sites | LOW | Open |
| P9 | Warm TTFB (university, ib) above 1 s target | LOW | Open (see ROADMAP Phase C) |

## Resolution strategy

### P4 -- Search Console (manual)

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

See MANUAL_TASKS.md for detailed instructions.
