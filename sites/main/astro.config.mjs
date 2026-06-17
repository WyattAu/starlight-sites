import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  site: 'https://wyattsnotes.wyattau.com',
  output: 'static',
  integrations: [mdx(), solidJs(), sitemap(), compress()],
  vite: {
    plugins: [tailwindcss()],
  },
})
