#!/usr/bin/env node
/**
 * lint-site-nav-parity.js
 *
 * Fails when the Sites catalogue (shared/scripts/site-nav.js) drifts from the
 * actual site fleet (sites/). Every site directory must appear in the header
 * navigator exactly once; every catalogued domain must have a directory.
 *
 * Whole-tree safe: reads two files, no traversal.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const navPath = path.join(root, 'shared', 'scripts', 'site-nav.js');
const sitesDir = path.join(root, 'sites');

const nav = fs.readFileSync(navPath, 'utf8');
const catalogued = new Set([...nav.matchAll(/https:\/\/([a-z0-9-]+)\.wyattau\.com/g)].map((m) => m[1]));

const actual = fs
  .readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !name.startsWith('.') && name !== 'main');

const missing = actual.filter((s) => !catalogued.has(s));
const extra = [...catalogued].filter((s) => !actual.includes(s));

const problems = [];
if (missing.length) problems.push(`site directories missing from the Sites catalogue: ${missing.join(', ')}`);
if (extra.length) problems.push(`catalogue entries with no site directory: ${extra.join(', ')}`);

const dupCheck = [...nav.matchAll(/https:\/\/([a-z0-9-]+)\.wyattau\.com/g)].map((m) => m[1]);
const dupes = dupCheck.filter((d, i) => dupCheck.indexOf(d) !== i);
if (dupes.length) problems.push(`catalogue entries listed more than once: ${[...new Set(dupes)].join(', ')}`);

if (problems.length) {
  console.error('site-nav parity check FAILED:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`site-nav parity ok: ${actual.length} site dirs, ${catalogued.size} catalogue domains, no drift`);
