#!/usr/bin/env node

/**
 * add-cross-site-links.mjs -- Adds cross-site "See Also" links to content files.
 *
 * Based on the topic chains in cross-references.md, this script adds
 * cross-site links to content files that are missing them.
 *
 * Usage:
 *   node scripts/add-cross-site-links.mjs            # Add links to all files
 *   node scripts/add-cross-site-links.mjs --dry-run  # Show what would change
 *   node scripts/add-cross-site-links.mjs --check    # Exit 1 if changes needed
 */

import { globSync, readFileSync, writeFileSync } from 'node:fs'
import { relative } from 'node:path'

const args = new Set(process.argv.slice(2))
const DRY_RUN = args.has('--dry-run')
const CHECK_ONLY = args.has('--check')

// Cross-site topic mappings based on cross-references.md
const CROSS_SITE_MAPPINGS = {
  // Mathematics connections
  mathematics: {
    'linear-algebra': [
      {
        site: 'physics',
        title: 'Quantum Mechanics',
        url: 'https://physics.wyattau.com/docs/quantum-mechanics',
      },
      {
        site: 'computer-science',
        title: 'Graph Theory',
        url: 'https://computer-science.wyattau.com/docs/graph-theory',
      },
    ],
    calculus: [
      {
        site: 'physics',
        title: 'Classical Mechanics',
        url: 'https://physics.wyattau.com/docs/classical-mechanics',
      },
      {
        site: 'physics',
        title: 'Electromagnetism',
        url: 'https://physics.wyattau.com/docs/electromagnetism',
      },
    ],
    probability: [
      {
        site: 'machine-learning',
        title: 'Statistical Learning',
        url: 'https://machine-learning.wyattau.com/docs/statistical-learning',
      },
      {
        site: 'physics',
        title: 'Statistical Mechanics',
        url: 'https://physics.wyattau.com/docs/statistical-mechanics',
      },
    ],
  },
  // Physics connections
  physics: {
    mechanics: [
      {
        site: 'mathematics',
        title: 'Calculus',
        url: 'https://mathematics.wyattau.com/docs/calculus',
      },
      {
        site: 'mathematics',
        title: 'Linear Algebra',
        url: 'https://mathematics.wyattau.com/docs/linear-algebra',
      },
    ],
    electromagnetism: [
      {
        site: 'mathematics',
        title: 'Vector Calculus',
        url: 'https://mathematics.wyattau.com/docs/vector-calculus',
      },
    ],
    quantum: [
      {
        site: 'mathematics',
        title: 'Linear Algebra',
        url: 'https://mathematics.wyattau.com/docs/linear-algebra',
      },
      {
        site: 'computer-science',
        title: 'Quantum Computing',
        url: 'https://computer-science.wyattau.com/docs/quantum-computing',
      },
    ],
  },
  // Programming connections
  programming: {
    algorithms: [
      {
        site: 'computer-science',
        title: 'Complexity Theory',
        url: 'https://computer-science.wyattau.com/docs/complexity-theory',
      },
      {
        site: 'mathematics',
        title: 'Discrete Mathematics',
        url: 'https://mathematics.wyattau.com/docs/discrete-mathematics',
      },
    ],
    'data-structures': [
      {
        site: 'computer-science',
        title: 'Algorithm Analysis',
        url: 'https://computer-science.wyattau.com/docs/algorithm-analysis',
      },
    ],
    concurrency: [
      {
        site: 'computer-science',
        title: 'Operating Systems',
        url: 'https://computer-science.wyattau.com/docs/operating-systems',
      },
    ],
  },
  // Chemistry connections
  chemistry: {
    thermodynamics: [
      {
        site: 'physics',
        title: 'Thermodynamics',
        url: 'https://physics.wyattau.com/docs/thermodynamics',
      },
      {
        site: 'mathematics',
        title: 'Calculus',
        url: 'https://mathematics.wyattau.com/docs/calculus',
      },
    ],
    'quantum-chemistry': [
      {
        site: 'physics',
        title: 'Quantum Mechanics',
        url: 'https://physics.wyattau.com/docs/quantum-mechanics',
      },
      {
        site: 'mathematics',
        title: 'Linear Algebra',
        url: 'https://mathematics.wyattau.com/docs/linear-algebra',
      },
    ],
  },
  // Computer Science connections
  'computer-science': {
    algorithms: [
      {
        site: 'mathematics',
        title: 'Discrete Mathematics',
        url: 'https://mathematics.wyattau.com/docs/discrete-mathematics',
      },
      {
        site: 'programming',
        title: 'Algorithm Implementation',
        url: 'https://programming.wyattau.com/docs/algorithms',
      },
    ],
    'machine-learning': [
      {
        site: 'mathematics',
        title: 'Linear Algebra',
        url: 'https://mathematics.wyattau.com/docs/linear-algebra',
      },
      {
        site: 'mathematics',
        title: 'Probability',
        url: 'https://mathematics.wyattau.com/docs/probability',
      },
      {
        site: 'python',
        title: 'Python for Data Science',
        url: 'https://python.wyattau.com/docs/data-science',
      },
    ],
  },
}

// Keywords to detect topic in content
const TOPIC_KEYWORDS = {
  'linear-algebra': [
    'matrix',
    'vector',
    'eigenvalue',
    'eigenvector',
    'linear transformation',
    'basis',
    'dimension',
  ],
  calculus: [
    'derivative',
    'integral',
    'limit',
    'differentiation',
    'integration',
    'differential equation',
  ],
  probability: [
    'probability',
    'random variable',
    'distribution',
    'expectation',
    'variance',
    'bayes',
  ],
  mechanics: ['force', 'velocity', 'acceleration', 'momentum', 'energy', 'newton'],
  electromagnetism: ['electric field', 'magnetic field', 'maxwell', 'electromagnetic', 'coulomb'],
  quantum: ['quantum', 'wave function', 'schrodinger', 'heisenberg', 'superposition'],
  algorithms: [
    'algorithm',
    'complexity',
    'big o',
    'time complexity',
    'space complexity',
    'sorting',
  ],
  'data-structures': ['array', 'linked list', 'tree', 'graph', 'hash', 'stack', 'queue'],
  concurrency: ['thread', 'mutex', 'semaphore', 'deadlock', 'race condition', 'parallel'],
  thermodynamics: ['temperature', 'entropy', 'enthalpy', 'heat', 'work', 'thermodynamic'],
  'quantum-chemistry': ['quantum chemistry', 'molecular orbital', 'electron configuration'],
}

function detectTopics(content) {
  const topics = []
  const lowerContent = content.toLowerCase()

  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    for (const keyword of keywords) {
      if (lowerContent.includes(keyword)) {
        topics.push(topic)
        break
      }
    }
  }

  return topics
}

function getSiteFromPath(filePath) {
  const match = filePath.match(/sites\/([^/]+)\//)
  return match ? match[1] : null
}

function hasCrossReferences(content) {
  return content.includes('## Cross-References') || content.includes('## See Also')
}

function addCrossReferences(content, links) {
  // Check if there's already a Cross-References or See Also section
  const crossRefIndex = content.indexOf('## Cross-References')
  const seeAlsoIndex = content.indexOf('## See Also')

  if (crossRefIndex !== -1 || seeAlsoIndex !== -1) {
    // Section exists, add to it
    const insertIndex = crossRefIndex !== -1 ? crossRefIndex : seeAlsoIndex
    const sectionEnd = content.indexOf('\n##', insertIndex + 1)
    const insertAt = sectionEnd !== -1 ? sectionEnd : content.length

    const linkText = links.map(link => `- [${link.title}](${link.url})`).join('\n')
    const newContent = `${content.slice(0, insertAt)}\n${linkText}\n${content.slice(insertAt)}`
    return newContent
  } else {
    // Add new section before last heading or at end
    const lastHeading = content.lastIndexOf('\n## ')
    if (lastHeading !== -1) {
      const linkText = `\n## See Also\n${links.map(link => `- [${link.title}](${link.url})`).join('\n')}\n`
      return content.slice(0, lastHeading) + linkText + content.slice(lastHeading)
    } else {
      const linkText = `\n## See Also\n${links.map(link => `- [${link.title}](${link.url})`).join('\n')}\n`
      return content + linkText
    }
  }
}

function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const site = getSiteFromPath(filePath)

  if (!site || !CROSS_SITE_MAPPINGS[site]) return null

  const topics = detectTopics(content)
  if (topics.length === 0) return null

  // Collect relevant cross-site links
  const linksToAdd = []
  for (const topic of topics) {
    if (CROSS_SITE_MAPPINGS[site][topic]) {
      for (const link of CROSS_SITE_MAPPINGS[site][topic]) {
        if (!linksToAdd.some(l => l.url === link.url)) {
          linksToAdd.push(link)
        }
      }
    }
  }

  if (linksToAdd.length === 0) return null

  // Check if content already has these links
  const existingLinks = linksToAdd.filter(link => content.includes(link.url))
  if (existingLinks.length === linksToAdd.length) return null

  // Filter out already existing links
  const newLinks = linksToAdd.filter(link => !content.includes(link.url))
  if (newLinks.length === 0) return null

  return addCrossReferences(content, newLinks)
}

function main() {
  const files = globSync('sites/*/src/content/docs/**/*.md')
  let changed = 0

  for (const file of files) {
    const newContent = processFile(file)
    if (newContent) {
      changed++
      if (DRY_RUN) {
        console.log(`Would update: ${relative('.', file)}`)
      } else if (!CHECK_ONLY) {
        writeFileSync(file, newContent)
        console.log(`Updated: ${relative('.', file)}`)
      }
    }
  }

  if (CHECK_ONLY && changed > 0) {
    console.log(`${changed} files need cross-site links`)
    process.exit(1)
  }

  if (changed === 0) {
    console.log('No changes needed')
  } else {
    console.log(`${DRY_RUN ? 'Would update' : 'Updated'} ${changed} files`)
  }
}

main()
