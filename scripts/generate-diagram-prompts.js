#!/usr/bin/env node
/**
 * generate-diagram-prompts.js
 *
 * Scans content files and generates Mermaid diagram prompts for pages
 * that lack any visual element. Outputs a prioritised list of pages
 * that would benefit most from diagrams.
 *
 * Usage: node scripts/generate-diagram-prompts.js [--top N]
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const TOP_N = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--top') || '50')
const SITES_DIR = join(import.meta.dirname, '..', 'sites')

function findContentFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findContentFiles(path))
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(path)
    }
  }
  return files
}

function hasVisual(content) {
  return /!\[|<img|DesmosGraph|PhetSimulation|```mermaid|<Mermaid/i.test(content)
}

function suggestDiagramType(content, title) {
  const lower = content.toLowerCase() + title.toLowerCase()
  if (/algorithm|complexity|flow|process|step|pipeline/.test(lower)) return 'flowchart'
  if (/cycle|loop|iteration|recursion|state machine/.test(lower)) return 'stateDiagram'
  if (/relationship|entity|table|schema|model/.test(lower)) return 'erDiagram'
  if (/timeline|history|chronolog|era|period/.test(lower)) return 'timeline'
  if (/tree|hierarchy|taxonomy|classification|parent/.test(lower)) return 'graph TD'
  if (/sequence|interaction|protocol|request.*response/.test(lower)) return 'sequenceDiagram'
  if (/class|object|interface|type|inheritance/.test(lower)) return 'classDiagram'
  if (/pie|proportion|distribution|percentage/.test(lower)) return 'pie'
  return 'flowchart TD'
}

const pages = []
for (const siteDir of readdirSync(SITES_DIR, { withFileTypes: true })) {
  if (!siteDir.isDirectory()) continue
  const docsDir = join(SITES_DIR, siteDir.name, 'src', 'content', 'docs')
  if (!statSync(docsDir, { throwIfNoEntry: false })?.isDirectory()) continue

  for (const file of findContentFiles(docsDir)) {
    const content = readFileSync(file, 'utf-8')
    if (hasVisual(content)) continue

    const titleMatch = content.match(/^title:\s*"?([^"\n]+)"?\s*$/m)
    const title = titleMatch ? titleMatch[1] : file.split('/').pop()
    const lines = content.split('\n').length

    // Prioritise by size (larger pages = more complex = more need for diagrams)
    pages.push({
      file: relative(SITES_DIR, file),
      title,
      lines,
      site: siteDir.name,
      diagramType: suggestDiagramType(content, title),
    })
  }
}

pages.sort((a, b) => b.lines - a.lines)

console.log(`Found ${pages.length} content pages without visual elements.\n`)
console.log(`Top ${TOP_N} pages that would benefit from diagrams:\n`)

for (const page of pages.slice(0, TOP_N)) {
  console.log(`  ${page.lines} lines | ${page.site} | ${page.diagramType}`)
  console.log(`    ${page.file}`)
  console.log(`    Title: ${page.title}`)
  console.log()
}
