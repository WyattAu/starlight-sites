#!/usr/bin/env node
/**
 * Split languages.wyattau.com into individual per-language sites.
 * Each language gets its own site at {language}.wyattau.com
 *
 * Usage: node scripts/split-languages.mjs
 */

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const LANGUAGES_SITE = join(ROOT, 'sites', 'languages')

const LANGUAGES = [
  { name: 'dart', title: 'Dart', url: 'https://dart.wyattau.com' },
  { name: 'elixir', title: 'Elixir', url: 'https://elixir.wyattau.com' },
  { name: 'go', title: 'Go', url: 'https://go.wyattau.com' },
  { name: 'haskell', title: 'Haskell', url: 'https://haskell.wyattau.com' },
  { name: 'java', title: 'Java', url: 'https://java.wyattau.com' },
  { name: 'kotlin', title: 'Kotlin', url: 'https://kotlin.wyattau.com' },
  { name: 'python', title: 'Python', url: 'https://python.wyattau.com' },
  { name: 'ruby', title: 'Ruby', url: 'https://ruby.wyattau.com' },
  { name: 'rust', title: 'Rust', url: 'https://rust.wyattau.com' },
  { name: 'swift', title: 'Swift', url: 'https://swift.wyattau.com' },
  { name: 'typescript', title: 'TypeScript', url: 'https://typescript.wyattau.com' },
]

function read(path) {
  return readFileSync(path, 'utf8')
}

function write(path, content) {
  writeFileSync(path, content, 'utf8')
}

for (const lang of LANGUAGES) {
  const siteDir = join(ROOT, 'sites', lang.name)
  const contentDir = join(LANGUAGES_SITE, 'src', 'content', 'docs', lang.name)
  
  if (!existsSync(contentDir)) {
    console.log(`SKIP ${lang.name}: no content at ${contentDir}`)
    continue
  }

  if (existsSync(siteDir)) {
    console.log(`SKIP ${lang.name}: site already exists at ${siteDir}`)
    continue
  }

  console.log(`\n=== Creating ${lang.name}.wyattau.com ===`)

  // Create directory structure
  for (const dir of [
    'src/components',
    'src/components/starlight',
    'src/components/flashcard',
    'src/utils',
    'src/styles',
    'src/i18n',
    'public/fonts',
  ]) {
    mkdirSync(join(siteDir, dir), { recursive: true })
  }

  // Copy content
  cpSync(contentDir, join(siteDir, 'src', 'content', 'docs'), { recursive: true })
  // Also copy any top-level docs like flashcards, practice
  for (const f of readdirSync(join(LANGUAGES_SITE, 'src', 'content', 'docs'), { withFileTypes: true })) {
    if (f.isFile() && (f.name.endsWith('.md') || f.name.endsWith('.mdx')) && f.name.includes(lang.name)) {
      cpSync(join(LANGUAGES_SITE, 'src', 'content', 'docs', f.name), join(siteDir, 'src', 'content', 'docs', f.name))
    }
  }

  // Copy shared static assets
  for (const f of ['page-search.js', 'cross-site-search.js', 'reader.js', 'sw.js', 'manifest.json']) {
    const src = join(LANGUAGES_SITE, 'public', f)
    if (existsSync(src)) cpSync(src, join(siteDir, 'public', f))
  }
  // Copy fonts from shared
  cpSync(join(ROOT, 'shared', 'fonts'), join(siteDir, 'public', 'fonts'), { recursive: true })

  // Copy shared components, utils, styles from canonical source
  const syncTargets = [
    ['shared/components', 'src/components'],
    ['shared/utils', 'src/utils'],
    ['shared/styles', 'src/styles'],
    ['shared/i18n', 'src/i18n'],
  ]
  for (const [srcRel, destRel] of syncTargets) {
    for (const entry of readdirSync(join(ROOT, srcRel), { withFileTypes: true })) {
      const src = join(ROOT, srcRel, entry.name)
      const dest = join(siteDir, destRel, entry.name)
      if (entry.isDirectory()) {
        // Skip starlight override dir (handled separately)
        if (entry.name === 'starlight') continue
        cpSync(src, dest, { recursive: true })
      } else {
        cpSync(src, dest)
      }
    }
  }
  // Copy starlight overrides (Head, PageTitle, MarkdownContent, Search)
  for (const f of ['Head.astro', 'PageTitle.astro', 'MarkdownContent.astro', 'Search.astro']) {
    const src = join(LANGUAGES_SITE, 'src', 'components', 'starlight', f)
    if (existsSync(src)) cpSync(src, join(siteDir, 'src', 'components', 'starlight', f))
  }

  // Generate astro.config.mjs based on languages site template
  const template = read(join(LANGUAGES_SITE, 'astro.config.mjs'))
  const config = template
    .replace(/title: 'Languages'/, `title: '${lang.title}'`)
    .replace(/site: 'https:\/\/languages\.wyattau\.com'/, `site: 'https://${lang.name}.wyattau.com'`)
    .replace(/description:\s*'[^']*'/, `description: '${lang.title} programming language notes.'`)
    // Replace sidebar with just the language's section
    .replace(/sidebar:\s*\[[^\]]*\]/s, `sidebar: [\n        { label: '${lang.title}', autogenerate: { directory: '.' } },\n      ]`)
    // Fix OG image URL
    .replace(/og:image.*https:\/\/[^\/]+/, `og:image', content: 'https://${lang.name}.wyattau.com`)
    // Fix JSON-LD URLs
    .replace(/url: 'https:\/\/languages\.wyattau\.com'/g, `url: 'https://${lang.name}.wyattau.com'`)
    .replace(/name: 'Languages'/, `name: '${lang.title}'`)

  write(join(siteDir, 'astro.config.mjs'), config)

  // Generate package.json
  write(join(siteDir, 'package.json'), JSON.stringify({
    name: `starlight-${lang.name}`,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'astro dev',
      build: 'astro build',
      preview: 'astro preview',
    },
    dependencies: {
      '@astrojs/mdx': '^6.0.3',
      '@astrojs/sitemap': '^3.7.3',
      '@astrojs/solid-js': '^6.0.1',
      '@astrojs/starlight': '^0.40.0',
      astro: '^6.4.8',
      'astro-compress': '2.4.1',
      'solid-js': '^1.9.13',
      '@kobalte/core': '^0.13.11',
      '@tailwindcss/vite': '^4.3.1',
      tailwindcss: '^4.3.1',
      remarkMath: '^6.0.0',
      'rehype-katex': '^7.0.1',
      katex: '^0.16.44',
    },
  }, null, 2))

  // Generate tsconfig.json
  write(join(siteDir, 'tsconfig.json'), JSON.stringify({
    extends: 'astro/tsconfigs/strict',
    compilerOptions: {
      jsx: 'preserve',
      jsxImportSource: 'solid-js',
      baseUrl: '.',
      paths: {
        '@components/*': ['src/components/*'],
        '@/*': ['src/*'],
      },
    },
  }, null, 2))

  // Create content.config.ts
  write(join(siteDir, 'src', 'content.config.ts'), read(join(LANGUAGES_SITE, 'src', 'content.config.ts')))

  // Create src/env.d.ts
  write(join(siteDir, 'src', 'env.d.ts'), '/// <reference types="astro/client" />\n')

  console.log(`  Created ${lang.name}.wyattau.com at ${siteDir}`)
  console.log(`  URL: https://${lang.name}.wyattau.com`)
}

console.log('\n=== Done! ===')
console.log('Next steps:')
console.log('1. Add new sites to scripts/sync-shared.mjs ASTRO_SITES if needed')
console.log('2. Add deploy jobs to .github/workflows/deploy.yml')
console.log('3. Update landing page at sites/main/src/pages/index.astro')
console.log('4. Run node scripts/sync-shared.mjs to sync shared files')
