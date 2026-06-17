# Manual Tasks

Tasks requiring human intervention (dashboard access, DNS configuration, secrets).

## GitHub Repository Secrets (required)

The `update-search-index` deploy job skips with a warning when
`CLOUDFLARE_KV_NAMESPACE_ID` is unset. To enable cross-site search index
refresh, add the following repository secrets under Settings -> Secrets and
variables -> Actions:

| Secret | Source |
|--------|--------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare -> My Profile -> API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard (right sidebar) |
| `CLOUDFLARE_KV_NAMESPACE_ID` | Workers & Pages -> KV -> namespace ID for `WYATTSNOTES-SEARCH` |

Until `CLOUDFLARE_KV_NAMESPACE_ID` is set, the nine sites and landing page
deploy normally; only the search index does not refresh.

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

## Legacy Redirects (resolved)

Legacy subdomain redirects are configured and verified:
- alevel-maths-physics -> alevel.wyattau.com
- alevel-sciences -> alevel.wyattau.com
- academics -> university.wyattau.com

Transform Rules are in place. No further action required.
