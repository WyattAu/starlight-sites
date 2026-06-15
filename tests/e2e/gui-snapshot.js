#!/usr/bin/env node
/**
 * GUI Traversal, Snapshot, and Accessibility Audit.
 *
 * Builds each site, serves it locally, navigates a curated set of routes,
 * and captures for every route:
 *   - DOM structural snapshot (.dom.json)  -- always
 *   - Raw HTML snapshot (.html)            -- always
 *   - PNG screenshot (.png)                -- when a headless browser is available
 *
 * It then runs a WCAG-oriented accessibility audit over the DOM and compares
 * each snapshot against a committed baseline (tests/e2e/baseline/*.json) to
 * surface structural drift between the design vision and the implementation.
 *
 * Usage:
 *   node tests/e2e/gui-snapshot.js [site]        # one site (default: dse)
 *   node tests/e2e/gui-snapshot.js --all         # all 9 Astro sites
 *   node tests/e2e/gui-snapshot.js --no-build    # reuse existing dist/
 *   node tests/e2e/gui-snapshot.js --screenshots # force screenshot capture
 *
 * Output: /tmp/gui-snapshots/<site>/<page>.{dom.json,html,png}
 *
 * Browser dependency: screenshots require Playwright's chromium. The script
 * auto-detects availability and degrades gracefully (DOM snapshots still
 * captured). Install once with: npx playwright install --with-deps chromium
 */

'use strict';

const { execSync, spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const ROOT = path.join(__dirname, '..', '..');
const SITES_DIR = path.join(ROOT, 'sites');
const OUTPUT_DIR = '/tmp/gui-snapshots';
const BASELINE_DIR = path.join(ROOT, 'tests', 'e2e', 'baseline');

const SITES = [
  'dse', 'ib', 'alevel', 'university', 'qualifications',
  'programming', 'infrastructure', 'languages', 'tools',
];

// Curated routes per site. '/' is always added.
const SITE_PAGES = {
  dse: ['/maths/', '/physics/', '/chemistry/'],
  ib: ['/mathematics/', '/physics/', '/biology/'],
  alevel: ['/maths/', '/physics/', '/chemistry/'],
  university: ['/mathematics/', '/physics/'],
  qualifications: ['/gcse/', '/ap/'],
  programming: ['/1_enviroment_and_toolchain/', '/3_types/'],
  infrastructure: ['/linux/', '/networking/'],
  languages: ['/rust/', '/python/'],
  tools: ['/algorithms/', '/git/'],
};

const argv = process.argv.slice(2);
const NO_BUILD = argv.includes('--no-build');
const FORCE_SCREENSHOTS = argv.includes('--screenshots');
const targetArg = argv.find((a) => !a.startsWith('--'));

function targetSites() {
  if (argv.includes('--all')) return SITES;
  if (targetArg && SITES.includes(targetArg)) return [targetArg];
  return ['dse'];
}

// ---------------------------------------------------------------------------
// Browser availability detection (Capability Discovery Protocol).
// ---------------------------------------------------------------------------
let browserLauncher = null;
async function resolveBrowser() {
  if (FORCE_SCREENSHOTS === false && process.env.GUI_NO_SCREENSHOTS) return null;
  try {
    const mod = await import('playwright');
    browserLauncher = mod.chromium;
    return mod.chromium;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Build + serve.
// ---------------------------------------------------------------------------
function buildSite(site) {
  const siteDir = path.join(SITES_DIR, site);
  const distDir = path.join(siteDir, 'dist');
  if (NO_BUILD && fs.existsSync(distDir)) return distDir;
  if (fs.existsSync(distDir)) {
    console.log(`  [${site}] reusing existing dist/ (remove to force rebuild)`);
    return distDir;
  }
  console.log(`  [${site}] Building...`);
  try {
    execSync('bun run build', {
      cwd: siteDir,
      stdio: 'pipe',
      timeout: 600000,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    });
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
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
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
        '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
        '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
        '.json': 'application/json', '.woff2': 'font/woff2',
      };
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(port, () => resolve(server));
  });
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

// ---------------------------------------------------------------------------
// DOM structural snapshot.
// ---------------------------------------------------------------------------
function extractDOMSnapshot(html) {
  const count = (re) => (html.match(re) || []).length;
  return {
    hasNav: /<nav[\s>]/.test(html),
    hasMain: /<main[\s>]/.test(html),
    hasFooter: /<footer[\s>]/.test(html),
    hasHeader: /<header[\s>]/.test(html),
    hasBreadcrumbs: /class="[^"]*breadcrumb/i.test(html),
    hasSearch: /search/i.test(html),
    hasSidebar: /sidebar/i.test(html),
    hasTOC: /table-of-contents|class="[^"]*toc/i.test(html),
    title: (html.match(/<title[^>]*>([^<]+)<\/title>/i) || [, ''])[1].trim(),
    h1: (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1].replace(/<[^>]+>/g, '').trim(),
    h2Count: count(/<h2/g),
    h3Count: count(/<h3/g),
    linkCount: count(/<a\s/g),
    imgCount: count(/<img\s/g),
    imgWithoutAlt: count(/<img(?![^>]*\salt=)[^>]*>/g),
    scriptCount: count(/<script/g),
    hasKaTeX: /katex/i.test(html),
    hasMermaid: /mermaid/i.test(html),
    hasJSONLD: /application\/ld\+json/.test(html),
    hasSkipLink: /skip-link|skip\s+to\s+(main|content)/i.test(html),
    hasViewport: /name=["']viewport["']/i.test(html),
    hasLangAttr: /<html[^>]*\slang=/i.test(html),
    ariaLabelCount: count(/aria-label/g),
    ariaHiddenCount: count(/aria-hidden/g),
    hasFocusVisible: /focus-visible/.test(html),
    buttonCount: count(/<button/g),
    formLabelCount: count(/<label/g),
    htmlSize: html.length,
  };
}

function auditAccessibility(snapshot) {
  const issues = [];
  if (!snapshot.hasNav) issues.push('Missing <nav> landmark');
  if (!snapshot.hasMain) issues.push('Missing <main> landmark');
  if (!snapshot.hasSkipLink) issues.push('Missing skip-to-content link');
  if (!snapshot.hasLangAttr) issues.push('Missing <html lang> attribute');
  if (!snapshot.hasViewport) issues.push('Missing viewport meta tag');
  if (snapshot.ariaLabelCount < 2) issues.push('Few aria-labels (' + snapshot.ariaLabelCount + ')');
  if (snapshot.imgWithoutAlt > 0) issues.push(snapshot.imgWithoutAlt + ' <img> without alt');
  if (!snapshot.h1) issues.push('Missing <h1> heading');
  return issues;
}

function compareWithBaseline(site, page, snapshot) {
  const baselinePath = path.join(BASELINE_DIR, site + '.json');
  if (!fs.existsSync(baselinePath)) return { drift: false, reason: 'no baseline' };
  let baseline;
  try {
    baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
  } catch {
    return { drift: false, reason: 'baseline unreadable' };
  }
  const entry = baseline[page];
  if (!entry) return { drift: false, reason: 'page not in baseline' };
  const diffs = [];
  for (const [key, value] of Object.entries(snapshot)) {
    if (key === 'htmlSize' || key === 'title' || key === 'h1') continue; // volatile
    if (entry[key] !== undefined && entry[key] !== value) {
      diffs.push({ field: key, expected: entry[key], actual: value });
    }
  }
  return { drift: diffs.length > 0, diffs };
}

// ---------------------------------------------------------------------------
// Per-site snapshot run.
// ---------------------------------------------------------------------------
async function snapshotSite(site, browser) {
  const siteDir = path.join(SITES_DIR, site);
  const outputSiteDir = path.join(OUTPUT_DIR, site);
  fs.mkdirSync(outputSiteDir, { recursive: true });

  console.log(`\n=== ${site.toUpperCase()} ===`);
  const distDir = buildSite(site);
  if (!distDir) return { snapshots: [], a11yIssues: [], drift: [] };

  const port = 8700 + SITES.indexOf(site);
  const server = await serveDirectory(distDir, port);

  const pages = ['/', ...(SITE_PAGES[site] || [])];
  const snapshots = [];
  const a11yIssues = [];
  const drift = [];
  let context = null;
  if (browser) {
    try {
      context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    } catch (err) {
      console.log(`  [${site}] browser context unavailable: ${err.message}`);
    }
  }

  for (const page of pages) {
    const url = `http://localhost:${port}${page}`;
    console.log(`  [${site}] ${page}`);
    try {
      const response = await fetchPage(url);
      if (response.status !== 200) {
        console.log(`    -> HTTP ${response.status}`);
        continue;
      }
      const snapshot = extractDOMSnapshot(response.body);
      snapshots.push({ page, snapshot });

      const safeName = (page.replace(/\//g, '_').replace(/^_/, '') || 'index');
      fs.writeFileSync(path.join(outputSiteDir, safeName + '.dom.json'), JSON.stringify(snapshot, null, 2));
      fs.writeFileSync(path.join(outputSiteDir, safeName + '.html'), response.body);

      const issues = auditAccessibility(snapshot);
      for (const issue of issues) a11yIssues.push({ page, issue });
      const cmp = compareWithBaseline(site, page, snapshot);
      if (cmp.drift) {
        drift.push({ page, diffs: cmp.diffs });
        console.log(`    drift: ${cmp.diffs.map((d) => d.field).join(', ')}`);
      }

      // Screenshot via headless browser when available.
      if (context) {
        try {
          const pg = await context.newPage();
          await pg.goto(url, { waitUntil: 'load', timeout: 20000 });
          await pg.waitForTimeout(400); // allow hydration
          await pg.screenshot({ path: path.join(outputSiteDir, safeName + '.png'), fullPage: true });
          await pg.close();
          console.log(`    -> OK (${(response.body.length / 1024).toFixed(1)}KB) + screenshot`);
        } catch (err) {
          console.log(`    -> OK (DOM only; screenshot failed: ${err.message})`);
        }
      } else {
        console.log(`    -> OK (${(response.body.length / 1024).toFixed(1)}KB; DOM only)`);
      }
    } catch (err) {
      console.error(`    -> error: ${err.message}`);
    }
  }

  if (context) await context.close();
  server.close();
  return { snapshots, a11yIssues, drift };
}

async function main() {
  const sites = targetSites();
  const browser = await resolveBrowser();
  if (browser) {
    console.log('Playwright chromium detected: screenshots enabled.');
  } else {
    console.log('Playwright not installed: DOM snapshots only (install with: npx playwright install chromium).');
  }
  console.log(`Sites: ${sites.join(', ')}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const aggregate = { a11yIssues: [], drift: [] };
  for (const site of sites) {
    const result = await snapshotSite(site, browser);
    aggregate.a11yIssues.push(...result.a11yIssues.map((i) => ({ site, ...i })));
    aggregate.drift.push(...result.drift.map((d) => ({ site, ...d })));
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.json'), JSON.stringify(aggregate, null, 2));

  console.log('\n=== Accessibility Audit Summary ===');
  if (aggregate.a11yIssues.length === 0) {
    console.log('No accessibility issues detected across audited routes.');
  } else {
    for (const { site, page, issue } of aggregate.a11yIssues) {
      console.log(`  ${site}${page}: ${issue}`);
    }
  }

  console.log('\n=== Drift Detection ===');
  if (aggregate.drift.length === 0) {
    console.log('No structural drift against baseline.');
  } else {
    for (const { site, page, diffs } of aggregate.drift) {
      console.log(`  ${site}${page}: ${diffs.map((d) => `${d.field}(${d.expected}->${d.actual})`).join(', ')}`);
    }
  }

  console.log('\nDone.');
  if (browser) await browser.close();
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
