import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://university.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — University",
      description: "Rigorous, proof-based undergraduate STEM notes covering Linear Algebra, Calculus, Classical Mechanics, and Electromagnetism.",
      
      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      defaultLocale: 'en',
      sidebar: [
        { label: 'Admissions', autogenerate: { directory: 'admissions' } },
        { label: 'Chemistry', autogenerate: { directory: 'chemistry' } },
        { label: 'Computer Science', autogenerate: { directory: 'computer-science' } },
        { label: 'Computing', autogenerate: { directory: 'computing' } },
        { label: 'Mathematics', autogenerate: { directory: 'mathematics' } },
        { label: 'Physics', autogenerate: { directory: 'physics' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://university.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", "name": "University Notes", "description": "University STEM notes", "url": "https://university.wyattau.com", "publisher": { "@type": "Organization", "name": "Wyatt's Notes", "url": "https://wyattsnotes.wyattau.com" } }) },
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
