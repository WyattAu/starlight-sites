# SEO Monitoring Checklist

Weekly SEO monitoring for the starlight-sites education network. Run every Monday.

---

## 1. Google Search Console (GSC)

**Frequency:** Weekly (Monday)
**Time:** 15-20 minutes

### 1.1 Property Verification
- [ ] Verify all 10 sites are registered in GSC
- [ ] Confirm DNS verification is active for all domains
- [ ] Check that sitemaps are submitted and indexed

### 1.2 Coverage Report
- [ ] Check **Error** count (should be 0)
  - [ ] Server errors (5xx)
  - [ ] Redirect errors
  - [ ] Not found (404)
  - [ ] Blocked by robots.txt
- [ ] Check **Valid** count (should increase week-over-week)
  - [ ] Indexed pages
  - [ ] Submitted and indexed
- [ ] Check **Excluded** count (review for issues)
  - [ ] Crawled - currently not indexed
  - [ ] Discovered - currently not indexed
  - [ ] Page with redirect
  - [ ] Alternate page with canonical tag
  - [ ] Duplicate without user-selected canonical
  - [ ] Not found (404) - should be in errors if unintentional

### 1.3 Crawl Stats
- [ ] Review crawl requests graph (should be stable or increasing)
- [ ] Check crawl response codes (minimize 4xx/5xx)
- [ ] Review crawl response times (should be under 500ms average)
- [ ] Check for crawl budget waste on parameter pages

### 1.4 Mobile Usability
- [ ] Review **Mobile Usability** report
  - [ ] Text too small to read
  - [ ] Clickable elements too close together
  - [ ] Content wider than screen
  - [ ] Viewport not set
  - [ ] Fixed-width viewport
- [ ] Fix any new mobile usability issues found

### 1.5 Core Web Vitals
- [ ] Review **Core Web Vitals** report
  - [ ] Largest Contentful Paint (LCP) - Target: < 2.5s
  - [ ] First Input Delay (FID) - Target: < 100ms
  - [ ] Cumulative Layout Shift (CLS) - Target: < 0.1
- [ ] Compare mobile vs desktop performance
- [ ] Review by URL to identify worst-performing pages
- [ ] Create action items for any pages failing metrics

### 1.6 Manual Actions
- [ ] Check **Manual Actions** report (should be clean)
- [ ] Review for any new penalties

### 1.7 Security Issues
- [ ] Check **Security Issues** report (should be clean)
- [ ] Review for malware, hacking, or spam

---

## 2. Ranking Tracking

**Frequency:** Weekly (Monday)
**Time:** 10-15 minutes

### 2.1 Manual Keyword Check (Top 20)
- [ ] Search each keyword in incognito/private browsing
- [ ] Record position in tracking spreadsheet
- [ ] Note any position changes (up/down/new)
- [ ] Flag keywords with significant drops (>3 positions)

| Keyword | Site | Position Last Week | Position This Week | Change | Notes |
|---------|------|--------------------|--------------------|--------|-------|
| dse past papers | dse | — | — | — | |
| ib past papers | ib | — | — | — | |
| a level past papers | alevel | — | — | — | |
| gcse past papers | gcse | — | — | — | |
| ap past papers | ap | — | — | — | |
| physics notes | physics | — | — | — | |
| linear algebra | mathematics | — | — | — | |
| c++ programming | programming | — | — | — | |
| chemistry notes | chemistry | — | — | — | |
| computer science notes | computer-science | — | — | — | |

### 2.2 SERP Feature Tracking
- [ ] Check for featured snippets on target keywords
- [ ] Check for knowledge panels
- [ ] Check for "People also ask" appearances
- [ ] Check for image pack appearances
- [ ] Check for video carousel appearances

### 2.3 Competitor Positioning
- [ ] Note top 3 competitors for each target keyword
- [ ] Track if competitors gained/lost positions
- [ ] Identify new competitors entering SERPs

---

## 3. Backlink Monitoring

**Frequency:** Weekly (Monday)
**Time:** 5-10 minutes

### 3.1 New Backlinks
- [ ] Review GSC **Links** report for new external links
- [ ] Check link velocity (links gained per week)
- [ ] Note high-quality new links from authoritative domains
- [ ] Verify new links are dofollow (unless nofollow is intentional)

### 3.2 Lost Backlinks
- [ ] Review GSC **Links** report for lost external links
- [ ] Identify any high-value links lost
- [ ] Investigate why links were lost (page removed, site redesign, etc.)
- [ ] Reach out to recover important lost links if appropriate

### 3.3 Backlink Quality
- [ ] Check for spammy/low-quality new backlinks
- [ ] Review anchor text distribution
- [ ] Monitor for unnatural link patterns
- [ ] Disavow any toxic links if necessary

### 3.4 Internal Linking
- [ ] Review internal link structure in GSC
- [ ] Check for orphan pages (no internal links)
- [ ] Verify hub pages link to all relevant topic pages
- [ ] Check cross-site linking between related content

---

## 4. Content Performance

**Frequency:** Weekly (Monday)
**Time:** 10-15 minutes

### 4.1 Top Pages by Impressions
- [ ] Review GSC **Performance** > **Pages** sorted by impressions
- [ ] Identify pages with high impressions but low CTR (< 2%)
  - [ ] Rewrite meta titles to improve CTR
  - [ ] Update meta descriptions to be more compelling
- [ ] Identify pages with high CTR but low impressions
  - [ ] These pages may need more internal links
  - [ ] Consider creating related content to capture more queries

### 4.2 Top Pages by Clicks
- [ ] Review GSC **Performance** > **Pages** sorted by clicks
- [ ] Verify top-performing pages are still indexed
- [ ] Check for content freshness on top pages
- [ ] Update any outdated information

### 4.3 Content Decay Detection
- [ ] Identify pages with declining traffic (>10% month-over-month)
- [ ] Update content on decaying pages
- [ ] Add new sections or examples to refresh content
- [ ] Update any outdated statistics or references

### 4.4 Query Expansion
- [ ] Review GSC **Queries** report for new ranking keywords
- [ ] Identify queries where site ranks positions 4-10 (striking distance)
- [ ] Optimize content for these queries to push into top 3

---

## 5. Competitor Monitoring

**Frequency:** Bi-weekly (every other Monday)
**Time:** 10-15 minutes

### 5.1 Competitor Identification
- [ ] Maintain list of top 5 competitors per site
- [ ] Update competitor list if new sites appear in SERPs
- [ ] Note competitor domain authority changes

### 5.2 Content Gap Analysis
- [ ] Identify topics competitors cover that we don't
- [ ] Prioritize high-volume/low-competition gaps
- [ ] Add to content calendar

### 5.3 Competitor Backlinks
- [ ] Check for new backlinks to competitor pages
- [ ] Identify link building opportunities from competitor links
- [ ] Reach out to sites linking to competitors but not us

### 5.4 Competitor Content Quality
- [ ] Review top competitor pages for quality signals
- [ ] Note content length, formatting, and multimedia usage
- [ ] Identify areas where our content can be improved

---

## 6. Technical SEO Checks

**Frequency:** Weekly (Monday)
**Time:** 10-15 minutes

### 6.1 Broken Links
- [ ] Run Lychee (or similar) broken link checker
- [ ] Fix any 404 errors found
- [ ] Set up redirects for moved pages
- [ ] Update internal links to point to correct URLs

### 6.2 Redirect Chains
- [ ] Check for redirect chains (3+ redirects)
- [ ] Flatten redirect chains to single redirects
- [ ] Remove unnecessary redirect hops

### 6.3 Page Speed
- [ ] Run Lighthouse audit on top 10 pages per site
- [ ] Target: Performance score > 90
- [ ] Target: Accessibility score > 95
- [ ] Target: Best Practices score > 95
- [ ] Target: SEO score > 95
- [ ] Fix any critical performance issues

### 6.4 Site Architecture
- [ ] Verify XML sitemaps are valid and up-to-date
- [ ] Check robots.txt for any new blocking rules
- [ ] Verify canonical tags are correct on all pages
- [ ] Check for duplicate content issues

### 6.5 Image Optimization
- [ ] Check for images missing alt text
- [ ] Verify images are using WebP format where possible
- [ ] Check for oversized images affecting load times
- [ ] Ensure images have lazy loading enabled

### 6.6 Schema Markup
- [ ] Verify structured data is valid (use Google Rich Results Test)
- [ ] Check for new structured data opportunities
- [ ] Review FAQ schema on relevant pages
- [ ] Verify breadcrumb schema is correct

### 6.7 Security
- [ ] Check for mixed content warnings (HTTP on HTTPS pages)
- [ ] Verify SSL certificates are valid and not expiring soon
- [ ] Review for any security vulnerabilities

---

## 7. Site-Specific Checks

### 7.1 Cross-Site Search
- [ ] Test cross-site search functionality on all sites
- [ ] Verify search results are relevant
- [ ] Check for any search API errors

### 7.2 Math Rendering
- [ ] Verify KaTeX rendering on math-heavy pages
- [ ] Check for any LaTeX compilation errors
- [ ] Test on mobile devices

### 7.3 Code Blocks
- [ ] Verify syntax highlighting works correctly
- [ ] Check code blocks are copyable
- [ ] Test on mobile devices

### 7.4 Interactive Components
- [ ] Test SolidJS interactive components
- [ ] Verify flashcards work correctly
- [ ] Check practice problem interactive elements
- [ ] Test on mobile devices

---

## Weekly Report Template

```markdown
# SEO Weekly Report - [DATE]

## GSC Summary
- Total impressions: [NUMBER] ([CHANGE]%)
- Total clicks: [NUMBER] ([CHANGE]%)
- Average CTR: [NUMBER]%
- Average position: [NUMBER]
- Indexed pages: [NUMBER]

## Coverage Issues
- Errors: [NUMBER] (NEW: [LIST])
- Valid pages: [NUMBER] ([CHANGE])
- Excluded pages: [NUMBER]

## Core Web Vitals
- LCP (mobile): [NUMBER]s
- FID (mobile): [NUMBER]ms
- CLS (mobile): [NUMBER]
- LCP (desktop): [NUMBER]s
- FID (desktop): [NUMBER]ms
- CLS (desktop): [NUMBER]

## Ranking Changes
- Keywords gained positions: [NUMBER]
- Keywords lost positions: [NUMBER]
- New keywords ranking: [LIST]

## Backlinks
- New backlinks: [NUMBER]
- Lost backlinks: [NUMBER]
- Top new link: [URL]

## Content Performance
- Top page by clicks: [URL] ([NUMBER] clicks)
- Top page by impressions: [URL] ([NUMBER] impressions)
- Pages with declining traffic: [LIST]

## Technical Issues Found
- [LIST]

## Action Items for Next Week
- [LIST]
```

---

## Monthly Deep Dive

In addition to weekly checks, perform these monthly:

### Month-End Review
- [ ] Compare month-over-month traffic trends
- [ ] Review keyword ranking progress
- [ ] Analyze backlink growth rate
- [ ] Assess content performance by topic cluster
- [ ] Review competitor landscape changes
- [ ] Update keyword tracking targets based on progress
- [ ] Plan next month's content based on data

### Quarterly Strategy Review
- [ ] Review overall SEO strategy effectiveness
- [ ] Reassess keyword priorities based on performance
- [ ] Update content calendar with new opportunities
- [ ] Review and update technical SEO infrastructure
- [ ] Assess ROI on SEO efforts

---

## Tools Used

| Tool | Purpose | Frequency |
|------|---------|-----------|
| Google Search Console | Rankings, coverage, CWV | Weekly |
| Lychee | Broken link checking | Weekly |
| Lighthouse | Performance auditing | Weekly |
| Google Rich Results Test | Schema validation | Monthly |
| Ahrefs/SEMrush (if available) | Backlink analysis, competitor research | Monthly |
| PageSpeed Insights | Detailed performance analysis | Monthly |
