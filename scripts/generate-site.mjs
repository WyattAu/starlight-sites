#!/usr/bin/env node
/**
 * Generate a Starlight site from template.
 * Each site gets a complete, standalone astro.config.mjs (no shared imports).
 * 
 * Usage: node generate-site.mjs <site-name> <title> <site-url> <content-source-dir>
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

if (args.length < 4) {
  console.error('Usage: node generate-site.mjs <name> <title> <url> <content-dir>');
  process.exit(1);
}

const [name, title, url, contentDir] = args;
const rootDir = join(__dirname, '..');
const siteDir = join(rootDir, 'sites', name);

console.log(`Generating site: ${name}`);

// Create directory structure
for (const dir of ['src/components', 'src/utils', 'src/styles']) {
  mkdirSync(join(siteDir, dir), { recursive: true });
}

// Generate package.json
const packageJson = {
  name: `starlight-${name}`,
  version: '0.1.0',
  type: 'module',
  scripts: {
    dev: 'astro dev',
    build: 'node node_modules/astro/astro.js build',
    preview: 'astro preview',
  },
  dependencies: {
    '@astrojs/mdx': '^4.3.14',
    '@astrojs/react': '^5.0.7',
    '@astrojs/sitemap': '^3.7.3',
    '@astrojs/starlight': '^0.32.2',
    'astro': '^5.5.4',
    'dompurify': '^3.2.4',
    'react': '^19.1.0',
    'react-dom': '^19.1.0',
    'rehype-katex': '^7.0.1',
    'remark-math': '^6.0.0',
  },
  devDependencies: {
    '@types/react': '^19.1.0',
    '@types/react-dom': '^19.1.0',
    'typescript': '^5.8.2',
  },
};
writeFileSync(join(siteDir, 'package.json'), JSON.stringify(packageJson, null, 2));

// Generate sidebar from content directory
const sidebar = generateSidebarFromContent(contentDir);
const sidebarLines = formatSidebar(sidebar);

// Generate complete, standalone astro.config.mjs
const astroConfig = `import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: '${url}',
  output: 'static',
  integrations: [
    starlight({
      title: ${JSON.stringify(title)},
      defaultLocale: 'en',
      sidebar: [
${sidebarLines}
      ],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'preload', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css', as: 'style' } },
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
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
`;
writeFileSync(join(siteDir, 'astro.config.mjs'), astroConfig);

// Copy shared files
const sharedDir = join(rootDir, 'shared');
for (const item of ['components', 'utils', 'styles']) {
  const src = join(sharedDir, item);
  const dest = join(siteDir, 'src', item);
  if (existsSync(src)) cpSync(src, dest, { recursive: true });
}

// Copy content
mkdirSync(join(siteDir, 'src', 'content', 'docs'), { recursive: true });
cpSync(contentDir, join(siteDir, 'src', 'content', 'docs'), { recursive: true });

// Generate content/config.ts
const contentConfig = `import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
`;
writeFileSync(join(siteDir, 'src', 'content', 'config.ts'), contentConfig);

// Generate tsconfig.json
const tsconfig = {
  extends: 'astro/tsconfigs/strict',
  compilerOptions: {
    baseUrl: '.',
    paths: { '@components/*': ['src/components/*'] },
    jsx: 'react-jsx',
    jsxImportSource: 'react',
  },
};
writeFileSync(join(siteDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

console.log(`  ✓ ${basename(contentDir)} → ${siteDir}`);
console.log(`  ✓ Sidebar: ${sidebar.length} entries, ${countFiles(contentDir)} files`);
console.log(`  Run: cd ${siteDir} && npm install && npm run build\n`);

function countFiles(dir) {
  let count = 0;
  if (!existsSync(dir)) return 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) count += countFiles(join(dir, entry.name));
    else if (/\.(md|mdx)$/.test(entry.name)) count++;
  }
  return count;
}

function generateSidebarFromContent(dir) {
  if (!existsSync(dir)) return [];
  const entries = [];
  const items = readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (!item.isDirectory()) continue;
    const label = item.name
      .replace(/^\d+[-_]?/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    entries.push({ label, directory: item.name });
  }
  return entries;
}

function formatSidebar(sidebar) {
  return sidebar.map(e =>
    `        { label: '${e.label}', autogenerate: { directory: '${e.directory}' } },`
  ).join('\n');
}
