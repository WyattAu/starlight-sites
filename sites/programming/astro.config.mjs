import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://programming.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes — Programming",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Enviroment And Toolchain', autogenerate: { directory: '1_enviroment_and_toolchain' } },
        { label: 'Compilation Model', autogenerate: { directory: '2_compilation_model' } },
        { label: 'Types', autogenerate: { directory: '3_types' } },
        { label: 'Resource Management', autogenerate: { directory: '4_resource_management' } },
        { label: 'Function Architecture', autogenerate: { directory: '5_function_architecture' } },
        { label: 'Object Oriented', autogenerate: { directory: '6_object_oriented' } },
        { label: 'Templates And Metaprogramming', autogenerate: { directory: '7_templates_and_metaprogramming' } },
        { label: 'Standard Library', autogenerate: { directory: '8_standard_library' } },
        { label: 'Concurrency', autogenerate: { directory: '9_concurrency' } },
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
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
