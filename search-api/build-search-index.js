#!/usr/bin/env node

// build-search-index.js (fast version)
// Fetches sitemaps + minimal page data for search index
// Optimized for CI: parallel fetches, minimal downloads
//
// ADR-011: the site list is derived from sites/ via scripts/lib/sites.cjs.
// The previous hand-copied 9-site list (3 of them defunct) silently limited
// cross-site search to 6 live sites for months.

const fs = require('node:fs')
const path = require('node:path')

const { astroSites, siteMeta } = require('../scripts/lib/sites.cjs')

const SITES = astroSites().map(slug => {
  const meta = siteMeta()[slug]
  return { id: slug, url: meta.url, name: meta.name }
})

async function fetchWithTimeout(url, timeout = 10000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const response = await fetch(url, { signal: controller.signal })
    clearTimeout(id)
    return response
  } catch (err) {
    clearTimeout(id)
    throw err
  }
}

async function fetchSiteIndex(site) {
  try {
    const sitemapResp = await fetchWithTimeout(`${site.url}/sitemap-0.xml`)
    if (!sitemapResp.ok) {
      return []
    }

    const sitemapText = await sitemapResp.text()
    const urlRegex = /<loc>([^<]+)<\/loc>/g
    const urls = []
    let match
    while ((match = urlRegex.exec(sitemapText)) !== null) {
      urls.push(match[1])
    }

    // Fetch each page but only read first 5KB (enough for title + meta)
    const entries = []
    const batchSize = 20

    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize)
      const results = await Promise.all(
        batch.map(async url => {
          try {
            const resp = await fetchWithTimeout(url, 8000)
            if (!resp.ok) return null

            // Read first 30KB for metadata + body content
            const reader = resp.body.getReader()
            const chunks = []
            let totalBytes = 0
            while (totalBytes < 30000) {
              const { done, value } = await reader.read()
              if (done) break
              chunks.push(value)
              totalBytes += value.length
            }
            reader.cancel()

            const text = new TextDecoder().decode(Buffer.concat(chunks))

            // Extract title
            const titleMatch = text.match(/<title[^>]*>([^<]+)<\/title>/i)
            let title = titleMatch ? titleMatch[1].trim() : ''

            // Clean title (remove site suffix)
            title = title.replace(/\s*[|–—]\s*Wyatt'?s?\s*Notes.*$/i, '').trim()

            // Extract meta description
            const descMatch = text.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
            const description = descMatch ? descMatch[1].trim() : ''

            // Extract first heading
            const h1Match = text.match(/<h1[^>]*>([^<]+)<\/h1>/i)
            const heading = h1Match ? h1Match[1].trim() : ''

            // Extract visible body text
            let content = ''
            const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
            if (bodyMatch) {
              content = bodyMatch[1]
                .replace(/<\/?[^>]+(>|$)/g, '') // strip HTML tags
                .replace(/&[^;]+;/g, ' ') // decode entities
                .replace(/\s+/g, ' ') // collapse whitespace
                .trim()
                .slice(0, 2000)
            }

            if (title) {
              return {
                url,
                title,
                description,
                heading,
                content,
                site: site.id,
              }
            }
            return null
          } catch {
            return null
          }
        }),
      )

      entries.push(...results.filter(Boolean))
    }

    return entries
  } catch (_err) {
    return []
  }
}

async function buildIndex() {
  const startTime = Date.now()

  // Fetch all site indexes in parallel
  const results = await Promise.all(SITES.map(fetchSiteIndex))

  // Merge
  const allEntries = results.flat()
  const _elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  // Stats per site
  for (const site of SITES) {
    const _count = allEntries.filter(e => e.site === site.id).length
  }

  // Create metadata
  const metadata = {
    version: `v${Date.now()}`,
    lastUpdated: new Date().toISOString(),
    siteCount: SITES.length,
    totalEntries: allEntries.length,
    sites: SITES.map(s => ({ id: s.id, name: s.name, url: s.url })),
  }

  // Write index
  const index = { metadata, entries: allEntries }
  const outputPath = path.join(__dirname, 'merged-index.json')
  fs.writeFileSync(outputPath, JSON.stringify(index))

  // Write ESM module for Worker static fallback
  const jsPath = path.join(__dirname, 'merged-index.js')
  fs.writeFileSync(jsPath, `export default ${JSON.stringify(index)}`)

  // Write metadata
  const metadataPath = path.join(__dirname, 'metadata.json')
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

  return index
}

if (require.main === module) {
  buildIndex().catch(_err => {
    process.exit(1)
  })
}

module.exports = { buildIndex }
