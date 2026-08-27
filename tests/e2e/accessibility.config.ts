/**
 * Accessibility Test Configuration
 *
 * Tests WCAG AA compliance across all themes and components.
 * Uses axe-core for automated accessibility testing.
 */

import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: '.',
  testMatch: 'accessibility.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: 60_000,

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: 'accessibility',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
