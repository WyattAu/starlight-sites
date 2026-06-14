# Debugging Plan

## Known Issues

| ID | Issue | Severity | Status |
|----|-------|----------|--------|
| P1 | Old Docusaurus repo still live at legacy subdomains | HIGH | Open |
| P2 | Legacy subdomains (alevel-maths-physics, alevel-sciences, academics) still active | HIGH | Open |
| P3 | CI auto-deploy on push not verified via real push | HIGH | Open |
| P4 | robots.txt is Cloudflare-generated, no sitemap references | MEDIUM | Open |
| P5 | No Google Search Console verification | MEDIUM | Open |
| P6 | DSE build timeout locally (>10min with 161 content files) | MEDIUM | Open |
| P7 | Cloudflare Web Analytics not enabled | MEDIUM | Open |
| P8 | Pagefind search not verified on all sites | LOW | Open |
| P9 | Performance: university TTFB 3.04s, ib 1.61s | LOW | Open |

## Resolution Strategy

### P1/P2: Legacy Redirects

1. Create Cloudflare Transform Rules: old subdomain -> new site (301)
2. Remove custom domains from old CF Pages projects
3. Delete old projects after redirect verification

### P3: CI Verification

1. Make trivial commit, push to main
2. Monitor: `gh run list --workflow=deploy.yml --limit 1`
3. Verify all 10 jobs succeed

### P4/P5: Search Console

1. Add domain property in Google Search Console
2. Verify via DNS TXT record
3. Submit sitemaps for all 9 sites

### P6: Build Timeout

1. Binary search for problematic content file
2. Increase `NODE_OPTIONS="--max-old-space-size=16384"` if memory-related
3. Add build timeout monitoring in CI

### P9: Performance

1. Enable Cloudflare Page Rules for aggressive caching
2. Add `Cache-Control` headers to static assets
3. Measure warm TTFB (second request) as baseline

## Manual Tasks

| Task | Domain | Action |
|------|--------|--------|
| Google Search Console | All subdomains | Add domain property, verify via DNS |
| Sitemap Submission | All 9 sites | Submit sitemap-index.xml to GSC |
| Cloudflare Web Analytics | wyattau.com | Enable in dashboard |
| robots.txt | All 9 sites | Verify sitemap references present |
