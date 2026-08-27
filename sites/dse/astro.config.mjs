import mdx from '@astrojs/mdx'
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
  site: 'https://dse.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'DSE',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description:
        'Free DSE study notes, revision guide, and exam preparation with worked examples for Hong Kong Diploma of Secondary Education Mathematics, Physics, Chemistry, Biology, and ICT.',

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
        zh: { label: '简体中文', lang: 'zh' },
      },
      sidebar: [
        { label: 'Study Hub', slug: 'hub' },
        { label: 'Practice Test', slug: 'practice-test-mega' },
        { label: 'Biology', items: [{ autogenerate: { directory: 'biology' } }] },
        { label: 'Chemistry', items: [{ autogenerate: { directory: 'chemistry' } }] },
        { label: 'Economics', items: [{ autogenerate: { directory: 'economics' } }] },
        { label: 'Geography', items: [{ autogenerate: { directory: 'geography' } }] },
        { label: 'History', items: [{ autogenerate: { directory: 'history' } }] },
        { label: 'Ict', items: [{ autogenerate: { directory: 'ict' } }] },
        { label: 'Maths', items: [{ autogenerate: { directory: 'maths' } }] },
        { label: 'Physics', items: [{ autogenerate: { directory: 'physics' } }] },
        { label: 'About', slug: 'about' },
        { label: 'Glossary', slug: 'glossary' },
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
          attrs: { property: 'og:image', content: 'https://dse.wyattau.com/img/social-card.svg' },
        },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'DSE',
            description:
              'Free DSE study notes, revision guide, and exam preparation with worked examples',
            url: 'https://dse.wyattau.com',
            publisher: {
              '@type': 'Organization',
              name: "Wyatt's Notes",
              url: 'https://wyattsnotes.wyattau.com',
            },
          }),
        },
      ],
      customCss: ['./src/styles/design-system.css', './src/styles/themes.css', './src/styles/components.css', './src/styles/utilities.css'],
    }),
    mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
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
