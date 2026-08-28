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
  site: 'https://networking.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'Networking',
      pagefind: false,
      expressiveCode: { themes: ['dracula', 'github-light'] },
      description:
        'Networking reference notes covering protocols, configuration, and administration.',

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
        { label: 'Osi Model', items: [{ autogenerate: { directory: '01-osi-model' } }] },
        { label: 'Ip Addressing', items: [{ autogenerate: { directory: '02-ip-addressing' } }] },
        { label: 'Tcp Udp', items: [{ autogenerate: { directory: '03-tcp-udp' } }] },
        { label: 'Dns', items: [{ autogenerate: { directory: '04-dns' } }] },
        { label: 'Http Https', items: [{ autogenerate: { directory: '05-http-https' } }] },
        { label: 'Tls', items: [{ autogenerate: { directory: '06-tls' } }] },
        { label: 'Network Tools', items: [{ autogenerate: { directory: '07-network-tools' } }] },
        { label: 'Layer2', items: [{ autogenerate: { directory: '08-layer2' } }] },
        { label: 'Wireless', items: [{ autogenerate: { directory: '09-wireless' } }] },
        {
          label: 'Email And App Protocols',
          items: [{ autogenerate: { directory: '10-email-and-app-protocols' } }],
        },
        { label: 'About', slug: 'about' },
        { label: 'Glossary', slug: 'glossary' },
      ],
      head: [
        ...cloudflareAnalytics(),
        { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#3a0ca3' } },
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
            content: 'https://networking.wyattau.com/img/social-card.svg',
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
            name: 'Networking',
            description:
              'Networking reference notes covering protocols, configuration, and administration.',
            url: 'https://networking.wyattau.com',
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
