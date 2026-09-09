#!/usr/bin/env node
/**
 * Fixture-driven PracticeProblem MDX generator.
 *
 * Reads a JSON fixture file and emits a clean, structurally valid
 * PracticeProblem MDX tag per question. This eliminates the entire
 * corruption class: authors never hand-write JSX props again.
 *
 * Fixture schema:
 * {
 *   "questions": [
 *     {
 *       "question": "What is 2+2?",
 *       "options": ["3", "4", "5", "6"],
 *       "correctAnswer": 1,
 *       "explanation": "Because 2+2=4.",
 *       "difficulty": "easy"          // optional: easy|medium|hard
 *     }
 *   ],
 *   "client": "solid-js"              // optional, default solid-js
 * }
 *
 * Usage:
 *   node scripts/generate-practice-mdx.js fixture.json [output.mdx]
 *   cat fixture.json | node scripts/generate-practice-mdx.js
 *
 * If no output file is given, writes to stdout.
 * If the output file already exists, existing imports/frontmatter are
 * preserved and only the question blocks are replaced.
 */

const fs = require('node:fs')
const path = require('node:path')

function jsString(s) {
  // Escape for a double-quoted JS string
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')
}

function validate(fixture) {
  if (!fixture || !Array.isArray(fixture.questions)) {
    throw new Error('fixture must have a "questions" array')
  }
  const errors = []
  fixture.questions.forEach((q, i) => {
    const label = `question[${i}]`
    if (typeof q.question !== 'string' || !q.question.trim()) {
      errors.push(`${label}.question is required`)
    }
    if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 6) {
      errors.push(`${label}.options must have 2-6 entries`)
    }
    if (
      typeof q.correctAnswer !== 'number' ||
      q.correctAnswer < 0 ||
      q.correctAnswer >= (q.options?.length || 0)
    ) {
      errors.push(`${label}.correctAnswer must be a valid option index`)
    }
    if (typeof q.explanation !== 'string' || !q.explanation.trim()) {
      errors.push(`${label}.explanation is required`)
    }
    if (q.difficulty && !['easy', 'medium', 'hard'].includes(q.difficulty)) {
      errors.push(`${label}.difficulty must be easy|medium|hard`)
    }
  })
  if (errors.length) {
    throw new Error('Fixture validation failed:\n  ' + errors.join('\n  '))
  }
}

function buildTag(q, client) {
  const question = jsString(q.question.trim())
  const options = q.options.map((o) => `"${jsString(o.trim())}"`).join(', ')
  const explanation = jsString(q.explanation.trim())
  const difficulty = q.difficulty || 'medium'
  return (
    `<PracticeProblem client:only="${client}" question={"${question}"}` +
    ` options={[${options}]}` +
    ` correctAnswer={${q.correctAnswer}}` +
    ` explanation={"${explanation}"}` +
    ` difficulty="${difficulty}" />`
  )
}

function buildBlocks(fixture) {
  const client = fixture.client || 'solid-js'
  return fixture.questions.map((q, i) => buildTag(q, client)).join('\n\n')
}

function main() {
  const [inputArg, outputArg] = process.argv.slice(2)

  let fixture
  if (inputArg && inputArg !== '-') {
    fixture = JSON.parse(fs.readFileSync(inputArg, 'utf-8'))
  } else {
    fixture = JSON.parse(fs.readFileSync(0, 'utf-8')) // stdin
  }

  validate(fixture)
  const blocks = buildBlocks(fixture)

  if (!outputArg) {
    process.stdout.write(blocks + '\n')
    return
  }

  // If output file exists, try to preserve everything before the first
  // <PracticeProblem tag (imports, frontmatter, intro text).
  if (fs.existsSync(outputArg)) {
    const existing = fs.readFileSync(outputArg, 'utf-8')
    const firstTag = existing.indexOf('<PracticeProblem')
    if (firstTag !== -1) {
      const prefix = existing.slice(0, firstTag)
      fs.writeFileSync(outputArg, prefix + blocks + '\n')
      console.log(`Replaced ${fixture.questions.length} questions in ${outputArg}`)
      return
    }
  }

  // New file: emit standard header + blocks
  const header = [
    '---',
    `title: "Practice"`,
    `description: "Auto-generated practice questions."`,
    `date: ${new Date().toISOString().slice(0, 10)}`,
    `---`,
    ``,
    ``,
    blocks,
    ``,
  ].join('\n')
  fs.mkdirSync(path.dirname(outputArg), { recursive: true })
  fs.writeFileSync(outputArg, header)
  console.log(`Wrote ${fixture.questions.length} questions to ${outputArg}`)
}

main()
