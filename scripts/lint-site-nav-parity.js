#!/usr/bin/env node
/**
 * lint-site-nav-parity.js
 *
 * Fails when the site catalogues drift from the actual site fleet (sites/).
 *
 * Coverage rule: the UNION of the catalogue surfaces (header navigator,
 * landing hub markdown, landing home data, landing layout nav) must list
 * every site directory; no catalogue entry may name a nonexistent site.
 * The header navigator must list each site exactly once (it is the
 * network-wide navigation map).
 *
 * Allowlisted non-fleet domains: the landing itself (wyattsnotes) and the
 * search worker (search), which are services, not sites/ directories.
 *
 * Whole-tree safe: reads four files, no traversal.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sitesDir = path.join(root, 'sites');

const surfaces = [
  'shared/scripts/site-nav.js',
  'sites/main/src/content/docs/hub.md',
  'sites/main/src/pages/index.astro',
  'sites/main/src/layouts/Layout.astro',
];

const ALLOWLIST = new Set(['wyattsnotes', 'search']);
const domainRe = /https:\/\/([a-z0-9-]+)\.wyattau\.com/g;

const actual = fs
  .readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !name.startsWith('.') && name !== 'main');

const catalogued = new Set();
const navCount = new Map();
for (const rel of surfaces) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  for (const m of text.matchAll(domainRe)) {
    const d = m[1];
    if (ALLOWLIST.has(d)) continue;
    catalogued.add(d);
    if (rel === surfaces[0]) navCount.set(d, (navCount.get(d) || 0) + 1);
  }
}

const problems = [];

const missing = actual.filter((s) => !catalogued.has(s));
if (missing.length) problems.push(`site directories missing from the catalogues: ${missing.join(', ')}`);

const extra = [...catalogued].filter((s) => !actual.includes(s));
if (extra.length) problems.push(`catalogue entries with no site directory: ${extra.join(', ')}`);

const navDupes = [...navCount.entries()].filter(([, n]) => n > 1).map(([d]) => d);
if (navDupes.length) problems.push(`header navigator lists these more than once: ${navDupes.join(', ')}`);

const navMissing = actual.filter((s) => !navCount.has(s));
if (navMissing.length) problems.push(`header navigator (site-nav.js) is missing: ${navMissing.join(', ')}`);

if (problems.length) {
  console.error('site-nav parity check FAILED:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`site-nav parity ok: ${actual.length} site dirs covered by ${surfaces.length} catalogue surfaces; navigator complete and duplicate-free`);
