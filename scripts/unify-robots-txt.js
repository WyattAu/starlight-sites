#!/usr/bin/env node
/**
 * Unify robots.txt across all sites.
 * Allows all bots (including AI crawlers for LLM SEO).
 * Blocks utility paths. Per-site sitemap URL.
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const { siteMeta } = require('./lib/sites.cjs')

const meta = siteMeta()
const sites = Object.keys(meta)

const TEMPLATE = (slug) => `User-agent: *
Allow: /

# Block utility/service worker paths
Disallow: /api/
Disallow: /sw.js
Disallow: /reader.js
Disallow: /cross-site-search.js
Disallow: /page-search.js
Disallow: /mermaid-render.js
Disallow: /manifest.json

# Allow content and assets
Allow: /img/
Allow: /docs/

# Sitemaps
Sitemap: https://${slug}.wyattau.com/sitemap-index.xml

# Crawl-delay for polite bots
Crawl-delay: 1
`

let updated = 0
for (const slug of sites) {
  const robotsPath = path.join(ROOT, 'sites', slug, 'public', 'robots.txt')
  const content = TEMPLATE(slug)
  fs.writeFileSync(robotsPath, content)
  updated++
}

// Also update main landing page
const mainPath = path.join(ROOT, 'sites', 'main', 'public', 'robots.txt')
if (fs.existsSync(mainPath)) {
  fs.writeFileSync(mainPath, `User-agent: *
Allow: /

Disallow: /api/
Disallow: /sw.js
Disallow: /reader.js
Disallow: /cross-site-search.js
Disallow: /page-search.js
Disallow: /mermaid-render.js
Disallow: /manifest.json

Allow: /img/
Allow: /docs/

Sitemap: https://wyattsnotes.wyattau.com/sitemap-index.xml

Crawl-delay: 1
`)
  updated++
}

console.log(`Updated ${updated} robots.txt files (all bots allowed, AI crawlers welcome)`)
