#!/usr/bin/env node
/**
 * Astro config parity linter (ADR-013).
 *
 * The 46 astro.config.mjs files are deliberately standalone (ADR-002: every
 * site builds independently), which makes them structurally ~90% identical
 * with no sync enforcement. Rather than regenerating them from a factory
 * (rejected: per-site sidebars and head JSON-LD are genuine content, and a
 * factory would couple every build to generator output), this linter
 * enforces the INVARIANT portion: required head entries, the markdown/MDX
 * pipeline, the pinned KaTeX CDN version, and shared-integration imports.
 *
 * A config may vary in: title, description, sidebar, locale, mermaid
 * enablement, og:image/JSON-LD per-site values, and site URL. Everything
 * else that appears in every config must stay present and consistent.
 *
 * Exit code: 1 on any ERROR (CI + pre-commit gate).
 */

const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// The single pinned KaTeX CSS version. Bumping KaTeX = change it here, then
// update every config in the same commit (the linter enforces consistency
// with this value across all sites).
const CANONICAL_KATEX_VERSION = '0.16.44'

// Required head entries. Each is a substring that must appear in the head
// array of every Astro site config.
const REQUIRED_HEAD = [
  { needle: "src: '/web-vitals.js'", label: 'web-vitals script' },
  { needle: "rel: 'manifest'", label: 'PWA manifest link' },
  { needle: "name: 'theme-color'", label: 'theme-color meta' },
  { needle: '/fonts/Inter-latin.woff2', label: 'Inter font preload' },
  { needle: '/fonts/JetBrainsMono-latin.woff2', label: 'JetBrainsMono font preload' },
  { needle: "rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net'", label: 'jsDelivr dns-prefetch' },
  { needle: 'katex.min.css', label: 'KaTeX stylesheet' },
  { needle: "src: '/cross-site-search.js'", label: 'cross-site search script' },
  { needle: "src: '/page-search.js'", label: 'page search script' },
  { needle: 'application/ld+json', label: 'JSON-LD structured data' },
]

// Required markdown/build pipeline fragments.
const REQUIRED_PIPELINE = [
  { needle: 'mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] })', label: 'MDX with math plugins' },
  { needle: 'sitemap()', label: '@astrojs/sitemap' },
  { needle: 'compress()', label: 'astro-compress' },
  { needle: 'remarkPlugins: [remarkMath, clientOnlyDirectives]', label: 'markdown remark pipeline' },
  { needle: 'rehypePlugins: [rehypeKatex, lazyImages]', label: 'markdown rehype pipeline' },
  { needle: 'tailwindcss()', label: 'tailwind vite plugin' },
]

// Shared integrations must be imported from shared/, never vendored per-site.
const REQUIRED_IMPORTS = [
  { needle: "from '../../shared/integrations/client-only-directives'", label: 'client-only-directives from shared/' },
  { needle: "from '../../shared/integrations/lazy-images/index.mjs'", label: 'lazy-images from shared/' },
]

const errors = []

function check(siteId, configPath) {
  const content = fs.readFileSync(configPath, 'utf8')

  for (const { needle, label } of REQUIRED_HEAD) {
    if (!content.includes(needle)) {
      errors.push(`${siteId}: head is missing ${label}`)
    }
  }

  for (const { needle, label } of REQUIRED_PIPELINE) {
    if (!content.includes(needle)) {
      errors.push(`${siteId}: pipeline missing ${label}`)
    }
  }

  for (const { needle, label } of REQUIRED_IMPORTS) {
    if (!content.includes(needle)) {
      errors.push(`${siteId}: ${label}`)
    }
  }

  // KaTeX version consistency: exactly the canonical pinned version.
  const katexMatches = content.match(/katex@([0-9.]+)\//g) || []
  for (const m of katexMatches) {
    const version = m.slice('katex@'.length, -1)
    if (version !== CANONICAL_KATEX_VERSION) {
      errors.push(
        `${siteId}: katex pinned at ${version}, canonical is ${CANONICAL_KATEX_VERSION}`,
      )
    }
  }

  // og:image must be an absolute wyattau.com asset (per-family cards are
  // fine; third-party or relative URLs are not).
  const ogMatch = content.match(/property: 'og:image',\s*content: '([^']+)'/)
  if (!ogMatch) {
    errors.push(`${siteId}: og:image meta missing`)
  } else if (!/^https:\/\/[a-z0-9.-]+\.wyattau\.com\//.test(ogMatch[1])) {
    errors.push(`${siteId}: og:image must be an absolute *.wyattau.com URL (got ${ogMatch[1]})`)
  }
}

function main() {
  const sites = fs
    .readdirSync(SITES_DIR, { withFileTypes: true })
    .filter(
      (e) =>
        e.isDirectory() &&
        e.name !== 'node_modules' &&
        e.name !== 'main' && // landing page: not a Starlight docs site
        fs.existsSync(path.join(SITES_DIR, e.name, 'astro.config.mjs')),
    )
    .map((e) => e.name)
    .sort()

  for (const site of sites) {
    check(site, path.join(SITES_DIR, site, 'astro.config.mjs'))
  }

  if (errors.length > 0) {
    for (const e of errors) console.log(`  [ERROR] ${e}`)
    console.log(`\n  ${errors.length} config parity violation(s) across ${sites.length} sites.`)
    console.log('  See ADR-013: invariants are enforced; per-site variation is allowed.')
    return 1
  }

  console.log(`  config parity: ${sites.length} sites OK (ADR-013)`)
  return 0
}

if (require.main === module) {
  process.exit(main())
}

module.exports = { CANONICAL_KATEX_VERSION, check, main }
