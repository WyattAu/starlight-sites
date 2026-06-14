# Manual Tasks

Tasks requiring human intervention (dashboard access, DNS configuration).

## Google Search Console

1. Add domain property: `wyattau.com` (covers all subdomains)
2. Verify via DNS TXT record
3. Submit sitemaps:

| Site | Sitemap URL |
|------|-------------|
| DSE | https://dse.wyattau.com/sitemap-index.xml |
| IB | https://ib.wyattau.com/sitemap-index.xml |
| A-Level | https://alevel.wyattau.com/sitemap-index.xml |
| University | https://university.wyattau.com/sitemap-index.xml |
| Qualifications | https://qualifications.wyattau.com/sitemap-index.xml |
| Programming | https://programming.wyattau.com/sitemap-index.xml |
| Infrastructure | https://infrastructure.wyattau.com/sitemap-index.xml |
| Languages | https://languages.wyattau.com/sitemap-index.xml |
| Tools | https://tools.wyattau.com/sitemap-index.xml |

## Cloudflare Web Analytics

1. Go to Cloudflare Dashboard -> Analytics & Logs -> Web Analytics
2. Enable for `wyattau.com` zone
3. No code changes required (automatic injection)

## Legacy Redirects

1. Create Cloudflare Transform Rules for old subdomains
2. Remove custom domains from old CF Pages projects
3. Delete old projects after verification
