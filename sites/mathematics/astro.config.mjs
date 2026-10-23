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
        'Free mathematics study notes and revision guide with worked examples covering algebra, analysis, geometry, and more.',

      components: {
        PageFrame: './src/components/starlight/PageFrame.astro',
        Header: './src/components/starlight/Header.astro',
        Hero: './src/components/starlight/Hero.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
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
        {
          label: 'Abstract Algebra',
          items: [{ autogenerate: { directory: '1-abstract-algebra' } }],
          collapsed: true,
        },
        {
          label: 'Measure Theory',
          items: [{ autogenerate: { directory: '10-measure-theory' } }],
          collapsed: true,
        },
        {
          label: 'Functional Analysis',
          items: [{ autogenerate: { directory: '11-functional-analysis' } }],
          collapsed: true,
        },
        {
          label: 'Differential Geometry',
          items: [{ autogenerate: { directory: '12-differential-geometry' } }],
          collapsed: true,
        },
        {
          label: 'Linear Algebra',
          items: [{ autogenerate: { directory: '2-linear-algebra' } }],
          collapsed: true,
        },
        {
          label: 'Real Analysis',
          items: [{ autogenerate: { directory: '3-real-analysis' } }],
          collapsed: true,
        },
        {
          label: 'Multivariable Calculus',
          items: [{ autogenerate: { directory: '4-multivariable-calculus' } }],
          collapsed: true,
        },
        {
          label: 'Ordinary Differential Equations',
          items: [{ autogenerate: { directory: '5-ordinary-differential-equations' } }],
          collapsed: true,
        },
        {
          label: 'Complex Analysis',
          items: [{ autogenerate: { directory: '6-complex-analysis' } }],
          collapsed: true,
        },
        {
          label: 'Number Theory',
          items: [{ autogenerate: { directory: '7-number-theory' } }],
          collapsed: true,
        },
        {
          label: 'Probability And Statistics',
          items: [{ autogenerate: { directory: '8-probability-and-statistics' } }],
          collapsed: true,
        },
        {
          label: 'Topology',
          items: [{ autogenerate: { directory: '9-topology' } }],
          collapsed: true,
        },
        { label: 'Demos', items: [{ autogenerate: { directory: 'demos' } }], collapsed: true },
        { label: 'About', slug: 'about' },
        { label: 'Glossary', slug: 'glossary' },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#4361ee' } },
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
            href: '/katex/katex.min.css',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://mathematics.wyattau.com/img/social-card.svg',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Mathematics',
            description: 'Free mathematics study notes and revision guide with worked examples',
            url: 'https://mathematics.wyattau.com',
            publisher: {
              '@type': 'Organization',
              name: "Wyatt's Notes",
              url: 'https://wyattsnotes.wyattau.com',
            },
          }),
        },
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/design-system.css',
        './src/styles/themes.css',
        './src/styles/components.css',
        './src/styles/utilities.css',
      ],
    }),
    mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    solidJs(),
    sitemap(),
    compress(),
  ],

  // The nine course files that used to sit at the docs root were split into the
  // numbered tracks years ago, and every track is now the fuller version of the
  // course it came from. The root copies were left behind and had drifted into
  // a second, thinner presentation of material the tracks already teach, so a
  // reader who landed on one got the worse account of the same subject.
  //
  // They are removed, and these redirects keep every existing reference working
  // -- the ~64 internal links to these routes, the cross-site references from
  // the other 44 sites, and any URL a reader bookmarked or a search engine
  // indexed. Without them, deleting the files would turn 64 working links into
  // 404s across the whole network.
  redirects: {
    '/complex-analysis': '/6-complex-analysis',
    '/abstract-algebra': '/1-abstract-algebra',
    '/linear-algebra': '/2-linear-algebra',
    '/real-analysis': '/3-real-analysis',
    '/multivariable-calculus': '/4-multivariable-calculus',
    '/differential-equations': '/5-ordinary-differential-equations',
    '/number-theory': '/7-number-theory',
    '/probability': '/8-probability-and-statistics',
    '/probability-and-statistics': '/8-probability-and-statistics',
  },
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
