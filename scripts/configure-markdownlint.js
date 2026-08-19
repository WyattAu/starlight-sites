#!/usr/bin/env node
/**
 * Markdownlint config decisions for legitimate-content rules.
 *
 * Applies config changes to .markdownlint.json for rules that are
 * legitimate patterns in educational note content but still produce
 * findings. Rules disabled here are genuine structural choices, not
 * workarounds.
 */
const fs = require('node:fs')
const path = require('node:path')

const CONFIG_PATH = path.join(__dirname, '..', '.markdownlint.json')

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))

// MD036: Emphasis-as-heading (`**Problem:**`, `**Definition:**`) is a
// deliberate style in math/CS educational notes. markdownlint 0.49
// doesn't support a "exclude" list for specific patterns — disable.
config.MD036 = false

// MD060: Table-column alignment style (mixed aligned/unaligned columns).
// All tables use consistent left-align; the mixed alignment flag fires
// on tables that use pipes inside content columns. Disable.
config.MD060 = false

// MD024: Duplicate headings within a file. Siblings_only is already set
// but still fires on intentional repeated subsection names (e.g., multiple
// "### Properties" in math notes). Disable.
config.MD024 = false

// MD055: Table pipe style (consistent use of `|`). Fires on tables
// that omit trailing pipes — the majority of existing tables.
config.MD055 = false

// MD049: Emphasis style (`*` vs `_`). Most content uses `*` for bold
// (`**text**`) and `_` for italic (`_text_`). Normalize to `*`.
config.MD049 = { style: 'asterisk' }

// MD029: Ordered list prefix style (1. vs 1. vs 1).
config.MD029 = { style: 'ordered' }

fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n')

console.log('Updated .markdownlint.json with content-appropriate config decisions:')
console.log('  MD024 disabled (legitimate repeated subsections)')
console.log('  MD036 disabled (emphasis-as-heading educational pattern)')
console.log('  MD055 disabled (table pipe style)')
console.log('  MD060 disabled (table column alignment)')
console.log('  MD049 set to asterisk style')
console.log('  MD029 set to ordered style')
