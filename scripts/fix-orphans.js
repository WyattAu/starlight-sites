#!/usr/bin/env node

// Fix orphan pages by adding "See Also" links to related pages.
//
// Reads LINK_AUDIT_REPORT.md to identify orphan pages (zero outgoing internal links),
// then adds 2-3 "See Also" links at the bottom of each orphan file pointing to
// related pages found via heuristics (same-directory siblings, parent index, similar names).
//
// Run: node scripts/fix-orphans.js [--dry-run]

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const REPORT_PATH = path.join(ROOT, 'LINK_AUDIT_REPORT.md')

const DRY_RUN = process.argv.includes('--dry-run')

const CHANGES = []
const ERRORS = []

function log(msg) {
  process.stdout.write(msg + '\n')
}

function logChange(file, action) {
  const rel = path.relative(ROOT, file)
  CHANGES.push({ file: rel, action })
  log(`  ${DRY_RUN ? '[DRY RUN] ' : ''}${action}: ${rel}`)
}

function logError(file, msg) {
  const rel = path.relative(ROOT, file)
  ERRORS.push({ file: rel, error: msg })
  log(`  ERROR: ${rel} -- ${msg}`)
}

/**
 * Parse orphan pages from LINK_AUDIT_REPORT.md.
 * Returns array of { site, page, title } where page is the relative path from sites/.
 */
function parseOrphanPages() {
  const content = fs.readFileSync(REPORT_PATH, 'utf8')
  const orphans = []

  const lines = content.split('\n')
  let inOrphanSection = false

  for (const line of lines) {
    if (line.startsWith('## Orphan Pages')) {
      inOrphanSection = true
      continue
    }
    if (inOrphanSection && line.startsWith('## ')) {
      break
    }
    if (!inOrphanSection) continue

    // Match table rows: | site | `path` | title |
    const m = line.match(/^\|\s*(\S+)\s*\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|$/)
    if (m) {
      orphans.push({ site: m[1], page: m[2], title: m[3] })
    }
  }

  return orphans
}

/**
 * Check if a file already has a "## See Also" section.
 */
function hasSeeAlso(content) {
  return /^## See Also\b/m.test(content)
}

/**
 * Extract frontmatter title from file content.
 */
function getFrontmatterTitle(content) {
  const m = content.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
  return m ? m[1].trim() : null
}

/**
 * Build a relative link from the orphan page to a target page.
 * Both paths are relative to the same docs root within a site.
 */
function buildRelativeLink(orphanPath, targetPath, targetTitle) {
  const orphanDir = path.dirname(orphanPath)
  let rel = path.relative(orphanDir, targetPath)

  // If target is index.md, link to the directory (with trailing slash for relative links)
  const base = path.basename(targetPath)
  if (base === 'index.md' || base === 'index.mdx') {
    const dir = path.dirname(targetPath)
    rel = path.relative(orphanDir, dir)
  } else {
    // Strip .md/.mdx extension for the link
    rel = rel.replace(/\.(md|mdx)$/, '')
  }

  // Normalize: ensure relative links start with ./
  if (!rel.startsWith('.') && !rel.startsWith('/')) {
    rel = './' + rel
  }

  return `[${targetTitle}](${rel})`
}

/**
 * Find related pages for an orphan page using heuristics.
 * orphanRelPath is the path relative to docsRoot (e.g. "about.md").
 * Returns array of { path, title, score } sorted by score descending.
 */
function findRelatedPages(orphanRelPath, docsRoot) {
  const orphanPath = path.join(docsRoot, orphanRelPath)
  const orphanDir = path.dirname(orphanPath)
  const orphanBase = path.basename(orphanPath).replace(/\.(md|mdx)$/, '')
  const candidates = []

  // Scan all files in the same site for potential siblings
  let siteFiles
  try {
    siteFiles = walkContent(docsRoot)
  } catch {
    return []
  }

  for (const file of siteFiles) {
    if (file === orphanPath) continue

    const relToDocs = path.relative(docsRoot, file)
    const title = getFrontmatterTitle(fs.readFileSync(file, 'utf8'))
    if (!title) continue

    let score = 0

    const fileDir = path.dirname(file)
    const fileBase = path.basename(file).replace(/\.(md|mdx)$/, '')

    // Same directory: high priority
    if (fileDir === orphanDir) {
      score += 10
    }

    // Parent directory index: link up
    const parentDir = path.dirname(orphanDir)
    if (fileDir === parentDir && (fileBase === 'index')) {
      score += 8
    }

    // Sibling directory index (niece/nephew): moderate priority
    if (fileDir.startsWith(orphanDir) && fileBase === 'index') {
      score += 6
    }

    // Similar filename (shared prefix or keyword overlap): moderate priority
    const similarity = filenameSimilarity(orphanBase, fileBase)
    if (similarity > 0.3) {
      score += Math.round(similarity * 5)
    }

    // Diagnostic files tend to link to parent topic
    if (orphanBase.startsWith('diag-') && fileBase === 'index' && fileDir === orphanDir) {
      score += 5
    }

    if (score > 0) {
      candidates.push({ path: relToDocs, title, score })
    }
  }

  // Sort by score descending, then alphabetically for stability
  candidates.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path))

  // Deduplicate: if multiple index files resolve to the same directory, keep only one
  const seenTargets = new Set()
  const deduped = []
  for (const c of candidates) {
    // Resolve the link target: index files link to their directory
    const base = path.basename(c.path)
    let target
    if (base === 'index.md' || base === 'index.mdx') {
      target = path.dirname(c.path)
    } else {
      target = c.path
    }
    if (seenTargets.has(target)) continue
    seenTargets.add(target)
    deduped.push(c)
  }

  return deduped
}

/**
 * Simple filename similarity based on shared words.
 */
function filenameSimilarity(a, b) {
  const wordsA = new Set(a.toLowerCase().split(/[-_\d]+/).filter(w => w.length > 2))
  const wordsB = new Set(b.toLowerCase().split(/[-_\d]+/).filter(w => w.length > 2))
  if (wordsA.size === 0 || wordsB.size === 0) return 0

  let shared = 0
  for (const w of wordsA) {
    if (wordsB.has(w)) shared++
  }
  return shared / Math.max(wordsA.size, wordsB.size)
}

/**
 * Walk a directory and return all .md/.mdx files.
 */
function walkContent(dir) {
  if (!fs.existsSync(dir)) return []
  const files = []
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)
    const stat = fs.statSync(full)
    if (stat.isDirectory() && entry !== 'node_modules' && entry !== '.astro' && entry !== 'dist') {
      files.push(...walkContent(full))
    } else if (stat.isFile() && (entry.endsWith('.md') || entry.endsWith('.mdx'))) {
      files.push(full)
    }
  }
  return files
}

/**
 * Append a "## See Also" section to the file content.
 */
function addSeeAlsoSection(content, links) {
  const lines = links.map(link => `- ${link}`).join('\n')
  // Ensure content ends with a newline before adding
  const trimmed = content.replace(/\s+$/, '')
  return trimmed + '\n\n## See Also\n\n' + lines + '\n'
}

/**
 * Main function.
 */
function main() {
  log('Fix Orphan Pages')
  log('='.repeat(60))

  if (DRY_RUN) {
    log('** DRY RUN MODE -- no files will be modified **\n')
  }

  // Parse orphans from report
  const orphans = parseOrphanPages()
  log(`Found ${orphans.length} orphan pages in LINK_AUDIT_REPORT.md\n`)

  let processed = 0
  let skippedAlreadyHasSeeAlso = 0
  let skippedNoRelated = 0
  let modified = 0

  for (const orphan of orphans) {
    processed++
    const sitePath = path.join(SITES_DIR, orphan.site)
    const docsRoot = path.join(sitePath, 'src', 'content', 'docs')
    // page is relative to sites/ (e.g. "alevel/src/content/docs/about.md")
    // strip the "site/src/content/docs/" prefix to get the path relative to docsRoot
    const orphanRelPath = orphan.page.replace(new RegExp(`^${orphan.site}/src/content/docs/`), '')
    const orphanAbsPath = path.join(docsRoot, orphanRelPath)

    if (!fs.existsSync(orphanAbsPath)) {
      logError(orphanAbsPath, 'File not found')
      continue
    }

    const content = fs.readFileSync(orphanAbsPath, 'utf8')

    if (hasSeeAlso(content)) {
      skippedAlreadyHasSeeAlso++
      continue
    }

    // Find related pages
    const related = findRelatedPages(orphanRelPath, docsRoot)
    const topRelated = related.slice(0, 3)

    if (topRelated.length === 0) {
      skippedNoRelated++
      logChange(orphanAbsPath, 'SKIPPED (no related pages found)')
      continue
    }

    // Build links
    const links = topRelated.map(r => {
      return buildRelativeLink(orphanRelPath, r.path, r.title)
    })

    // Add See Also section
    const newContent = addSeeAlsoSection(content, links)
    logChange(orphanAbsPath, `Adding "See Also" with ${links.length} links`)
    for (const link of links) {
      log(`    -> ${link}`)
    }

    if (!DRY_RUN) {
      fs.writeFileSync(orphanAbsPath, newContent, 'utf8')
    }

    modified++
  }

  // Summary
  log('')
  log('='.repeat(60))
  log('SUMMARY')
  log('='.repeat(60))
  log(`  Orphans processed:     ${processed}`)
  log(`  Modified:              ${modified}`)
  log(`  Skipped (See Also):    ${skippedAlreadyHasSeeAlso}`)
  log(`  Skipped (no related):  ${skippedNoRelated}`)
  log(`  Errors:                ${ERRORS.length}`)
  log('')

  if (DRY_RUN) {
    log('Run without --dry-run to apply changes.')
  }
}

main()
