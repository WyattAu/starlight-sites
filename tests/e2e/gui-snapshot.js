#!/usr/bin/env node
/**
 * GUI Traversal & Snapshot Script
 *
 * Builds a site, serves it locally, navigates to key pages,
 * captures DOM snapshots and screenshots for review.
 *
 * Usage:
 *   node tests/e2e/gui-snapshot.js [site-name]
 *   node tests/e2e/gui-snapshot.js dse
 *   node tests/e2e/gui-snapshot.js --all
 *
 * Output: /tmp/gui-snapshots/<site>/<page-name>.(html|png)
 *
 * Dependencies: None (uses Node built-ins + curl for serving).
 * For screenshots, install Playwright: npx playwright install chromium
 */

const { execSync, spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const ROOT = path.join(__dirname, '..', '..');
const SITES_DIR = path.join(ROOT, 'sites');
const OUTPUT_DIR = '/tmp/gui-snapshots';

const SITES = [
  'dse', 'ib', 'alevel', 'university', 'qualifications',
  'programming', 'infrastructure', 'languages', 'tools',
];

// Key pages to snapshot per site (paths relative to site root)
const KEY_PAGES = [
  '/',           // Homepage
  '/maths/',     // Maths section (common across sites)
  '/physics/',   // Physics section (common across sites)
];

// Site-specific pages
const SITE_PAGES = {
  dse: ['/biology/', '/chemistry/'],
  ib: ['/biology/', '/computer-science/'],
  alevel: ['/maths/', '/further-maths/'],
  university: ['/mathematics/', '/computer-science/'],
  qualifications: ['/gcse/', '/ap/'],
  programming: ['/1_enviroment_and_toolchain/', '/3_types/'],
  infrastructure: ['/linux/', '/networking/'],
  languages: ['/rust/', '/python/'],
  tools: ['/algorithms/', '/git/'],
};

function getArg() {
  const args = process.argv.slice(2);
  if (args.includes('--all')) return 'all';
  return args[0] || 'dse';
}

function buildSite(site) {
  const siteDir = path.join(SITES_DIR, site);
  const distDir = path.join(siteDir, 'dist');

  if (fs.existsSync(distDir)) {
    console.log(`  [${site}] dist/ already exists, skipping build`);
    return distDir;
  }

  console.log(`  [${site}] Building...`);
  try {
    execSync('bun run build', {
      cwd: siteDir,
      stdio: 'pipe',
      timeout: 300000,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    });
    console.log(`  [${site}] Build complete`);
  } catch (err) {
    console.error(`  [${site}] Build failed: ${err.message}`);
    return null;
  }
  return distDir;
}

function serveDirectory(dir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(dir, req.url === '/' ? '/index.html' : req.url);

      // Try index.html for directory paths
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      // Try .html extension
      if (!fs.existsSync(filePath) && !path.extname(filePath)) {
        filePath = filePath + '.html';
      }

      if (!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }

      const ext = path.extname(filePath);
      const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
      };

      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => {
      console.log(`  Server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

function extractDOMSnapshot(html) {
  // Extract key structural elements for drift detection
  const snapshot = {
    hasNav: /<nav[\s>]/.test(html),
    hasMain: /<main[\s>]/.test(html),
    hasFooter: /<footer[\s>]/.test(html),
    hasBreadcrumbs: /class="breadcrumbs"/.test(html),
    hasSearch: /search/i.test(html),
    hasSidebar: /class="sidebar"/.test(html) || /sidebar-container/.test(html),
    hasTOC: /class="toc"/.test(html) || /table-of-contents/.test(html),
    hasProgressTracker: /progress-tracker/.test(html),
    title: (html.match(/<title[^>]*>([^<]+)<\/title>/i) || [])[1] || '',
    h1: (html.match(/<h1[^>]*>([^<]+)<\/h1>/i) || [])[1] || '',
    h2Count: (html.match(/<h2/g) || []).length,
    linkCount: (html.match(/<a\s/g) || []).length,
    imgCount: (html.match(/<img\s/g) || []).length,
    scriptCount: (html.match(/<script/g) || []).length,
    hasKaTeX: /katex/i.test(html),
    hasMermaid: /mermaid/i.test(html),
    hasJSONLD: /application\/ld\+json/.test(html),
    hasSkipLink: /skip-link/.test(html),
    hasAriaLabels: (html.match(/aria-label/g) || []).length,
    hasFocusVisible: /focus-visible/.test(html),
    htmlSize: html.length,
  };
  return snapshot;
}

function compareSnapshots(baseline, current, page) {
  const diffs = [];
  for (const [key, value] of Object.entries(current)) {
    if (key === 'htmlSize') continue;
    if (baseline && baseline[key] !== undefined && baseline[key] !== value) {
      diffs.push({
        page,
        field: key,
        expected: baseline[key],
        actual: value,
      });
    }
  }
  return diffs;
}

async function snapshotSite(site) {
  const siteDir = path.join(SITES_DIR, site);
  const outputSiteDir = path.join(OUTPUT_DIR, site);
  fs.mkdirSync(outputSiteDir, { recursive: true });

  console.log(`\n=== ${site.toUpperCase()} ===`);

  // Build
  const distDir = buildSite(site);
  if (!distDir) return [];

  // Serve
  const port = 8700 + SITES.indexOf(site);
  const server = await serveDirectory(distDir, port);

  const pages = ['/', ...(SITE_PAGES[site] || [])];
  const snapshots = [];
  const diffs = [];

  for (const page of pages) {
    const url = `http://localhost:${port}${page}`;
    console.log(`  [${site}] Fetching ${page}...`);

    try {
      const response = await fetchPage(url);
      if (response.status !== 200) {
        console.log(`    -> ${response.status}`);
        continue;
      }

      const snapshot = extractDOMSnapshot(response.body);
      snapshots.push({ page, snapshot });

      // Save DOM snapshot
      const safeName = page.replace(/\//g, '_').replace(/^_/, '') || 'index';
      const snapshotPath = path.join(outputSiteDir, `${safeName}.dom.json`);
      fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2));

      // Save HTML snapshot
      const htmlPath = path.join(outputSiteDir, `${safeName}.html`);
      fs.writeFileSync(htmlPath, response.body);

      console.log(`    -> 200 OK (${(response.body.length / 1024).toFixed(1)}KB)`);
      console.log(`       nav=${snapshot.hasNav} main=${snapshot.hasMain} breadcrumbs=${snapshot.hasBreadcrumbs} search=${snapshot.hasSearch}`);
    } catch (err) {
      console.error(`    -> Error: ${err.message}`);
    }
  }

  server.close();
  return snapshots;
}

async function main() {
  const target = getArg();
  const sites = target === 'all' ? SITES : [target];

  if (!sites.every(s => SITES.includes(s))) {
    console.error(`Invalid site: ${target}. Valid: ${SITES.join(', ')}`);
    process.exit(1);
  }

  console.log('GUI Traversal & Snapshot');
  console.log(`Sites: ${sites.join(', ')}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allSnapshots = {};
  for (const site of sites) {
    allSnapshots[site] = await snapshotSite(site);
  }

  // Write summary
  const summaryPath = path.join(OUTPUT_DIR, 'summary.json');
  const summary = {};
  for (const [site, snapshots] of Object.entries(allSnapshots)) {
    summary[site] = snapshots.map(s => ({
      page: s.page,
      ...s.snapshot,
    }));
  }
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  console.log(`\nSummary written to ${summaryPath}`);

  // Accessibility audit summary
  console.log('\n=== Accessibility Audit ===');
  for (const [site, snapshots] of Object.entries(allSnapshots)) {
    for (const { page, snapshot } of snapshots) {
      const issues = [];
      if (!snapshot.hasNav) issues.push('Missing <nav>');
      if (!snapshot.hasMain) issues.push('Missing <main>');
      if (!snapshot.hasSkipLink) issues.push('Missing skip link');
      if (snapshot.hasAriaLabels < 2) issues.push('Insufficient aria-labels');
      if (!snapshot.hasFocusVisible) issues.push('No focus-visible styles');

      if (issues.length > 0) {
        console.log(`  ${site}${page}: ${issues.join(', ')}`);
      }
    }
  }

  console.log('\nDone.');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
