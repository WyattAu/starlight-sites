#!/usr/bin/env node
/**
 * PracticeProblem JSX corruption linter.
 *
 * Guard against three corruption classes that have repeatedly broken
 * practice pages (see git history: the `&quot;` swallow defect that took
 * 1,017 components offline, and the bare-array defect):
 *
 *   1. `&quot; options={` -- the question string never closed; options,
 *      correctAnswer and explanation were swallowed as literal text.
 *      Pages render a wall of raw syntax with zero interactivity.
 *   2. `options=[` (bare array, no `{` expression wrapper) -- invalid JSX;
 *      the MDX parser rejects it ("Unexpected character `[`").
 *   3. `options=options={` -- doubled prefix from overlapping repair runs.
 *
 * Scope: content pages only (sites/<site>/src/content/**).
 * Exit code: 1 if any violation is found, 0 otherwise.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

// [ruleId, regex, description]
const RULES = [
  [
    'swallowed-options',
    /&quot; options=\{/,
    'question string swallowed the options array (options render as text, no interactivity)',
  ],
  [
    'bare-options-array',
    /options=\[(?!{)/,
    'options array missing its { } expression wrapper (invalid JSX)',
  ],
  [
    'doubled-options-prefix',
    /options=options=\{/,
    'duplicated options= prefix from overlapping repair runs',
  ],
]

function lintLine(line) {
  const hits = []
  for (const [ruleId, re] of RULES) {
    // Fresh regex per call so lastIndex state never leaks across calls.
    const fresh = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
    if (fresh.test(line)) hits.push(ruleId)
  }
  return hits
}

function lintContent(content) {
  const violations = []
  content.split('\n').forEach((line, idx) => {
    for (const [ruleId, description] of lintLine(line).map((id) => [
      id,
      RULES.find((r) => r[0] === id)[2],
    ])) {
      violations.push({ line: idx + 1, ruleId, description })
    }
  })
  return violations
}

function* iterContentFiles(root = ROOT) {
  const stack = [path.join(root, 'sites')]
  while (stack.length) {
    const dir = stack.pop()
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        if (!['node_modules', 'dist', '.astro', '.git'].includes(e.name)) stack.push(full)
      } else if (
        (full.endsWith('.md') || full.endsWith('.mdx')) &&
        full.split(path.sep).includes('content')
      ) {
        yield full
      }
    }
  }
}

function main() {
  let total = 0
  for (const file of iterContentFiles()) {
    const content = fs.readFileSync(file, 'utf-8')
    for (const v of lintContent(content)) {
      total++
      console.log(
        `  ${path.relative(ROOT, file)}:${v.line}  [${v.ruleId}] ${v.description}`,
      )
    }
  }
  if (total > 0) {
    console.log(`\n  ${total} PracticeProblem corruption violation(s) found.`)
    process.exitCode = 1
  } else {
    console.log('  PracticeProblem components: no corruption detected.')
  }
}

module.exports = { RULES, lintLine, lintContent, iterContentFiles }

if (require.main === module) main()
