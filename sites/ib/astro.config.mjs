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
  site: 'https://ib.wyattau.com',
  output: 'static',
  integrations: [
    // mermaid MUST come before starlight so its remark plugin processes
    // mermaid code blocks before Starlight's Expressive Code intercepts them
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: 'IB',
      pagefind: false,
      expressiveCode: { themes: ["dracula", "github-light"] },
      description:
        'International Baccalaureate Diploma Programme notes aligned to the IB curriculum framework for Mathematics, Sciences, and Humanities.',

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
        { label: 'Biology', items: [{ autogenerate: { directory: 'biology' } }] },
        { label: 'Chemistry', items: [{ autogenerate: { directory: 'chemistry' } }] },
        { label: 'Computer Science', items: [{ autogenerate: { directory: 'computer-science' } }] },
        { label: 'Economics', items: [{ autogenerate: { directory: 'economics' } }] },
        { label: 'English', items: [{ autogenerate: { directory: 'english' } }] },
        { label: 'Geography', items: [{ autogenerate: { directory: 'geography' } }] },
        { label: 'History', items: [{ autogenerate: { directory: 'history' } }] },
        { label: 'I18n', items: [{ autogenerate: { directory: 'i18n' } }] },
        { label: 'Mathematics', items: [{ autogenerate: { directory: 'mathematics' } }] },
        { label: 'Maths', items: [{ autogenerate: { directory: 'maths' } }] },
        { label: 'Physics', items: [{ autogenerate: { directory: 'physics' } }] },
        { label: 'Psychology', items: [{ autogenerate: { directory: 'psychology' } }] },
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
          attrs: { property: 'og:image', content: 'https://ib.wyattau.com/img/social-card.svg' },
        },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'IB',
            description: 'International Baccalaureate',
            url: 'https://ib.wyattau.com',
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
