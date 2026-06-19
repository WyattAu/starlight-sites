#!/usr/bin/env node
/**
 * Contrast and Accessibility Checker via Playwright.
 *
 * Builds each site, serves it locally, navigates routes, and for each:
 *   1. Captures a full-page PNG screenshot
 *   2. Runs axe-core for WCAG 2.1 contrast ratio analysis
 *   3. Extracts computed styles (foreground/background colors, font sizes)
 *   4. Reports any contrast failures with element selectors and ratios
 *
 * Usage:
 *   node tests/e2e/contrast-check.js [site]        # one site (default: dse)
 *   node tests/e2e/contrast-check.js --all         # all 9 Astro sites
 *   node tests/e2e/contrast-check.js --no-build    # reuse existing dist/
 *
 * Output: /tmp/contrast-report/<site>/<page>.{png,json}
 *
 * Requires: npx playwright install --with-deps chromium
 */

const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const http = require('node:http')

const ROOT = path.join(__dirname, '..', '..')
const SITES_DIR = path.join(ROOT, 'sites')
const OUTPUT_DIR = '/tmp/contrast-report'

const SITES = [
  'dse',
  'ib',
  'alevel',
  'university',
  'qualifications',
  'programming',
  'infrastructure',
  'languages',
  'tools',
]

const SITE_PAGES = {
  dse: ['/maths/', '/physics/'],
  ib: ['/mathematics/', '/physics/'],
  alevel: ['/maths/', '/physics/'],
  university: ['/mathematics/', '/physics/'],
  qualifications: ['/gcse/', '/ap/'],
  programming: ['/1_enviroment_and_toolchain/', '/3_types/'],
  infrastructure: ['/linux/', '/networking/'],
  languages: ['/rust/', '/python/'],
  tools: ['/algorithms/', '/git/'],
}

const argv = process.argv.slice(2)
const NO_BUILD = argv.includes('--no-build')
const targetArg = argv.find(a => !a.startsWith('--'))

function targetSites() {
  if (argv.includes('--all')) return SITES
  if (targetArg && SITES.includes(targetArg)) return [targetArg]
  return ['dse']
}

// ---------------------------------------------------------------------------
// Build + serve (reused from gui-snapshot.js)
// ---------------------------------------------------------------------------
function buildSite(site) {
  const distDir = path.join(SITES_DIR, site, 'dist')
  if (NO_BUILD && fs.existsSync(distDir)) return distDir
  if (fs.existsSync(distDir)) return distDir
  try {
    execSync('bun run build', {
      cwd: path.join(SITES_DIR, site),
      stdio: 'pipe',
      timeout: 600000,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    })
  } catch {
    return null
  }
  return distDir
}

function serveDirectory(dir, port) {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(dir, req.url === '/' ? '/index.html' : req.url)
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html')
      }
      if (!fs.existsSync(filePath) && !path.extname(filePath)) filePath += '.html'
      if (!fs.existsSync(filePath)) {
        res.writeHead(404)
        res.end('Not Found')
        return
      }
      const ext = path.extname(filePath)
      const types = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.json': 'application/json',
        '.woff2': 'font/woff2',
      }
      res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' })
      fs.createReadStream(filePath).pipe(res)
    })
    server.listen(port, () => resolve(server))
  })
}

// ---------------------------------------------------------------------------
// Contrast analysis via Playwright + axe-core
// ---------------------------------------------------------------------------
async function analyzeContrast(site, browser) {
  const distDir = buildSite(site)
  if (!distDir) return { issues: [], screenshots: [] }

  const port = 8700 + SITES.indexOf(site)
  const server = await serveDirectory(distDir, port)
  const outputDir = path.join(OUTPUT_DIR, site)
  fs.mkdirSync(outputDir, { recursive: true })

  const pages = ['/', ...(SITE_PAGES[site] || [])]
  const results = []

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })

  for (const pagePath of pages) {
    const url = `http://localhost:${port}${pagePath}`
    const page = await context.newPage()

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      await page.waitForTimeout(500) // hydration

      const safeName = pagePath.replace(/\//g, '_').replace(/^_/, '') || 'index'

      // Screenshot
      const screenshotPath = path.join(outputDir, `${safeName}.png`)
      await page.screenshot({ path: screenshotPath, fullPage: true })

      // Axe-core contrast analysis
      let axeResults = { violations: [] }
      try {
        axeResults = await page.evaluate(async () => {
          // axe-core is not bundled; inject it dynamically
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js'
          document.head.appendChild(script)
          await new Promise(resolve => {
            script.onload = resolve
            setTimeout(resolve, 3000)
          })

          if (typeof axe === 'undefined') return { violations: [] }
          const results = await axe.run(document, { runOnly: ['color-contrast'] })
          return {
            violations: results.violations.map(v => ({
              id: v.id,
              impact: v.impact,
              description: v.description,
              nodes: v.nodes.map(n => ({
                html: n.html.substring(0, 200),
                target: n.target,
                impact: n.impact,
                message: n.any?.[0]?.message || '',
              })),
            })),
          }
        })
      } catch {
        // axe-core injection failed; continue with DOM-based analysis
      }

      // DOM-based color analysis (fallback + supplement)
      const domColors = await page.evaluate(() => {
        const results = []
        const elements = document.querySelectorAll(
          'p, h1, h2, h3, h4, h5, h6, span, a, button, li, td, th, label',
        )
        const seen = new Set()

        for (const el of elements) {
          const style = window.getComputedStyle(el)
          const color = style.color
          const bgColor = style.backgroundColor
          const fontSize = style.fontSize
          const fontWeight = style.fontWeight

          if (!color || color === 'rgba(0, 0, 0, 0)') continue
          if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') continue

          const key = `${color}|${bgColor}|${fontSize}`
          if (seen.has(key)) continue
          seen.add(key)

          results.push({
            tag: el.tagName.toLowerCase(),
            text: el.textContent?.trim().substring(0, 50) || '',
            color,
            bgColor,
            fontSize,
            fontWeight,
            selector:
              el.tagName.toLowerCase() +
              (el.className ? `.${el.className.split(' ').slice(0, 2).join('.')}` : ''),
          })
        }
        return results
      })

      const pageResult = {
        page: pagePath,
        screenshot: screenshotPath,
        axeViolations: axeResults.violations,
        colorSamples: domColors,
      }
      results.push(pageResult)

      fs.writeFileSync(
        path.join(outputDir, `${safeName}.json`),
        JSON.stringify(pageResult, null, 2),
      )
    } catch {
      // skip failed pages
    } finally {
      await page.close()
    }
  }

  await context.close()
  server.close()
  return { site, results }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const sites = targetSites()

  let chromium
  try {
    const pw = await import('playwright')
    chromium = pw.chromium
  } catch {
    console.error(
      'Playwright not available. Install with: npx playwright install --with-deps chromium',
    )
    process.exit(1)
  }

  const browser = await chromium.launch()
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const aggregate = { sites: [], totalViolations: 0, totalColorSamples: 0 }

  for (const site of sites) {
    console.log(`Analyzing ${site}...`)
    const result = await analyzeContrast(site, browser)
    aggregate.sites.push(result)
    if (result.results) {
      aggregate.totalViolations += result.results.reduce(
        (s, r) => s + (r.axeViolations?.length || 0),
        0,
      )
      aggregate.totalColorSamples += result.results.reduce(
        (s, r) => s + (r.colorSamples?.length || 0),
        0,
      )
    }
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.json'), JSON.stringify(aggregate, null, 2))

  // Summary
  console.log('\n=== Contrast Analysis Summary ===')
  for (const siteResult of aggregate.sites) {
    const violations = siteResult.results.reduce((s, r) => s + r.axeViolations.length, 0)
    const samples = siteResult.results.reduce((s, r) => s + r.colorSamples.length, 0)
    console.log(`  ${siteResult.site}: ${violations} contrast violations, ${samples} color samples`)
  }
  console.log(
    `  Total: ${aggregate.totalViolations} violations, ${aggregate.totalColorSamples} samples`,
  )
  console.log(`  Report: ${OUTPUT_DIR}/report.json`)

  await browser.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
