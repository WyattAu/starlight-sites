# Manual Tasks Required

These tasks cannot be automated via API and require Cloudflare Dashboard or Google Search Console access.

## 1. Google Search Console — Submit Sitemaps

**Already verified:** Domain property `wyattau.com` (DNS TXT record exists)

**Sitemap URLs to submit** (in Search Console → Sitemaps):
```
https://dse.wyattau.com/sitemap-index.xml
https://ib.wyattau.com/sitemap-index.xml
https://alevel.wyattau.com/sitemap-index.xml
https://university.wyattau.com/sitemap-index.xml
https://qualifications.wyattau.com/sitemap-index.xml
https://programming.wyattau.com/sitemap-index.xml
https://infrastructure.wyattau.com/sitemap-index.xml
https://languages.wyattau.com/sitemap-index.xml
https://tools.wyattau.com/sitemap-index.xml
```

**Also:** Request indexing for key landing pages via URL Inspection tool.

## 2. Cloudflare Web Analytics

**Location:** Cloudflare Dashboard → wyattau.com → Analytics & Logs → Web Analytics

**Action:** Enable Web Analytics for the zone. This is automatic (no code needed) — uses CF edge data.

## 3. Cloudflare AI Audit (robots.txt)

**Current state:** Cloudflare auto-generates robots.txt with:
- `User-agent: * → Allow: /` (search allowed)
- Blocks AI scrapers (GPTBot, ClaudeBot, etc.)
- `Content-Signal: search=yes, ai-train=no`

**Decision:** Keep Cloudflare-managed robots.txt (good AI blocking). No custom robots.txt needed.

## 4. Legacy Subdomain Cleanup

**Already done:**
- Worker `redirect-legacy` deployed
- Routes: `alevel-maths-physics.wyattau.com/*`, `alevel-sciences.wyattau.com/*`, `academics.wyattau.com/*`
- All redirect 301 to appropriate new subdomain

**Optional cleanup:** Delete old CF Pages projects:
- `wyattsnotes-alevel-maths-physics`
- `wyattsnotes-alevel-sciences`
- `wyattsnotes-academics`

## 5. Old Docusaurus Repository

**Status:** Deploy workflows disabled (renamed to `.disabled`)

**Optional:** Add deprecation notice to old repo README pointing to new sites.
