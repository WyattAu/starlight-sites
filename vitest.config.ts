import tailwindcss from '@tailwindcss/vite'
import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tailwindcss(), solidPlugin({ ssr: false })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.test.{ts,tsx,js,jsx}', 'tests/components/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['shared/**/*.{ts,tsx}'],
      exclude: ['shared/**/*.d.ts'],
    },
  },
  resolve: {
    alias: {
      '@components': './shared/components',
      '@': './shared',
    },
  },
})
