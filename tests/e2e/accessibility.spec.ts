/**
 * Accessibility Tests
 *
 * Tests WCAG AA compliance across all themes and components.
 * Uses axe-core for automated accessibility testing.
 */

import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const THEMES = ['dark', 'light', 'sepia', 'contrast', 'nord', 'dracula', 'solarized', 'monokai', 'ayu-mirage', 'papercolor']

const TEST_PAGES = [
  { name: 'physics', url: 'https://physics.wyattau.com/' },
  { name: 'mathematics', url: 'https://mathematics.wyattau.com/' },
  { name: 'computer-science', url: 'https://computer-science.wyattau.com/' },
  { name: 'ib', url: 'https://ib.wyattau.com/' },
  { name: 'dse', url: 'https://dse.wyattau.com/' },
]

for (const page of TEST_PAGES) {
  test.describe(`${page.name} accessibility`, () => {
    for (const theme of THEMES) {
      test(`theme: ${theme} - WCAG AA`, async ({ page }) => {
        await page.goto(page.url)
        await page.waitForLoadState('networkidle')

        // Set theme
        await page.evaluate((t) => {
          document.documentElement.setAttribute('data-theme', t)
        }, theme)

        // Wait for theme transition
        await page.waitForTimeout(500)

        // Run axe-core accessibility scan
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze()

        // Log violations for debugging
        if (results.violations.length > 0) {
          console.log(`\n=== ${page.name} (${theme}) violations ===`)
          for (const violation of results.violations) {
            console.log(`  ${violation.id}: ${violation.description}`)
            console.log(`    Impact: ${violation.impact}`)
            console.log(`    Nodes: ${violation.nodes.length}`)
          }
        }

        // Expect no violations
        expect(results.violations).toEqual([])
      })
    }
  })
}

// Test keyboard navigation
test.describe('Keyboard Navigation', () => {
  test('skip link is visible on focus', async ({ page }) => {
    await page.goto('https://physics.wyattau.com/')
    await page.waitForLoadState('networkidle')

    // Press Tab to focus skip link
    await page.keyboard.press('Tab')

    // Check if skip link is visible
    const skipLink = page.locator('.skip-link')
    await expect(skipLink).toBeVisible()
  })

  test('search modal opens with Cmd+K', async ({ page }) => {
    await page.goto('https://physics.wyattau.com/')
    await page.waitForLoadState('networkidle')

    // Open search modal
    await page.keyboard.press('Meta+k')

    // Check if modal is visible
    const modal = page.locator('.search-modal-backdrop')
    await expect(modal).toBeVisible()
  })

  test('search modal closes with Escape', async ({ page }) => {
    await page.goto('https://physics.wyattau.com/')
    await page.waitForLoadState('networkidle')

    // Open search modal
    await page.keyboard.press('Meta+k')
    const modal = page.locator('.search-modal-backdrop')
    await expect(modal).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(modal).not.toBeVisible()
  })
})
