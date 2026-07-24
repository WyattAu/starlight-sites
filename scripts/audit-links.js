#!/usr/bin/env node
// Audit internal cross-linking across all sites and generate a report.
//
// Run: node scripts/audit-links.js
// Output: LINK_AUDIT_REPORT.md

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const REPORT_PATH = path.join(ROOT, 'LINK_AUDIT_REPORT.md')

const TARGET_EXTENSIONS = ['.md', '.mdx', '/index.md', '/index.mdx']
const ASSET_RE = /\.(?:css|js|png|jpe?g|svg|ico|webp|gif|avif|woff2?|ttf|otf|mp4|webm|pdf|zip)$/

// Known site subdomains for cross-site link detection
const SITE_SLUGS = fs.readdirSync(SITES_DIR).filter(f => {
  try {
    return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && f !== 'node_modules'
  } catch {
    return false
  }
})

const SITE_DOMAINS = new Set(SITE_SLUGS.map(s => `${s}.wyattau.com`))
SITE_DOMAINS.add('wyattsnotes.wyattau.com')
SITE_DOMAINS.add('wyattau.com')

/**
 * Strip frontmatter from content.
 */
function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n?/, '')
}

/**
 * Extract all links from markdown/MDX content.
 * Returns array of { url, line, source, type } objects where type is
 * 'internal' for relative/absolute site paths or 'cross-site' for
 * https://<known-subdomain> links.
 */
function extractLinks(content, filePath) {
  const links = []
  const lines = content.split('\n')
  const siteId = getSiteId(filePath)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineNum = i + 1

    // Markdown links: [text](url) — exclude images ![...](...)
    const mdRegex = /(?<!!)\[([^\]]*)\]\(([^)]+)\)/g
    let mdMatch
    while ((mdMatch = mdRegex.exec(line)) !== null) {
      const url = mdMatch[2].trim()
      const kind = classifyUrl(url)
      if (kind) {
        links.push({ url, line: lineNum, source: filePath, siteId, type: kind })
      }
    }

    // HTML links: <a href="url">
    const htmlRegex = /href="([^"]+)"/g
    let htmlMatch
    while ((htmlMatch = htmlRegex.exec(line)) !== null) {
      const url = htmlMatch[1].trim()
      const kind = classifyUrl(url)
      if (kind) {
        links.push({ url, line: lineNum, source: filePath, siteId, type: kind })
      }
    }
  }

  return links
}

/**
 * Classify a URL as 'internal', 'cross-site', or null (uninteresting).
 */
function classifyUrl(url) {
  if (url.startsWith('#')) return null
  if (url.startsWith('mailto:')) return null
  if (url.startsWith('javascript:')) return null
  if (ASSET_RE.test(url)) return null
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return isCrossSiteLink(url) ? 'cross-site' : null
  }
  return 'internal'
}

/**
 * Classify a link as 'relative', 'absolute', or 'cross-site'.
 */
function classifyLink(url) {
  if (url.startsWith('/')) return 'absolute'
  return 'relative'
}

/**
 * Check if a URL points to another site's subdomain.
 */
function isCrossSiteLink(url) {
  try {
    const parsed = new URL(url)
    return SITE_DOMAINS.has(parsed.hostname)
  } catch {
    return false
  }
}

/**
 * Get site ID from file path.
 */
function getSiteId(filePath) {
  const rel = path.relative(SITES_DIR, filePath)
  return rel.split(path.sep)[0]
}

/**
 * Resolve a relative link to a candidate filesystem path.
 */
function resolveLinkTarget(url, siteId, fromFile) {
  const normalized = normalizeLink(url)
  const fromDir = path.dirname(fromFile)

  if (normalized.startsWith('/')) {
    // Absolute path within site: /section/page
    return path.join(SITES_DIR, siteId, 'src', 'content', 'docs', normalized.slice(1))
  }
  if (normalized === '') {
    return path.join(SITES_DIR, siteId, 'src', 'content', 'docs', 'index')
  }
  return path.join(fromDir, normalized)
}

/**
 * Normalize a link: strip fragments, query strings, trailing slashes.
 */
function normalizeLink(url) {
  return url.replace(/[#?].*$/, '').replace(/\/+$/, '')
}

/**
 * Test if a resolved candidate path corresponds to an existing content file.
 */
function targetExists(targetPath) {
  for (const ext of TARGET_EXTENSIONS) {
    if (fs.existsSync(targetPath + ext)) return true
  }
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) return true
  return false
}

/**
 * Walk a directory recursively and return all .md/.mdx files.
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
 * Strip markdown/HTML syntax from a line to get display text.
 */
function stripSyntax(text) {
  return text
    .replace(/<[^>]+>/g, '')           // HTML tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[*_`~]+/g, '')           // bold/italic/code markers
    .replace(/^#+\s*/, '')             // headings
    .replace(/^\s*[-*>]\s*/, '')       // list/blockquote markers
    .trim()
}

/**
 * Get a short description of a page from its frontmatter.
 */
function getPageTitle(content) {
  const match = content.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
  return match ? match[1].trim() : null
}

/**
 * Main audit function.
 */
function audit() {
  const results = {
    totalFiles: 0,
    totalLinks: 0,
    orphanPages: [],       // files with zero internal links
    thinPages: [],         // files with 1-2 internal links
    crossSiteLinks: [],    // links to other subdomains
    brokenLinks: [],       // relative/absolute links that don't resolve
    siteStats: {},         // per-site statistics
    allPages: [],          // all scanned pages with their link counts
  }

  // Collect all content files
  const allFiles = []
  for (const site of SITE_SLUGS) {
    const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
    if (fs.existsSync(contentDir)) {
      const files = walkContent(contentDir)
      allFiles.push(...files)
    }
  }

  results.totalFiles = allFiles.length

  // Build a set of all known page paths for absolute link resolution
  const knownPages = new Set()
  for (const file of allFiles) {
    const siteId = getSiteId(file)
    const rel = path.relative(path.join(SITES_DIR, siteId, 'src', 'content', 'docs'), file)
    const noExt = rel.replace(/\.(md|mdx)$/, '')
    const normalized = noExt.replace(/\/index$/, '').replace(/index$/, '') || ''
    knownPages.add(`${siteId}:${normalized}`)
  }

  // Process each file
  for (const file of allFiles) {
    const siteId = getSiteId(file)
    const content = fs.readFileSync(file, 'utf8')
    const body = stripFrontmatter(content)
    const links = extractLinks(content, file)
    const title = getPageTitle(content) || path.basename(file, path.extname(file))

    const relPath = path.relative(ROOT, file)
    const pageCount = { file: relPath, site: siteId, title, links: links.length, internalLinks: [] }

    // Initialize site stats
    if (!results.siteStats[siteId]) {
      results.siteStats[siteId] = { files: 0, links: 0, orphans: 0, thin: 0, broken: 0 }
    }
    results.siteStats[siteId].files++
    results.siteStats[siteId].links += links.length

    for (const link of links) {
      if (link.type === 'cross-site') {
        let targetSite = null
        try {
          const parsed = new URL(link.url)
          const parts = parsed.hostname.split('.')
          if (parts.length >= 3) {
            targetSite = parts[0]
          }
        } catch { /* ignore */ }

        results.crossSiteLinks.push({
          from: relPath,
          fromSite: siteId,
          to: link.url,
          toSite: targetSite,
          line: link.line,
        })
        continue
      }

      // Resolve relative/absolute internal link
      const targetPath = resolveLinkTarget(link.url, siteId, file)
      if (!targetExists(targetPath)) {
        results.brokenLinks.push({
          file: relPath,
          site: siteId,
          link: link.url,
          line: link.line,
          resolved: path.relative(ROOT, targetPath),
        })
        results.siteStats[siteId].broken++
      } else {
        // Track what this page links to
        const targetRel = path.relative(path.join(SITES_DIR, siteId, 'src', 'content', 'docs'), targetPath)
        pageCount.internalLinks.push(targetRel)
      }
    }

    // Classify page by internal link count (cross-site links don't count)
    const internalCount = links.filter(l => l.type === 'internal').length
    if (internalCount === 0) {
      results.orphanPages.push(pageCount)
      results.siteStats[siteId].orphans++
    } else if (internalCount < 3) {
      results.thinPages.push(pageCount)
      results.siteStats[siteId].thin++
    }

    results.allPages.push(pageCount)
  }

  results.totalLinks = results.allPages.reduce((sum, p) => sum + p.links, 0)

  return results
}

/**
 * Generate the markdown report.
 */
function generateReport(results) {
  const lines = []
  const now = new Date().toISOString().split('T')[0]

  lines.push('# Link Audit Report')
  lines.push('')
  lines.push(`Generated: ${now}`)
  lines.push('')

  // Summary
  lines.push('## Summary Statistics')
  lines.push('')
  lines.push(`| Metric | Count |`)
  lines.push(`|--------|-------|`)
  lines.push(`| Sites scanned | ${SITE_SLUGS.length} |`)
  lines.push(`| Total pages | ${results.totalFiles} |`)
  lines.push(`| Total internal links | ${results.totalLinks} |`)
  lines.push(`| Orphan pages (0 links) | ${results.orphanPages.length} |`)
  lines.push(`| Thin-linked pages (<3 links) | ${results.thinPages.length} |`)
  lines.push(`| Cross-site links | ${results.crossSiteLinks.length} |`)
  lines.push(`| Broken links | ${results.brokenLinks.length} |`)
  lines.push('')

  // Per-site breakdown
  lines.push('## Per-Site Breakdown')
  lines.push('')
  lines.push(`| Site | Pages | Links | Orphans | Thin | Broken |`)
  lines.push(`|------|-------|-------|---------|------|--------|`)
  const sortedSites = Object.entries(results.siteStats).sort((a, b) => b[1].files - a[1].files)
  for (const [site, stats] of sortedSites) {
    lines.push(`| ${site} | ${stats.files} | ${stats.links} | ${stats.orphans} | ${stats.thin} | ${stats.broken} |`)
  }
  lines.push('')

  // Orphan pages
  lines.push('## Orphan Pages (Zero Internal Links)')
  lines.push('')
  if (results.orphanPages.length === 0) {
    lines.push('No orphan pages found.')
  } else {
    lines.push('These pages have no outgoing internal links to other pages within their site.')
    lines.push('')
    lines.push(`| Site | Page | Title |`)
    lines.push(`|------|------|-------|`)
    const sortedOrphans = results.orphanPages.sort((a, b) => a.site.localeCompare(b.site) || a.file.localeCompare(b.file))
    for (const page of sortedOrphans) {
      const shortPath = page.file.replace(/sites\//, '')
      lines.push(`| ${page.site} | \`${shortPath}\` | ${page.title} |`)
    }
  }
  lines.push('')

  // Thin-linked pages
  lines.push('## Thin-Linked Pages (<3 Internal Links)')
  lines.push('')
  if (results.thinPages.length === 0) {
    lines.push('No thin-linked pages found.')
  } else {
    lines.push('These pages have 1-2 outgoing internal links. Consider adding more cross-references.')
    lines.push('')
    lines.push(`| Site | Page | Links | Title |`)
    lines.push(`|------|------|-------|-------|`)
    const sortedThin = results.thinPages.sort((a, b) => a.site.localeCompare(b.site) || a.links - b.links)
    for (const page of sortedThin) {
      const shortPath = page.file.replace(/sites\//, '')
      lines.push(`| ${page.site} | \`${shortPath}\` | ${page.links} | ${page.title} |`)
    }
  }
  lines.push('')

  // Cross-site link map
  lines.push('## Cross-Site Link Map')
  lines.push('')
  if (results.crossSiteLinks.length === 0) {
    lines.push('No cross-site links found.')
  } else {
    // Build adjacency map
    const adjacency = {}
    for (const link of results.crossSiteLinks) {
      if (!adjacency[link.fromSite]) adjacency[link.fromSite] = {}
      if (!adjacency[link.fromSite][link.toSite]) adjacency[link.fromSite][link.toSite] = 0
      adjacency[link.fromSite][link.toSite]++
    }

    lines.push('### Site-to-Site Connections')
    lines.push('')
    lines.push(`| From Site | To Site | Link Count |`)
    lines.push(`|-----------|---------|------------|`)
    const sortedAdj = Object.entries(adjacency)
      .sort((a, b) => a[0].localeCompare(b[0]))
    for (const [from, targets] of sortedAdj) {
      const sortedTargets = Object.entries(targets).sort((a, b) => a[0].localeCompare(b[0]))
      for (const [to, count] of sortedTargets) {
        lines.push(`| ${from} | ${to} | ${count} |`)
      }
    }
    lines.push('')

    lines.push('### Cross-Site Link Details')
    lines.push('')
    lines.push(`| From | To | Line |`)
    lines.push(`|------|----|----|`)
    const sortedLinks = results.crossSiteLinks.sort((a, b) => a.from.localeCompare(b.from))
    for (const link of sortedLinks.slice(0, 100)) {
      const shortFrom = link.from.replace(/sites\//, '')
      const shortTo = link.to.length > 60 ? link.to.slice(0, 57) + '...' : link.to
      lines.push(`| \`${shortFrom}:${link.line}\` | ${shortTo} | ${link.line} |`)
    }
    if (results.crossSiteLinks.length > 100) {
      lines.push('')
      lines.push(`_... and ${results.crossSiteLinks.length - 100} more cross-site links._`)
    }
  }
  lines.push('')

  // Broken links
  lines.push('## Broken Links')
  lines.push('')
  if (results.brokenLinks.length === 0) {
    lines.push('No broken internal links found.')
  } else {
    lines.push('These relative/absolute links do not resolve to an existing content file.')
    lines.push('')
    lines.push(`| Site | Page | Line | Broken Link | Resolved Path |`)
    lines.push(`|------|------|------|-------------|----------------|`)
    const sortedBroken = results.brokenLinks.sort((a, b) => a.site.localeCompare(b.site) || a.file.localeCompare(b.file))
    for (const link of sortedBroken.slice(0, 100)) {
      const shortFrom = link.file.replace(/sites\//, '')
      lines.push(`| ${link.site} | \`${shortFrom}:${link.line}\` | ${link.line} | \`${link.link}\` | \`${link.resolved}\` |`)
    }
    if (results.brokenLinks.length > 100) {
      lines.push('')
      lines.push(`_... and ${results.brokenLinks.length - 100} more broken links._`)
    }
  }
  lines.push('')

  return lines.join('\n')
}

// --- Main ---
if (require.main === module) {
  console.log('Auditing internal cross-linking across all sites...')
  const results = audit()
  const report = generateReport(results)
  fs.writeFileSync(REPORT_PATH, report, 'utf8')
  console.log(`Report written to ${path.relative(ROOT, REPORT_PATH)}`)
  console.log(`  ${results.totalFiles} pages scanned`)
  console.log(`  ${results.totalLinks} internal links found`)
  console.log(`  ${results.orphanPages.length} orphan pages`)
  console.log(`  ${results.thinPages.length} thin-linked pages`)
  console.log(`  ${results.crossSiteLinks.length} cross-site links`)
  console.log(`  ${results.brokenLinks.length} broken links`)
}

module.exports = { audit, generateReport }
