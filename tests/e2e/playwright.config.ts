import { defineConfig, devices } from '@playwright/test';

const BASE_URLS: Record<string, string> = {
  dse: 'https://dse.wyattau.com',
  ib: 'https://ib.wyattau.com',
  alevel: 'https://alevel.wyattau.com',
  university: 'https://university.wyattau.com',
  qualifications: 'https://qualifications.wyattau.com',
  programming: 'https://programming.wyattau.com',
  infrastructure: 'https://infrastructure.wyattau.com',
  languages: 'https://languages.wyattau.com',
  tools: 'https://tools.wyattau.com',
};

export default defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: BASE_URLS.dse,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  timeout: 60_000,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  expect: {
    timeout: 10_000,
  },
});

export { BASE_URLS };
