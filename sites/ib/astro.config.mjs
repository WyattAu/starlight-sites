import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://ib.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — IB",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Biology', autogenerate: { directory: 'biology' } },
        { label: 'Chemistry', autogenerate: { directory: 'chemistry' } },
        { label: 'Computer Science', autogenerate: { directory: 'computer-science' } },
        { label: 'Economics', autogenerate: { directory: 'economics' } },
        { label: 'English', autogenerate: { directory: 'english' } },
        { label: 'Geography', autogenerate: { directory: 'geography' } },
        { label: 'History', autogenerate: { directory: 'history' } },
        { label: 'I18n', autogenerate: { directory: 'i18n' } },
        { label: 'Mathematics', autogenerate: { directory: 'mathematics' } },
        { label: 'Maths', autogenerate: { directory: 'maths' } },
        { label: 'Physics', autogenerate: { directory: 'physics' } },
        { label: 'Psychology', autogenerate: { directory: 'psychology' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://ib.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
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
