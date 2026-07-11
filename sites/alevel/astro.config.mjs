import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import Icons from 'unplugin-icons/vite'
import { cloudflareAnalytics } from '../../shared/config/analytics.mjs'
import { clientOnlyDirectives } from '../../shared/integrations/client-only-directives'
import lazyImages from '../../shared/integrations/lazy-images/index.mjs'

export default defineConfig({
  site: 'https://alevel.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'A-Level',
      pagefind: false,
      description:
        'UK A-Level revision notes covering AQA, OCR, and Edexcel exam boards with detailed derivations and worked examples.',

      components: {
        Head: './src/components/starlight/Head.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
        Search: './src/components/starlight/Search.astro',
      },
      defaultLocale: 'en',
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
        { label: 'Further Maths', items: [{ autogenerate: { directory: 'further-maths' } }] },
        { label: 'Geography', items: [{ autogenerate: { directory: 'geography' } }] },
        { label: 'History', items: [{ autogenerate: { directory: 'history' } }] },
        { label: 'Maths', items: [{ autogenerate: { directory: 'maths' } }] },
        { label: 'Physics', items: [{ autogenerate: { directory: 'physics' } }] },
        { label: 'Psychology', items: [{ autogenerate: { directory: 'psychology' } }] },
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
          attrs: {
            property: 'og:image',
            content: 'https://alevel.wyattau.com/img/social-card.svg',
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
            name: 'A-Level',
            description: 'UK A-Level revision',
            url: 'https://alevel.wyattau.com',
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
    plugins: [tailwindcss(), Icons({ compiler: 'solid' })],
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
