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
  site: 'https://languages.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: 'Languages',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description:
        'Comparative programming language notes covering syntax, paradigms, type systems, and concurrency models.',

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
        // zh: { label: '简体中文', lang: 'zh' },  // gated: no zh content
      },
      sidebar: [
        { label: 'Study Hub', slug: 'hub' },
        { label: 'Dart', items: [{ autogenerate: { directory: 'dart' } }], collapsed: true },
        { label: 'Elixir', items: [{ autogenerate: { directory: 'elixir' } }], collapsed: true },
        { label: 'Go', items: [{ autogenerate: { directory: 'go' } }], collapsed: true },
        { label: 'Haskell', items: [{ autogenerate: { directory: 'haskell' } }], collapsed: true },
        { label: 'Java', items: [{ autogenerate: { directory: 'java' } }], collapsed: true },
        { label: 'Kotlin', items: [{ autogenerate: { directory: 'kotlin' } }], collapsed: true },
        { label: 'Python', items: [{ autogenerate: { directory: 'python' } }], collapsed: true },
        { label: 'Ruby', items: [{ autogenerate: { directory: 'ruby' } }], collapsed: true },
        { label: 'Rust', items: [{ autogenerate: { directory: 'rust' } }], collapsed: true },
        { label: 'Swift', items: [{ autogenerate: { directory: 'swift' } }], collapsed: true },
        {
          label: 'Typescript',
          items: [{ autogenerate: { directory: 'typescript' } }],
          collapsed: true,
        },
        { label: 'About', slug: 'about' },
        { label: 'Glossary', slug: 'glossary' },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#118ab2' } },
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
            content: 'https://languages.wyattau.com/img/social-card.svg',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Languages',
            description: 'Programming language comparison',
            url: 'https://languages.wyattau.com',
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
