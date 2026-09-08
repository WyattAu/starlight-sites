// Fast MDX JSX-expression validator: extracts { ... } attribute expressions
// and parses each with acorn — reproduces @mdx-js/rollup expression errors
// without running the Vite build.
import { createRequire } from 'module'
import { readFileSync } from 'fs'
const require = createRequire(import.meta.url)
const acorn = require('../node_modules/.bun/acorn@8.16.0/node_modules/acorn/dist/acorn.mjs')
const jsx = require('../node_modules/.bun/acorn-jsx@5.3.2+ed870fa5b9aaeac5/node_modules/acorn-jsx/index.js')
const Parser = acorn.Parser.extend(jsx())

const file = process.argv[2]
const src = readFileSync(file, 'utf8')
let failures = 0

// Extract JSX expression attributes: name={ ... }
const attrRe = /(\w+)=\{/g
let m
while ((m = attrRe.exec(src)) !== null) {
  const start = m.index + m[0].length
  let depth = 1
  let i = start
  let inStr = null
  while (i < src.length && depth > 0) {
    const c = src[i]
    if (inStr) {
      if (c === '\\') { i += 2; continue }
      if (c === inStr) inStr = null
    } else if (c === '"' || c === "'" || c === '`') {
      inStr = c
    } else if (c === '{') depth++
    else if (c === '}') depth--
    i++
  }
  const expr = src.slice(start, i - 1)
  try {
    Parser.parseExpressionAt(expr, 0, { ecmaVersion: 'latest' })
  } catch (e) {
    failures++
    const line = src.slice(0, m.index).split('\n').length
    console.log(`FAIL ${file}:${line} (${m[1]}): ${String(e.message).slice(0, 120)}`)
    console.log('  expr head:', expr.slice(0, 100).replace(/\n/g, ' '))
    if (failures >= 5) process.exit(1)
  }
}
console.log(failures === 0 ? `OK: ${file}` : `${failures} bad expression(s)`)
process.exit(failures ? 1 : 0)
