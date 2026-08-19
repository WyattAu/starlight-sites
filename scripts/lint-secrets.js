#!/usr/bin/env node
/**
 * Secret and credential scanner for staged files.
 *
 * Scans staged files for hardcoded API keys, passwords, tokens, PEM
 * blocks, and connection strings. Returns exit code 1 if high-confidence
 * matches are found, 0 if clean.
 *
 * Patterns are deliberately broad (catch false positives) since this
 * runs on staged files only, not the full tree. False positives are
 * resolved by the developer staging the correct files.
 *
 * Run: node scripts/lint-secrets.js [file ...]
 * If no files given, scans all tracked files.
 */

const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

// High-confidence patterns: these are nearly always real secrets.
const HIGH_CONFIDENCE = [
  { re: /AKIA[0-9A-Z]{16}/, label: 'AWS Access Key ID' },
  { re: /ghp_[a-zA-Z0-9]{36}/, label: 'GitHub Personal Access Token' },
  { re: /gho_[a-zA-Z0-9]{36}/, label: 'GitHub OAuth Token' },
  { re: /sk-[a-zA-Z0-9]{20,}/, label: 'OpenAI / Stripe Secret Key' },
  { re: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/, label: 'PEM Private Key' },
  { re: /xox[baprs]-[a-zA-Z0-9-]+/, label: 'Slack Token' },
  { re: /eyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}/, label: 'JWT Token (raw)' },
]

// Known documentation placeholders that match high-confidence patterns but
// are published examples, not credentials (AWS docs canonical example key).
const ALLOWED_LITERALS = new Set([
  'AKIAIOSFODNN7EXAMPLE',
  'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
])

// Medium-confidence patterns: may be false positives in config examples or docs.
const MEDIUM_CONFIDENCE = [
  { re: /(?:password|passwd|pwd)\s*[:=]\s*['"][^'"]{4,}/, label: 'Hardcoded Password' },
  { re: /(?:api[_-]?key|apikey)\s*[:=]\s*['"][^'"]{10,}/, label: 'Hardcoded API Key' },
  { re: /(?:secret|token)\s*[:=]\s*['"][a-zA-Z0-9_-]{10,}/, label: 'Hardcoded Secret/Token' },
  { re: /(?:connection[_-]?string|conn[_-]?str)\s*[:=]\s*['"][^'"]+/, label: 'Connection String' },
]

// Files to always skip (binary, generated, vendored).
const SKIP_PATTERNS = [
  /\.min\.(js|css)$/,
  /bun\.lock$/,
  /node_modules\//,
  /\.git\//,
  /coverage\//,
  /dist\//,
  /\.astro\//,
]

function shouldSkip(filePath) {
  return SKIP_PATTERNS.some(p => p.test(filePath))
}

function getFilesToScan(explicitFiles) {
  if (explicitFiles.length > 0) {
    return explicitFiles.filter(f => !shouldSkip(f) && fs.existsSync(path.join(ROOT, f)))
  }
  // Scan all tracked files
  try {
    const output = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' })
    return output
      .trim()
      .split('\n')
      .filter(f => !shouldSkip(f))
  } catch {
    return []
  }
}

function scanFile(filePath) {
  const fullPath = path.join(ROOT, filePath)
  let content
  try {
    content = fs.readFileSync(fullPath, 'utf8')
  } catch {
    return []
  }

  const findings = []
  const lines = content.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    for (const { re, label } of HIGH_CONFIDENCE) {
      if (re.test(line)) {
        const hit = line.match(re)
        if (hit && ALLOWED_LITERALS.has(hit[0])) continue
        findings.push({ file: filePath, line: i + 1, label, confidence: 'high' })
      }
    }

    for (const { re, label } of MEDIUM_CONFIDENCE) {
      if (re.test(line)) {
        findings.push({ file: filePath, line: i + 1, label, confidence: 'medium' })
      }
    }
  }

  return findings
}

// --- Main ---
const args = process.argv.slice(2)
const files = getFilesToScan(args)

let highCount = 0
let mediumCount = 0

for (const file of files) {
  const findings = scanFile(file)
  for (const f of findings) {
    if (f.confidence === 'high') {
      console.error(`HIGH  ${f.file}:${f.line} — ${f.label}`)
      highCount++
    } else {
      console.error(`MED   ${f.file}:${f.line} — ${f.label}`)
      mediumCount++
    }
  }
}

if (highCount > 0) {
  console.error(`\n${highCount} high-confidence secret(s) found. Commit aborted.`)
  process.exit(1)
}

if (mediumCount > 0) {
  console.warn(`\n${mediumCount} medium-confidence finding(s). Review manually.`)
  // Medium-confidence findings are warnings, not errors.
}

process.exit(0)
