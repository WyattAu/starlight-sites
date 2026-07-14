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
  site: 'https://mathematics.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'Mathematics',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description:
        'Proof-based undergraduate mathematics covering algebra, analysis, geometry, and more.',

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
        {
          label: 'Abstract Algebra',
          items: [{ autogenerate: { directory: '1-abstract-algebra' } }],
        },
        { label: 'Measure Theory', items: [{ autogenerate: { directory: '10-measure-theory' } }] },
        {
          label: 'Functional Analysis',
          items: [{ autogenerate: { directory: '11-functional-analysis' } }],
        },
        {
          label: 'Differential Geometry',
          items: [{ autogenerate: { directory: '12-differential-geometry' } }],
        },
        { label: 'Linear Algebra', items: [{ autogenerate: { directory: '2-linear-algebra' } }] },
        { label: 'Real Analysis', items: [{ autogenerate: { directory: '3-real-analysis' } }] },
        {
          label: 'Multivariable Calculus',
          items: [{ autogenerate: { directory: '4-multivariable-calculus' } }],
        },
        {
          label: 'Ordinary Differential Equations',
          items: [{ autogenerate: { directory: '5-ordinary-differential-equations' } }],
        },
        {
          label: 'Complex Analysis',
          items: [{ autogenerate: { directory: '6-complex-analysis' } }],
        },
        { label: 'Number Theory', items: [{ autogenerate: { directory: '7-number-theory' } }] },
        {
          label: 'Probability And Statistics',
          items: [{ autogenerate: { directory: '8-probability-and-statistics' } }],
        },
        { label: 'Topology', items: [{ autogenerate: { directory: '9-topology' } }] },
        { label: 'Demos', items: [{ autogenerate: { directory: 'demos' } }] },
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
            content: 'https://mathematics.wyattau.com/img/social-card.svg',
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
            name: 'Mathematics',
            description:
              'Proof-based undergraduate mathematics covering algebra, analysis, geometry, and more.',
            url: 'https://mathematics.wyattau.com',
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
