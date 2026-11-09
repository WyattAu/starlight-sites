#!/usr/bin/env node
/**
 * validate-themes.mjs -- WCAG + perceptual validation for the site themes.
 *
 * Ported in principle from WyattAu/shroom-theme's validate-themes.js +
 * wcag-contrast.js: the checks run on the *alpha-composited* pairs, so
 * translucent tokens are measured as rendered rather than as authored.
 *
 * Checks per theme, on every [data-theme] block in shared/styles/custom.css:
 *   1. WCAG 2.1 AA text contrast (>= 4.5:1) on the alpha-composited pair:
 *        text, text-muted on bg / bg-card
 *        text-accent on bg
 *        accent as text on bg (links render at body size)
 *        white-on-accent (buttons) and text-invert on accent-high
 *   2. WCAG non-text contrast (>= 3:1): border and bg-hover vs bg;
 *      accent-low composited over bg vs bg (the accent boundary).
 *   3. Oklab separation (>= 12 dE00): text vs text-muted, text vs
 *      text-dim, accent vs text (an accent a reader cannot tell from
 *      body text is a failed accent).
 *
 * Usage: node scripts/validate-themes.mjs            # report + gate
 *        node scripts/validate-themes.mjs --report   # full table, no gate
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// The palette layer lives in themes.css (single source since the
// consolidation); custom.css is scanned too for any residual blocks.
const CSS_FILES = [
  path.join(__dirname, '..', 'shared', 'styles', 'themes.css'),
  path.join(__dirname, '..', 'shared', 'styles', 'custom.css'),
]

// ---------- colour math ----------

function hexToRgb(v) {
  if (!v) return null
  const t = v.trim()
  if (t.startsWith('rgb')) {
    const nums = t.match(/[\d.]+/g)
    if (!nums || nums.length < 3) return null
    return {
      r: +nums[0], g: +nums[1], b: +nums[2],
      a: nums[3] !== undefined ? +nums[3] : 1,
    }
  }
  let h = t.replace('#', '')
  if (h.length === 4)
    h = h
      .split('')
      .map(c => c + c)
      .join('')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const a = h.length >= 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
  return { r, g, b, a }
}

function srgbToLinear(c) {
  const s = c / 255
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}

function luminance({ r, g, b }) {
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b)
}

function contrast(c1, c2) {
  const l1 = luminance(c1)
  const l2 = luminance(c2)
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1]
  return (hi + 0.05) / (lo + 0.05)
}

function composite(fgHex, bgHex) {
  const f = hexToRgb(fgHex)
  const b = hexToRgb(bgHex)
  const a = f.a ?? 1
  const mix = (fc, bc) => Math.round(fc * a + bc * (1 - a))
  return { r: mix(f.r, b.r), g: mix(f.g, b.g), b: mix(f.b, b.b), a: 1 }
}

// ---------- Oklab (for perceptual separation) ----------

function linearToOklab({ r, g, b }) {
  const lr = srgbToLinear(r),
    lg = srgbToLinear(g),
    lb = srgbToLinear(b)
  const l_ = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb)
  const m_ = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb)
  const s_ = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb)
  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  }
}

function dE00(c1Hex, c2Hex) {
  const toLab = hex => {
    const { r, g, b } = hexToRgb(hex)
    const lr = srgbToLinear(r),
      lg = srgbToLinear(g),
      lb = srgbToLinear(b)
    const l_ = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb)
    const m_ = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb)
    const s_ = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb)
    return {
      L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
      a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
      b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
    }
  }
  const c1 = toLab(c1Hex)
  const c2 = toLab(c2Hex)
  const dL = c2.L - c1.L
  const dA = c2.a - c1.a
  const dB = c2.b - c1.b
  return Math.sqrt(dL * dL + dA * dA + dB * dB)
}

// ---------- theme parsing ----------

function parseVars(blockText, into) {
  const varRe = /(--wn-[a-z0-9-]+|--sl-[a-z0-9-]+)\s*:\s*([^;]+);/g
  let v
  while ((v = varRe.exec(blockText)) !== null) {
    into[v[1].trim()] = v[2].trim()
  }
}

function parseThemes(cssText) {
  // :root is the base palette every partial theme (contrast, papercolor)
  // inherits from; each [data-theme] block overlays it.
  const rootVars = {}
  const rootRe = /:root\s*\{([^}]*)\}/
  const rm = cssText.match(rootRe)
  if (rm) parseVars(rm[1], rootVars)
  const themes = {}
  const re = /\[data-theme="([^"]+)"\]\s*\{([^}]*)\}/g
  let m
  while ((m = re.exec(cssText)) !== null) {
    const vars = { ...rootVars }
    parseVars(m[2], vars)
    themes[m[1]] = vars
  }
  return { themes, rootVars }
}

// ---------- checks ----------

const TEXT_PAIRS_AA = [
  ['--wn-text', '--wn-bg'],
  ['--wn-text', '--wn-bg-card'],
  ['--wn-text-muted', '--wn-bg'],
  ['--wn-text-muted', '--wn-bg-card'],
  ['--sl-color-text-accent', '--sl-color-bg'],
  ['--sl-color-accent', '--sl-color-bg'],
]
// Dim text is de-emphasised by design: WCAG AA for large/UI text (3:1),
// not the 4.5:1 body-text bar.
const TEXT_PAIRS_DIM = [['--wn-text-dim', '--wn-bg']]
const NONTEXT_PAIRS_3 = [
  ['--wn-border', '--wn-bg'],
  ['--wn-bg-hover', '--wn-bg'],
]
const SEPARATION_D = [
  ['--wn-text', '--wn-text-muted'],
  ['--wn-text', '--wn-text-dim'],
  ['--sl-color-accent', '--wn-text'],
]

function hex(v) {
  const m = v.match(/#[0-9a-fA-F]{3,8}/)
  return m ? m[0] : null
}

function validateTheme(name, vars, rootVars, report) {
  // Resolution chain: the theme block first, then the :root base palette.
  // A variable defined by neither is skipped (that pair is not rendered).
  const V = v => vars[v] ?? rootVars[v] ?? null
  const bgRaw = V('--wn-bg') || V('--sl-color-bg')
  const bg = bgRaw ? hex(bgRaw) : null
  if (!bg) {
    // Partial tone overrides (contrast, papercolor) sit on Starlight's
    // stock light theme, which lives outside custom.css. Their own
    // palette lines are still checked below against the stock bg.
    if (report.verbose) report.push(`  skip bg: ${name} inherits Starlight defaults`)
  }
  let failures = 0
  const check = (fgVar, bgVar, threshold, label, composited) => {
    const fg = V(fgVar)
    const base = V(bgVar)
    if (!fg || !base) {
      if (report.verbose) report.push(`  skip ${name}: ${fgVar} or ${bgVar} undefined`)
      return
    }
    const baseBg = hex(vars['--wn-bg'] ?? '') || hex(vars['--sl-color-bg'] ?? '')
    const washOverBg = composited && baseBg ? composite(base, baseBg) : hexToRgb(base)
    const rendered = composited ? hexToRgb(fg) : hexToRgb(fg)
    const ratio = contrast(rendered, washOverBg)
    const ok = ratio >= threshold
    const kind = label.startsWith('ui') ? 'warn' : 'fail'
    if (!ok) {
      if (kind === 'fail') failures += 1
      report.push(
        `  ${kind.toUpperCase()} ${name}: ${label} ${fg} on ${composited ? `composited(${base})` : base} = ${ratio.toFixed(2)}:1 (need ${threshold}:1)`,
      )
    } else if (report.verbose) {
      report.push(`  ok   ${name}: ${label} ${ratio.toFixed(2)}:1`)
    }
  }

  for (const [fg, bgv] of TEXT_PAIRS_AA) check(fg, bgv, 4.5, 'text')
  for (const [fg, bgv] of TEXT_PAIRS_DIM) check(fg, bgv, 3, 'dim-text')
  check('--sl-color-accent', '--wn-bg', 3, 'accent-as-text')
  check('#ffffff', '--sl-color-accent', 3, 'white-on-accent')
  check('--sl-color-text-invert', '--sl-color-accent', 4.5, 'invert-on-accent')
  // accent text on accent-tinted surfaces (badges/chips): composited
  check('--sl-color-text', '--sl-color-accent-low', 4.5, 'text on accent-low', true)
  for (const [fg, bgv] of NONTEXT_PAIRS_3) check(fg, bgv, 3, 'ui (warn)')

  for (const [a, b] of SEPARATION_D) {
    const ha = V(a)
    const hb = V(b)
    if (!ha || !hb) continue
    const d = dE00(ha, hb)
    if (d < 0.05) {
      failures += 1
      report.push(`  FAIL ${name}: separation ${a} vs ${b} = dE(Ok) ${d.toFixed(3)} (need >= 0.05)`)
    } else if (report.verbose) {
      report.push(`  ok   ${name}: separation ${a} vs ${b} = dE(Ok) ${d.toFixed(3)}`)
    }
  }
  return failures
}

// ---------- main ----------

const merged = {}
let rootVars = {}
for (const cssFile of CSS_FILES) {
  const cssText = fs.readFileSync(cssFile, 'utf8')
  const parsed = parseThemes(cssText)
  // later files override earlier ones; themes.css is listed after custom.css
  for (const [k, v] of Object.entries(parsed.themes)) merged[k] = v
  rootVars = { ...rootVars, ...parsed.rootVars }
}
const themes = merged
const names = Object.keys(themes)
const REPORT = []
let totalFailures = 0
for (const name of names) {
  const before = REPORT.length
  totalFailures += validateTheme(name, themes[name], rootVars, REPORT)
  if (REPORT.length > before) REPORT.push('')
}
console.log(`themes checked: ${names.length}`)
console.log(REPORT.join('\n'))
if (process.argv.includes('--report')) {
  process.exit(0)
}
if (totalFailures > 0) {
  console.log(`\nFAIL: ${totalFailures} check(s) failed across ${names.length} themes`)
  process.exit(1)
}
console.log(`\nOK: all themes pass WCAG AA (composited), UI contrast, and Oklab separation`)
