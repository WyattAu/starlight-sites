import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import lazyImages from '../../shared/integrations/lazy-images/index.mjs'

export default defineConfig({
  site: 'https://alevel.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — A-Level",
      description:
        'UK A-Level revision notes covering AQA, OCR, and Edexcel exam boards with detailed derivations and worked examples.',

      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      defaultLocale: 'en',
      sidebar: [
        { label: 'Biology', autogenerate: { directory: 'biology' } },
        { label: 'Chemistry', autogenerate: { directory: 'chemistry' } },
        { label: 'Computer Science', autogenerate: { directory: 'computer-science' } },
        { label: 'Economics', autogenerate: { directory: 'economics' } },
        { label: 'English', autogenerate: { directory: 'english' } },
        { label: 'Further Maths', autogenerate: { directory: 'further-maths' } },
        { label: 'Geography', autogenerate: { directory: 'geography' } },
        { label: 'History', autogenerate: { directory: 'history' } },
        { label: 'Maths', autogenerate: { directory: 'maths' } },
        { label: 'Physics', autogenerate: { directory: 'physics' } },
        { label: 'Psychology', autogenerate: { directory: 'psychology' } },
      ],
      head: [
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
            name: 'A-Level Notes',
            description: 'UK A-Level revision notes',
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
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, lazyImages],
  },
})
