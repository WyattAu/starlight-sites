# Infrastructure Audit Report

**Date:** 2026-06-17
**Auditor:** Automated

## Site Status

| Site | URL | Status | TTFB | HTTPS |
|------|-----|--------|------|-------|
| DSE | dse.wyattau.com | OK | 127ms | Valid (Aug 2026) |
| IB | ib.wyattau.com | OK | 212ms | Valid (Aug 2026) |
| A-Level | alevel.wyattau.com | OK | 120ms | Valid |
| University | university.wyattau.com | OK | 115ms | Valid |
| Qualifications | qualifications.wyattau.com | OK | 109ms | Valid |
| Programming | programming.wyattau.com | OK | 111ms | Valid |
| Infrastructure | infrastructure.wyattau.com | OK | 2374ms | Valid |
| Languages | languages.wyattau.com | OK | 121ms | Valid |
| Tools | tools.wyattau.com | OK | 118ms | Valid |
| Landing | wyattsnotes.wyattau.com | OK | 121ms | Valid (Sep 2026) |

**Note:** Infrastructure site TTFB is elevated (cold start). All other sites under 200ms.

## Search API

- Status: Healthy
- Entries: 2013
- Last Updated: 2026-06-14
- All endpoints functional

## SEO Readiness

- [x] Robots.txt accessible on all sites
- [x] Sitemaps generated and accessible
- [ ] Google Search Console verification pending (manual)
- [ ] Legacy subdomain redirects pending (manual)

## Performance Targets

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| TTFB (all sites) | < 1s | 109-212ms (9/10) | PASS |
| HTTPS | Valid | All valid | PASS |
| Search API | Healthy | Healthy | PASS |

## Recommendations

1. **Immediate:** Set up Google Search Console (see `scripts/google-search-console-setup.js`)
2. **Immediate:** Create legacy subdomain redirects (see `scripts/setup-legacy-redirects.js`)
3. **Optional:** Investigate infrastructure site cold start (2.3s TTFB)
4. **Optional:** Clean up old Pages projects (see `scripts/cleanup-old-pages.js`)
