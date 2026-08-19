import { defineConfig, devices } from '@playwright/test'

/**
 * Live-site smoke tests. Each project targets one site's production URL.
 * Tests run in parallel; each test validates a critical user flow against the
 * live deployment (not a local build).
 *
 * The site selection mirrors the preview subset policy (ADR-011): one
 * representative site per structural variant, all validated to exist by
 * tests/unit/no-ghost-sites.test.js.
 *
 * Usage:
 *   npx playwright test                              # all sites
 *   npx playwright test --project=dse                # one site
 *   npx playwright test --grep "homepage loads"      # one flow
 */
const SITES: Record<string, string> = {
  dse: 'https://dse.wyattau.com',
  ib: 'https://ib.wyattau.com',
  python: 'https://python.wyattau.com',
  sat: 'https://sat.wyattau.com',
  machineLearning: 'https://machine-learning.wyattau.com',
  tools: 'https://tools.wyattau.com',
}

export default defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: 30_000,
  expect: { timeout: 10_000 },

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  projects: Object.entries(SITES).map(([id, url]) => ({
    name: id,
    use: { baseURL: url, ...devices['Desktop Chrome'] },
  })),
})

export { SITES }
