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
  site: 'https://programming.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: 'Programming',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description:
        'Deep C++ systems programming notes covering ownership, RAII, templates, concurrency, and build systems.',

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
        {
          label: 'C++',
          items: [
            {
              label: 'Environment & Toolchain',
              items: [{ autogenerate: { directory: 'enviroment_and_toolchain' } }],
            },
            {
              label: 'Compilation Model',
              items: [{ autogenerate: { directory: 'compilation_model' } }],
            },
            { label: 'Types', items: [{ autogenerate: { directory: 'types' } }] },
            {
              label: 'Resource Management',
              items: [{ autogenerate: { directory: 'resource_management' } }],
            },
            {
              label: 'Function Architecture',
              items: [{ autogenerate: { directory: 'function_architecture' } }],
            },
            {
              label: 'Object Oriented',
              items: [{ autogenerate: { directory: 'object_oriented' } }],
            },
            {
              label: 'Templates & Metaprogramming',
              items: [{ autogenerate: { directory: 'templates_and_metaprogramming' } }],
            },
            {
              label: 'Standard Library',
              items: [{ autogenerate: { directory: 'standard_library' } }],
            },
            { label: 'Concurrency', items: [{ autogenerate: { directory: 'concurrency' } }] },
          ],
        },
        {
          label: 'Other Languages',
          items: [
            { label: 'Dart', link: 'https://languages.wyattau.com/dart/' },
            { label: 'Elixir', link: 'https://languages.wyattau.com/elixir/' },
            { label: 'Go', link: 'https://languages.wyattau.com/go/' },
            { label: 'Haskell', link: 'https://languages.wyattau.com/haskell/' },
            { label: 'Java', link: 'https://languages.wyattau.com/java/' },
            { label: 'Kotlin', link: 'https://languages.wyattau.com/kotlin/' },
            { label: 'Python', link: 'https://languages.wyattau.com/python/' },
            { label: 'Ruby', link: 'https://languages.wyattau.com/ruby/' },
            { label: 'Rust', link: 'https://languages.wyattau.com/rust/' },
            { label: 'Swift', link: 'https://languages.wyattau.com/swift/' },
            { label: 'TypeScript', link: 'https://languages.wyattau.com/typescript/' },
          ],
        },
        { label: 'About', slug: 'about' },
        { label: 'Glossary', slug: 'glossary' },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#06d6a0' } },
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
            content: 'https://programming.wyattau.com/img/social-card.svg',
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
            name: 'Programming',
            description: 'C++ systems programming',
            url: 'https://programming.wyattau.com',
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
