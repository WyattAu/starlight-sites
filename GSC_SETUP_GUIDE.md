# Google Search Console Setup Guide

Complete GSC setup and monitoring guide for all 46 subdomains in the starlight-sites monorepo.

---

## 1. GSC Property Setup

All 46 sites must be registered as **Domain properties** in a single GSC account. Use the DNS verification method for each.

### 1.1 All 46 Properties

| # | Site | Subdomain | URL |
|---|------|-----------|-----|
| 1 | Admissions | admissions | https://admissions.wyattau.com |
| 2 | A-Level | alevel | https://alevel.wyattau.com |
| 3 | AP | ap | https://ap.wyattau.com |
| 4 | CBSE | cbse | https://cbse.wyattau.com |
| 5 | Chemistry | chemistry | https://chemistry.wyattau.com |
| 6 | Computer Science | computer-science | https://computer-science.wyattau.com |
| 7 | CPP | cpp | https://cpp.wyattau.com |
| 8 | Dart | dart | https://dart.wyattau.com |
| 9 | Databases | databases | https://databases.wyattau.com |
| 10 | DSE | dse | https://dse.wyattau.com |
| 11 | Driving EU | driving-eu | https://driving-eu.wyattau.com |
| 12 | Driving UK | driving-uk | https://driving-uk.wyattau.com |
| 13 | Driving US | driving-us | https://driving-us.wyattau.com |
| 14 | Elixir | elixir | https://elixir.wyattau.com |
| 15 | Gaokao | gaokao | https://gaokao.wyattau.com |
| 16 | GCSE | gcse | https://gcse.wyattau.com |
| 17 | Go | go | https://go.wyattau.com |
| 18 | Haskell | haskell | https://haskell.wyattau.com |
| 19 | Highers | highers | https://highers.wyattau.com |
| 20 | HSC | hsc | https://hsc.wyattau.com |
| 21 | IB | ib | https://ib.wyattau.com |
| 22 | Java | java | https://java.wyattau.com |
| 23 | Kotlin | kotlin | https://kotlin.wyattau.com |
| 24 | Languages | languages | https://languages.wyattau.com |
| 25 | Leaving Cert | leaving-cert | https://leaving-cert.wyattau.com |
| 26 | Licensing | licensing | https://licensing.wyattau.com |
| 27 | Linux | linux | https://linux.wyattau.com |
| 28 | Machine Learning | machine-learning | https://machine-learning.wyattau.com |
| 29 | Mathematics | mathematics | https://mathematics.wyattau.com |
| 30 | Networking | networking | https://networking.wyattau.com |
| 31 | Physics | physics | https://physics.wyattau.com |
| 32 | Professional Certs | professional-certs | https://professional-certs.wyattau.com |
| 33 | Python | python | https://python.wyattau.com |
| 34 | Ruby | ruby | https://ruby.wyattau.com |
| 35 | Rust | rust | https://rust.wyattau.com |
| 36 | SAT | sat | https://sat.wyattau.com |
| 37 | Security | security | https://security.wyattau.com |
| 38 | Swift | swift | https://swift.wyattau.com |
| 39 | Tools | tools | https://tools.wyattau.com |
| 40 | TrueNAS | truenas | https://truenas.wyattau.com |
| 41 | Tuning | tuning | https://tuning.wyattau.com |
| 42 | TypeScript | typescript | https://typescript.wyattau.com |
| 43 | Civics Tests | civics-tests | https://civics-tests.wyattau.com |
| 44 | Programming | programming | https://programming.wyattau.com |
| 45 | Main | main | https://wyattsnotes.wyattau.com |
| 46 | Search | search | https://search.wyattau.com |

### 1.2 Adding a Property (DNS Verification)

For each subdomain:

1. Go to https://search.google.com/search-console
2. Click **Add Property** (top-left dropdown)
3. Select **URL prefix** (not Domain)
4. Enter `https://{subdomain}.wyattau.com` (e.g., `https://ib.wyattau.com`)
5. Click **Continue**
6. Under **Other verification methods**, select **HTML tag**
7. Copy the `<meta name="google-site-verification" content="XXXXXXX">` tag
8. Add the tag to the site's `astro.config.mjs` in the `head` array:
   ```js
   head: [
     { tag: 'meta', attrs: { name: 'google-site-verification', content: 'XXXXXXX' } }
   ]
   ```
9. Deploy the site
10. Return to GSC and click **Verify**

### 1.3 Bulk Verification Script

Run this in the GSC Search Console API (if available) or manually for each site. To batch the head tag into all 46 sites, run:

```bash
# For each site, add the verification meta tag
for site in $(ls sites/); do
  echo "Add verification tag to sites/$site/astro.config.mjs"
done
```

### 1.4 Verification Order (Batch Strategy)

Process sites in this order to maximize efficiency:

**Batch 1 - High priority (Exam boards):** admissions, alevel, ap, cbse, dse, gaokao, gcse, highers, hsc, ib, leaving-cert, sat

**Batch 2 - Programming languages:** cpp, dart, elixir, go, haskell, java, kotlin, python, ruby, rust, swift, typescript

**Batch 3 - Infrastructure:** databases, linux, machine-learning, networking, security, truenas, tuning, licensing

**Batch 4 - Remaining:** chemistry, computer-science, driving-eu, driving-uk, driving-us, languages, mathematics, physics, professional-certs, tools, civics-tests, programming

**Batch 5 - Hub:** main (wyattsnotes), search

---

## 2. Sitemap Submission

### 2.1 Sitemap URL Format

Each site has a sitemap index at:

```
https://{site}.wyattau.com/sitemap-index.xml
```

Examples:
- `https://ib.wyattau.com/sitemap-index.xml`
- `https://java.wyattau.com/sitemap-index.xml`
- `https://dse.wyattau.com/sitemap-index.xml`
- `https://physics.wyattau.com/sitemap-index.xml`

### 2.2 Submitting Sitemaps

For each property in GSC:

1. Open the property from the left sidebar
2. Go to **Sitemaps** in the left menu
3. Enter `sitemap-index.xml` in the "Add a new sitemap" field
4. Click **Submit**
5. Confirm the sitemap appears with status "Success"

### 2.3 All 46 Sitemap URLs

```
https://admissions.wyattau.com/sitemap-index.xml
https://alevel.wyattau.com/sitemap-index.xml
https://ap.wyattau.com/sitemap-index.xml
https://cbse.wyattau.com/sitemap-index.xml
https://chemistry.wyattau.com/sitemap-index.xml
https://computer-science.wyattau.com/sitemap-index.xml
https://cpp.wyattau.com/sitemap-index.xml
https://dart.wyattau.com/sitemap-index.xml
https://databases.wyattau.com/sitemap-index.xml
https://dse.wyattau.com/sitemap-index.xml
https://driving-eu.wyattau.com/sitemap-index.xml
https://driving-uk.wyattau.com/sitemap-index.xml
https://driving-us.wyattau.com/sitemap-index.xml
https://elixir.wyattau.com/sitemap-index.xml
https://gaokao.wyattau.com/sitemap-index.xml
https://gcse.wyattau.com/sitemap-index.xml
https://go.wyattau.com/sitemap-index.xml
https://haskell.wyattau.com/sitemap-index.xml
https://highers.wyattau.com/sitemap-index.xml
https://hsc.wyattau.com/sitemap-index.xml
https://ib.wyattau.com/sitemap-index.xml
https://java.wyattau.com/sitemap-index.xml
https://kotlin.wyattau.com/sitemap-index.xml
https://languages.wyattau.com/sitemap-index.xml
https://leaving-cert.wyattau.com/sitemap-index.xml
https://licensing.wyattau.com/sitemap-index.xml
https://linux.wyattau.com/sitemap-index.xml
https://machine-learning.wyattau.com/sitemap-index.xml
https://mathematics.wyattau.com/sitemap-index.xml
https://networking.wyattau.com/sitemap-index.xml
https://physics.wyattau.com/sitemap-index.xml
https://professional-certs.wyattau.com/sitemap-index.xml
https://programming.wyattau.com/sitemap-index.xml
https://python.wyattau.com/sitemap-index.xml
https://ruby.wyattau.com/sitemap-index.xml
https://rust.wyattau.com/sitemap-index.xml
https://sat.wyattau.com/sitemap-index.xml
https://security.wyattau.com/sitemap-index.xml
https://swift.wyattau.com/sitemap-index.xml
https://tools.wyattau.com/sitemap-index.xml
https://truenas.wyattau.com/sitemap-index.xml
https://tuning.wyattau.com/sitemap-index.xml
https://typescript.wyattau.com/sitemap-index.xml
https://civics-tests.wyattau.com/sitemap-index.xml
https://wyattsnotes.wyattau.com/sitemap-index.xml
https://search.wyattau.com/sitemap-index.xml
```

### 2.4 Monitoring Crawl Status

After submitting sitemaps:

1. Go to **Sitemaps** in each property
2. Check "Last read" date - should be recent (within 7 days)
3. Check "Discovered URLs" count - should match your page count
4. Go to **Settings > Crawl stats** to view:
   - Total crawl requests per day
   - Average response time (target: < 500ms)
   - Response codes breakdown (should be mostly 200s)

---

## 3. Initial GSC Audit Checklist

Run this audit within the first 48 hours after verification.

### 3.1 Coverage Report

For each property, go to **Pages** (Indexing section):

- [ ] **Errors** (target: 0)
  - [ ] Server error (5xx)
  - [ ] Redirect error
  - [ ] Not found (404)
  - [ ] Blocked by robots.txt
  - [ ] Blocked by 'noindex' tag
  - [ ] Not authorized (401)
- [ ] **Valid with warnings** (review each)
  - [ ] Indexed, though blocked by robots.txt
  - [ ] Redirect to alternate page with canonical tag
- [ ] **Valid** (should be high and increasing)
  - [ ] Submitted and indexed
  - [ ] Indexed, not submitted in sitemap
- [ ] **Excluded** (review for issues)
  - [ ] Crawled - currently not indexed
  - [ ] Discovered - currently not indexed
  - [ ] Page with redirect
  - [ ] Alternate page with canonical tag
  - [ ] Duplicate without user-selected canonical
  - [ ] Duplicate, Google chose different canonical
  - [ ] Not found (404)

### 3.2 Mobile Usability

Go to **Mobile Usability** for each property:

- [ ] Pages with usability issues: 0
- [ ] Check for:
  - [ ] Text too small to read
  - [ ] Clickable elements too close together
  - [ ] Content wider than screen
  - [ ] Viewport not set
  - [ ] Fixed-width viewport
- [ ] Verify all responsive components render correctly on mobile

### 3.3 Core Web Vitals

Go to **Core Web Vitals** for each property (mobile + desktop):

- [ ] **Largest Contentful Paint (LCP)**: Target < 2.5s
  - [ ] Mobile status: Good / Needs Improvement / Poor
  - [ ] Desktop status: Good / Needs Improvement / Poor
- [ ] **First Input Delay (FID)**: Target < 100ms
- [ ] **Interaction to Next Paint (INP)**: Target < 200ms
- [ ] **Cumulative Layout Shift (CLS)**: Target < 0.1
- [ ] Review URLs with worst performance
- [ ] Compare mobile vs desktop results

### 3.4 Manual Actions

Go to **Manual actions** (Security section):

- [ ] Status: No issues detected
- [ ] Review any manual actions and resolve immediately

### 3.5 Security Issues

Go to **Security issues** (Security section):

- [ ] Status: No issues detected
- [ ] Review for:
  - [ ] Malware
  - [ ] Hacked content
  - [ ] Social engineering
  - [ ] Unwanted software

---

## 4. Weekly Monitoring Routine

Perform every Monday. Estimated time: 15-20 minutes across all 46 properties.

### 4.1 Performance Report

For each property, go to **Performance**:

- [ ] **Date range**: Last 28 days
- [ ] Check **Total clicks** - week-over-week change
- [ ] Check **Total impressions** - week-over-week change
- [ ] Check **Average CTR** - should be > 2% for education sites
- [ ] Check **Average position** - should be improving
- [ ] Review **Top queries** by impressions
- [ ] Review **Top pages** by clicks
- [ ] Look for queries with positions 4-10 (striking distance)

### 4.2 Coverage Changes

- [ ] Go to **Pages**
- [ ] Compare total indexed vs last week
- [ ] Check for new errors
- [ ] Review any newly excluded pages
- [ ] Verify sitemap-discovered pages are being indexed

### 4.3 New Crawl Errors

- [ ] Go to **Pages > Not found (404)**
- [ ] Check for new 404 errors
- [ ] Set up redirects for broken internal links
- [ ] Check for soft 404 errors (pages that return 200 but are actually missing)

### 4.4 URL Inspection Tool

Use for specific issues or after deploying changes:

1. Enter the URL in the top search bar
2. Click **Test live URL**
3. Check:
   - [ ] URL is on Google: Yes
   - [ ] Coverage status: Submitted and indexed
   - [ ] Mobile usability: Usable on mobile
   - [ ] No coverage issues
4. After fixing issues, click **Request Indexing**

---

## 5. Key Metrics to Track

### 5.1 Network-Wide Metrics (Across All 46 Properties)

| Metric | Target | Tracking Method |
|--------|--------|-----------------|
| Total impressions | Increasing week-over-week | Sum all properties |
| Total clicks | Increasing week-over-week | Sum all properties |
| Average CTR | > 2% | Weighted average across properties |
| Average position | < 20 for target keywords | Track top 10 keywords per site |
| Total indexed pages | Approaching total page count | Sum all properties |
| Pages indexed / submitted | > 90% | Coverage report |

### 5.2 Per-Property Metrics

Track these for each of the 46 properties:

| Metric | How to Check |
|--------|--------------|
| Index coverage ratio | Pages > Indexed / Pages > Submitted in sitemap |
| Top keyword position | Performance > Queries, sort by impressions |
| CTR by query | Performance > Queries, check CTR column |
| LCP / CLS / INP | Core Web Vitals report |
| Crawl budget utilization | Settings > Crawl stats |
| New backlinks | Links > External links |

### 5.3 Priority Keywords to Track

Top 20 keywords across the network (check monthly):

| Keyword | Target Site | Current Position |
|---------|-------------|------------------|
| dse past papers | dse | — |
| ib past papers | ib | — |
| a level past papers | alevel | — |
| gcse past papers | gcse | — |
| ap past papers | ap | — |
| physics notes | physics | — |
| linear algebra | mathematics | — |
| java programming | java | — |
| python programming | python | — |
| rust programming | rust | — |
| chemistry notes | chemistry | — |
| computer science notes | computer-science | — |
| cbse physics | cbse | — |
| sat practice | sat | — |
| driving theory test | driving-uk | — |
| machine learning guide | machine-learning | — |
| linux commands | linux | — |
| networking basics | networking | — |
| database design | databases | — |
| security fundamentals | security | — |

---

## 6. Automation & Scripts

### 6.1 Sitemap Validation Script

Run after each deployment to verify all sitemaps are accessible:

```bash
#!/bin/bash
SITES=(
  admissions alevel ap cbse chemistry computer-science cpp dart databases
  dse driving-eu driving-uk driving-us elixir gaokao gcse go haskell
  highers hsc ib java kotlin languages leaving-cert licensing linux
  machine-learning mathematics networking physics professional-certs
  programming python ruby rust sat security swift tools truenas tuning
  typescript civics-tests
)
HUBS=(main search)

echo "=== Validating Sitemaps ==="
for site in "${SITES[@]}" "${HUBS[@]}"; do
  URL="https://${site}.wyattau.com/sitemap-index.xml"
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  if [ "$STATUS" = "200" ]; then
    echo "OK  $URL"
  else
    echo "FAIL $URL (HTTP $STATUS)"
  fi
done
```

### 6.2 GSC API Access (Optional)

If you want programmatic access to GSC data, set up the Google Search Console API:

1. Go to https://console.cloud.google.com/
2. Create a project
3. Enable the Search Console API
4. Create OAuth 2.0 credentials
5. Use the credentials to query the API for performance and coverage data

---

## 7. Troubleshooting

| Issue | Solution |
|-------|----------|
| Verification fails | Ensure the meta tag is in the HTML `<head>`, deploy, wait 5 min, retry |
| Sitemap shows "Could not fetch" | Verify the sitemap returns HTTP 200, check for robots.txt blocking |
| Pages not indexed | Submit via URL Inspection, check for noindex tags, improve content quality |
| High crawl rate but low indexing | Content may be thin or duplicate, improve quality |
| Core Web Vitals failing | Run Lighthouse audit, optimize images, reduce JS bundle size |
| Manual action received | Review Google's quality guidelines, fix the issue, submit reconsideration |

---

## 8. Quick Reference Checklist

### Initial Setup (One-Time)

- [ ] Create GSC account at https://search.google.com/search-console
- [ ] Add all 46 properties (Section 1.2)
- [ ] Verify each property via HTML meta tag
- [ ] Submit sitemaps for all 46 sites (Section 2.2)
- [ ] Run initial audit (Section 3)
- [ ] Set up weekly monitoring calendar reminder

### Weekly (Every Monday)

- [ ] Check performance metrics for top 10 properties
- [ ] Review coverage for new errors
- [ ] Check for new crawl errors
- [ ] Update keyword tracking spreadsheet
- [ ] Address any urgent issues found

### Monthly

- [ ] Full audit of all 46 properties
- [ ] Core Web Vitals deep dive
- [ ] Content decay detection
- [ ] Competitor analysis
- [ ] Backlink quality review
