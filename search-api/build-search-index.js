#!/usr/bin/env node

// build-search-index.js (fast version)
// Fetches sitemaps + minimal page data for search index
// Optimized for CI: parallel fetches, minimal downloads

const fs = require('node:fs')
const path = require('node:path')

const SITES = [
  { id: 'dse', url: 'https://dse.wyattau.com', name: 'DSE' },
  { id: 'ib', url: 'https://ib.wyattau.com', name: 'IB' },
  { id: 'alevel', url: 'https://alevel.wyattau.com', name: 'A-Level' },
  { id: 'university', url: 'https://university.wyattau.com', name: 'University' },
  { id: 'qualifications', url: 'https://qualifications.wyattau.com', name: 'Qualifications' },
  { id: 'programming', url: 'https://programming.wyattau.com', name: 'Programming' },
  { id: 'infrastructure', url: 'https://infrastructure.wyattau.com', name: 'Infrastructure' },
  { id: 'languages', url: 'https://languages.wyattau.com', name: 'Languages' },
  { id: 'tools', url: 'https://tools.wyattau.com', name: 'Tools' },
]

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

            // Only read first 5KB
            const reader = resp.body.getReader()
            const chunks = []
            let totalBytes = 0
            while (totalBytes < 5000) {
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

            if (title) {
              return {
                url,
                title,
                description,
                heading,
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
