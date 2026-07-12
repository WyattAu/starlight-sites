#!/usr/bin/env node
/**
 * Split university.wyattau.com and infrastructure.wyattau.com into
 * individual per-subject/per-topic sites.
 *
 * Usage: node scripts/split-further-studies.mjs
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const SITES = [
  // === University subjects (Further Studies) ===
  {
    name: 'mathematics',
    title: 'Mathematics',
    url: 'https://mathematics.wyattau.com',
    source: 'university',
    srcDir: 'mathematics',
    desc: 'Proof-based undergraduate mathematics covering algebra, analysis, geometry, and more.',
    tagline: 'Proof-based undergraduate mathematics.',
    topics: [
      'Abstract Algebra', 'Linear Algebra', 'Real Analysis', 'Multivariable Calculus',
      'Ordinary Differential Equations', 'Complex Analysis', 'Number Theory',
      'Probability and Statistics', 'Topology', 'Measure Theory',
      'Functional Analysis', 'Differential Geometry',
    ],
  },
  {
    name: 'physics',
    title: 'Physics',
    url: 'https://physics.wyattau.com',
    source: 'university',
    srcDir: 'physics',
    desc: 'Undergraduate physics covering classical mechanics, electromagnetism, quantum mechanics, and more.',
    tagline: 'Undergraduate physics with derivations.',
    topics: [
      'Classical Mechanics', 'Thermal Physics', 'Electromagnetism',
      'Optics and Waves', 'Quantum Mechanics', 'Solid State Physics',
      'Particle Physics and Cosmology',
    ],
  },
  {
    name: 'computing',
    title: 'Computing',
    url: 'https://computing.wyattau.com',
    source: 'university',
    srcDir: 'computing',
    desc: 'Undergraduate computing and systems notes.',
    tagline: 'Undergraduate computing and systems.',
    topics: [
      'Computer Architecture', 'Operating Systems', 'Networks',
      'Algorithms', 'Programming Languages',
    ],
  },
  {
    name: 'computer-science',
    title: 'Computer Science',
    url: 'https://computer-science.wyattau.com',
    source: 'university',
    srcDir: 'computer-science',
    desc: 'Undergraduate computer science theory and algorithms notes.',
    tagline: 'Undergraduate computer science theory.',
    topics: [
      'Data Structures', 'Algorithms', 'Theory of Computation',
      'Machine Learning', 'Software Engineering',
    ],
  },
  {
    name: 'chemistry',
    title: 'Chemistry',
    url: 'https://chemistry.wyattau.com',
    source: 'university',
    srcDir: 'chemistry',
    desc: 'Undergraduate chemistry notes covering physical, organic, and inorganic chemistry.',
    tagline: 'Undergraduate chemistry.',
    topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
  },
  {
    name: 'admissions',
    title: 'Admissions',
    url: 'https://admissions.wyattau.com',
    source: 'university',
    srcDir: 'admissions',
    desc: 'University admissions test preparation notes.',
    tagline: 'University admissions test prep.',
    topics: ['Admissions Tests', 'Interview Preparation'],
  },
  // === Infrastructure topics ===
  {
    name: 'networking',
    title: 'Networking',
    url: 'https://networking.wyattau.com',
    source: 'infrastructure',
    srcDir: 'networking',
    desc: 'Networking reference notes covering protocols, configuration, and administration.',
    tagline: 'Networking reference and administration.',
    topics: ['Protocols', 'Configuration', 'Administration'],
  },
  {
    name: 'linux',
    title: 'Linux',
    url: 'https://linux.wyattau.com',
    source: 'infrastructure',
    srcDir: 'linux',
    desc: 'Linux system administration reference notes.',
    tagline: 'Linux system administration.',
    topics: ['Administration', 'Scripting', 'Kernel'],
  },
  {
    name: 'security',
    title: 'Security',
    url: 'https://security.wyattau.com',
    source: 'infrastructure',
    srcDir: 'security',
    desc: 'Security reference notes covering hardening, monitoring, and incident response.',
    tagline: 'Security and hardening reference.',
    topics: ['Hardening', 'Monitoring', 'Incident Response'],
  },
  {
    name: 'databases',
    title: 'Databases',
    url: 'https://databases.wyattau.com',
    source: 'infrastructure',
    srcDir: 'databases',
    desc: 'Database administration and SQL reference notes.',
    tagline: 'Database administration reference.',
    topics: ['SQL', 'Administration', 'Design'],
  },
  {
    name: 'truenas',
    title: 'TrueNAS',
    url: 'https://truenas.wyattau.com',
    source: 'infrastructure',
    srcDir: 'truenas',
    desc: 'TrueNAS storage server configuration and administration notes.',
    tagline: 'TrueNAS storage server reference.',
    topics: ['Configuration', 'Storage', 'Maintenance'],
  },
  {
    name: 'tuning',
    title: 'Tuning',
    url: 'https://tuning.wyattau.com',
    source: 'infrastructure',
    srcDir: 'tuning',
    desc: 'System performance tuning and optimization notes.',
    tagline: 'System performance tuning.',
    topics: ['Performance', 'Optimization', 'Profiling'],
  },
  {
    name: 'licensing',
    title: 'Licensing',
    url: 'https://licensing.wyattau.com',
    source: 'infrastructure',
    srcDir: 'licensing',
    desc: 'Software licensing reference notes.',
    tagline: 'Software licensing reference.',
    topics: ['Licenses', 'Compliance'],
  },
  {
    name: 'machine-learning',
    title: 'Machine Learning',
    url: 'https://machine-learning.wyattau.com',
    source: 'infrastructure',
    srcDir: 'machine-learning',
    desc: 'Machine learning reference notes covering concepts and techniques.',
    tagline: 'Machine learning reference.',
    topics: ['Concepts', 'Techniques'],
  },
]
function write(path, content) {
  writeFileSync(path, content, 'utf8')
}

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

function pkgJson({ name, title }) {
  return JSON.stringify(
    {
      name: `starlight-${name}`,
      version: '0.1.0',
      type: 'module',
      scripts: { dev: 'astro dev', build: 'bunx astro build', preview: 'astro preview' },
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
      devDependencies: { typescript: '^5.8.2' },
    },
    null,
    2,
  )
}

function indexMdx({ title, desc, tagline, topics }) {
  return `---
template: splash
title: ${title}
description: "${desc}"
hero:
  tagline: ${tagline}
  actions:
    - text: Browse Notes
      link: /intro/
      icon: right-arrow
      variant: primary
---
`
}

// === Main ===
for (const site of SITES) {
  const siteDir = join(ROOT, 'sites', site.name)
  const sourceDir = join(ROOT, 'sites', site.source, 'src', 'content', 'docs', site.srcDir)

  if (!existsSync(sourceDir)) {
    console.log(`SKIP ${site.name}: no content at ${sourceDir}`)
    continue
  }

  if (existsSync(siteDir)) {
    console.log(`SKIP ${site.name}: site already exists at ${siteDir}`)
    continue
  }

  console.log(`\n=== Creating ${site.name}.wyattau.com ===`)

  // Create directory structure
  for (const dir of ['src/components/starlight', 'src/styles', 'public/fonts', 'src/content/docs']) {
    mkdirSync(join(siteDir, dir), { recursive: true })
  }

  // Copy content
  cpSync(sourceDir, join(siteDir, 'src', 'content', 'docs'), { recursive: true })

  // Copy shared components from source site
  const sourceSite = join(ROOT, 'sites', site.source)
  for (const f of readdirSync(join(sourceSite, 'src', 'components', 'starlight'))) {
    cpSync(join(sourceSite, 'src', 'components', 'starlight', f), join(siteDir, 'src', 'components', 'starlight', f))
  }

  // Copy custom.css and content.config.ts
  cpSync(join(sourceSite, 'src', 'styles', 'custom.css'), join(siteDir, 'src', 'styles', 'custom.css'))
  cpSync(join(sourceSite, 'src', 'content.config.ts'), join(siteDir, 'src', 'content.config.ts'))

  // Copy public assets
  for (const f of readdirSync(join(sourceSite, 'public'))) {
    const dest = join(siteDir, 'public', f)
    if (!existsSync(dest)) {
      cpSync(join(sourceSite, 'public', f), dest, { recursive: true })
    }
  }

  // Write config files
  write(join(siteDir, 'astro.config.mjs'), astroConfig(site))
  write(join(siteDir, 'package.json'), pkgJson(site))
  write(join(siteDir, 'tsconfig.json'), JSON.stringify({ extends: 'astro/tsconfigs/strict', compilerOptions: { jsx: 'preserve', jsxImportSource: 'solid-js', baseUrl: '.', paths: { '@components/*': ['src/components/*'], '@/*': ['src/*'] } } }, null, 2))
  write(join(siteDir, 'src', 'content', 'docs', 'index.mdx'), indexMdx(site))

  // content.config.ts already copied above

  console.log(`  [OK] Created ${site.name}.wyattau.com`)
}

console.log(`\n=== Done! ===`)
console.log(`Created ${SITES.length} new sites:`)
for (const s of SITES) {
  console.log(`  https://${s.name}.wyattau.com (from ${s.source}/${s.srcDir})`)
}

