import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [solidPlugin({ ssr: false })],
  optimizeDeps: {
    exclude: ['@kobalte/core'],
  },
  ssr: {
    noExternal: ['@kobalte/core'],
  },
  test: {
    css: false,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/components/setup.ts'],
    include: ['tests/unit/**/*.test.{ts,tsx}', 'tests/components/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['shared/**/*.{ts,tsx}', 'search-api/**/*.{js,mjs}', 'scripts/**/*.{js,mjs}'],
      exclude: [
        'shared/**/*.d.ts',
        'search-api/merged-index.json',
        // Generated static fallback index (15k lines, committed artifact).
        'search-api/merged-index.js',
        // Archived one-off migration scripts (some no longer parse).
        'scripts/archive/**',
      ],
      // Coverage ratchet (CODE_QUALITY_MATRIX.md gap #4): thresholds are set
      // just below the measured 2026-08-19 values and may only be raised.
      // scripts/ and search-api/ carry no thresholds yet -- they are covered
      // by the node:test suites (search-worker, search-api, lint-*), not
      // vitest; gating them here would measure the wrong thing.
      thresholds: {
        'shared/utils/**': { lines: 90, branches: 90, functions: 95 },
        'shared/i18n/**': { lines: 95, branches: 70, functions: 95 },
        'shared/components/**': { lines: 65, branches: 50, functions: 65 },
      },
    },
  },
  resolve: {
    alias: {
      '@components': './shared/components',
      '@': './shared',
    },
  },
})
