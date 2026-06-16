import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import lazyImages from '../../shared/integrations/lazy-images/index.mjs'
import mermaidNoRocketLoader from '../../shared/integrations/mermaid-no-rocket-loader/index.mjs'

export default defineConfig({
  site: 'https://infrastructure.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: 'dark', autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: "Wyatt's Notes — Infrastructure",
      description:
        'Server administration, databases, networking, security, and system tuning reference materials.',

      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      defaultLocale: 'en',
      sidebar: [
        { label: 'Databases', autogenerate: { directory: 'databases' } },
        { label: 'Licensing', autogenerate: { directory: 'licensing' } },
        { label: 'Linux', autogenerate: { directory: 'linux' } },
        { label: 'Machine Learning', autogenerate: { directory: 'machine-learning' } },
        { label: 'Networking', autogenerate: { directory: 'networking' } },
        { label: 'Security', autogenerate: { directory: 'security' } },
        { label: 'Truenas', autogenerate: { directory: 'truenas' } },
        { label: 'Tuning', autogenerate: { directory: 'tuning' } },
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
            content: 'https://infrastructure.wyattau.com/img/social-card.svg',
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
            name: 'Infrastructure Notes',
            description: 'Server administration notes',
            url: 'https://infrastructure.wyattau.com',
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
    plugins: [tailwindcss()],
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
