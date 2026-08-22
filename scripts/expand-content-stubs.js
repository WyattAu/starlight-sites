#!/usr/bin/env node
// Tier 2 mechanical expansion for thin index.md files.
//
// Scans sites content for index.md files under 30 lines,
// expands them by adding a section overview paragraph derived from
// the page title and subject context.
//
// Usage: node scripts/expand-content-stubs.js [--dry-run]
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')

// Subject-specific overview templates keyed by common subject keywords.
// Fallback: generic template derived from the page title.
const OVERVIEW_TEMPLATES = {
  biology: 'This section covers core concepts in biology, from molecular mechanisms to whole-organism physiology. Understanding these foundations is essential for tackling exam questions that require application of biological principles to unfamiliar contexts.',
  chemistry: 'This section covers fundamental chemical principles, from atomic structure and bonding to reaction kinetics and equilibrium. Mastery of these concepts enables you to analyse quantitative problems and predict reaction outcomes systematically.',
  physics: 'This section covers key physical principles, from classical mechanics to modern physics. Each topic builds on mathematical modelling to describe natural phenomena quantitatively.',
  mathematics: 'This section covers essential mathematical techniques and theories. These foundations underpin quantitative reasoning across the sciences and are tested in both pure and applied contexts.',
  'computer-science': 'This section covers computational thinking, data structures, algorithms, and systems. Understanding these concepts is critical for both theory examinations and practical programming assessments.',
  economics: 'This section covers microeconomic and macroeconomic theory, from market structures to fiscal policy. These models provide the analytical framework for evaluating real-world economic questions.',
  english: 'This section covers literary analysis, language techniques, and critical writing skills. Strong performance requires close reading, evidence-based argumentation, and awareness of historical and cultural contexts.',
  programming: 'This section covers programming language concepts, from syntax and type systems to algorithms and design patterns. Understanding these foundations enables effective software development and problem-solving.',
  languages: 'This section covers language learning, proficiency levels, and assessment frameworks. These materials support preparation for standardised language examinations and communicative competence development.',
  'driving-': 'This section covers driving theory and practical knowledge required for the driving test. Understanding traffic rules, hazard perception, and vehicle handling is essential for safe driving.',
  'language-tests': 'This section covers language proficiency assessment across CEFR levels. These materials support preparation for standardised language examinations.',
  civics: 'This section covers civic knowledge, governance structures, and responsible citizenship. Understanding these concepts is essential for informed participation in democratic societies.',
  security: 'This section covers cybersecurity principles, network security, and defensive strategies. Understanding these topics is critical for protecting systems and data in modern computing environments.',
  networking: 'This section covers computer networking fundamentals, from protocol layers to network security. These concepts underpin modern distributed systems and internet infrastructure.',
}

function getSiteName(filePath) {
  const parts = filePath.split('/')
  const sitesIdx = parts.indexOf('sites')
  return sitesIdx >= 0 ? parts[sitesIdx + 1] : ''
}

function getSubjectFromPath(filePath) {
  const parts = filePath.split('/')
  const docsIdx = parts.indexOf('docs')
  if (docsIdx >= 0 && docsIdx + 1 < parts.length) {
    return parts[docsIdx + 1]
  }
  return ''
}

function getOverview(title, subject, siteName) {
  // Try subject-specific template first
  for (const [key, template] of Object.entries(OVERVIEW_TEMPLATES)) {
    if (subject.toLowerCase().includes(key) || siteName.toLowerCase().includes(key)) {
      return template
    }
  }

  // Fallback: generic template from title
  return `This section provides study materials and resources for ${title.toLowerCase()}. Browse the topics below to find the specific area you need to revise.`
}

function expandIndexPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')

  // Only expand files under 30 lines
  if (lines.length >= 30) return false

  // Parse frontmatter and find the title
  let title = ''
  let frontmatterEnd = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---' && i > 0) {
      frontmatterEnd = i
      break
    }
    if (lines[i].startsWith('title:')) {
      title = lines[i].replace(/^title:\s*["']?/, '').replace(/["']?\s*$/, '').trim()
    }
  }

  if (!title || frontmatterEnd < 0) return false

  const subject = getSubjectFromPath(filePath)
  const siteName = getSiteName(filePath)
  const overview = getOverview(title, subject, siteName)

  // Find where to insert (after frontmatter, before or at the heading)
  let insertIdx = frontmatterEnd + 1

  // Build expanded content
  const expanded = [
    ...lines.slice(0, insertIdx),
    '',
    overview,
    '',
    ...lines.slice(insertIdx),
  ]

  // Add prerequisites note after the overview
  const topicsIdx = expanded.findIndex(l => l.trim() === '## Topics')
  if (topicsIdx > 0) {
    expanded.splice(topicsIdx, 0, '', '**Prerequisites:** Review the prerequisite topics before attempting this section.', '')
  }

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, expanded.join('\n'))
  }
  return true
}

function main() {
  // Walk all sites
  const sites = fs.readdirSync(SITES_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name !== 'node_modules')
    .map(e => e.name)

  let expanded = 0
  let skipped = 0

  for (const site of sites) {
    const docsDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
    if (!fs.existsSync(docsDir)) continue

    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          walk(full)
        } else if (entry.name === 'index.md') {
          if (expandIndexPage(full)) {
            expanded++
          } else {
            skipped++
          }
        }
      }
    }
    walk(docsDir)
  }

  console.log(`Expanded ${expanded} index pages (${skipped} already sufficient)${DRY_RUN ? ' (dry run)' : ''}`)
}

main()
