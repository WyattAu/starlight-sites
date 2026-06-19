#!/usr/bin/env node
// Link validation script - checks for broken internal links.
//
// Exposed as a module so the resolution semantics can be unit-tested
// (regression coverage for the historical trailing-slash false-positive
// bug, where `/foo/` was wrongly reported broken because the resolver
// appended `.md` after the trailing slash instead of normalising it).
//
// Run: node scripts/lint-links.js

const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// File extensions and index variants a content link may resolve to.
// Order is intentionally "exact file first" so the most specific match
// wins; the directory fallback is handled separately.
const TARGET_EXTENSIONS = ['.md', '.mdx', '/index.md', '/index.mdx']

// Asset types that are never treated as content links.
const ASSET_RE = /\.(?:css|js|png|jpe?g|svg|ico|webp|gif|avif|woff2?|ttf|otf|mp4|webm|pdf|zip)$/

/**
 * Extract every internal `href` value from a Markdown/MDX source string.
 *
 * External URLs, fragment-only links, mailto:, and binary asset links are
 * excluded by design: they are either unverifiable from the source tree
 * (external) or refer to generated assets rather than content files.
 *
 * @param {string} content - Source file body.
 * @returns {string[]} List of raw href values.
 */
function extractLinks(content) {
  const links = []
  const regex = /href="([^"]*)"/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const href = match[1]
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue
    if (ASSET_RE.test(href)) continue
    links.push(href)
  }

  return links
}

/**
 * Normalise a raw link for resolution: strip URL fragments and query
 * strings, then drop trailing slashes so `/foo/`, `/foo#bar`, and
 * `/foo?baz` all collapse to the same canonical form.
 *
 * @param {string} link - Raw href value.
 * @returns {string} Normalised link without fragment, query, or trailing slash.
 */
function normalizeLink(link) {
  return link.replace(/[#?].*$/, '').replace(/\/+$/, '')
}

/**
 * Resolve a (normalised) link to a candidate filesystem path inside the
 * given site's content directory.
 *
 * @param {string} normalizedLink - Output of {@link normalizeLink}.
 * @param {string} siteId - Site subdirectory name under `sites/`.
 * @param {string} fromFile - Absolute path of the file containing the link.
 * @returns {string} Absolute candidate path (no extension).
 */
function resolveLinkTarget(normalizedLink, siteId, fromFile) {
  const fromDir = path.dirname(fromFile)
  if (normalizedLink.startsWith('/')) {
    return path.join(SITES_DIR, siteId, 'src', 'content', 'docs', normalizedLink.slice(1))
  }
  if (normalizedLink === '') {
    // Root-relative link to the site index itself.
    return path.join(SITES_DIR, siteId, 'src', 'content', 'docs', 'index')
  }
  return path.join(fromDir, normalizedLink)
}

/**
 * Test whether a resolved candidate path corresponds to an existing
 * content file or content directory.
 *
 * @param {string} targetPath - Candidate path (no extension).
 * @returns {boolean}
 */
function targetExists(targetPath) {
  for (const ext of TARGET_EXTENSIONS) {
    if (fs.existsSync(targetPath + ext)) return true
  }
  // A directory with the exact name is a valid target: its index page
  // would be served.
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) return true
  return false
}

/**
 * Validate every internal link in a single Markdown/MDX file.
 *
 * @param {string} filePath - Absolute path of the file to check.
 * @param {string} siteId - Site subdirectory name under `sites/`.
 * @returns {Array<{file: string, link: string, type: 'ERROR', message: string}>}
 *   Issues found for this file.
 */
function checkFile(filePath, siteId) {
  if (!fs.existsSync(filePath)) return []

  const content = fs.readFileSync(filePath, 'utf8')
  const links = extractLinks(content)
  const relativePath = path.relative(SITES_DIR, filePath)
  const issues = []

  for (const link of links) {
    const normalizedLink = normalizeLink(link)
    const targetPath = resolveLinkTarget(normalizedLink, siteId, filePath)

    if (!targetExists(targetPath)) {
      issues.push({
        file: relativePath,
        link,
        type: 'ERROR',
        message: `Broken link: ${link}`,
      })
    }
  }

  return issues
}

// Walk through all content files in a site directory recursively.
function walkDir(dir, siteId) {
  if (!fs.existsSync(dir)) return []

  const issues = []
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory() && file !== 'node_modules' && file !== '.astro' && file !== 'dist') {
      issues.push(...walkDir(fullPath, siteId))
    } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
      issues.push(...checkFile(fullPath, siteId))
    }
  }
  return issues
}

/**
 * Collect every broken-link issue across all sites. Exported for reuse
 * (e.g. the integration test suite).
 *
 * @returns {Array<{file: string, link: string, type: 'ERROR', message: string}>}
 */
function collectAllIssues() {
  const sites = fs.readdirSync(SITES_DIR).filter(f => {
    return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && f !== 'node_modules'
  })

  const issues = []
  for (const site of sites) {
    const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
    if (fs.existsSync(contentDir)) {
      issues.push(...walkDir(contentDir, site))
    }
  }
  return issues
}

// --- Module exports for unit testing ---
module.exports = {
  extractLinks,
  normalizeLink,
  resolveLinkTarget,
  targetExists,
  checkFile,
  collectAllIssues,
  SITES_DIR,
  TARGET_EXTENSIONS,
}

// --- CLI entry point ---
if (require.main === module) {
  const issues = collectAllIssues()

  if (issues.length > 0) {
    for (const issue of issues.slice(0, 20)) {
      console.log(`  [${issue.type}] ${issue.file}: ${issue.message}`)
    }
    if (issues.length > 20) {
      console.log(`  ... and ${issues.length - 20} more issues`)
    }
    console.log(`\n  ${issues.length} link issue(s) found.`)
  }

  process.exit(issues.length > 0 ? 1 : 0)
}
