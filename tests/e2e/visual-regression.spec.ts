/**
 * Visual Regression Tests
 *
 * Tests visual consistency across themes, viewports, and components.
 * Captures screenshots and compares against baseline.
 */

import { test, expect } from '@playwright/test'

const THEMES = ['dark', 'light', 'sepia', 'contrast', 'nord', 'dracula', 'solarized', 'monokai', 'ayu-mirage', 'papercolor']

const TEST_PAGES = [
  { name: 'physics', url: 'https://physics.wyattau.com/' },
  { name: 'mathematics', url: 'https://mathematics.wyattau.com/' },
  { name: 'computer-science', url: 'https://computer-science.wyattau.com/' },
  { name: 'ib', url: 'https://ib.wyattau.com/' },
  { name: 'dse', url: 'https://dse.wyattau.com/' },
]

for (const page of TEST_PAGES) {
  test.describe(`${page.name} site`, () => {
    for (const theme of THEMES) {
      test(`theme: ${theme}`, async ({ page: p }) => {
        await p.goto(page.url)
        await p.waitForLoadState('networkidle')

        // Set theme
        await p.evaluate((t) => {
          document.documentElement.setAttribute('data-theme', t)
        }, theme)

        // Wait for theme transition
        await p.waitForTimeout(500)

        // Take screenshot
        await expect(p).toHaveScreenshot(`${page.name}-${theme}.png`, {
          fullPage: false,
          maxDiffPixelRatio: 0.01,
        })
      })
    }
  })
}
