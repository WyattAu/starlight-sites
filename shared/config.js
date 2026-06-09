/**
 * Shared Starlight configuration factory.
 * Each sub-site imports this and provides its own title, site, sidebar, etc.
 */
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * @typedef {Object} SiteConfig
 * @property {string} site - Full URL (e.g., 'https://dse.wyattau.com')
 * @property {string} title - Site title
 * @property {string} description - Site description
 * @property {import('@astrojs/starlight').SidebarItem[]} sidebar - Sidebar configuration
 * @property {string} [headTitle] - Custom head title override
 * @property {Record<string, string>} [extraAliases] - Additional Vite aliases
 */

/**
 * Create a standardized Astro config for a WyattsNotes sub-site.
 * @param {SiteConfig} config
 * @returns {import('astro').AstroUserConfig}
 */
export function createSiteConfig(config) {
  return defineConfig({
    site: config.site,
    output: 'static',
    integrations: [
      starlight({
        title: config.title,
        description: config.description,
        defaultLocale: 'en',
        sidebar: config.sidebar,
        head: [
          { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
          { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
          {
            tag: 'link',
            attrs: {
              rel: 'preload',
              href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css',
              as: 'style',
            },
          },
        ],
        customCss: ['./src/styles/custom.css'],
      }),
      mdx(),
      react(),
      sitemap(),
    ],
    vite: {
      resolve: {
        alias: {
          '@components': new URL('./src/components', import.meta.url).pathname,
          ...(config.extraAliases || {}),
        },
      },
    },
    markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });
}

export { defineConfig, starlight, mdx, react, sitemap, remarkMath, rehypeKatex };
