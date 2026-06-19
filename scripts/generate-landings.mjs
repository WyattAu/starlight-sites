#!/usr/bin/env node

/**
 * Landing Page Generator
 *
 * Reads each site's sidebar config and content structure to generate
 * consistent, functional landing pages with direct topic access.
 *
 * Usage: node scripts/generate-landings.mjs [--dry-run] [--site <name>]
 */

import fs from 'fs'
import path from 'path'

const SITES_DIR = path.resolve('sites')
const DRY_RUN = process.argv.includes('--dry-run')
const ONLY_SITE = process.argv.includes('--site')
  ? process.argv[process.argv.indexOf('--site') + 1]
  : null

// ── Site metadata ──────────────────────────────────────────────────

const SITE_META = {
  alevel: {
    title: 'A-Level Notes',
    tagline:
      'UK A-Level revision notes covering AQA, OCR, and Edexcel exam boards with detailed derivations and worked examples.',
    description:
      'Rigorous A-Level notes with worked examples, practice problems, and exam-style questions.',
    icon: 'pencil',
  },
  dse: {
    title: 'DSE Notes',
    tagline:
      'Hong Kong Diploma of Secondary Education revision notes with worked examples and practice problems aligned to the HKEAA curriculum.',
    description: 'Complete DSE revision notes with worked examples and practice problems.',
    icon: 'book',
  },
  ib: {
    title: 'IB Notes',
    tagline:
      'Comprehensive notes for the IB Diploma Programme covering core and HL/SL subjects with worked examples and practice problems.',
    description: 'IB Diploma Programme notes aligned to the IBO curriculum frameworks.',
    icon: 'globe',
  },
  infrastructure: {
    title: 'Infrastructure Notes',
    tagline:
      'Server administration, databases, networking, and security reference materials for systems engineers.',
    description: 'Infrastructure and systems engineering reference notes.',
    icon: 'server',
  },
  languages: {
    title: 'Programming Languages',
    tagline:
      'Comparative programming language notes covering syntax, paradigms, type systems, and concurrency models.',
    description: 'Comparative programming language notes.',
    icon: 'code',
  },
  programming: {
    title: 'Programming Notes',
    tagline:
      'Deep systems programming notes covering ownership, templates, concurrency, and build systems.',
    description: 'C++ systems programming notes.',
    icon: 'terminal',
  },
  qualifications: {
    title: 'Qualifications Notes',
    tagline:
      'GCSE, AP, Scottish Highers, Irish Leaving Certificate, and other qualification notes.',
    description: 'Multi-qualification revision notes.',
    icon: 'certificate',
  },
  tools: {
    title: 'Developer Tools & Knowledge',
    tagline:
      'Developer tools and foundational knowledge notes covering algorithms, version control, licensing, and engineering fundamentals.',
    description: 'Developer tools and engineering fundamentals.',
    icon: 'wrench',
  },
  university: {
    title: 'University Notes',
    tagline:
      'Rigorous, proof-based undergraduate STEM notes covering linear algebra, calculus, mechanics, and electromagnetism.',
    description: 'University-level STEM notes with proofs and derivations.',
    icon: 'graduation-cap',
  },
}

// ── Sidebar parser ─────────────────────────────────────────────────

function parseSidebarConfig(configPath) {
  const content = fs.readFileSync(configPath, 'utf8')

  // Extract sidebar array from astro.config.mjs
  const sidebarMatch = content.match(/sidebar:\s*\[([\s\S]*?)\],?\s*(?:head:|locales:|$)/)
  if (!sidebarMatch) return []

  const sidebarStr = sidebarMatch[1]
  const topics = []

  // Match: { label: 'X', autogenerate: { directory: 'Y' } }
  const autoGenRegex =
    /\{\s*label:\s*['"]([^'"]+)['"]\s*,\s*autogenerate:\s*\{\s*directory:\s*['"]([^'"]+)['"]\s*\}\s*\}/g
  let match
  while ((match = autoGenRegex.exec(sidebarStr)) !== null) {
    topics.push({ label: match[1], directory: match[2] })
  }

  // Match: { label: 'X', link: '/Y/' }
  const linkRegex = /\{\s*label:\s*['"]([^'"]+)['"]\s*,\s*link:\s*['"]([^'"]+)['"]\s*\}/g
  while ((match = linkRegex.exec(sidebarStr)) !== null) {
    topics.push({ label: match[1], link: match[2] })
  }

  return topics
}

// ── Content scanner ────────────────────────────────────────────────

function scanContentDir(docsDir, directory) {
  const dir = path.join(docsDir, directory)
  if (!fs.existsSync(dir)) return { files: [], subdirs: [], pageCount: 0 }

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  const subdirs = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    if (entry.name === 'index.md' || entry.name === 'index.mdx') continue

    if (entry.isDirectory()) {
      // Count files in subdirectory and find first page
      const subDir = path.join(dir, entry.name)
      const subFiles = fs
        .readdirSync(subDir, { withFileTypes: true })
        .filter(e => !e.name.startsWith('.') && (e.name.endsWith('.md') || e.name.endsWith('.mdx')))
        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically
      const firstPage = subFiles.length > 0 ? subFiles[0].name.replace(/\.(md|mdx)$/, '') : null
      subdirs.push({
        name: entry.name,
        fileCount: subFiles.length,
        slug: entry.name,
        firstPage, // Link target: first page in subdirectory
      })
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const slug = entry.name.replace(/\.(md|mdx)$/, '')
      files.push({ name: slug, slug })
    }
  }

  return {
    files,
    subdirs,
    pageCount: files.length + subdirs.reduce((acc, s) => acc + s.fileCount, 0),
  }
}

function getPageDescription(docsDir, directory, fileName) {
  const filePath = path.join(docsDir, directory, `${fileName}.md`)
  const filePathMdx = path.join(docsDir, directory, `${fileName}.mdx`)
  const actualPath = fs.existsSync(filePath)
    ? filePath
    : fs.existsSync(filePathMdx)
      ? filePathMdx
      : null

  if (!actualPath) return ''

  const content = fs.readFileSync(actualPath, 'utf8')

  // Extract description from frontmatter
  const descMatch = content.match(/description:\s*["']([^"']+)["']/)
  if (descMatch) {
    let desc = descMatch[1]
    // Clean up description
    desc = desc.replace(/Comprehensive educational content coverage with.*$/i, '').trim()
    desc = desc.replace(/\.\.\.$/, '').trim()
    if (desc.length > 100) desc = desc.substring(0, 97) + '...'
    return desc
  }

  // Fall back to first paragraph
  const bodyMatch = content.match(/---\s*\n[\s\S]*?\n---\s*\n\n(.+?)(?:\n\n|\n#)/)
  if (bodyMatch) {
    let desc = bodyMatch[1].replace(/[#*_`[\]]/g, '').trim()
    if (desc.length > 100) desc = desc.substring(0, 97) + '...'
    return desc
  }

  return ''
}

function getTopicDescription(docsDir, directory) {
  // Try to read the intro file for the topic
  const introFiles = [
    'intro.md',
    'intro.mdx',
    'index.md',
    'index.mdx',
    '01-intro.md',
    '01-intro.mdx',
  ]
  for (const file of introFiles) {
    const desc = getPageDescription(docsDir, directory, file.replace(/\.(md|mdx)$/, ''))
    if (desc) return desc
  }
  return ''
}

// ── Landing page generator ─────────────────────────────────────────

function generateLandingPage(siteName, meta, topics, docsDir) {
  const lines = []

  // Frontmatter
  lines.push('---')
  lines.push('template: splash')
  lines.push(`title: ${meta.title}`)
  lines.push(`description: "${meta.description}"`)
  lines.push('hero:')
  lines.push(`  tagline: ${meta.tagline}`)
  lines.push('  actions:')
  lines.push(`    - text: Browse ${topics[0]?.label || 'Notes'}`)
  const firstLink = topics[0]?.link || `/${topics[0]?.directory || ''}/`
  lines.push(`      link: ${firstLink}`)
  lines.push('      icon: right-arrow')
  lines.push('      variant: primary')
  lines.push('---')
  lines.push('')

  // Import Card components
  lines.push("import { Card, CardGrid } from '@astrojs/starlight/components';")
  lines.push('')

  // Generate a card section for each topic
  for (const topic of topics) {
    const topicDir = topic.directory || topic.link?.replace(/\//g, '')
    if (!topicDir) continue

    const content = scanContentDir(docsDir, topicDir)
    const topicDesc = getTopicDescription(docsDir, topicDir)

    // Skip empty topics (external links)
    if (content.pageCount === 0 && content.subdirs.length === 0) continue

    lines.push(`## ${topic.label}`)
    if (topicDesc) {
      lines.push(topicDesc)
      lines.push('')
    }

    lines.push('<CardGrid>')

    // Add subdirectories as cards
    for (const subdir of content.subdirs) {
      const cleanName = subdir.name.replace(/^\d+-/, '').replace(/-/g, ' ')
      const titleCase = cleanName.replace(/\b\w/g, c => c.toUpperCase())
      const desc =
        getPageDescription(docsDir, `${topicDir}/${subdir.name}`, 'index') ||
        getPageDescription(
          docsDir,
          `${topicDir}/${subdir.name}`,
          subdir.firstPage || subdir.name.replace(/^\d+-/, ''),
        ) ||
        `${subdir.fileCount} page${subdir.fileCount !== 1 ? 's' : ''}`
      const icon = subdir.fileCount > 5 ? 'open-book' : 'document'
      // Link to first page in subdirectory, or directory if it has an index
      const hasIndex =
        fs.existsSync(path.join(docsDir, topicDir, subdir.name, 'index.md')) ||
        fs.existsSync(path.join(docsDir, topicDir, subdir.name, 'index.mdx'))
      const linkPath = hasIndex
        ? `/${topicDir}/${subdir.name}/`
        : `/${topicDir}/${subdir.name}/${subdir.firstPage || ''}/`
      lines.push(`  <Card title="${titleCase}" icon="${icon}">`)
      lines.push(`    ${desc}`)
      lines.push(`    [Learn more](${linkPath})`)
      lines.push('  </Card>')
    }

    // Add standalone files as cards
    for (const file of content.files) {
      if (file.slug === 'intro' || file.slug === 'index') continue
      const cleanName = file.slug.replace(/^\d+-/, '').replace(/-/g, ' ')
      const titleCase = cleanName.replace(/\b\w/g, c => c.toUpperCase())
      const desc = getPageDescription(docsDir, topicDir, file.slug) || 'Overview'
      lines.push(`  <Card title="${titleCase}" icon="document">`)
      lines.push(`    ${desc}`)
      lines.push(`    [Learn more](/${topicDir}/${file.slug}/)`)
      lines.push('  </Card>')
    }

    lines.push('</CardGrid>')
    lines.push('')
  }

  // Study strategy section
  lines.push('## How to Use These Notes')
  lines.push('')
  lines.push(
    '1. **Start with the fundamentals** -- build a solid foundation before moving to advanced topics',
  )
  lines.push(
    '2. **Work through examples** -- follow along with the worked examples to build intuition',
  )
  lines.push(
    '3. **Test yourself** -- use the practice problems and flashcards to check your understanding',
  )
  lines.push('4. **Review regularly** -- spaced repetition helps retain what you have learned')

  return lines.join('\n')
}

// ── Main ───────────────────────────────────────────────────────────

function main() {
  const sites = fs.readdirSync(SITES_DIR).filter(entry => {
    const fullPath = path.join(SITES_DIR, entry)
    if (!fs.statSync(fullPath).isDirectory()) return false
    if (entry === 'main') return false // Skip landing page site
    if (ONLY_SITE && entry !== ONLY_SITE) return false
    return fs.existsSync(path.join(fullPath, 'astro.config.mjs'))
  })

  console.log(`Found ${sites.length} sites to process\n`)

  for (const site of sites) {
    const meta = SITE_META[site]
    if (!meta) {
      console.log(`Skipping ${site}: no metadata defined`)
      continue
    }

    const siteDir = path.join(SITES_DIR, site)
    const configPath = path.join(siteDir, 'astro.config.mjs')
    const docsDir = path.join(siteDir, 'src', 'content', 'docs')
    const outputPath = path.join(docsDir, 'index.mdx')

    console.log(`Processing ${site}...`)

    // Parse sidebar
    const topics = parseSidebarConfig(configPath)
    if (topics.length === 0) {
      console.log(`  Warning: no sidebar topics found in config`)
      continue
    }
    console.log(`  Found ${topics.length} sidebar topics: ${topics.map(t => t.label).join(', ')}`)

    // Scan content
    for (const topic of topics) {
      const dir = topic.directory || topic.link?.replace(/\//g, '')
      if (dir) {
        const content = scanContentDir(docsDir, dir)
        console.log(
          `  ${topic.label}: ${content.pageCount} pages, ${content.subdirs.length} subdirs`,
        )
      }
    }

    // Generate landing page
    const landing = generateLandingPage(site, meta, topics, docsDir)

    if (DRY_RUN) {
      console.log(`  [DRY RUN] Would write to ${outputPath}`)
      console.log(`  Preview (${landing.split('\n').length} lines):`)
      console.log(landing.split('\n').slice(0, 10).join('\n'))
      console.log('  ...\n')
    } else {
      // Remove old .md file if it exists
      const oldMd = path.join(docsDir, 'index.md')
      if (fs.existsSync(oldMd)) {
        fs.unlinkSync(oldMd)
        console.log(`  Removed old ${oldMd}`)
      }

      fs.writeFileSync(outputPath, landing, 'utf8')
      console.log(`  Wrote ${outputPath} (${landing.split('\n').length} lines)`)
    }
  }

  console.log('\nDone!')
}

main()
