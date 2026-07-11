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
      expressiveCode: { themes: ['everforest-dark', 'everforest-light'] },
      description:
        'Hong Kong DSE revision notes with worked examples and practice problems for Mathematics, Physics, Chemistry, Biology, and ICT.',

      components: {
        Head: './src/components/starlight/Head.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
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
        { label: 'Economics', items: [{ autogenerate: { directory: 'economics' } }] },
        { label: 'Geography', items: [{ autogenerate: { directory: 'geography' } }] },
        { label: 'History', items: [{ autogenerate: { directory: 'history' } }] },
        { label: 'Ict', items: [{ autogenerate: { directory: 'ict' } }] },
        { label: 'Maths', items: [{ autogenerate: { directory: 'maths' } }] },
        { label: 'Physics', items: [{ autogenerate: { directory: 'physics' } }] },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
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
            description: 'Hong Kong DSE revision',
            url: 'https://dse.wyattau.com',
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
