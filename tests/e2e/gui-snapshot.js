#!/usr/bin/env node
/**
 * GUI Traversal + DOM/Screenshot Snapshot + Design-Language Audit.
 *
 * For every (site, route) pair this script:
 *   1. Loads the route against a locally-served build of the site.
 *   2. Captures a stable DOM structural snapshot (counts of landmarks,
 *      headings, ARIA usage, etc.).
 *   3. Captures the raw HTML.
 *   4. Verifies the design-language contract: every site must compile
 *      with the Spatial Materialism + Amoebic UI tokens defined in
 *      shared/styles/custom.css. We grep the compiled CSS rather than
 *      the source so a stale sync cannot hide a missing token.
 *   5. Scans the rendered DOM for pictograph characters (Phase 3
 *      deviation check; complements lint-no-emoji.js which scans source).
 *   6. Captures a PNG screenshot when a Playwright chromium install is
 *      present (graceful DOM-only fallback otherwise).
 *   7. Emits a markdown report under <output>/REPORT.md so a human can
 *      review the snapshots side-by-side with the design intent.
 *
 * Usage:
 *   node tests/e2e/gui-snapshot.js [site]        # one site (default: dse)
 *   node tests/e2e/gui-snapshot.js --all         # all 9 Astro sites
 *   node tests/e2e/gui-snapshot.js --no-build    # reuse existing dist/
 *   node tests/e2e/gui-snapshot.js --screenshots # force screenshot capture
 *
 * Output: /tmp/gui-snapshots/<site>/<page>.{dom.json,html,png}
 *         /tmp/gui-snapshots/REPORT.md
 */

// Shared e2e infrastructure lives in lib/server.mjs (ESM). The repo is
// configured as CommonJS (no "type": "module" in package.json), so we
// import the shared module dynamically and keep this entry script as
// CommonJS for compatibility with the existing `node tests/e2e/...` scripts.
const fs = require('node:fs')
const path = require('node:path')

const OUTPUT_DIR = '/tmp/gui-snapshots'
const BASELINE_DIR = path.join(__dirname, '..', '..', 'tests', 'e2e', 'baseline')

// Design-language contract: every compiled CSS file at every site MUST
// declare these tokens. Missing tokens indicate sync drift, a build that
// stripped CSS custom properties, or a hand-edit on a site copy.
const DESIGN_TOKENS = [
  // Spatial Materialism -- elevation tiers
  '--wn-elevation-1',
  '--wn-elevation-2',
  '--wn-elevation-3',
  '--wn-elevation-4',
  '--wn-elevation-accent',
  // Amoebic UI -- organic radii
  '--wn-radius-sm',
  '--wn-radius-md',
  '--wn-radius-lg',
  '--wn-radius-pill',
  // Amoebic UI -- fluid spacing
  '--wn-space-fluid-sm',
  '--wn-space-fluid-md',
  '--wn-space-fluid-lg',
  // Motion -- organic easing
  '--wn-ease-organic',
]

// Pictograph planes flagged by lint-no-emoji.js. We rescan the *rendered*
// DOM (not just source) so dynamically-injected emoji are caught too.
const PICTOGRAPH_RE = /[\u2600-\u27BF\u1F000-\u1FAFF]/

const argv = process.argv.slice(2)
const NO_BUILD = argv.includes('--no-build')
const FORCE_SCREENSHOTS = argv.includes('--screenshots')
const targetArg = argv.find(a => !a.startsWith('--'))

function targetSites(SITES) {
  if (argv.includes('--all')) return SITES
  if (targetArg && SITES.includes(targetArg)) return [targetArg]
  return ['dse']
}

// ---------------------------------------------------------------------------
// Capability discovery: Playwright chromium is optional.
// ---------------------------------------------------------------------------
async function resolveBrowser() {
  if (process.env.GUI_NO_SCREENSHOTS && !FORCE_SCREENSHOTS) return null
  try {
    const mod = await import('playwright')
    return mod.chromium
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// DOM structural snapshot.
// ---------------------------------------------------------------------------
function count(html, re) {
  return (html.match(re) || []).length
}

function extractDOMSnapshot(html) {
  return {
    // Landmark + structural counts (the WCAG-oriented surface).
    hasNav: /<nav[\s>]/.test(html),
    hasMain: /<main[\s>]/.test(html),
    hasFooter: /<footer[\s>]/.test(html),
    hasHeader: /<header[\s>]/.test(html),
    hasBreadcrumbs: /class="[^"]*breadcrumb/i.test(html),
    hasSearch: /search/i.test(html),
    hasSidebar: /sidebar/i.test(html),
    hasTOC: /table-of-contents|class="[^"]*toc/i.test(html),
    hasSkipLink: /skip-link|skip\s+to\s+(main|content)/i.test(html),
    hasViewport: /name=["']viewport["']/i.test(html),
    hasLangAttr: /<html[^>]*\slang=/i.test(html),
    hasFocusVisible: /focus-visible/.test(html),
    hasJSONLD: /application\/ld\+json/.test(html),
    hasKaTeX: /katex/i.test(html),
    hasMermaid: /mermaid/i.test(html),
    // Volatile (excluded from drift comparison).
    title: (html.match(/<title[^>]*>([^<]+)<\/title>/i) || [undefined, ''])[1].trim(),
    h1: (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [undefined, ''])[1]
      .replace(/<[^>]+>/g, '')
      .trim(),
    htmlSize: html.length,
    // Aggregate counts.
    h2Count: count(html, /<h2/g),
    h3Count: count(html, /<h3/g),
    linkCount: count(html, /<a\s/g),
    imgCount: count(html, /<img\s/g),
    imgWithoutAlt: count(html, /<img(?![^>]*\salt=)[^>]*>/g),
    scriptCount: count(html, /<script/g),
    ariaLabelCount: count(html, /aria-label/g),
    ariaHiddenCount: count(html, /aria-hidden/g),
    buttonCount: count(html, /<button/g),
    formLabelCount: count(html, /<label/g),
    // Design-language signals in the HTML payload (we deeper-check the
    // compiled CSS separately).
    usesLandingCard: /class="[^"]*landing-card/.test(html),
    usesWnVar: /var\(--wn-/.test(html),
  }
}

function auditAccessibility(snapshot) {
  const issues = []
  if (!snapshot.hasNav) issues.push('Missing <nav> landmark')
  if (!snapshot.hasMain) issues.push('Missing <main> landmark')
  if (!snapshot.hasSkipLink) issues.push('Missing skip-to-content link')
  if (!snapshot.hasLangAttr) issues.push('Missing <html lang> attribute')
  if (!snapshot.hasViewport) issues.push('Missing viewport meta tag')
  if (snapshot.ariaLabelCount < 2) issues.push(`Few aria-labels (${snapshot.ariaLabelCount})`)
  if (snapshot.imgWithoutAlt > 0) issues.push(`${snapshot.imgWithoutAlt} <img> without alt`)
  if (!snapshot.h1) issues.push('Missing <h1> heading')
  return issues
}

function compareWithBaseline(site, page, snapshot) {
  const baselinePath = path.join(BASELINE_DIR, `${site}.json`)
  if (!fs.existsSync(baselinePath)) return { drift: false, reason: 'no baseline' }
  let baseline
  try {
    baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'))
  } catch {
    return { drift: false, reason: 'baseline unreadable' }
  }
  const entry = baseline[page]
  if (!entry) return { drift: false, reason: 'page not in baseline' }
  const diffs = []
  for (const [key, value] of Object.entries(snapshot)) {
    // Volatile fields are explicitly excluded.
    if (key === 'htmlSize' || key === 'title' || key === 'h1') continue
    if (entry[key] !== undefined && entry[key] !== value) {
      diffs.push({ field: key, expected: entry[key], actual: value })
    }
  }
  return { drift: diffs.length > 0, diffs }
}

// ---------------------------------------------------------------------------
// Design-language contract verification.
// ---------------------------------------------------------------------------

/**
 * Locate every compiled CSS file produced by this site's build.
 * Astro emits CSS under dist/_astro/*.css by convention.
 */
function findCompiledCss(distDir) {
  const out = []
  function walk(dir) {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.isFile() && entry.name.endsWith('.css')) out.push(full)
    }
  }
  walk(distDir)
  return out
}

/**
 * Verify every required design token is declared somewhere in the
 * compiled CSS. A missing token implies the canonical stylesheet under
 * shared/styles/custom.css was not propagated (sync drift) or the build
 * stripped custom properties (misconfigured minifier).
 */
function verifyDesignTokens(distDir) {
  const cssFiles = findCompiledCss(distDir)
  if (cssFiles.length === 0) {
    return { ok: false, missing: DESIGN_TOKENS, reason: 'no compiled CSS found' }
  }
  const combined = cssFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n')
  const missing = DESIGN_TOKENS.filter(token => !combined.includes(token))
  return { ok: missing.length === 0, missing, cssFiles: cssFiles.length }
}

/**
 * Scan the rendered HTML for pictograph characters. lint-no-emoji.js
 * scans the source; this complements it by catching emoji that arrive
 * via runtime hydration or third-party includes.
 */
function scanForPictographs(html) {
  const matches = []
  const re = new RegExp(PICTOGRAPH_RE.source, 'g')
  let m
  while ((m = re.exec(html)) !== null) {
    matches.push({ char: m[0], codePoint: m.codePointAt(0) })
    if (matches.length >= 10) break
  }
  return matches
}

// ---------------------------------------------------------------------------
// Per-site snapshot run.
// ---------------------------------------------------------------------------
async function snapshotSite(site, browser, infra) {
  const { buildSite, fetchPage, serveDirectory, SITE_PAGES } = infra
  const outputSiteDir = path.join(OUTPUT_DIR, site)
  fs.mkdirSync(outputSiteDir, { recursive: true })

  const distDir = buildSite(site, { noBuild: NO_BUILD })
  if (!distDir) {
    return {
      site,
      snapshots: [],
      a11yIssues: [],
      drift: [],
      pictographs: [],
      designTokens: { ok: false, missing: DESIGN_TOKENS, reason: 'build failed' },
    }
  }

  // Verify design-language tokens up front (cheap, dist-only).
  const designTokens = verifyDesignTokens(distDir)

  // Resolve the site's port deterministically from its index in the SITES
  // list. We read SITES from the shared infra module to avoid drift.
  const SITES_LIST = (await import('./lib/server.mjs')).SITES
  const port = 8700 + SITES_LIST.indexOf(site)
  const server = await serveDirectory(distDir, port)

  const pages = ['/', ...(SITE_PAGES[site] || [])]
  const snapshots = []
  const a11yIssues = []
  const drift = []
  const pictographs = []

  let context = null
  if (browser) {
    try {
      context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    } catch {
      context = null
    }
  }

  for (const page of pages) {
    const url = `http://localhost:${port}${page}`
    let response
    try {
      response = await fetchPage(url)
    } catch {
      continue
    }
    if (response.status !== 200) continue

    const snapshot = extractDOMSnapshot(response.body)
    snapshots.push({ page, snapshot })

    const safeName = page.replace(/\//g, '_').replace(/^_/, '') || 'index'
    fs.writeFileSync(
      path.join(outputSiteDir, `${safeName}.dom.json`),
      `${JSON.stringify(snapshot, null, 2)}\n`,
    )
    fs.writeFileSync(path.join(outputSiteDir, `${safeName}.html`), response.body)

    const issues = auditAccessibility(snapshot)
    for (const issue of issues) a11yIssues.push({ page, issue })

    const cmp = compareWithBaseline(site, page, snapshot)
    if (cmp.drift) drift.push({ page, diffs: cmp.diffs })

    const pics = scanForPictographs(response.body)
    if (pics.length > 0) pictographs.push({ page, matches: pics })

    // Screenshot capture (optional, requires Playwright).
    if (context) {
      try {
        const pg = await context.newPage()
        await pg.goto(url, { waitUntil: 'load', timeout: 20000 })
        await pg.waitForTimeout(400)
        await pg.screenshot({ path: path.join(outputSiteDir, `${safeName}.png`), fullPage: true })
        await pg.close()
      } catch {
        // Screenshot failure is non-fatal; DOM snapshot already captured.
      }
    }
  }

  if (context) await context.close()
  server.close()
  return { site, snapshots, a11yIssues, drift, pictographs, designTokens }
}

// ---------------------------------------------------------------------------
// Markdown report generation (Phase 3.3 review surface).
// ---------------------------------------------------------------------------
function renderMarkdownReport(results, browserAvailable) {
  const lines = []
  lines.push('# GUI Traversal Report')
  lines.push('')
  lines.push(`Generated: ${new Date().toISOString()}`)
  lines.push(`Sites scanned: ${results.length}`)
  lines.push(
    `Browser available: ${browserAvailable ? 'yes (PNG screenshots captured)' : 'no (DOM-only mode)'}`,
  )
  lines.push('')

  // Per-site design-language status.
  lines.push('## Design-language contract (Spatial Materialism + Amoebic UI)')
  lines.push('')
  lines.push(
    'Every site must compile with the shared design tokens. A missing token indicates sync drift or a build that stripped custom properties.',
  )
  lines.push('')
  lines.push('| Site | Compiled CSS files | Tokens missing | Status |')
  lines.push('|------|-------------------|----------------|--------|')
  for (const r of results) {
    const dt = r.designTokens
    const missingCount = dt.missing ? dt.missing.length : 0
    const status = dt.ok ? 'PASS' : 'FAIL'
    const fileCount = dt.cssFiles !== undefined ? dt.cssFiles : 0
    lines.push(`| ${r.site} | ${fileCount} | ${missingCount} | ${status} |`)
  }
  lines.push('')

  // Accessibility summary.
  const totalA11y = results.reduce((n, r) => n + r.a11yIssues.length, 0)
  lines.push('## Accessibility (WCAG-oriented)')
  lines.push('')
  lines.push(`Total findings: ${totalA11y}`)
  if (totalA11y > 0) {
    lines.push('')
    lines.push('| Site | Page | Issue |')
    lines.push('|------|------|-------|')
    for (const r of results) {
      for (const i of r.a11yIssues.slice(0, 20)) {
        lines.push(`| ${r.site} | ${i.page} | ${i.issue} |`)
      }
    }
    const omitted = totalA11y - results.flatMap(r => r.a11yIssues).slice(0, 20).length
    if (omitted > 0) lines.push(`| ... | ... | ${omitted} more |`)
  }
  lines.push('')

  // Pictograph scan (Phase 3.2 no-emoji contract on rendered DOM).
  const totalPics = results.reduce((n, r) => n + r.pictographs.length, 0)
  lines.push('## Pictograph scan (rendered DOM)')
  lines.push('')
  lines.push(`Total pages with pictographs: ${totalPics}`)
  if (totalPics > 0) {
    lines.push('')
    lines.push('| Site | Page | First match | Code point |')
    lines.push('|------|------|-------------|------------|')
    for (const r of results) {
      for (const p of r.pictographs) {
        const first = p.matches[0]
        lines.push(
          `| ${r.site} | ${p.page} | ${first.char} | U+${first.codePoint.toString(16).toUpperCase()} |`,
        )
      }
    }
  }
  lines.push('')

  // Drift summary.
  const totalDrift = results.reduce((n, r) => n + r.drift.length, 0)
  lines.push('## Structural drift vs baseline')
  lines.push('')
  lines.push(`Total drifted pages: ${totalDrift}`)
  lines.push('')

  lines.push('## Artifacts')
  lines.push('')
  lines.push('Per-page artifacts are written under this directory:')
  lines.push('')
  lines.push('- `<site>/<page>.dom.json` -- structural DOM snapshot')
  lines.push('- `<site>/<page>.html`     -- raw HTML')
  lines.push('- `<site>/<page>.png`      -- full-page screenshot (when Playwright is available)')
  lines.push('')

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Main entry point.
// ---------------------------------------------------------------------------
async function main() {
  // Dynamic import keeps this CommonJS file compatible with the .mjs
  // shared infrastructure module.
  const lib = await import('./lib/server.mjs')
  const { buildSite, fetchPage, serveDirectory, SITES, SITE_PAGES, ROOT } = lib

  const sites = targetSites(SITES)
  const browser = await resolveBrowser()
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const results = []
  for (const site of sites) {
    process.stdout.write(`[${site}] snapshotting... `)
    const result = await snapshotSite(site, browser, {
      buildSite,
      fetchPage,
      serveDirectory,
      SITE_PAGES,
    })
    results.push(result)
    const dt = result.designTokens
    console.log(
      `pages=${result.snapshots.length} a11y=${result.a11yIssues.length} pics=${result.pictographs.length} design=${dt.ok ? 'OK' : `FAIL(${dt.missing ? dt.missing.length : '?'})`}`,
    )
  }

  const report = renderMarkdownReport(results, !!browser)
  fs.writeFileSync(path.join(OUTPUT_DIR, 'REPORT.md'), report)

  // Aggregate report.json for machine consumption.
  const aggregate = {
    generatedAt: new Date().toISOString(),
    sites: results.map(r => ({
      site: r.site,
      pageCount: r.snapshots.length,
      a11yIssueCount: r.a11yIssues.length,
      pictographPageCount: r.pictographs.length,
      driftPageCount: r.drift.length,
      designTokensOk: r.designTokens.ok,
      designTokensMissing: r.designTokens.missing || [],
    })),
  }
  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.json'), `${JSON.stringify(aggregate, null, 2)}\n`)

  if (browser) await browser.close()

  // Exit non-zero if any site failed the design-language contract.
  const failedDesign = results.filter(r => !r.designTokens.ok)
  if (failedDesign.length > 0) {
    console.error(
      `\nDesign-language contract FAILED for: ${failedDesign.map(r => r.site).join(', ')}`,
    )
    process.exit(1)
  }
  console.log(`\nReport written to ${path.join(OUTPUT_DIR, 'REPORT.md')}`)
}

main().catch(err => {
  console.error('GUI snapshot run failed:', err)
  process.exit(1)
})
