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
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'preload', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css', as: 'style' } },
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
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
