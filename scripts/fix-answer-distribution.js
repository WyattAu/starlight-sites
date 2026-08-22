#!/usr/bin/env node
/**
 * fix-answer-distribution.js
 *
 * Fixes the correctAnswer bias in practice problem MDX files.
 * Problem: ~98% of practice files default to correctAnswer={0} (option A).
 *
 * Strategy: For each practice file, count correctAnswer values. If more than
 * 50% of problems use correctAnswer={0}, shuffle the options array for those
 * problems and update correctAnswer to point to the new position.
 *
 * This preserves the question/answer mapping while distributing correct
 * answers across all option positions.
 *
 * Usage: node scripts/fix-answer-distribution.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

function findPracticeFiles() {
  const result = execSync(
    'grep -rl "correctAnswer" sites/*/src/content/docs/',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

// Parse PracticeProblem blocks and fix answer distribution
function fixAnswerDistribution(content) {
  let changed = false

  // Match PracticeProblem blocks with correctAnswer={0}
  // Pattern: <PracticeProblem ... options={[...]} correctAnswer={0} ... />
  // We need to find each PracticeProblem block, check its correctAnswer,
  // and if it's 0, shuffle the options and update correctAnswer.

  const problemRegex = /<PracticeProblem[\s\S]*?\/>/g

  const newContent = content.replace(problemRegex, (match) => {
    // Extract correctAnswer
    const caMatch = match.match(/correctAnswer=\{(\d+)\}/)
    if (!caMatch) return match

    const correctIndex = parseInt(caMatch[1], 10)
    if (correctIndex !== 0) return match

    // Extract options array
    const optionsMatch = match.match(/options=\{(\[[\s\S]*?\])\}/)
    if (!optionsMatch) return match

    let options
    try {
      options = JSON.parse(optionsMatch[1].replace(/'/g, '"'))
    } catch {
      return match
    }

    if (!Array.isArray(options) || options.length < 2) return match

    // Shuffle: move the correct answer to a random position
    const correctAnswer = options[0]
    const newIndex = Math.floor(Math.random() * options.length)
    const newOptions = [...options]
    newOptions.splice(0, 1) // remove correct from position 0
    newOptions.splice(newIndex, 0, correctAnswer) // insert at random position

    changed = true

    // Reconstruct the block with new options and correctAnswer
    const newOptionsStr = JSON.stringify(newOptions).replace(/"/g, "'")
    return match
      .replace(optionsMatch[1], newOptionsStr)
      .replace(/correctAnswer=\{0\}/, `correctAnswer={${newIndex}}`)
  })

  return { content: newContent, changed }
}

const files = findPracticeFiles()
let fixed = 0
let skipped = 0
const fixedFiles = []

for (const file of files) {
  const content = readFileSync(file, 'utf-8')

  const { content: newContent, changed } = fixAnswerDistribution(content)

  if (!changed) {
    skipped++
    continue
  }

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  fixed++
  fixedFiles.push(file)
}

console.log(`\nAnswer distribution fix results:`)
console.log(`  Practice files scanned: ${files.length}`)
console.log(`  Fixed (had correctAnswer=0 bias): ${fixed}`)
console.log(`  Skipped (already distributed): ${skipped}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (fixedFiles.length > 0) {
  console.log(`\nFixed files:`)
  for (const file of fixedFiles) {
    console.log(`  ${file}`)
  }
}
