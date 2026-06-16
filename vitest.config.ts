import tailwindcss from '@tailwindcss/vite'
import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tailwindcss(), solidPlugin({ ssr: false })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.test.{ts,tsx}', 'tests/components/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['shared/**/*.{ts,tsx}', 'search-api/**/*.{js,mjs}', 'scripts/**/*.{js,mjs}'],
      exclude: ['shared/**/*.d.ts', 'search-api/merged-index.json'],
    },
  },
  resolve: {
    alias: {
      '@components': './shared/components',
      '@': './shared',
    },
  },
})
