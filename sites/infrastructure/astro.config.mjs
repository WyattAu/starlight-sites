import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://infrastructure.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — Infrastructure",
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
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://infrastructure.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
      ],
      { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", "name": "Infrastructure Notes", "description": "Server administration notes", "url": "https://infrastructure.wyattau.com", "publisher": { "@type": "Organization", "name": "Wyatt's Notes", "url": "https://wyattsnotes.wyattau.com" } }) },
        customCss: ['./src/styles/custom.css'],
    }),
    mdx(),
    solidJs(),
    mermaid(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
