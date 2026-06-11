import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://qualifications.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — Qualifications",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Ap', autogenerate: { directory: 'ap' } },
        { label: 'Cbse', autogenerate: { directory: 'cbse' } },
        { label: 'Gaokao', autogenerate: { directory: 'gaokao' } },
        { label: 'Gcse', autogenerate: { directory: 'gcse' } },
        { label: 'Highers', autogenerate: { directory: 'highers' } },
        { label: 'Hsc', autogenerate: { directory: 'hsc' } },
        { label: 'Ilc', autogenerate: { directory: 'ilc' } },
        { label: 'Sat', autogenerate: { directory: 'sat' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
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
