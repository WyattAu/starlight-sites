import mdx from '@astrojs/mdx'
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
  site: 'https://language-tests.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: 'Language Proficiency Tests',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description: 'Complete preparation for language proficiency tests from A1 to C2 levels.',
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
        { label: 'Study Hub', slug: 'hub' },
        { label: 'CEFR Levels', items: [{ autogenerate: { directory: 'cefr-levels' } }] },
        { label: 'IELTS', items: [{ autogenerate: { directory: 'ielts' } }] },
        { label: 'TOEFL', items: [{ autogenerate: { directory: 'toefl' } }] },
        { label: 'DELE', items: [{ autogenerate: { directory: 'dele' } }] },
        { label: 'DELF/DALF', items: [{ autogenerate: { directory: 'delf-dalf' } }] },
        { label: 'Goethe-Zertifikat', items: [{ autogenerate: { directory: 'goethe' } }] },
        { label: 'HSK', items: [{ autogenerate: { directory: 'hsk' } }] },
        { label: 'JLPT', items: [{ autogenerate: { directory: 'jlpt' } }] },
        { label: 'TOPIK', items: [{ autogenerate: { directory: 'topik' } }] },
        { label: 'About', slug: 'about' },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ff9f1c' } },
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
              integrity: 'sha384-irXK0JiCGinqGL+slwVklbhJetrjczNwaP2lANewD8lKAs9n61SbQ3As28iSqXUE',
              crossorigin: 'anonymous',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://language-tests.wyattau.com/img/social-card.svg',
          },
        },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Language Tests',
            description: 'CEFR-aligned language proficiency tests and practice',
            url: 'https://language-tests.wyattau.com',
            publisher: {
              '@type': 'Organization',
              name: "Wyatt's Notes",
              url: 'https://wyattsnotes.wyattau.com',
            },
          }),
        },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
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
