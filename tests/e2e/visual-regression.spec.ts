import { expect, test } from '@playwright/test'
import { SITES } from './playwright.config'

/**
 * Visual regression tests for Wyatt's Notes.
 *
 * Takes screenshots of key pages and compares them to baseline images.
 * Run with: npx playwright test --project=visual-regression
 *
 * To update baselines: npx playwright test --update-snapshots
 */

// Configure visual regression project
const SITES_CONFIG = Object.entries(SITES).slice(0, 3) // Test first 3 sites for speed

test.describe('Visual Regression', () => {
  for (const [siteId, baseUrl] of SITES_CONFIG) {
    test.describe(siteId, () => {
      test('homepage matches snapshot', async ({ page }) => {
        await page.goto(baseUrl)
        await page.waitForLoadState('networkidle')

        // Hide dynamic content
        await page.evaluate(() => {
          // Hide search modal, time-based content, and analytics
          const style = document.createElement('style')
          style.textContent = `
            #page-search-modal { display: none !important; }
            time { visibility: hidden !important; }
            [data-cf-beacon] { display: none !important; }
          `
          document.head.appendChild(style)
        })

        await expect(page).toHaveScreenshot(`${siteId}-homepage.png`, {
          fullPage: false, // Viewport only
          maxDiffPixelRatio: 0.01, // 1% tolerance
        })
      })

      test('homepage full page matches snapshot', async ({ page }) => {
        await page.goto(baseUrl)
        await page.waitForLoadState('networkidle')

        await page.evaluate(() => {
          const style = document.createElement('style')
          style.textContent = `
            #page-search-modal { display: none !important; }
            time { visibility: hidden !important; }
            [data-cf-beacon] { display: none !important; }
          `
          document.head.appendChild(style)
        })

        await expect(page).toHaveScreenshot(`${siteId}-homepage-full.png`, {
          fullPage: true,
          maxDiffPixelRatio: 0.02, // 2% tolerance for full page
        })
      })

      // Test first content page if available
      test('first content page matches snapshot', async ({ page }) => {
        // Try to find a content page from the sidebar
        await page.goto(baseUrl)
        await page.waitForLoadState('networkidle')

        // Click first sidebar link
        const firstLink = page.locator('nav[aria-label="Sidebar"] a').first()
        if (await firstLink.isVisible()) {
          await firstLink.click()
          await page.waitForLoadState('networkidle')

          await page.evaluate(() => {
            const style = document.createElement('style')
            style.textContent = `
              #page-search-modal { display: none !important; }
              time { visibility: hidden !important; }
              [data-cf-beacon] { display: none !important; }
            `
            document.head.appendChild(style)
          })

          await expect(page).toHaveScreenshot(`${siteId}-content.png`, {
            fullPage: false,
            maxDiffPixelRatio: 0.01,
          })
        }
      })
    })
  }
})
