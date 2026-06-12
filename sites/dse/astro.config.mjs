import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://dse.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — DSE",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Biology', autogenerate: { directory: 'biology' } },
        { label: 'Chemistry', autogenerate: { directory: 'chemistry' } },
        { label: 'Economics', autogenerate: { directory: 'economics' } },
        { label: 'Geography', autogenerate: { directory: 'geography' } },
        { label: 'History', autogenerate: { directory: 'history' } },
        { label: 'Ict', autogenerate: { directory: 'ict' } },
        { label: 'Maths', autogenerate: { directory: 'maths' } },
        { label: 'Physics', autogenerate: { directory: 'physics' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://dse.wyattau.com/img/social-card.svg' } },
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
