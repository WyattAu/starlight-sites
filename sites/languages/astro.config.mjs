import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://languages.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — Languages",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Dart', autogenerate: { directory: 'dart' } },
        { label: 'Elixir', autogenerate: { directory: 'elixir' } },
        { label: 'Go', autogenerate: { directory: 'go' } },
        { label: 'Haskell', autogenerate: { directory: 'haskell' } },
        { label: 'Java', autogenerate: { directory: 'java' } },
        { label: 'Kotlin', autogenerate: { directory: 'kotlin' } },
        { label: 'Python', autogenerate: { directory: 'python' } },
        { label: 'Ruby', autogenerate: { directory: 'ruby' } },
        { label: 'Rust', autogenerate: { directory: 'rust' } },
        { label: 'Swift', autogenerate: { directory: 'swift' } },
        { label: 'Typescript', autogenerate: { directory: 'typescript' } },
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://languages.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js", defer: true } },
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
