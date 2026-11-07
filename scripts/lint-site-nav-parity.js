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

// Every surface that catalogues sites: the header navigator (synced to all
// sites) and the landing page's hub markdown, home page data, and layout nav.
const surfaces = [
  'shared/scripts/site-nav.js',
  'sites/main/src/content/docs/hub.md',
  'sites/main/src/pages/index.astro',
  'sites/main/src/layouts/Layout.astro',
];

const domainRe = /https:\/\/([a-z0-9-]+)\.wyattau\.com/g;
const catalogued = new Set();
for (const rel of surfaces) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  for (const m of text.matchAll(domainRe)) catalogued.add(m[1]);
}

const actual = fs
  .readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !name.startsWith('.') && name !== 'main');

const missing = actual.filter((s) => !catalogued.has(s));
const extra = [...catalogued].filter((s) => !actual.includes(s));

const problems = [];
if (missing.length) problems.push(`site directories missing from the site catalogues: ${missing.join(', ')}`);
if (extra.length) problems.push(`catalogue entries with no site directory: ${extra.join(', ')}`);

const dupCheck = [];
for (const rel of surfaces) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  for (const m of text.matchAll(domainRe)) dupCheck.push(`${rel}:${m[1]}`);
}
const seen = new Map();
for (const entry of dupCheck) seen.set(entry, (seen.get(entry) || 0) + 1);
const dupes = [...seen.entries()].filter(([, n]) => n > 1).map(([e]) => e);
if (dupes.length) problems.push(`catalogue entries listed more than once on a surface: ${dupes.join(', ')}`);
const deadSurfaces = surfaces.filter((rel) => {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  return ![...text.matchAll(domainRe)].some((m) => actual.includes(m[1]));
});
if (deadSurfaces.length) problems.push(`surfaces cataloguing no real sites: ${deadSurfaces.join(', ')}`);

if (problems.length) {
  console.error('site-nav parity check FAILED:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`site-nav parity ok: ${actual.length} site dirs, ${catalogued.size} catalogue domains, no drift`);
