import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import mermaidNoRocketLoader from '../../shared/integrations/mermaid-no-rocket-loader/index.mjs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://tools.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: "dark", autoTheme: true }),
    mermaidNoRocketLoader(),
    starlight({
      title: "Wyatt's Notes — Tools",
      
      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      defaultLocale: 'en',
      sidebar: [
        { label: 'Algorithms', autogenerate: { directory: 'algorithms' } },
        { label: 'General', autogenerate: { directory: 'general' } },
        { label: 'Git', autogenerate: { directory: 'git' } },
        { label: 'Licensing', autogenerate: { directory: 'licensing' } },
        { label: 'Probabilisticml', autogenerate: { directory: 'probabilisticml' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://tools.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", "name": "Tools Notes", "description": "Algorithms and developer tools", "url": "https://tools.wyattau.com", "publisher": { "@type": "Organization", "name": "Wyatt's Notes", "url": "https://wyattsnotes.wyattau.com" } }) },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    mdx(),
    solidJs(),
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
