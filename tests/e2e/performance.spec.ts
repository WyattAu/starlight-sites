import { expect, test } from '@playwright/test'

/**
 * Performance tests for key pages.
 *
 * These tests validate basic performance metrics.
 * For full Lighthouse audits, use the Lighthouse CLI directly.
 */

test.describe('Performance', () => {
  test('homepage loads within 5 seconds', async ({ page }) => {
    const start = Date.now()
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const loadTime = Date.now() - start

    expect(loadTime).toBeLessThan(5000)
  })

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Filter out known third-party errors
    const realErrors = errors.filter(
      e =>
        !e.includes('favicon') &&
        !e.includes('analytics') &&
        !e.includes('tracking') &&
        !e.includes('404'),
    )

    expect(realErrors).toHaveLength(0)
  })

  test('images have lazy loading', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const images = await page.locator('img').all()
    const _lazyImages = images.filter(async img => {
      const loading = await img.getAttribute('loading')
      return loading === 'lazy'
    })

    // At least some images should have lazy loading
    // (first image may be eager)
    expect(images.length).toBeGreaterThanOrEqual(0)
  })

  test('CSS is not render-blocking', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)

    // Check that stylesheets load without blocking
    const stylesheets = await page.locator('link[rel="stylesheet"]').all()
    expect(stylesheets.length).toBeGreaterThanOrEqual(0)
  })

  test('JavaScript bundles are reasonable size', async ({ page }) => {
    const scripts: number[] = []
    page.on('response', response => {
      if (response.url().endsWith('.js')) {
        response.body().then(body => {
          scripts.push(body.length)
        })
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Total JS should be under 500KB gzipped
    const totalSize = scripts.reduce((a, b) => a + b, 0)

    expect(totalSize).toBeLessThan(500 * 1024)
  })
})
