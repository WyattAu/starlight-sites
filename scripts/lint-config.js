#!/usr/bin/env node
// Config validation script - checks astro.config.mjs files for issues

const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')
const ISSUES = []

function checkConfig(siteId, configPath) {
  if (!fs.existsSync(configPath)) {
    ISSUES.push({
      site: siteId,
      type: 'ERROR',
      message: 'Missing astro.config.mjs',
    })
    return
  }

  const content = fs.readFileSync(configPath, 'utf8')

  // Check 1: Structured data placement
  if (content.includes('application/ld+json')) {
    // Verify structured data is inside head array
    const headMatch = content.match(/head:\s*\[([\s\S]*?)\],/)
    if (headMatch && !headMatch[1].includes('application/ld+json')) {
      ISSUES.push({
        site: siteId,
        type: 'ERROR',
        message: 'Structured data placed outside head array',
      })
    }
  }

  // Check 2: Required integrations
  if (!content.includes('starlight')) {
    ISSUES.push({
      site: siteId,
      type: 'ERROR',
      message: 'Missing Starlight integration',
    })
  }

  if (!content.includes('remarkMath') && !content.includes('rehypeKatex')) {
    ISSUES.push({
      site: siteId,
      type: 'WARNING',
      message: 'Missing math plugins',
    })
  }

  // Check 3: Site URL
  if (!content.includes('site:')) {
    ISSUES.push({
      site: siteId,
      type: 'WARNING',
      message: 'Missing site URL',
    })
  }

  // Check 4: Custom CSS
  if (content.includes('customCss') && !content.includes('./src/styles/custom.css')) {
    ISSUES.push({
      site: siteId,
      type: 'WARNING',
      message: 'Custom CSS path may be incorrect',
    })
  }
}

const sites = fs.readdirSync(SITES_DIR).filter(f => {
  // Exclude node_modules and main (static HTML landing page, not Astro)
  return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && f !== 'node_modules' && f !== 'main'
})

for (const site of sites) {
  const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
  checkConfig(site, configPath)
}

// Report results
const errors = ISSUES.filter(i => i.type === 'ERROR')
const warnings = ISSUES.filter(i => i.type === 'WARNING')

if (errors.length > 0) {
  for (const _issue of errors) {
  }
}

if (warnings.length > 0) {
  for (const _issue of warnings) {
  }
}

process.exit(errors.length > 0 ? 1 : 0)
