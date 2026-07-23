#!/usr/bin/env node

/**
 * create-test-prep-sites.mjs -- Creates new sites for test preparation content.
 *
 * Creates sites for:
 * - Driving tests (DVLA, DMV, etc.)
 * - Language tests (A1-C2)
 * - Governmental tests (civics, citizenship, etc.)
 *
 * Usage:
 *   node scripts/create-test-prep-sites.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SITES = {
  // Driving Test Sites
  'driving-uk': {
    title: 'UK Driving Test',
    description:
      'Complete UK driving test preparation covering theory test, hazard perception, and practical driving test.',
    site: 'https://driving-uk.wyattau.com',
    topics: [
      {
        name: 'Theory Test',
        slug: 'theory-test',
        sections: ['Multiple Choice Questions', 'Hazard Perception', 'Traffic Signs', 'Road Rules'],
      },
      {
        name: 'Practical Test',
        slug: 'practical-test',
        sections: [
          'Driving Manoeuvres',
          'Independent Driving',
          'Show and Tell Questions',
          'Eco Driving',
        ],
      },
      {
        name: 'Mock Tests',
        slug: 'mock-tests',
        sections: ['Theory Mock', 'Hazard Perception Mock', 'Practical Mock'],
      },
    ],
  },
  'driving-us': {
    title: 'US Driving Test',
    description:
      'Complete US driving test preparation covering DMV written test, road test, and driving rules by state.',
    site: 'https://driving-us.wyattau.com',
    topics: [
      {
        name: 'Written Test',
        slug: 'written-test',
        sections: ['Traffic Signs', 'Road Rules', 'Safe Driving', 'State-Specific Rules'],
      },
      {
        name: 'Road Test',
        slug: 'road-test',
        sections: ['Basic Controls', 'Traffic Skills', 'Parking', 'Highway Driving'],
      },
      {
        name: 'State Guides',
        slug: 'state-guides',
        sections: ['California', 'Texas', 'New York', 'Florida'],
      },
    ],
  },
  'driving-eu': {
    title: 'EU Driving Test',
    description:
      'Complete EU driving test preparation covering theory and practical tests across European countries.',
    site: 'https://driving-eu.wyattau.com',
    topics: [
      {
        name: 'Theory Test',
        slug: 'theory-test',
        sections: ['Traffic Signs', 'Road Rules', 'Safe Driving', 'Environmental Driving'],
      },
      {
        name: 'Practical Test',
        slug: 'practical-test',
        sections: ['Urban Driving', 'Rural Driving', 'Highway Driving', 'Night Driving'],
      },
      {
        name: 'Country Guides',
        slug: 'country-guides',
        sections: ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'],
      },
    ],
  },

  // Language Test Sites
  'language-tests': {
    title: 'Language Proficiency Tests',
    description: 'Complete preparation for language proficiency tests from A1 to C2 levels.',
    site: 'https://language-tests.wyattau.com',
    topics: [
      {
        name: 'CEFR Levels',
        slug: 'cefr-levels',
        sections: [
          'A1 Beginner',
          'A2 Elementary',
          'B1 Intermediate',
          'B2 Upper Intermediate',
          'C1 Advanced',
          'C2 Proficiency',
        ],
      },
      { name: 'IELTS', slug: 'ielts', sections: ['Listening', 'Reading', 'Writing', 'Speaking'] },
      { name: 'TOEFL', slug: 'toefl', sections: ['Reading', 'Listening', 'Speaking', 'Writing'] },
      { name: 'DELE', slug: 'dele', sections: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { name: 'DELF/DALF', slug: 'delf-dalf', sections: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      { name: 'Goethe-Zertifikat', slug: 'goethe', sections: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      {
        name: 'HSK',
        slug: 'hsk',
        sections: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'],
      },
      { name: 'JLPT', slug: 'jlpt', sections: ['N5', 'N4', 'N3', 'N2', 'N1'] },
      {
        name: 'TOPIK',
        slug: 'topik',
        sections: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'],
      },
    ],
  },

  // Governmental Test Sites
  'civics-tests': {
    title: 'Civics and Citizenship Tests',
    description: 'Complete preparation for civics and citizenship tests across countries.',
    site: 'https://civics-tests.wyattau.com',
    topics: [
      {
        name: 'US Citizenship',
        slug: 'us-citizenship',
        sections: ['Civics Questions', 'English Test', 'Interview Preparation'],
      },
      {
        name: 'UK Citizenship',
        slug: 'uk-citizenship',
        sections: ['Life in the UK Test', 'English Language', 'Settlement'],
      },
      {
        name: 'Canadian Citizenship',
        slug: 'canadian-citizenship',
        sections: ['Knowledge Test', 'English/French Test'],
      },
      {
        name: 'Australian Citizenship',
        slug: 'australian-citizenship',
        sections: ['Citizenship Test', 'English Language'],
      },
    ],
  },

  // Professional Certification Sites
  'professional-certs': {
    title: 'Professional Certifications',
    description: 'Complete preparation for professional certification exams.',
    site: 'https://professional-certs.wyattau.com',
    topics: [
      {
        name: 'AWS Certifications',
        slug: 'aws',
        sections: ['Cloud Practitioner', 'Solutions Architect', 'Developer', 'SysOps'],
      },
      {
        name: 'Azure Certifications',
        slug: 'azure',
        sections: ['AZ-900', 'AZ-104', 'AZ-204', 'AZ-400'],
      },
      {
        name: 'Google Cloud',
        slug: 'gcp',
        sections: ['Associate Cloud Engineer', 'Professional Cloud Architect'],
      },
      {
        name: 'CompTIA',
        slug: 'comptia',
        sections: ['A+', 'Network+', 'Security+', 'Linux+', 'Cloud+'],
      },
      { name: 'Cisco', slug: 'cisco', sections: ['CCNA', 'CCNP', 'CCIE'] },
      { name: 'PMP', slug: 'pmp', sections: ['Project Management', 'Risk Management', 'Agile'] },
    ],
  },
}

function createSiteConfig(_siteName, siteData) {
  return `import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mermaid from 'astro-mermaid'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { cloudflareAnalytics } from '../../shared/config/analytics.mjs'
import { clientOnlyDirectives } from '../../shared/integrations/client-only-directives'
import lazyImages from '../../shared/integrations/lazy-images/index.mjs'
import mermaidNoRocketLoader from '../../shared/integrations/mermaid-no-rocket-loader/index.mjs'

export default defineConfig({
  site: '${siteData.site}',
  output: 'static',
  integrations: [
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: '${siteData.title}',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description: '${siteData.description}',
      components: {
        Head: './src/components/starlight/Head.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
        Search: './src/components/starlight/Search.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      sidebar: [
        ${siteData.topics.map(t => `{ label: '${t.name}', items: [{ autogenerate: { directory: '${t.slug}' } }] }`).join(',\n        ')}
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ff6b35' } },
        { tag: 'link', attrs: { rel: 'preload', href: '/fonts/Inter-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'preload', href: '/fonts/JetBrainsMono-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: '${siteData.site}/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
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
})`
}

function createPackageJson(siteName, _siteData) {
  return `{
  "name": "@wyattau/${siteName}",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/mdx": "^4.3.1",
    "@astrojs/sitemap": "^3.4.0",
    "@astrojs/solid-js": "^6.0.2",
    "@tailwindcss/vite": "^4.1.8",
    "astro": "^6.4.8",
    "astro-compress": "^1.1.55",
    "solid-js": "^1.9.7",
    "starlight-blog": "^0.1.4",
    "starlight-links-validator": "^0.14.3",
    "starlight-view-transitions": "^0.3.4",
    "tailwindcss": "^4.1.8"
  }
}`
}

function createIndexMd(siteData) {
  const topics = siteData.topics
    .map(t => `## ${t.name}\n\n${t.sections.map(s => `- ${s}`).join('\n')}`)
    .join('\n\n')
  return `---
title: ${siteData.title}
description: ${siteData.description}
date: 2026-01-01T00:00:00Z
tags:
  - test-prep
---

# ${siteData.title}

${siteData.description}

## Topics

${topics}

## How to Use These Notes

1. **Start with the fundamentals** - build a solid foundation before moving to advanced topics
2. **Work through examples** - follow along with the worked examples to build intuition
3. **Test yourself** - use the practice problems and mock tests to check your understanding
4. **Review regularly** - spaced repetition helps retain what you have learned

## Common Mistakes

**Not practicing with official materials:** Use official practice tests and study materials from the testing authority.

**Ignoring weak areas:** Focus extra time on topics you find difficult rather than reviewing what you already know.

**Rushing through content:** Take time to understand concepts thoroughly rather than memorizing answers.
`
}

// Create sites
for (const [siteName, siteData] of Object.entries(SITES)) {
  const siteDir = join('sites', siteName)

  // Create directory structure
  mkdirSync(join(siteDir, 'src', 'content', 'docs'), { recursive: true })
  mkdirSync(join(siteDir, 'public', 'img'), { recursive: true })
  mkdirSync(join(siteDir, 'src', 'components', 'starlight'), { recursive: true })
  mkdirSync(join(siteDir, 'src', 'styles'), { recursive: true })

  // Create config files
  writeFileSync(join(siteDir, 'astro.config.mjs'), createSiteConfig(siteName, siteData))
  writeFileSync(join(siteDir, 'package.json'), createPackageJson(siteName, siteData))

  // Create index page
  writeFileSync(join(siteDir, 'src', 'content', 'docs', 'index.md'), createIndexMd(siteData))

  console.log(`Created site: ${siteName}`)
}

console.log(`\nCreated ${Object.keys(SITES).length} new sites`)
