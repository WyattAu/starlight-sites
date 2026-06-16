#!/usr/bin/env node
/**
 * Add meta descriptions and performance headers to all site configs.
 * Run: node scripts/add-seo-headers.js
 */

const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

const SITE_DESCRIPTIONS = {
  dse: 'Hong Kong DSE revision notes with worked examples and practice problems for Mathematics, Physics, Chemistry, Biology, and ICT.',
  ib: 'International Baccalaureate Diploma Programme notes aligned to the IB curriculum framework for Mathematics, Sciences, and Humanities.',
  alevel:
    'UK A-Level revision notes covering AQA, OCR, and Edexcel exam boards with detailed derivations and worked examples.',
  university:
    'Rigorous, proof-based undergraduate STEM notes covering Linear Algebra, Calculus, Classical Mechanics, and Electromagnetism.',
  qualifications:
    'GCSE, AP, Scottish Highers, Irish Leaving Certificate, and other qualification revision notes with exam-style practice.',
  programming:
    'Deep C++ systems programming notes covering ownership, RAII, templates, concurrency, and build systems.',
  infrastructure:
    'Server administration, databases, networking, security, and system tuning reference materials.',
  languages:
    'Comparative programming language notes covering syntax, paradigms, type systems, and concurrency models.',
  tools:
    'Algorithms, data structures, version control, licensing, and machine learning fundamentals.',
}

// Performance headers to add via Starlight head config
const _PERFORMANCE_HEADERS = [
  // DNS prefetch for external resources
  { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' } },
  { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' } },
]

Object.entries(SITE_DESCRIPTIONS).forEach(([site, description]) => {
  const configPath = path.join(SITES_DIR, site, 'astro.config.mjs')
  if (!fs.existsSync(configPath)) {
    return
  }

  let content = fs.readFileSync(configPath, 'utf8')

  // Add description to starlight config if not present
  if (!content.includes('description:')) {
    // Add description after title
    content = content.replace(
      /title:\s*"[^"]*"/,
      match => `${match},\n      description: "${description}"`,
    )
  } else {
  }

  // Add dns-prefetch if not present
  if (!content.includes('dns-prefetch')) {
    content = content.replace(
      /head:\s*\[/,
      `head: [\n        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' } },\n        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' } },`,
    )
  }

  fs.writeFileSync(configPath, content)
})
