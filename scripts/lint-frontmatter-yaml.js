#!/usr/bin/env node
/**
 * lint-frontmatter-yaml.js -- every content file's frontmatter must parse.
 *
 * A broken frontmatter is not a content problem, it is a build problem: Astro
 * fails the whole site at content-sync time, so one bad description line takes
 * a zone offline. It shipped once because no gate parsed frontmatter as YAML --
 * the description lint checks the value, not whether the block is valid YAML.
 *
 * This is the same failure mode the display-math gate was built for: a defect
 * that only shows up at build time, on a machine that is not the one that
 * wrote the file.
 */

const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const ROOT = path.join(__dirname, '..')
const SITES = path.join(ROOT, 'sites')

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

/** Parse a frontmatter block with js-yaml, matching Astro's parser. */
function parseFrontmatter(file) {
  const body = fs.readFileSync(file, 'utf8')
  if (!body.startsWith('---')) return { ok: true, skipped: true }
  const end = body.indexOf('\n---', 3)
  if (end === -1) return { ok: false, error: 'frontmatter block never closes' }
  const block = body.slice(3, end)
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'fm-')), 'fm.yaml')
  fs.writeFileSync(tmp, block)
  try {
    execFileSync('bunx', ['js-yaml', tmp], { stdio: ['ignore', 'ignore', 'pipe'] })
    return { ok: true }
  } catch (err) {
    return {
      ok: false,
      error: String(err.stderr || err.message)
        .split('\n')
        .slice(-3)
        .join(' '),
    }
  } finally {
    fs.rmSync(path.dirname(tmp), { recursive: true, force: true })
  }
}

const os = require('node:os')

const files = walk(SITES).filter(
  f =>
    /\.mdx?$/.test(f) && !f.split(path.sep).includes('dist') && !f.split(path.sep).includes('zh'),
)

const bad = []
for (const file of files) {
  const r = parseFrontmatter(file)
  if (!r.ok) bad.push(`${path.relative(ROOT, file)}: ${r.error}`)
}

if (bad.length) {
  console.error(`Found ${bad.length} file(s) with invalid frontmatter YAML:`)
  for (const b of bad.slice(0, 40)) console.error(`  ${b}`)
  if (bad.length > 40) console.error(`  ...and ${bad.length - 40} more`)
  process.exit(1)
}

console.log(`All ${files.length} content files have valid frontmatter YAML.`)
