# Debugging Plan — Outstanding Problems

**Date:** 2026-06-12
**Status:** Active

---

## Problem Inventory

| # | Problem | Severity | Root Cause Known |
|---|---------|----------|-----------------|
| P1 | Old Docusaurus repo still live | HIGH | Yes — `WyattAu/WyattsNotes` has `build/` directory, served from somewhere |
| P2 | Legacy subdomains still live | HIGH | Yes — old CF Pages projects still active with custom domains |
| P3 | CI auto-deploy on push not verified | HIGH | Partially — workflow exists, never tested via real push |
| P4 | robots.txt is Cloudflare-generated, not ours | MEDIUM | Yes — Cloudflare AI Audit auto-generates, overrides ours |
| P5 | No Google Search Console verification | MEDIUM | Yes — no meta tag in any site |
| P6 | DSE build timeout | MEDIUM | Unknown — 161 content files, hangs >10min locally |
| P7 | Cloudflare Web Analytics not enabled | MEDIUM | Yes — needs dashboard, no API |
| P8 | Uptime monitoring not automated | LOW | Yes — script exists but no scheduler |
| P9 | Pagefind search not verified | LOW | Unknown — pagefind.js returns 200 on some, timeout on others |
| P10 | Performance (TTFB 0.2–3.0s) | LOW | Partially — large sites, no caching strategy |

---

## Detailed Investigation & Fix Plan

### P1: Old Docusaurus Repository

**Investigation:**
```
1. Check where old build/ is deployed:
   - Look for CF Pages project named "wyatts-notes" or similar
   - Check if old repo has GitHub Actions deploying to CF Pages
   - Check old repo's .github/workflows/ for deploy config

2. Identify the old deployment's CF Pages project:
   - List ALL CF Pages projects (done — found 3 extra: alevel-maths-physics, alevel-sciences, academics)
   - Check if there's a 4th hidden project serving the old monolith

3. Determine if old Docusaurus is served from:
   a) A CF Pages project (likely)
   b) GitHub Pages (checked — 404, so no)
   c) A Cloudflare Worker (unlikely)
   d) A custom server (unlikely)
```

**Fix Strategy:**
```
Option A (Recommended): Redirect old → new
  - Keep old CF Pages projects alive temporarily
  - Add Cloudflare redirect rules: old URLs → new URLs
  - After 6 months, delete old projects

Option B: Decommission old projects
  - Delete old CF Pages projects
  - Add DNS CNAME records pointing old subdomains to new projects
  - Simpler but loses old content temporarily

Option C: Keep old as archive
  - Rename old projects to*-archive
  - Remove custom domains
  - Leave .pages.dev URLs accessible for reference
```

**Execution:**
```
Phase 1: Audit
  [ ] Run: curl old-repo deploy URL to confirm it's live
  [ ] Check old repo's .github/workflows/ for deploy config
  [ ] Identify which CF Pages project serves the monolith
  [ ] Map all old URL patterns → new URL patterns

Phase 2: Redirect Rules
  [ ] Create redirect mapping (old-path → new-site/new-path)
  [ ] Add Cloudflare Page Rules or Transform Rules for redirects
  [ ] Test redirect chain: old URL → 301 → new URL → 200

Phase 3: Cleanup
  [ ] Remove custom domains from old CF Pages projects
  [ ] Delete old projects after redirect verification
  [ ] Update old repo README to point to new sites
```

---

### P2: Legacy Subdomains

**Current State:**
```
alevel-maths-physics.wyattau.com → wyattsnotes-alevel-maths-physics.pages.dev (LIVE, old Docusaurus)
alevel-sciences.wyattau.com     → wyattsnotes-alevel-sciences.pages.dev (LIVE, old Docusaurus)
academics.wyattau.com           → wyattsnotes-academics.pages.dev (301 redirect somewhere)
```

**Fix Strategy:**
```
1. alevel-maths-physics.wyattau.com → alevel.wyattau.com
   (Old A-Level Maths/Physics merged into new alevel.wyattau.com)

2. alevel-sciences.wyattau.com → alevel.wyattau.com
   (Old A-Level Sciences merged into new alevel.wyattau.com)

3. academics.wyattau.com → determine destination, redirect or decommission
```

**Execution:**
```
[ ] Check what academics.wyattau.com redirects to
[ ] Create Cloudflare Transform Rules:
    - alevel-maths-physics.wyattau.com/* → alevel.wyattau.com (301)
    - alevel-sciences.wyattau.com/* → alevel.wyattau.com (301)
    - academics.wyattau.com/* → appropriate destination (301)
[ ] Verify redirect chains work
[ ] Remove custom domains from old CF Pages projects
[ ] Delete old CF Pages projects
```

---

### P3: CI Auto-Deploy on Push

**Current State:**
- `deploy.yml` triggers on `push: branches: [main]`
- Never tested via actual push (only `workflow_dispatch`)
- The push-to-main flow: local commit → git push → GitHub Actions triggers → build → deploy

**Investigation:**
```
1. Check if the workflow actually triggers on push:
   - Make a trivial commit (e.g., update a comment)
   - Push to main
   - Monitor if deploy.yml triggers

2. If it doesn't trigger:
   - Check GitHub repo settings → Actions → General
   - Verify "Allow all actions" is enabled
   - Check if branch protection rules block Actions

3. If it triggers but fails:
   - Check job logs for specific failure
   - Verify secrets are available in push context
```

**Fix Strategy:**
```
1. Test with trivial push
2. If fails, diagnose and fix
3. Add deployment status check (GitHub commit status)
4. Add notification on failure (optional: Slack/email)
```

**Execution:**
```
[ ] Create test commit: update a comment in deploy.yml
[ ] Push to main
[ ] Monitor: gh run list --workflow=deploy.yml --limit 1
[ ] Verify all 10 jobs succeed (9 sites + landing)
[ ] If fails: check logs, fix, retry
[ ] Document: "CI auto-deploy verified working on [date]"
```

---

### P4: robots.txt Override

**Current State:**
```
Cloudflare AI Audit auto-generates robots.txt with:
- User-agent: * → Allow: / (search=yes, ai-train=no)
- Blocks: Amazonbot, Applebot-Extended, Bytespider, CCBot,
          ClaudeBot, GPTBot, Google-Extended, meta-externalagent
```

**Problem:**
- Our sites don't have custom `public/robots.txt` files
- Cloudflare's auto-generated robots.txt is actually good (blocks AI scrapers)
- But it doesn't include sitemap references

**Fix Strategy:**
```
Option A (Recommended): Let Cloudflare manage + add sitemaps
  - Cloudflare's robots.txt is well-configured for AI blocking
  - Add sitemap references via Astro config (already working)
  - The Cloudflare robots.txt already allows search engines

Option B: Override with custom robots.txt
  - Create public/robots.txt per site
  - Include sitemap references
  - Risk: Cloudflare may override our file
```

**Execution:**
```
[ ] Verify Cloudflare robots.txt includes sitemap references (check)
[ ] If not: Add sitemap entries to Astro head config per site
[ ] Test: curl https://dse.wyattau.com/robots.txt | grep Sitemap
[ ] Decision: Keep Cloudflare-managed (good AI blocking) or override
```

---

### P5: Google Search Console

**Current State:**
- No `<meta name="google-site-verification">` tag in any site
- No verification file in public/
- Search engines may not be indexing new URLs

**Fix Strategy:**
```
1. Create Google Search Console property per subdomain
2. Verify via DNS TXT record (one-time, works for all subdomains)
3. OR verify via meta tag per site
4. Submit sitemaps
```

**Execution:**
```
[ ] Go to Google Search Console
[ ] Add property: wyattau.com (domain property — covers all subdomains)
[ ] Verify via DNS TXT record:
    - Add TXT record to Cloudflare DNS: google-site-verification=XXXXX
[ ] OR verify per subdomain via meta tag:
    - Add to astro.config.mjs: head: [{ tag: 'meta', attrs: { name: 'google-site-verification', content: 'XXX' }}]
[ ] Submit sitemaps:
    - https://dse.wyattau.com/sitemap-index.xml
    - https://ib.wyattau.com/sitemap-index.xml
    - (repeat for all 9 sites)
[ ] Request indexing for key pages
```

---

### P6: DSE Build Timeout

**Current State:**
- 161 content files (.md/.mdx)
- Local build hangs >10min (killed by timeout)
- CI build succeeded once (run 27412922452)
- No dist/ directory present locally

**Investigation:**
```
1. Identify the bottleneck:
   a) Is it a specific content file causing infinite loop?
   b) Is it memory exhaustion (161 files × complex components)?
   c) Is it a plugin issue (rehype/remark)?

2. Binary search for problematic file:
   - Build with only 10 files → success/fail?
   - Double the count → narrow down

3. Check for common issues:
   - Unclosed JSX tags in MDX
   - Infinite rehype/remark plugin loops
   - Circular imports
   - Memory leak in component rendering
```

**Fix Strategy:**
```
Phase 1: Isolate
  [ ] Check DSE astro.config.mjs for plugin issues
  [ ] Run build with NODE_OPTIONS="--max-old-space-size=4096" (lower)
  [ ] Check if it's a specific file by building subsets

Phase 2: Fix
  [ ] If memory: increase to 16GB or optimize content
  [ ] If specific file: fix the problematic content
  [ ] If plugin: disable/replace problematic plugin

Phase 3: Prevent
  [ ] Add build timeout to CI (already have 60min)
  [ ] Add build size monitoring (file count, output size)
```

---

### P7: Cloudflare Web Analytics

**Current State:**
- No API endpoint to enable
- Needs manual dashboard enablement

**Fix Strategy:**
```
1. Enable via Cloudflare Dashboard:
   - Go to wyattau.com → Analytics & Logs → Web Analytics
   - Enable for all subdomains

2. Add tracking snippet to sites (if needed):
   - Cloudflare Web Analytics is automatic if enabled in dashboard
   - No snippet required (uses CF edge data)
```

**Execution:**
```
[ ] Log into Cloudflare Dashboard
[ ] Navigate to Analytics & Logs → Web Analytics
[ ] Enable for wyattau.com zone
[ ] Verify: check analytics dashboard after 24h
[ ] Note: Cloudflare Web Analytics is privacy-first, no consent needed
```

---

### P8: Uptime Monitoring

**Current State:**
- `scripts/uptime-check.sh` exists
- No cron job or CI schedule runs it
- Manual execution only

**Fix Strategy:**
```
Option A (Recommended): GitHub Actions scheduled workflow
  - Create .github/workflows/uptime.yml
  - Runs every 6 hours via cron
  - Creates GitHub Issue on failure
  - Free, no external service needed

Option B: External service (UptimeRobot, BetterStack)
  - More reliable (independent infrastructure)
  - Free tier available
  - Email/Slack alerts
```

**Execution:**
```
[ ] Create .github/workflows/uptime.yml:
    name: Uptime Check
    on:
      schedule:
        - cron: '0 */6 * * *'  # Every 6 hours
      workflow_dispatch:
    jobs:
      check:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Run uptime check
            run: bash scripts/uptime-check.sh
          - name: Create issue on failure
            if: failure()
            uses: actions/github-script@v7
            with:
              script: |
                github.rest.issues.create({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  title: 'Uptime Alert: Site Down',
                  body: 'Uptime check failed. See workflow run for details.',
                  labels: ['alert', 'uptime']
                })

[ ] Test: trigger manually, verify it runs
[ ] Monitor: check first scheduled run
```

---

### P9: Pagefind Search Verification

**Current State:**
- pagefind.js returns 200 on dse, alevel, university
- pagefind.js returns 000 (timeout) on ib
- Haven't tested actual search functionality

**Fix Strategy:**
```
1. Verify Pagefind index exists per site
2. Test search functionality on each site
3. If broken: check Starlight Pagefind config
4. If slow: optimize index size
```

**Execution:**
```
[ ] Check pagefind index per site:
    for site in dse ib alevel university qualifications programming infrastructure languages tools; do
      curl -s "https://$site.wyattau.com/pagefind/pagefind.js" -o /dev/null -w "$site: %{http_code}\n"
    done

[ ] Test search on each site (manual or Playwright)
[ ] If ib fails: check IB astro.config.mjs Pagefind config
[ ] Verify search results are relevant
```

---

### P10: Performance

**Current State:**
```
TTFB measurements:
  dse:           0.64s
  ib:            1.61s (SLOW)
  alevel:        0.22s (GOOD)
  university:    3.04s (VERY SLOW)
  programming:   2.35s (SLOW)
```

**Investigation:**
```
1. Why is university so slow (3s TTFB)?
   - 988 HTML pages → large dist/ → slow cold start
   - Check if CF edge caching is working
   - Check if pages are static or SSR

2. Why is ib slow (1.6s)?
   - Check page count
   - Check content complexity

3. CF Pages cold start vs cached:
   - First request: cold start (slow)
   - Subsequent: cached (fast)
   - TTFB measurement may be cold start
```

**Fix Strategy:**
```
1. Enable Cloudflare caching headers:
   - Add Cache-Control headers to static assets
   - Configure CF Page Rules for aggressive caching

2. Optimize large sites:
   - Lazy load heavy components
   - Split large pages into smaller chunks
   - Pre-generate critical pages

3. Measure warm TTFB:
   - Run TTFB test twice (cold + warm)
   - Report warm TTFB as baseline
```

**Execution:**
```
[ ] Measure warm TTFB (second request):
    for site in dse ib alevel university programming; do
      curl -s -o /dev/null -w "$site cold: %{time_starttransfer}s\n" "https://$site.wyattau.com/"
      curl -s -o /dev/null -w "$site warm: %{time_starttransfer}s\n" "https://$site.wyattau.com/"
    done

[ ] Check if CF caching headers are present:
    curl -sI "https://university.wyattau.com/" | grep -i "cache-control\|cf-cache"

[ ] If no caching: add to astro.config.mjs or CF Page Rules
[ ] If cold start is the issue: accept as CF Pages limitation
```

---

## Execution Order

```
Phase 1: Quick Wins (1-2 hours)
  [ ] P3: Test CI auto-deploy with trivial push
  [ ] P9: Verify Pagefind search on all sites
  [ ] P10: Measure warm TTFB

Phase 2: Redirects & Cleanup (2-4 hours)
  [ ] P2: Create redirect rules for legacy subdomains
  [ ] P1: Audit old Docusaurus deployment source
  [ ] P1: Create redirect mapping old → new

Phase 3: Infrastructure (1-2 hours)
  [ ] P8: Create uptime monitoring workflow
  [ ] P5: Set up Google Search Console
  [ ] P7: Enable Cloudflare Web Analytics (dashboard)

Phase 4: Content (2-4 hours)
  [ ] P4: Decide on robots.txt strategy
  [ ] P6: Debug and fix DSE build timeout

Phase 5: Verification (1 hour)
  [ ] Full regression test: all sites, all links
  [ ] Performance baseline: warm TTFB for all sites
  [ ] Search verification: Pagefind on all sites
```

---

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Old Docusaurus serves stale content | Users see outdated info | HIGH | Redirect rules + decommission |
| CI auto-deploy fails silently | Changes don't reach production | MEDIUM | Test with trivial push, add monitoring |
| DSE build fails in CI | DSE site goes stale | MEDIUM | Fix build locally, add CI timeout |
| Redirects break old bookmarks | 404 errors for returning users | LOW | Test all redirect rules before deploying |
| Google doesn't re-index | New sites don't appear in search | LOW | Submit sitemaps, request indexing |

---

## Success Criteria

```
[ ] All 10 sites return 200 on root URL
[ ] All landing page links resolve to non-404 pages
[ ] CI auto-deploy triggers on push to main
[ ] Legacy subdomains redirect to new sites (301)
[ ] Google Search Console verified for all subdomains
[ ] Uptime monitoring runs automatically every 6 hours
[ ] Pagefind search works on all 9 sites
[ ] Warm TTFB < 1s for all sites
[ ] DSE builds successfully in CI
[ ] Old Docusaurus repository marked as deprecated
```
