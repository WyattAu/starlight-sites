/**
 * Shared e2e infrastructure: dev server + site build helpers.
 *
 * Extracted from gui-snapshot.js and contrast-check.js (Phase 7
 * de-duplication). Both scripts had identical copies of buildSite,
 * serveDirectory, and the SITES/SITE_PAGES tables; that tripled the
 * maintenance surface for any change to the dev-server contract.
 *
 * This module is consumed by:
 *   - tests/e2e/gui-snapshot.js
 *   - tests/e2e/contrast-check.js
 *   - any future traversals that need to stand up a local site.
 *
 * Usage:
 *   import { buildSite, serveDirectory, SITES, SITE_PAGES } from './lib/server.mjs'
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const ROOT = path.resolve(__dirname, '..', '..', '..')
export const SITES_DIR = path.join(ROOT, 'sites')

export const SITES = [
  'dse',
  'ib',
  'alevel',
  'university',
  'qualifications',
  'programming',
  'infrastructure',
  'languages',
  'tools',
]

/**
 * Curated routes per site. Routes are intentionally curated (not
 * auto-discovered) so the snapshot baseline stays stable across content
 * additions; auto-discovery would couple the visual regression surface to
 * the content graph and produce noisy diffs.
 *
 * Each route was verified against the production sitemap-0.xml on
 * 2026-06-19 to point at a page that actually exists. Earlier entries
 * pointed at section roots (e.g. /maths/, /algorithms/) that have no
 * index.md and therefore no built page, producing silent 404s in the
 * traversal. Section roots that DO have an index (e.g. /biology/) are
 * preferred over deep pages for stability.
 */
export const SITE_PAGES = {
  dse: ['/biology/', '/physics/', '/chemistry/'],
  ib: ['/biology/', '/physics/', '/chemistry/'],
  alevel: [
    '/biology/biodiversity-classification-evolution/',
    '/chemistry/atomic-structure/',
    '/physics/',
  ],
  university: ['/admissions/', '/mathematics/', '/physics/'],
  qualifications: ['/ap/', '/gcse/'],
  programming: ['/1_enviroment_and_toolchain/', '/3_types/'],
  infrastructure: ['/databases/01-relational-theory/relational-theory/', '/linux/'],
  languages: ['/rust/', '/python/'],
  tools: ['/algorithms/01-complexity-analysis/complexity-analysis/', '/git/'],
}

/**
 * Default content-types served by serveDirectory. Mirrors the file
 * extensions the production CDN is configured to send so the local
 * server is a faithful stub for traversal and screenshot capture.
 */
const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

/**
 * Build a single Astro site. Reuses an existing dist/ if present
 * (the build is expensive; we only rebuild when explicitly asked).
 *
 * @param {string} site - Site subdirectory under sites/.
 * @param {object} [opts]
 * @param {boolean} [opts.noBuild] - If true, require existing dist/.
 * @param {number} [opts.timeoutMs] - Build timeout (default 10 minutes).
 * @returns {string|null} Absolute path to dist/, or null on failure.
 */
export function buildSite(site, opts = {}) {
  const { noBuild = false, timeoutMs = 10 * 60 * 1000 } = opts
  const siteDir = path.join(SITES_DIR, site)
  const distDir = path.join(siteDir, 'dist')
  if (distDir && fs.existsSync(distDir)) return distDir
  if (noBuild) return null
  try {
    execSync('bun run build', {
      cwd: siteDir,
      stdio: 'pipe',
      timeout: timeoutMs,
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' },
    })
  } catch (_err) {
    return null
  }
  return fs.existsSync(distDir) ? distDir : null
}

/**
 * Stand up a static file server rooted at `dir` on `port`.
 *
 * The server normalises directory requests to index.html and appends
 * `.html` for extension-less paths, mirroring the Cloudflare Pages
 * pretty-URL behaviour so traversals against the dev server match the
 * production routing contract.
 *
 * @param {string} dir - Absolute path to the directory to serve.
 * @param {number} port - TCP port to listen on.
 * @returns {Promise<http.Server>} Resolves to the listening server.
 */
export function serveDirectory(dir, port) {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      // Resolve the URL path against the dist root. We strip the query
      // string and any trailing slash so /foo/ and /foo are equivalent.
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
      let filePath = path.join(dir, urlPath === '/' ? '/index.html' : urlPath)
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html')
      }
      if (!fs.existsSync(filePath) && !path.extname(filePath)) {
        filePath += '.html'
      }
      if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('Not Found')
        return
      }
      const ext = path.extname(filePath).toLowerCase()
      res.writeHead(200, { 'Content-Type': CONTENT_TYPES[ext] || 'application/octet-stream' })
      fs.createReadStream(filePath).pipe(res)
    })
    server.listen(port, '127.0.0.1', () => resolve(server))
  })
}

/**
 * Issue a single GET request and resolve to { status, body }.
 *
 * @param {string} url - Fully-qualified URL.
 * @param {number} [timeoutMs=10000] - Response timeout.
 * @returns {Promise<{status: number, body: string}>}
 */
export function fetchPage(url, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    http
      .get(url, { timeout: timeoutMs }, res => {
        let data = ''
        res.on('data', chunk => (data += chunk))
        res.on('end', () => resolve({ status: res.statusCode || 0, body: data }))
      })
      .on('error', reject)
  })
}

/**
 * Pick a free TCP port by listening and immediately closing. Used by
 * traversals that need deterministic-but-collision-free ports across
 * parallel runs.
 *
 * @returns {Promise<number>}
 */
export function pickPort() {
  return new Promise((resolve, reject) => {
    const srv = http.createServer()
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address()
      if (addr && typeof addr === 'object') {
        const port = addr.port
        srv.close(() => resolve(port))
      } else {
        srv.close()
        reject(new Error('failed to pick a free port'))
      }
    })
    srv.on('error', reject)
  })
}
