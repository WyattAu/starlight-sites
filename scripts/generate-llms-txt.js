#!/usr/bin/env node

/**
 * generate-llms-txt.js -- llms.txt generation for the whole network.
 *
 * llms.txt is the emerging convention for AI-crawler-facing site indexes
 * (a curated markdown map of a site's content). This script generates:
 *
 *   sites/main/public/llms.txt       network index: every subject site
 *   sites/<site>/public/llms.txt     per-site page map, grouped by section
 *
 * Page titles/descriptions come from content frontmatter. Regenerate
 * after content changes; `--check` exits 1 when the committed files are
 * stale (used by the deploy gate).
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const CHECK = process.argv.includes('--check')

const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.meta.json'), 'utf8'))
const { domainSuffix } = meta.defaults

// ── frontmatter scraping (no YAML dependency; titles/descriptions only) ──

function frontmatter(text) {
  if (!text.startsWith('---')) return {}
  const end = text.indexOf('\n---', 3)
  if (end === -1) return {}
  const fm = text.slice(4, end)
  const out = {}
  let key = null
  for (const line of fm.split('\n')) {
    const top = line.match(/^([A-Za-z_-]+):\s*(.*)$/)
    if (top) {
      key = top[1].toLowerCase()
      let v = top[2].trim()
      v = v.replace(/^["']|["']$/g, '')
      if (v) out[key] = v
      else out[key] = ''
      continue
    }
    // continuation lines (folded scalars) -- append to the last key once
    if (key && /^\s+\S/.test(line) && typeof out[key] === 'string' && out[key] !== '' &&
        !out[key].endsWith('.') && !/^\s*-\s/.test(line)) {
      out[key] += ' ' + line.trim()
    }
  }
  return out
}

function titleFromFilename(name) {
  return name
    .replace(/\.mdx?$/, '')
    .replace(/^\d+[_-]/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function siteUrl(slug) {
  return `https://${slug}${domainSuffix}`
}

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMd(full)
    else if (/\.mdx?$/.test(entry.name)) yield full
  }
}

// ── per-site page collection ──────────────────────────────────────────────

function sitePages(slug) {
  const docs = path.join(ROOT, 'sites', slug, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) return []
  const pages = []
  for (const file of walkMd(docs)) {
    const rel = path.relative(docs, file).split(path.sep).join('/')
    if (rel === '404.md' || rel === '404.mdx') continue
    const text = fs.readFileSync(file, 'utf8')
    const fm = frontmatter(text)
    const isIndex = /^index\.mdx?$/.test(path.basename(file))
    const dirPart = path.dirname(rel)
    const urlPath = isIndex
      ? (dirPart === '.' ? '/' : `/${dirPart}/`)
      : `/${rel.replace(/\.mdx?$/, '')}/`
    const title = fm.title || titleFromFilename(path.basename(file, path.extname(file)))
    const description = fm.description || ''
    const section = dirPart === '.' ? 'General' : dirPart.split('/')[0]
    pages.push({ urlPath, title, description, section })
  }
  // stable order: section, then title
  pages.sort((a, b) => a.section.localeCompare(b.section) || a.title.localeCompare(b.title))
  return pages
}

// ── generation ────────────────────────────────────────────────────────────

let stale = 0
let written = 0

function emit(file, content) {
  if (CHECK) {
    let existing = null
    try {
      existing = fs.readFileSync(path.join(ROOT, file), 'utf8')
    } catch {}
    if (existing !== content) {
      console.error(`stale: ${file}`)
      stale++
    }
    return
  }
  const abs = path.join(ROOT, file)
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  fs.writeFileSync(abs, content)
  written++
}

// Per-site llms.txt
for (const slug of Object.keys(meta.sites)) {
  const info = meta.sites[slug]
  const url = siteUrl(slug)
  const pages = sitePages(slug)
  const lines = [`# ${info.name} — Wyatt's Notes`, '']
  lines.push(`> Free, open-access study notes. Part of the Wyatt's Notes network at https://wyattsnotes.wyattau.com`)
  lines.push('')
  const siteIndex = pages.find(p => p.urlPath === '/')
  if (siteIndex && siteIndex.description) {
    lines.push(siteIndex.description)
    lines.push('')
  }
  lines.push('All pages are open-access, ad-free, and licensed under AGPLv3.')
  lines.push('')

  const sections = [...new Set(pages.map(p => p.section))].sort()
  for (const section of sections) {
    lines.push(`## ${section === 'General' ? 'Overview' : section.replace(/^\d+[_-]/, '').replace(/\b\w/g, c => c.toUpperCase())}`)
    lines.push('')
    for (const p of pages.filter(p => p.section === section)) {
      const u = p.urlPath === '/' ? `${url}/` : `${url}${p.urlPath}`
      lines.push(`- [${p.title}](${u})${p.description ? `: ${p.description}` : ''}`)
    }
    lines.push('')
  }
  emit(`sites/${slug}/public/llms.txt`, lines.join('\n'))
}

// Network root llms.txt (landing site)
const main = []
main.push("# Wyatt's Notes — Free Study Notes Network")
main.push('')
main.push('> Rigorous, exam-aligned study notes for IB, A-Level, GCSE, AP, DSE, and ' +
  'university STEM plus programming languages and infrastructure topics. ' +
  '2,860+ pages across 45 subject sites. Open-access, ad-free, no accounts, AGPLv3.')
main.push('')
main.push('Each site below exposes its own `/llms.txt` page index.')
main.push('')
main.push('## Subject Sites')
main.push('')
for (const [slug, info] of Object.entries(meta.sites)) {
  main.push(`- [${info.name}](${siteUrl(slug)}/): ${siteUrl(slug)}/llms.txt`)
}
main.push('')
emit('sites/main/public/llms.txt', main.join('\n'))

if (CHECK) {
  if (stale) {
    console.error(`Found ${stale} stale llms.txt file(s) -- run "node scripts/generate-llms-txt.js" to refresh.`)
    process.exit(1)
  }
  console.log('All llms.txt files are up to date.')
} else {
  console.log(`Generated ${written + 1} llms.txt files (45 site indexes + network root).`)
}
