#!/usr/bin/env node

/**
 * lint-mdx-parse.js -- MDX parseability gate across all sites.
 *
 * Compiles every .mdx content file with the same core pipeline the sites
 * use (MDX + remark-math) and fails on any syntax error. Catches the
 * corruption classes that previously only surfaced at rollout build time
 * (e.g. the em-dash pass merging JSX spread separators, producing
 * 'Could not parse expression with acorn' failures).
 *
 * Import specifiers are intentionally NOT resolved -- this is a parse
 * gate, not a build.
 *
 * Exit 1 if any file fails to parse.
 */

const fs = require('node:fs')
const path = require('node:path')
const { compile } = require('@mdx-js/mdx')
const remarkMath = require('remark-math').default

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

function* walkMdx(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMdx(full)
    else if (entry.name.endsWith('.mdx')) yield full
  }
}

const files = []
for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(docs)) files.push(...walkMdx(docs))
}

;(async () => {
  const failures = []
  let checked = 0

  for (const file of files) {
    const rel = path.relative(ROOT, file)
    let source
    try {
      source = fs.readFileSync(file, 'utf8')
    } catch {
      continue
    }
    if (!source.trim()) continue
    try {
      await compile(source, {
        remarkPlugins: [remarkMath],
        outputFormat: 'function-body',
      })
      checked++
    } catch (err) {
      const place = err?.position?.start?.line
        ? `:${err.position.start.line}:${err.position.start.column ?? 1}`
        : ''
      failures.push(`${rel}${place} -- ${String(err?.message ?? err).split('\n')[0]}`)
    }
  }

  console.error(`Checked ${checked} MDX files.`)

  if (failures.length) {
    console.error(`Found ${failures.length} unparseable MDX file(s):`)
    for (const f of failures.slice(0, 40)) console.error(`  ${f}`)
    if (failures.length > 40) console.error(`  ...and ${failures.length - 40} more`)
    process.exit(1)
  }
})()
