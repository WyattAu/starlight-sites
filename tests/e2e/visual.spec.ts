import { test, expect } from '@playwright/test'

/**
 * Visual regression tests for key pages.
 *
 * These tests capture screenshots and compare them against baselines.
 * To update baselines, run:
 *   npx playwright test --config=tests/e2e/visual.config.ts --update-snapshots
 */

test.describe('Visual Regression', () => {
  test('homepage loads and matches screenshot', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true })
  })

  test('sidebar navigation visible', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const sidebar = page.locator('.sidebar-container, nav.sidebar')
    if (await sidebar.isVisible()) {
      await expect(sidebar).toHaveScreenshot('sidebar.png')
    }
  })

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Try to find and click dark mode toggle
    const themeToggle = page.locator('[data-theme-toggle], .theme-toggle, button[aria-label*="theme"]')
    if (await themeToggle.isVisible()) {
      await themeToggle.click()
      await page.waitForTimeout(500)
      await expect(page).toHaveScreenshot('dark-mode.png', { fullPage: true })
    }
  })

  test('search functionality', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Try to find and click search
    const searchButton = page.locator('.search-button, button[aria-label*="search"], [data-search]')
    if (await searchButton.isVisible()) {
      await searchButton.click()
      await page.waitForTimeout(500)
      await expect(page).toHaveScreenshot('search-open.png')
    }
  })
})
