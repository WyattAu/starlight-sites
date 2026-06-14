import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://programming.wyattau.com',
  output: 'static',
  integrations: [
    mermaid({ theme: "dark", autoTheme: true }),
    starlight({
      title: "Wyatt's Notes — Programming",
      
      components: {
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      defaultLocale: 'en',
      sidebar: [
        { label: 'C++', items: [
          { label: 'Environment & Toolchain', autogenerate: { directory: '1_enviroment_and_toolchain' } },
          { label: 'Compilation Model', autogenerate: { directory: '2_compilation_model' } },
          { label: 'Types', autogenerate: { directory: '3_types' } },
          { label: 'Resource Management', autogenerate: { directory: '4_resource_management' } },
          { label: 'Function Architecture', autogenerate: { directory: '5_function_architecture' } },
          { label: 'Object Oriented', autogenerate: { directory: '6_object_oriented' } },
          { label: 'Templates & Metaprogramming', autogenerate: { directory: '7_templates_and_metaprogramming' } },
          { label: 'Standard Library', autogenerate: { directory: '8_standard_library' } },
          { label: 'Concurrency', autogenerate: { directory: '9_concurrency' } },
        ]},
        { label: 'Other Languages', items: [
          { label: 'Dart', link: 'https://languages.wyattau.com/dart/' },
          { label: 'Elixir', link: 'https://languages.wyattau.com/elixir/' },
          { label: 'Go', link: 'https://languages.wyattau.com/go/' },
          { label: 'Haskell', link: 'https://languages.wyattau.com/haskell/' },
          { label: 'Java', link: 'https://languages.wyattau.com/java/' },
          { label: 'Kotlin', link: 'https://languages.wyattau.com/kotlin/' },
          { label: 'Python', link: 'https://languages.wyattau.com/python/' },
          { label: 'Ruby', link: 'https://languages.wyattau.com/ruby/' },
          { label: 'Rust', link: 'https://languages.wyattau.com/rust/' },
          { label: 'Swift', link: 'https://languages.wyattau.com/swift/' },
          { label: 'TypeScript', link: 'https://languages.wyattau.com/typescript/' },
        ]},
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://programming.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
        { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", "name": "Programming Notes", "description": "C++ systems programming notes", "url": "https://programming.wyattau.com", "publisher": { "@type": "Organization", "name": "Wyatt's Notes", "url": "https://wyattsnotes.wyattau.com" } }) },
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
