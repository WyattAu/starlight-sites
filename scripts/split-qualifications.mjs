#!/usr/bin/env node
/**
 * Split qualifications.wyattau.com into individual per-qualification sites.
 * Each qualification gets its own site at {qual}.wyattau.com
 *
 * Usage: node scripts/split-qualifications.mjs
 */

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const QUAL_SITE = join(ROOT, 'sites', 'qualifications')
const SHARED = join(ROOT, 'shared')

const QUALS = [
  {
    name: 'gcse',
    title: 'GCSE',
    url: 'https://gcse.wyattau.com',
    desc: 'GCSE revision notes covering Biology, Chemistry, Physics, Maths, English, and Computer Science.',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Maths', 'English', 'Computer Science'],
  },
  {
    name: 'ap',
    title: 'AP',
    url: 'https://ap.wyattau.com',
    desc: 'Advanced Placement revision notes covering Calculus, Physics, Chemistry, Biology, and more.',
    subjects: [
      'Calculus',
      'Physics',
      'Chemistry',
      'Biology',
      'Statistics',
      'History',
      'English',
      'CS',
    ],
  },
  {
    name: 'highers',
    title: 'Highers',
    url: 'https://highers.wyattau.com',
    desc: 'Scottish Highers revision notes covering Biology, Chemistry, Physics, Maths, and Computer Science.',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Maths', 'Computer Science'],
  },
  {
    name: 'leaving-cert',
    title: 'Leaving Cert',
    url: 'https://leaving-cert.wyattau.com',
    srcDir: 'ilc',
    desc: 'Irish Leaving Certificate revision notes covering Biology, Chemistry, Physics, Maths, and Computer Science.',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Maths', 'Computer Science'],
  },
  {
    name: 'cbse',
    title: 'CBSE',
    url: 'https://cbse.wyattau.com',
    desc: 'CBSE (India) revision notes covering Chemistry, Physics, and Mathematics.',
    subjects: ['Chemistry', 'Physics', 'Mathematics'],
  },
  {
    name: 'gaokao',
    title: 'Gaokao',
    url: 'https://gaokao.wyattau.com',
    desc: 'Gaokao (China) revision notes covering Mathematics.',
    subjects: ['Mathematics'],
  },
  {
    name: 'hsc',
    title: 'HSC',
    url: 'https://hsc.wyattau.com',
    desc: 'HSC (Australia) revision notes covering Physics.',
    subjects: ['Physics'],
  },
  {
    name: 'sat',
    title: 'SAT',
    url: 'https://sat.wyattau.com',
    desc: 'SAT revision notes covering Mathematics, Reading and Writing, and Science.',
    subjects: ['Mathematics', 'Reading and Writing', 'Science'],
  },
]

function read(path) {
  return readFileSync(path, 'utf8')
}

function write(path, content) {
  writeFileSync(path, content, 'utf8')
}

// Template for astro.config.mjs
function astroConfig({ name, title, url, desc }) {
  return `import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { cloudflareAnalytics } from '../../shared/config/analytics.mjs'
import { clientOnlyDirectives } from '../../shared/integrations/client-only-directives'
import lazyImages from '../../shared/integrations/lazy-images/index.mjs'

export default defineConfig({
  site: '${url}',
  output: 'static',
  integrations: [
    starlight({
      title: '${title}',
      pagefind: false,
      expressiveCode: { themes: ["dracula", "github-light"] },
      description: '${desc}',

      components: {
        Head: './src/components/starlight/Head.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
        Search: './src/components/starlight/Search.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      sidebar: [
        { label: '${title}', items: [{ autogenerate: { directory: '.' } }] },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ff6b35' } },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/fonts/Inter-latin.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/fonts/JetBrainsMono-latin.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: true,
          },
        },
        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '${url}/img/social-card.svg',
          },
        },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '${title}',
            description: '${desc}',
            url: '${url}',
            publisher: {
              '@type': 'Organization',
              name: "Wyatt's Notes",
              url: 'https://wyattsnotes.wyattau.com',
            },
          }),
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    mdx(),
    solidJs(),
    sitemap(),
    compress(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath, clientOnlyDirectives],
    rehypePlugins: [rehypeKatex, lazyImages],
  },
})
`
}

// Template for package.json
function pkgJson({ name, title }) {
  return JSON.stringify(
    {
      name: `starlight-${name}`,
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
        dompurify: '^3.2.4',
        'rehype-katex': '^7.0.1',
        'remark-math': '^6.0.0',
        'solid-js': '^1.9.7',
      },
      devDependencies: {
        typescript: '^5.8.2',
      },
    },
    null,
    2,
  )
}

// Template for index.mdx
// TODO: subject links should map to actual content paths per site
// e.g., Chemistry -> /chemistry/, Maths -> /maths/
const SUBJECT_LINKS = {
  Biology: '/biology/',
  Chemistry: '/chemistry/',
  Physics: '/physics/',
  Mathematics: '/maths/',
  Maths: '/maths/',
  English: '/english/',
  'Computer Science': '/computer-science/',
  CS: '/computer-science/',
  Calculus: '/calculus-ab/',
  Statistics: '/statistics/',
  History: '/history/',
  'Reading and Writing': '/reading-and-writing/',
  Science: '/science-question-bank/',
}

function indexMdx({ title, desc, subjects }) {
  return `---
template: splash
title: ${title}
description: "${desc}"
hero:
  tagline: ${desc}
  actions:
    - text: Browse Notes
      link: /intro/
      icon: right-arrow
      variant: primary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

${title} revision notes covering core subjects with detailed explanations, worked examples, practice problems, and flashcards.

## Subjects

<CardGrid>
${subjects
  .map(
    s => `  <a href="${SUBJECT_LINKS[s] || '/intro/'}" class="landing-card">
    <Card title="${s}" icon="document">
      ${title} ${s} notes covering key definitions, core concepts, worked examples, and practice problems.
    </Card>
  </a>`,
  )
  .join('\n')}
</CardGrid>
`
}

// === Main ===

for (const qual of QUALS) {
  const siteDir = join(ROOT, 'sites', qual.name)
  const srcDirName = qual.srcDir || qual.name
  const contentDir = join(QUAL_SITE, 'src', 'content', 'docs', srcDirName)

  if (!existsSync(contentDir)) {
    console.log(`SKIP ${qual.name}: no content at ${contentDir}`)
    continue
  }

  if (existsSync(siteDir)) {
    console.log(`SKIP ${qual.name}: site already exists at ${siteDir}`)
    continue
  }

  console.log(`\n=== Creating ${qual.name}.wyattau.com ===`)

  // Create directory structure
  for (const dir of ['src/components/starlight', 'src/styles', 'public/fonts']) {
    mkdirSync(join(siteDir, dir), { recursive: true })
  }

  // Create content directory
  mkdirSync(join(siteDir, 'src', 'content', 'docs'), { recursive: true })

  // Copy content from qualifications/{qual}/
  cpSync(contentDir, join(siteDir, 'src', 'content', 'docs'), { recursive: true })

  // Copy starlight components
  for (const f of readdirSync(join(QUAL_SITE, 'src', 'components', 'starlight'))) {
    cpSync(
      join(QUAL_SITE, 'src', 'components', 'starlight', f),
      join(siteDir, 'src', 'components', 'starlight', f),
    )
  }

  // Copy custom.css
  cpSync(
    join(QUAL_SITE, 'src', 'styles', 'custom.css'),
    join(siteDir, 'src', 'styles', 'custom.css'),
  )

  // Copy public assets
  const publicDir = join(siteDir, 'public')
  const qualPublic = join(QUAL_SITE, 'public')
  for (const f of readdirSync(qualPublic)) {
    const src = join(qualPublic, f)
    const dest = join(publicDir, f)
    if (existsSync(src)) {
      if (!existsSync(dest)) {
        cpSync(src, dest, { recursive: true })
      }
    }
  }

  // Write astro.config.mjs
  write(join(siteDir, 'astro.config.mjs'), astroConfig(qual))

  // Write package.json
  write(join(siteDir, 'package.json'), pkgJson(qual))

  // Write tsconfig.json
  write(
    join(siteDir, 'tsconfig.json'),
    JSON.stringify(
      {
        extends: '../../tsconfig.base.json',
        include: ['src'],
      },
      null,
      2,
    ),
  )

  // Generate index.mdx
  write(join(siteDir, 'src', 'content', 'docs', 'index.mdx'), indexMdx(qual))

  console.log(`  [OK] Created ${qual.name}.wyattau.com`)
}

// === Update qualifications.wyattau.com ===
console.log(`\n=== Updating qualifications.wyattau.com ===`)
console.log('  [WARN] Sidebar must be updated manually - remove GCSE, AP, Highers, ILC entries')
console.log('  [WARN] Description must be updated manually')

console.log(`\n=== Done! ===`)
console.log(`Created ${QUALS.length} new sites:`)
for (const q of QUALS) {
  console.log(`  https://${q.name}.wyattau.com`)
}
console.log(`\nNext steps:`)
console.log(`1. Add new sites to deploy.yml matrix`)
console.log(`2. Update landing page index.astro`)
console.log(`3. Push and deploy`)
