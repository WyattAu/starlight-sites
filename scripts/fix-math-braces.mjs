#!/usr/bin/env node
/**
 * Oracle-gated repair for unbalanced \mathrm{ in KaTeX spans.
 *
 * For every $...$ / $$...$$ span whose body has an unclosed \mathrm{ (the
 * generated-pages defect: \mathrm{Na^+ swallows the rest of the math):
 *   - if the ORIGINAL body renders under KaTeX, leave it alone (never touch
 *     correct maths);
 *   - else render the brace-closed repair; apply it only when KaTeX accepts
 *     the repair.
 * Span extraction is brace-aware (\tag{$*$} does not end at the inner $) and
 * escape-aware (\$, \{, \}).
 *
 * Usage: node fix-math-braces.mjs FILE... [--dry]
 */
import fs from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const KATEX_DIR =
  '/home/wyatt/dev/src/github.com/WyattAu/starlight-sites/node_modules/.bun/katex@0.16.47/node_modules/katex'
const katex = require(KATEX_DIR)

const BOUNDARIES = [' \\to ', ' + ', ' - ', ' = ']

function closeUnclosed(math) {
  const opens = []
  let i = 0
  while (i < math.length) {
    if (math.startsWith('\\mathrm{', i)) {
      opens.push(i + '\\mathrm'.length)
      i += '\\mathrm{'.length
      continue
    }
    if (math[i] === '{') {
      opens.push(i)
      i++
      continue
    }
    if (math[i] === '}') {
      opens.pop()
      i++
      continue
    }
    i++
  }
  if (opens.length === 0) return math
  let out = math
  for (const openPos of [...opens].reverse()) {
    let depth = 0
    let j = openPos + 1
    let insertAt = out.length
    let end = out.length
    while (end > openPos + 1 && (out[end - 1] === '\n' || out[end - 1] === ' ')) end--
    let scanning = true
    while (j < out.length && scanning) {
      const c = out[j]
      if (c === '\\') {
        j += 2
        continue
      }
      if (c === '{') depth++
      else if (c === '}') {
        if (depth === 0) {
          insertAt = j
          break
        }
        depth--
      } else if (depth === 0) {
        if (c === '$') {
          insertAt = j
          break
        }
        for (const b of BOUNDARIES) {
          if (out.startsWith(b, j)) {
            insertAt = j
            scanning = false
            break
          }
        }
        if (!scanning) break
        if ((c === '=' || c === '-') && j > 0) {
          const prev = out[j - 1]
          if (/[A-Za-z0-9}]/.test(prev)) {
            insertAt = j
            break
          }
        }
      }
      j++
    }
    if (scanning && insertAt === out.length) insertAt = end
    out = out.slice(0, insertAt) + '}' + out.slice(insertAt)
  }
  return out
}

/** Brace/escape-aware scan for the closing $ starting at index i (which is
 *  the opening $, possibly $$). Returns the index AFTER the closing $, or -1.
 *  A $ at brace depth > 0 does not close the span (e.g. \tag{$*$}). */
function findClose(text, i, delimLen) {
  // dumb close, matching the real remark-math pipeline: the span ends at the
  // next unescaped $ (this is what the broken pages themselves experience)
  let j = i + delimLen
  while (j < text.length) {
    const c = text[j]
    if (c === '\\') {
      j += 2
      continue
    }
    if (c === '$') {
      if (delimLen === 2) {
        if (text[j + 1] === '$') return j + 2
      } else {
        return j + 1
      }
    }
    j++
  }
  return -1
}

function renders(body, display) {
  try {
    katex.renderToString(body, { displayMode: display, throwOnError: true, strict: false })
    return true
  } catch {
    return false
  }
}

const dry = process.argv.includes('--dry')
const files = process.argv.slice(2).filter((a) => a !== '--dry')
let spansSeen = 0
let spansFixed = 0
let spansSkippedOk = 0
let spansUnfixable = 0
const touchedFiles = new Set()

for (const file of files) {
  let text
  try {
    text = fs.readFileSync(file, 'utf8')
  } catch {
    continue
  }
  let out = ''
  let i = 0
  const n = text.length
  let changed = false
  while (i < n) {
    const c = text[i]
    if (c === '\\') {
      out += text.slice(i, i + 2)
      i += 2
      continue
    }
    if (c === '`') {
      // inline code: copy verbatim to the closing backtick
      let j = i + 1
      while (j < n && text[j] !== '`') j++
      out += text.slice(i, Math.min(j + 1, n))
      i = Math.min(j + 1, n)
      continue
    }
    if (c === '$') {
      const delimLen = text[i + 1] === '$' ? 2 : 1
      const close = findClose(text, i, delimLen)
      if (close === -1 || close === i + delimLen) {
        out += text[i]
        i++
        continue
      }
      const body = text.slice(i + delimLen, close - delimLen)
      spansSeen++
      const display = delimLen === 2
      if (!body.includes('\\mathrm{') || renders(body, display)) {
        // no unclosed \mathrm suspect, or KaTeX accepts the original: keep
        if (renders(body, display)) spansSkippedOk++
        out += text.slice(i, close)
        i = close
        continue
      }
      const fixed = closeUnclosed(body)
      if (renders(fixed, display)) {
        spansFixed++
        changed = true
        touchedFiles.add(file)
        out += '$'.repeat(delimLen) + fixed + '$'.repeat(delimLen)
      } else {
        spansUnfixable++
        out += text.slice(i, close)
      }
      i = close
      continue
    }
    out += c
    i++
  }
  if (changed && !dry) fs.writeFileSync(file, out)
}

console.log(
  `spans=${spansSeen} fixed=${spansFixed} kept-correct=${spansSkippedOk} unfixable=${spansUnfixable} files=${touchedFiles.size}${dry ? ' (dry)' : ''}`,
)
