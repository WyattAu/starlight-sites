# Crawlkit Baseline — Full Network Crawl

**Date:** 2026-08-22  
**Crawlkit version:** 4.1.0  
**Scope:** 46 Wyatt's Notes sites (all subdomains)  
**Configuration:** `--max-pages 100` per site (50 for main), concurrency 8, delay 100ms  

---

## Summary

| Metric | Value |
|--------|-------|
| Sites crawled | 47 (46 content + main landing) |
| Total pages | 3,405 |
| Total findings | 123,762 |
| Avg issues/page | 36.3 |
| Error findings | 9,733 (7.8%) |
| Warning findings | 8,025 (6.4%) |
| Info findings | 107,792 (86%) |

## Comparison with previous baseline (6 sites, 502 pages)

| Site | Previous | New | Change |
|------|----------|-----|--------|
| IB | 4,096 issues | 4,007 issues | -2.2% |
| A-Level | 4,090 issues | 3,704 issues | -9.4% |
| GCSE | 4,309 issues | 3,579 issues | -16.9% |
| AP | 4,461 issues | 3,787 issues | -15.1% |
| DSE | 3,918 issues | 3,692 issues | -5.8% |
| Main | 102 (2 pages) | 2,000 (50 pages) | N/A (different scope) |

**Average improvement across 5 comparable sites: ~10.7% reduction in issues per page.**

## Findings by category

| Category | Count | % |
|----------|-------|---|
| Content quality | 54,982 | 43.8% |
| SEO | 33,651 | 26.8% |
| Security | 14,012 | 11.2% |
| Accessibility | 6,623 | 5.3% |
| Links | 5,072 | 4.0% |
| HTTP | 4,189 | 3.3% |
| Social | 3,582 | 2.9% |
| Schema | 3,330 | 2.6% |
| Performance | 109 | 0.1% |

## Top actionable findings

### Errors (require fixing)

| Code | Title | Count | Sites affected |
|------|-------|-------|----------------|
| A11Y016 | Missing html lang attribute | 3,410 | All sites |
| SD006 | Schema missing required properties | 3,330 | All sites |
| HREF003 | Duplicate hreflang language | 1,450 | All sites |
| ISEO003 | Duplicate hreflang language | 1,450 | All sites |
| CANON003 | Canonical URL mismatch | 131 | Some sites |
| LINK002 | Broken internal links | 62 | Some sites |
| A11Y013 | ARIA roles without labels | 61 | Some sites |
| HTTP004 | 404 pages | 31 | Some sites |

### Warnings (should fix)

| Code | Title | Count |
|------|-------|-------|
| META002 | Title too short (<30 chars) | 2,065 |
| SITEMAP006 | Sitemap vs canonical inconsistency | 1,264 |
| META005 | Meta description too short (<120 chars) | 951 |

## Prioritised fix plan

### P0 — Critical (this week)

1. **A11Y016: Missing html lang attribute (3,410 pages)**
   - Root cause: Starlight generates `<html>` without `lang` attribute when `defaultLocale` is set but `lang` is missing from the HTML tag.
   - Fix: Add `lang="en"` to the root `<html>` element in Head.astro or layout.

2. **SD006: Schema missing required properties (3,330 pages)**
   - Root cause: WebPage schema type missing `name` property.
   - Fix: Ensure JSON-LD WebPage schema includes `name` field.

3. **HREF003/ISEO003: Duplicate hreflang (1,450 pages)**
   - Root cause: `<link rel="alternate" hreflang="en">` appears twice (once from Head.astro, once from cross-site alternate links).
   - Fix: Remove duplicate hreflang tag; keep only one `en` per page.

### P1 — Important (next 2 weeks)

4. **META002: Titles too short (2,065 pages)**
   - 2065 pages have titles under 30 characters.
   - Fix: Bulk title regeneration script (similar to description fix).

5. **SITEMAP006: Sitemap vs canonical mismatch (1,264 pages)**
   - Pages in sitemap have different canonical URLs.
   - Fix: Audit canonical URL generation logic.

6. **META005: Descriptions too short (951 pages)**
   - 951 pages still have descriptions under 120 chars (down from 1,671 pre-session).
   - Fix: Continue description regeneration pass.

### P2 — Monitoring (ongoing)

7. **CANON003: Canonical mismatch (131 pages)**
8. **LINK002: Broken links (62)**
9. **A11Y013: ARIA without labels (61)**
10. **HTTP004: 404 pages (31)**

---

## Crawled sites

| Site | Pages | Issues | Issues/Page |
|------|-------|--------|-------------|
| IB | 100 | 4,007 | 40.1 |
| Languages | 100 | 4,000 | 40.0 |
| Programming | 100 | 3,863 | 38.6 |
| Go | 100 | 3,821 | 38.2 |
| Tools | 100 | 3,793 | 37.9 |
| AP | 100 | 3,787 | 37.9 |
| C++ | 100 | 3,767 | 37.7 |
| A-Level | 100 | 3,704 | 37.0 |
| Linux | 100 | 3,702 | 37.0 |
| DSE | 100 | 3,692 | 36.9 |
| TrueNAS | 100 | 3,636 | 36.4 |
| Leaving Cert | 100 | 3,607 | 36.1 |
| Dart | 100 | 3,596 | 36.0 |
| Java | 100 | 3,583 | 35.8 |
| GCSE | 100 | 3,579 | 35.8 |
| Tuning | 100 | 3,574 | 35.7 |
| Haskell | 100 | 3,573 | 35.7 |
| Ruby | 100 | 3,567 | 35.7 |
| Mathematics | 100 | 3,559 | 35.6 |
| Networking | 100 | 3,551 | 35.5 |
| TypeScript | 100 | 3,549 | 35.5 |
| Physics | 100 | 3,541 | 35.4 |
| Swift | 100 | 3,502 | 35.0 |
| Rust | 100 | 3,474 | 34.7 |
| Python | 100 | 3,451 | 34.5 |
| Databases | 100 | 3,433 | 34.3 |
| Security | 100 | 3,427 | 34.3 |
| Kotlin | 100 | 3,379 | 33.8 |
| Computer Science | 100 | 3,272 | 32.7 |
| Wyatt's Notes | 76 | 3,100 | 40.8 |
| Highers | 82 | 2,941 | 35.9 |
| Chemistry | 67 | 2,449 | 36.6 |
| CBSE | 59 | 2,060 | 34.9 |
| Main | 50 | 2,000 | 40.0 |
| Gaokao | 27 | 967 | 35.8 |
| HSC | 24 | 854 | 35.6 |
| SAT | 24 | 821 | 34.2 |
| Elixir | 19 | 659 | 34.7 |
| Admissions | 13 | 449 | 34.5 |
| Driving UK | 11 | 448 | 40.7 |
| Language Tests | 11 | 434 | 39.5 |
| Machine Learning | 11 | 375 | 34.1 |
| Civics Tests | 7 | 277 | 39.6 |
| Driving US | 6 | 246 | 41.0 |
| Driving EU | 6 | 245 | 40.8 |
| Professional Certs | 6 | 243 | 40.5 |
| Licensing | 6 | 205 | 34.2 |
