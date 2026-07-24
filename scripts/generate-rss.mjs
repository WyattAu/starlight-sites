#!/usr/bin/env node
/**
 * Generate RSS feeds for all sites that don't have one.
 * Reads site config from astro.config.mjs and content from src/content/docs/.
 *
 * Usage: node generate-rss.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, basename, relative, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const rootDir = join(__dirname, '..')
const sitesDir = join(rootDir, 'sites')

function getSiteConfig(siteDir) {
  const configPath = join(siteDir, 'astro.config.mjs')
  if (!existsSync(configPath)) return null

  const content = readFileSync(configPath, 'utf-8')

  // Extract site URL
  const siteMatch = content.match(/site:\s*['"]([^'"]+)['"]/)
  if (!siteMatch) return null
  const siteUrl = siteMatch[1]

  // Extract title from starlight config
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
  const title = titleMatch ? titleMatch[1] : basename(siteDir)

  // Extract description
  const descMatch = content.match(/description:\s*['"]([\s\S]*?)['"]/)
  const description = descMatch ? descMatch[1].trim() : `${title} study notes and revision guide.`

  return { siteUrl, title, description }
}

function getAllPages(contentDir, baseUrl) {
  const pages = []

  function walk(dir) {
    if (!existsSync(dir)) return
    const entries = readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (/\.(md|mdx)$/.test(entry.name)) {
        const relPath = relative(contentDir, fullPath)
        // Convert file path to URL slug
        let slug = relPath
          .replace(/\.(md|mdx)$/, '')
          .replace(/\/index$/, '')
          .replace(/^\d+[-_]?/, '')  // Remove leading number prefix
          .replace(/\d+[-_]/g, '')   // Remove other number prefixes in path segments

        // Build URL
        const url = `${baseUrl}/${slug}`

        // Parse frontmatter
        const fileContent = readFileSync(fullPath, 'utf-8')
        const fmMatch = fileContent.match(/^---\n([\s\S]*?)\n---/)
        let title = ''
        let description = ''
        let date = ''

        if (fmMatch) {
          const fm = fmMatch[1]
          const titleMatch = fm.match(/^title:\s*['"]?([^'"\n]+)['"]?/m)
          const descMatch = fm.match(/^description:\s*['"]([\s\S]*?)['"]/m)
          const dateMatch = fm.match(/^date:\s*['"]?([^'"\n]+)['"]?/m)

          if (titleMatch) title = titleMatch[1].trim()
          if (descMatch) description = descMatch[1].trim()
          if (dateMatch) date = dateMatch[1].trim()
        }

        // Fallback title from filename
        if (!title) {
          title = basename(fullPath, extname(fullPath))
            .replace(/^\d+[-_]?/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
        }

        // Skip index pages that are just landing pages (optional, but matches pattern)
        // Actually, include them - the existing RSS feeds include section pages

        pages.push({
          title,
          description: description || `${title} study notes.`,
          url,
          date,
          slug,
        })
      }
    }
  }

  walk(contentDir)
  return pages
}

function formatDateRFC822(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${days[date.getUTCDay()]}, ${String(date.getUTCDate()).padStart(2, '0')} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()} ${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')} +0000`
}

function generateRSS(config, pages, baseUrl) {
  const today = new Date('2026-07-24T00:00:00Z')

  // Sort pages by date descending if available, otherwise use file order
  const sortedPages = [...pages].sort((a, b) => {
    if (a.date && b.date) return new Date(b.date) - new Date(a.date)
    if (a.date) return -1
    if (b.date) return 1
    return 0
  })

  // Take up to 15 pages (matching existing RSS feeds)
  const items = sortedPages.slice(0, 15)

  const itemsXml = items.map((page, i) => {
    const pubDate = new Date(today)
    pubDate.setUTCDate(pubDate.getUTCDate() - i)
    return `    <item>
      <title>${escapeXml(page.title)}</title>
      <link>${page.url}</link>
      <description>${escapeXml(page.description)}</description>
      <pubDate>${formatDateRFC822(pubDate)}</pubDate>
      <guid>${page.url}</guid>
    </item>`
  }).join('\n')

  // Add homepage as last item
  const homeDate = new Date(today)
  homeDate.setUTCDate(homeDate.getUTCDate() - items.length)
  const homeItem = `    <item>
      <title>${escapeXml(config.title)} — Complete Guide</title>
      <link>${baseUrl}</link>
      <description>${escapeXml(config.description)}</description>
      <pubDate>${formatDateRFC822(homeDate)}</pubDate>
      <guid>${baseUrl}</guid>
    </item>`

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wyatt's Notes — ${escapeXml(config.title)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(config.description)}</description>
    <language>en</language>
    <lastBuildDate>${formatDateRFC822(today)}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.svg</url>
      <title>Wyatt's Notes — ${escapeXml(config.title)}</title>
      <link>${baseUrl}</link>
    </image>
${itemsXml}
${homeItem}
  </channel>
</rss>
`
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Main
const siteEntries = readdirSync(sitesDir, { withFileTypes: true })
let generated = 0
let skipped = 0

for (const entry of siteEntries) {
  if (!entry.isDirectory()) continue
  const siteDir = join(sitesDir, entry.name)
  const rssPath = join(siteDir, 'public', 'rss.xml')

  if (existsSync(rssPath)) {
    skipped++
    continue
  }

  const config = getSiteConfig(siteDir)
  if (!config) {
    console.log(`SKIP: ${entry.name} (no valid config)`)
    continue
  }

  const contentDir = join(siteDir, 'src', 'content', 'docs')
  if (!existsSync(contentDir)) {
    console.log(`SKIP: ${entry.name} (no content dir)`)
    continue
  }

  const pages = getAllPages(contentDir, config.siteUrl)
  if (pages.length === 0) {
    console.log(`SKIP: ${entry.name} (no pages)`)
    continue
  }

  const rss = generateRSS(config, pages, config.siteUrl)

  // Ensure public dir exists
  const publicDir = join(siteDir, 'public')
  if (!existsSync(publicDir)) {
    const { mkdirSync } = await import('node:fs')
    mkdirSync(publicDir, { recursive: true })
  }

  writeFileSync(rssPath, rss)
  console.log(`GENERATED: ${entry.name} (${pages.length} pages)`)
  generated++
}

console.log(`\nDone: ${generated} generated, ${skipped} already had RSS`)
