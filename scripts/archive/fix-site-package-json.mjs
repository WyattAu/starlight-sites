#!/usr/bin/env node

/**
 * fix-site-package-json.mjs -- Creates proper package.json files for new sites.
 *
 * Each site needs its own package.json with build scripts.
 * Dependencies are resolved from the root package.json via workspace.
 *
 * Usage:
 *   node scripts/fix-site-package-json.mjs
 */

import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const NEW_SITES = [
  'civics-tests',
  'driving-uk',
  'driving-us',
  'driving-eu',
  'language-tests',
  'professional-certs',
]

const PACKAGE_JSON_TEMPLATE = siteName => ({
  name: `starlight-${siteName}`,
  version: '0.1.0',
  type: 'module',
  scripts: {
    dev: 'astro dev',
    build: 'bunx astro build',
    preview: 'astro preview',
  },
  dependencies: {
    '@astrojs/mdx': '^6.0.3',
    '@astrojs/sitemap': '^3.7.3',
    '@astrojs/solid-js': '^6.0.1',
    '@astrojs/starlight': '^0.40.0',
    astro: '^6.4.8',
    'astro-mermaid': '^2.0.2',
    mermaid: '^11.15.0',
    'rehype-katex': '^7.0.1',
    'remark-math': '^6.0.0',
    'solid-js': '^1.9.7',
  },
  devDependencies: {
    typescript: '^5.8.2',
  },
})

for (const siteName of NEW_SITES) {
  const siteDir = join('sites', siteName)
  const packageJsonPath = join(siteDir, 'package.json')

  if (!existsSync(packageJsonPath)) {
    const packageJson = PACKAGE_JSON_TEMPLATE(siteName)
    writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
    console.log(`Created: ${packageJsonPath}`)
  } else {
    console.log(`Exists: ${packageJsonPath}`)
  }
}

console.log('\nDone!')
