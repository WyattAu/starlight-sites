# Google Search Console & Cloudflare Analytics Setup

## Google Search Console Sitemap Submission

Submit these sitemap URLs to Google Search Console for each site:

| Site | Sitemap URL |
|------|-------------|
| DSE | https://dse.wyattau.com/sitemap-index.xml |
| IB | https://ib.wyattau.com/sitemap-index.xml |
| A-Level | https://alevel.wyattau.com/sitemap-index.xml |
| University | https://university.wyattau.com/sitemap-index.xml |
| Qualifications | https://qualifications.wyattau.com/sitemap-index.xml |
| Programming | https://programming.wyattau.com/sitemap-index.xml |
| Infrastructure | https://infrastructure.wyattauau.com/sitemap-index.xml |
| Languages | https://languages.wyattau.com/sitemap-index.xml |
| Tools | https://tools.wyattau.com/sitemap-index.xml |
| Landing | https://wyattsnotes.wyattau.com/sitemap-index.xml (if applicable) |

### Steps:
1. Go to https://search.google.com/search-console
2. Add each property (URL prefix method)
3. Verify ownership via DNS TXT record or HTML file
4. Go to Sitemaps → Add sitemap URL → Submit
5. Wait for Google to crawl (typically 1-7 days)

## Cloudflare Web Analytics Setup

### Steps:
1. Go to https://dash.cloudflare.com → Select account
2. Go to Analytics & Logs → Web Analytics
3. Enable Web Analytics for each domain:
   - dse.wyattau.com
   - ib.wyattau.com
   - alevel.wyattau.com
   - university.wyattau.com
   - qualifications.wyattau.com
   - programming.wyattau.com
   - infrastructure.wyattau.com
   - languages.wyattau.com
   - tools.wyattau.com
   - wyattsnotes.wyattau.com
4. The beacon script will be automatically injected by Cloudflare
5. No code changes needed — Cloudflare handles injection

### Alternative: Cloudflare Workers Analytics
If Web Analytics is not available, use the Workers Analytics dashboard:
- Go to Analytics & Logs → Workers Analytics
- View request counts, response times, error rates per worker

## robots.txt Verification

All sites already have robots.txt with sitemap references:
- https://dse.wyattau.com/robots.txt
- https://ib.wyattau.com/robots.txt
- https://alevel.wyattau.com/robots.txt
- https://university.wyattau.com/robots.txt
- https://qualifications.wyattau.com/robots.txt
- https://programming.wyattau.com/robots.txt
- https://infrastructure.wyattau.com/robots.txt
- https://languages.wyattau.com/robots.txt
- https://tools.wyattau.com/robots.txt
