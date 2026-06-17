#!/usr/bin/env node
/**
 * Build time measurement script.
 *
 * Measures the build time for each site and reports results.
 * Used to track build performance over time and identify regressions.
 *
 * Usage: node scripts/measure-build-times.js [--site <name>]
 */

const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

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

const args = process.argv.slice(2)
const targetSite = args.find(a => !a.startsWith('--'))
const sites = targetSite ? [targetSite] : SITES

const results = []

for (const site of sites) {
  const siteDir = path.join(SITES_DIR, site)
  if (!fs.existsSync(path.join(siteDir, 'package.json'))) {
    continue
  }

  const start = Date.now()
  try {
    execSync('bunx astro build', {
      cwd: siteDir,
      stdio: 'pipe',
      timeout: 600000,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    })
    const elapsed = Date.now() - start
    const distDir = path.join(siteDir, 'dist')
    const pageCount = fs.existsSync(distDir)
      ? execSync(`find ${distDir} -name "*.html" | wc -l`, { encoding: 'utf8' }).trim()
      : 0
    results.push({ site, elapsed, pageCount, status: 'ok' })
  } catch (err) {
    const elapsed = Date.now() - start
    results.push({ site, elapsed, pageCount: 0, status: 'failed' })
  }
}

// Report
console.log('\nBuild Time Report')
console.log('='.repeat(60))
console.log(`${'Site'.padEnd(20)} ${'Time'.padEnd(12)} ${'Pages'.padEnd(8)} Status`)
console.log('-'.repeat(60))
for (const r of results) {
  const time = `${(r.elapsed / 1000).toFixed(1)}s`
  console.log(
    `${r.site.padEnd(20)} ${time.padEnd(12)} ${String(r.pageCount).padEnd(8)} ${r.status}`,
  )
}
console.log('-'.repeat(60))
const totalTime = results.reduce((s, r) => s + r.elapsed, 0)
console.log(`Total: ${(totalTime / 1000).toFixed(1)}s`)

// Write results for CI tracking
const reportPath = path.join(ROOT, '.reports', 'build-times.json')
fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(
  reportPath,
  JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2),
)
