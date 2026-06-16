import { defineConfig, devices } from '@playwright/test'

/**
 * Visual regression tests. Each project targets one site's production URL.
 * Tests run in parallel; each test validates a critical user flow against the
 * live deployment (not a local build).
 *
 * Usage:
 *   npx playwright test --config=tests/e2e/visual.config.ts
 *   npx playwright test --config=tests/e2e/visual.config.ts --project=dse
 */
const SITES: Record<string, string> = {
  dse: 'https://dse.wyattau.com',
  ib: 'https://ib.wyattau.com',
  alevel: 'https://alevel.wyattau.com',
  university: 'https://university.wyattau.com',
  qualifications: 'https://qualifications.wyattau.com',
  programming: 'https://programming.wyattau.com',
  infrastructure: 'https://infrastructure.wyattau.com',
  languages: 'https://languages.wyattau.com',
  tools: 'https://tools.wyattau.com',
}

export default defineConfig({
  testDir: '.',
  testMatch: 'visual.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: 30_000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
    },
  },

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
