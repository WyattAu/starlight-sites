#!/usr/bin/env node
/**
 * No-emoji linter.
 *
 * Enforces a strict no-emoji policy across code, configuration, and
 * repository-level documentation. Emoji and pictographic symbols are
 * prohibited in these surfaces because they (a) render inconsistently across
 * terminals and accessibility tooling, (b) inflate byte size without carrying
 * semantics, and (c) violate the project's professional, rigorous style.
 *
 * Scope
 * -----
 * ERROR (blocks commit / CI):
 *   - Root documentation:      *.md, *.mdx at repo root
 *   - Code:                    scripts/, shared/, search-api/, tests/, sites/main/
 *   - Configuration:           *.yml, *.yaml, *.json, *.toml, *.config.mjs, *.html
 *
 * EXCLUDED (not scanned):
 *   - Content pages under sites/ ... /src/content/ (Unicode code examples and
 *     typographic answer markers such as U+2713/U+2717 are pedagogically
 *     required; see ADR-004).
 *   - node_modules/, dist/, .astro/, .git/, build artifacts.
 *
 * Unicode ranges flagged (only pictograph/emoji planes that render as color
 * glyphs in browsers). Typographic arrows (U+2190-U+21FF), geometric shapes
 * (U+25A0-U+25FF) and enclosed alphanumerics are intentionally OUT of scope
 * because they are legitimate mathematical/chemical/typographic notation:
 *   U+2600-U+26FF  Miscellaneous Symbols  (sun, heart, lightning, warning, ...)
 *   U+2700-U+27BF  Dingbats              (check/cross marks, scissors, ...)
 *   U+1F000-U+1F1FF  Enclosed/flags
 *   U+1F300-U+1FAFF  Symbols & Pictographs / extended
 *
 * Exit code: 1 if any ERROR-range violation is found, 0 otherwise.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

// Files exempted entirely (relative to ROOT) because they intentionally
// document or test emoji handling.
const EXEMPT_FILES = new Set([
  'scripts/lint-no-emoji.js', // this file literally contains emoji ranges as data
])

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.astro',
  '.git',
  '.wrangler',
  '.husky',
  'built',
  'playwright-report',
  'test-results',
])

const INCLUDE_EXT = new Set([
  '.js',
  '.mjs',
  '.cjs',
  '.ts',
  '.tsx',
  '.astro',
  '.yml',
  '.yaml',
  '.json',
  '.toml',
  '.html',
  '.md',
  '.mdx',
])

// A file is in ERROR scope if it is NOT a content page. Content pages live
// under sites/<site>/src/content/. Anything else with an included extension
// is enforced.
function isErrorScope(absPath) {
  const rel = path.relative(ROOT, absPath)
  const normalized = rel.split(path.sep).join('/')
  // Content pages: excluded regardless of extension.
  if (/\/src\/content\//.test(`/${normalized}/`)) return false
  return true
}

// Single emoji-detection regex. The `u` flag enables code-point semantics so
// that astral-plane ranges (U+1F000+) are matched as surrogate pairs rather
// than as malformed 4-digit \u escapes. Ranges cover the symbol/emoji planes
// listed in the header.
const EMOJI_RE = /[\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F1FF}\u{1F300}-\u{1FAFF}]/u

const violations = []

function walk(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    const rel = path.relative(ROOT, full)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name)
      if (!INCLUDE_EXT.has(ext)) continue
      if (EXEMPT_FILES.has(rel.split(path.sep).join('/'))) continue
      if (!isErrorScope(full)) continue
      scanFile(full, rel)
    }
  }
}

function scanFile(absPath, rel) {
  let content
  try {
    content = fs.readFileSync(absPath, 'utf8')
  } catch {
    return
  }
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const m = EMOJI_RE.exec(line)
    if (m) {
      const codePoint = m[0].codePointAt(0)
      violations.push({
        file: rel,
        line: i + 1,
        column: m.index + 1,
        char: m[0],
        codePoint: `U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}`,
      })
    }
  }
}

function main() {
  walk(ROOT)

  if (violations.length === 0) {
    return 0
  }

  for (const v of violations) {
    console.log(`  ${v.file}:${v.line}:${v.column}  ${v.codePoint} (${v.char})`)
  }

  console.log(`\n  ${violations.length} emoji violation(s) found.`)

  return 1
}

if (require.main === module) {
  process.exit(main())
}

module.exports = { EMOJI_RE, isErrorScope, main }
