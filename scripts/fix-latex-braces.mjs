#!/usr/bin/env node
import { globSync, readFileSync, writeFileSync } from 'node:fs'
/**
 * fix-latex-braces.mjs — repair LaTeX that KaTeX cannot parse.
 *
 * A normalisation pass escaped braces to stop MDX reading them as JSX
 * expressions, and in places doubled the backslash or injected a backtick.
 * The live pages show the result: KaTeX emits ParseError markup instead of
 * the formula.
 *
 *     ParseError: No such environment: ` at position 7: \begin`\{aligned}`
 *     ParseError: Expected 'EOF', got '}' at position 15: E = \frac`\{kQ}`\{r^2\}
 *
 * Four distinct defects, and the distinctions matter because most escaped
 * braces in the corpus are *correct*:
 *
 *   A  `\{C\}`   CORRECT. An escaped brace renders a literal brace, which is
 *                exactly what set and interval notation needs.
 *   A' `\\{C\\}` DAMAGE. A doubled backslash means a line break followed by a
 *                group, so the set notation renders as a stray line break.
 *   B  `\frac\{a\}\{b\}`  DAMAGE. The brace group is required; escaped, the
 *                fraction renders as a backslash and literal braces.
 *   C  `e^\{6k\}`         DAMAGE. Same reason for a script argument.
 *   D  `\frac`\{kQ\}`\{r^2\}`  DAMAGE. The backtick is never valid between a
 *                command and its group.
 *
 * So the rule is not "escaped braces are bad" -- that would rewrite every
 * correct set in the corpus. It is: reduce an even-length backslash run
 * before a brace, and unescape a brace only where LaTeX requires a group.
 * `\left\{` and `\right\}` are left alone, since escaping there is correct.
 *
 * Every candidate repair is verified by rendering both the original and the
 * repaired maths with KaTeX: the repair is only kept when the original fails
 * to parse and the repair succeeds. That makes a false positive impossible
 * by construction, and it means a change to KaTeX's grammar cannot silently
 * turn a correct formula into a broken one.
 *
 * Usage:
 *   node scripts/fix-latex-braces.mjs             # repair across the network
 *   node scripts/fix-latex-braces.mjs --check     # gate: fail if any remain
 *   node scripts/fix-latex-braces.mjs <globs>...  # scoped run
 */
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'

const require = createRequire(import.meta.url)

/** Locate a KaTeX build. Site node_modules are the reliable source here. */
function loadKatex() {
  const candidates = [
    path.resolve('sites/cpp/node_modules/katex'),
    path.resolve('sites/dart/node_modules/katex'),
    'katex',
  ]
  for (const c of candidates) {
    try {
      return require(c)
    } catch {
      /* try the next candidate */
    }
  }
  return null
}

const katex = loadKatex()
if (!katex) {
  console.error(
    'KaTeX not found. The repair is KaTeX-verified by design; refusing to\n' +
      'guess. Install dependencies first (bun install).',
  )
  process.exit(2)
}

/** Silence KaTeX's LaTeX-compatibility warnings; only parse errors matter here. */
function renderToString(tex, displayMode) {
  return katex.renderToString(tex, {
    throwOnError: true,
    displayMode,
    strict: 'ignore',
  })
}

/** Renders, or returns the KaTeX error message. */
function render(tex) {
  try {
    renderToString(tex, false)
    return null
  } catch (err) {
    return err.message
  }
}

const argv = process.argv.slice(2)
const check = argv.includes('--check')
const show = argv.includes('--show')
const args = argv.filter(a => a !== '--check' && a !== '--show')

const targets =
  args.length > 0
    ? args.flatMap(g => globSync(g))
    : globSync('sites/*/src/content/docs/**/*.md').concat(
        globSync('sites/*/src/content/docs/**/*.mdx'),
      )

const FENCE = /^\s*(```|~~~)/

/** Commands whose argument must be a real brace group. */
const GROUP_CMD =
  '(?:frac|dfrac|tfrac|binom|dbinom|tbinom|choose|sqrt|begin|end|text|' +
  'mathrm|mathbf|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathscr|' +
  'operatorname|DeclareMathOperator|bm|hat|bar|vec|tilde|widetilde|' +
  'overline|underline|overbrace|underbrace|stackrel|overset|underset|' +
  'displaystyle|textstyle|scriptstyle|scriptscriptstyle|boxed|fbox|color|' +
  'textcolor|xrightarrow|xleftarrow|underbrace)'

/** Group content allowing one level of already-clean braces, for nesting. */
const SCRIPT_CONTENT = '(?:[^{}]|\\{[^{}]*\\})*'

/**
 * Unescape a brace group that a command requires.
 *
 * Unescaping only the opening brace is not enough -- `\frac\{hc\}\{\lambda\}`
 * keeps a trailing `\}`, so the expression still fails to parse. Matching the
 * whole group with a regex handles that, and repeating innermost-first
 * resolves nesting: `\frac\{\sqrt\{x\}\}\{y\}` fixes the inner `\sqrt` group
 * first, then the outer `\frac`.
 *
 * The content pattern permits one level of already-clean braces, which is
 * enough for the nesting in this corpus; each pass widens the reach and KaTeX
 * verifies the result.
 *
 * `\{C\}` is never touched: the opening has no group-requiring command in
 * front of it, and escaping there is correct for set and interval notation.
 */
function unescapeCommandGroups(tex, kinds) {
  const content = SCRIPT_CONTENT
  // Two-argument commands (`\frac`, `\binom`, `\overset`, ...) are matched
  // first: repairing only the first argument leaves `\frac{b}\{a\}`, which
  // still fails to parse and has no command in front of the second group for
  // the single-group pattern to find.
  const two = new RegExp(
    `\\\\(${GROUP_CMD})\\\\\\{(${content})\\\\\\}\\\\\\{(${content})\\\\\\}`,
    'g',
  )
  const one = new RegExp(`\\\\(${GROUP_CMD})\\\\\\{(${content})\\\\\\}`, 'g')
  const clean = s => s.replace(/\\([{}])/g, '$1')
  let out = tex

  for (let pass = 0; pass < 40; pass++) {
    const before = out
    out = out.replace(two, (_m, cmd, a, b) => {
      kinds.add('needs-group')
      return `\\${cmd}{${clean(a)}}{${clean(b)}}`
    })
    out = out.replace(one, (_m, cmd, a) => {
      kinds.add('needs-group')
      return `\\${cmd}{${clean(a)}}`
    })
    if (out === before) break
  }

  return out
}

/**
 * Repair one line of maths.
 *
 * Returns null when nothing changed, otherwise { tex, kinds }.
 */
function repairTex(tex) {
  const kinds = new Set()
  let out = tex

  // D: a backtick injected between a command and its brace group, or either
  // side of a group. `\begin`\{aligned}`\`` and `\frac`\{kQ\}`\{r^2\}`.
  //
  // A backtick can legitimately be a grave accent in LaTeX, but never next to
  // a brace -- so adjacency to a brace is a safe test, and KaTeX verifies the
  // result regardless.
  const beforeD = out
  out = out.replace(/\\([A-Za-z]+)`(?=\s*\\?\{)/g, '\\$1')
  out = out.replace(/`(?=\\?\{)/g, '')
  out = out.replace(/(?<=\\?\})`/g, '')
  if (out !== beforeD) kinds.add('backtick')

  // A': an even-length backslash run before a brace. `\\{` renders as a line
  // break plus a group; the author meant a literal brace. An odd run already
  // means "break, then literal brace" and is correct.
  const beforeA = out
  out = out.replace(/(\\{2,})(?=[{}])/g, m => (m.length % 2 === 0 ? m.slice(1) : m))
  if (out !== beforeA) kinds.add('doubled-backslash')

  // B and C are alternated to a fixed point. Order matters: `\mathrm\{fus\}`
  // inside `_\{ ... \}` must be cleaned before the outer script group can be
  // matched, because the group-content pattern only admits already-clean inner
  // braces. Doing C once up front silently leaves `P_\{\mathrm\{fus\}\}` half
  // repaired, and KaTeX -- correctly -- still rejects it.
  const beforeBC = out
  for (let pass = 0; pass < 40; pass++) {
    const before = out
    out = unescapeCommandGroups(out, kinds)
    // Rule C stays deliberately simple: it rewrites only the opening brace of
    // a script argument. A group-aware version was tried and abandoned -- its
    // lazy-match form truncated `\mathrm\{fus\}` at the first `\}`, producing
    // `P_\{\mathrm{fus}}`, which is worse than the original. KaTeX
    // verification means an incomplete repair is simply not applied, so the
    // safe form loses nothing but a few residual spans, which stay in the
    // structural backlog.
    out = out.replace(/([\^_])\\\{/g, '$1{')
    if (out === before) break
  }
  if (out !== beforeBC) kinds.add('script-group')

  if (out === tex) return null
  return { tex: out, kinds: [...kinds] }
}

/** Math spans in a line: the whole line inside a display fence, or inline spans. */
function mathSpans(line, inDisplay) {
  const spans = []
  if (inDisplay) {
    // Inside `$$ ... $$` the entire line is maths, and it contains no `$`
    // delimiters of its own.
    if (line.trim()) spans.push({ start: 0, length: line.length, text: line })
    return spans
  }
  if (line.trim() === '$$') return spans
  // Inline spans only. A `${...}` template is shell/CMake, not maths.
  const masked = line.replace(/\$\{[^}]*\}/g, m => ' '.repeat(m.length))
  const re = /(?<![\w$])\$(?!\$)((?:[^$\n]|\\\$)+?)\$(?![\w$])/g
  let m
  while ((m = re.exec(masked)) !== null) {
    spans.push({ start: m.index, length: m[0].length, text: m[1] })
  }
  return spans
}

let changedFiles = 0
let repairs = 0
let rejected = 0
const kindCounts = new Map()
const rejectedSamples = []
const offenders = []

/** Render, or return the KaTeX error message. */
function renderMode(tex, displayMode) {
  try {
    renderToString(tex, displayMode)
    return null
  } catch (err) {
    return err.message
  }
}

/**
 * Repair inline maths in one line. Display blocks are handled separately
 * because `\begin{aligned}` is not valid without its `\end`, which lives on a
 * later line -- rendering a single line would reject a perfectly good repair.
 */
function repairLine(line, file, lineNo, sink) {
  let text = line
  let delta = 0
  for (const span of mathSpans(line, false)) {
    const fixed = repairTex(span.text)
    if (!fixed) continue
    const before = renderMode(span.text, false)
    if (before === null) continue
    const after = renderMode(fixed.tex, false)
    if (after !== null) {
      rejected++
      if (rejectedSamples.length < 12) {
        rejectedSamples.push(`${file.split('/')[1]}:${lineNo}  ${before.slice(0, 88)}`)
      }
      continue
    }
    sink(fixed.kinds)
    repairs++
    const at = span.start + delta
    text = text.slice(0, at) + fixed.tex + text.slice(at + span.length)
    delta += fixed.tex.length - span.length
  }
  return text
}

for (const file of targets) {
  const src = readFileSync(file, 'utf8')
  const lines = src.split('\n')
  const out = [...lines]
  let inFence = false
  let touched = false
  const sink = kinds => {
    for (const k of kinds) kindCounts.set(k, (kindCounts.get(k) ?? 0) + 1)
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (FENCE.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const isFence = line.trim() === '$$'
    if (!isFence && !line.includes('$')) continue

    // Collect a whole `$$ ... $$` block and repair it as one unit.
    if (isFence) {
      let j = i + 1
      const body = []
      while (j < lines.length && lines[j].trim() !== '$$') {
        body.push(lines[j])
        j++
      }
      if (j >= lines.length) continue // unterminated; leave alone
      const tex = body.join('\n')
      const fixed = repairTex(tex)
      if (fixed) {
        const before = renderMode(tex, true)
        if (before !== null) {
          const after = renderMode(fixed.tex, true)
          if (after === null) {
            const fixedLines = fixed.tex.split('\n')
            for (let k = 0; k < body.length; k++) out[i + 1 + k] = fixedLines[k] ?? ''
            sink(fixed.kinds)
            repairs++
            touched = true
          } else {
            rejected++
            if (show) {
              console.log(`\n--- ${file.split('/')[1]}:${i + 1} still fails after repair`)
              console.log(`  before: ${before.slice(0, 120)}`)
              console.log(`  after : ${after.slice(0, 120)}`)
              console.log(`  tex   : ${fixed.tex.replace(/\n/g, ' \\n ').slice(0, 220)}`)
            }
            if (rejectedSamples.length < 12) {
              rejectedSamples.push(`${file.split('/')[1]}:${i + 1}  ${before.slice(0, 88)}`)
            }
          }
        }
      }
      i = j
      continue
    }

    const text = repairLine(line, file, i + 1, sink)
    if (text !== line) {
      out[i] = text
      touched = true
    }
  }

  if (touched) {
    changedFiles++
    offenders.push(file)
    if (!check) writeFileSync(file, out.join('\n'))
  }
}

if (check) {
  // Two different things are being measured, and conflating them would make the
  // gate useless:
  //
  //   repairable  a candidate repair exists but was not applied. This is a
  //               regression -- somebody reintroduced the damage class -- so it
  //               fails.
  //   backlog     maths KaTeX still cannot parse and no brace repair can fix
  //               it, because the structure is wrong (a markdown table
  //               swallowed into `$$ ... $$`, or a stripped closing brace).
  //               Reported, not failed: these need an author.
  if (offenders.length > 0) {
    console.error(`FAIL: ${repairs} repairable LaTeX span(s) in ${offenders.length} file(s).`)
    for (const f of offenders.slice(0, 20)) console.error(`  ${f}`)
    if (offenders.length > 20) console.error(`  ... and ${offenders.length - 20} more`)
    console.error('Run: node scripts/fix-latex-braces.mjs')
    process.exit(1)
  }
  console.log(`OK: no repairable LaTeX damage (${targets.length} files scanned).`)
  if (rejected > 0) {
    console.log(`ADVISORY: ${rejected} span(s) still fail to parse and need structural repair.`)
    for (const s of rejectedSamples.slice(0, 5)) console.log(`  ${s}`)
  }
} else {
  console.log(`Repaired ${repairs} span(s) across ${changedFiles} file(s).`)
  if (kindCounts.size > 0) {
    console.log('defects:')
    for (const [k, v] of [...kindCounts].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(v).padStart(5)}  ${k}`)
    }
  }
  console.log(`rejected (repair would not have parsed, left alone): ${rejected}`)
  for (const s of rejectedSamples) console.log(`  ${s}`)
}
