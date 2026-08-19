#!/usr/bin/env node
/**
 * Heuristic code-fence language tagger (markdownlint MD040).
 * Usage: node scripts/fix-code-block-languages.js [--dry-run]
 */
const fs = require('node:fs')
const path = require('node:path')
const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')

const FENCE_RE = new RegExp('^(`{3,})\\s*$', 'gm')

// All patterns use new RegExp() to avoid regex-literal /-escaping issues
const LANG_RULES = [
  [new RegExp('\\\\begin\\{|\\\\end\\{|\\\\frac\\{|\\\\sqrt\\{|\\\\int\\b|\\\\sum\\b|\\\\forall\\b|\\\\exists\\b|\\\\mathbb\\{|\\\\mathcal\\{|\\\\mathrm\\{|\\\\text\\{|\\\\boxed\\{'), 'latex'],
  [new RegExp('^def |^class |^import |^from .+ import |^print\\(|^if __name__'), 'python'],
  [new RegExp('^const |^let |^var |^function |^=>|^async |^await |^console\\.'), 'javascript'],
  [new RegExp('^interface |^type [A-Z]'), 'typescript'],
  [new RegExp('^#!\\/bin\\/ba?sh|^#!\\/usr\\/bin\\/env ba?sh|apt-get|sudo |dnf |yum |pacman|npm install|bun install|yarn |^if \\[ |^for .+ in |^while \\[ '), 'bash'],
  [new RegExp('^SELECT |^FROM |^JOIN |^WHERE |^INSERT |^CREATE TABLE', 'i'), 'sql'],
  [new RegExp('^public class |^import java\\.|System\\.out\\.print'), 'java'],
  [new RegExp('^#include\\s*[<"]|^(?:int|void|char)\\s+main\\s*\\('), 'cpp'],
  [new RegExp('^fn \\w|^let mut |^impl '), 'rust'],
  [new RegExp('^func \\w|^package \\w+|^import \\('), 'go'],
  [new RegExp('^\\.[\\w-]+ \\{|^html \\{|^body \\{|display:\\s*flex|background:\\s*#[0-9a-f]{3,6}', 'i'), 'css'],
  [new RegExp('^<!DOCTYPE|^<html|^<div |^<head|^<script |^<form'), 'html'],
  [new RegExp('^\\s*\\{[^}]*"[^"]+"\\s*:'), 'json'],
  [new RegExp('^[a-z_]+:\\s*[^\\n]+$', 'm'), 'yaml'],
  [new RegExp('^FROM\\s+\\w+|^RUN |^COPY |^EXPOSE |^CMD '), 'dockerfile'],
]

function inferLanguage(lines) {
  for (const [regex, lang] of LANG_RULES) {
    for (const line of lines) {
      if (regex.test(line)) return lang
    }
  }
  return null
}

function tagFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  let changed = false
  let inBlock = false
  let blockStart = -1
  let blockLines = []

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(FENCE_RE)
    if (m) {
      if (inBlock) {
        const lang = inferLanguage(blockLines)
        if (lang && lines[blockStart].trim() === '```') {
          lines[blockStart] = '```' + lang
          changed = true
        }
        inBlock = false
        blockLines = []
      } else {
        inBlock = true
        blockStart = i
        blockLines = []
      }
    } else if (inBlock) {
      blockLines.push(lines[i])
    }
  }

  if (changed && !dryRun) fs.writeFileSync(filePath, lines.join('\n'))
  return changed
}

function walk(dir) {
  let results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.astro') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results = results.concat(walk(full))
    else if (/\.(md|mdx)$/.test(entry.name)) results.push(full)
  }
  return results
}

function main() {
  const files = args.filter(a => !a.startsWith('--'))
  const targets = files.length > 0 ? files : walk(SITES_DIR)
  let count = 0
  for (const f of targets) {
    if (tagFile(f)) count++
  }
  console.log(`Tagged ${count}/${targets.length} files${dryRun ? ' (dry run)' : ''}`)
}

main()
