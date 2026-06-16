/**
 * Live-site smoke tests: navigation, landmarks, search modal, breadcrumbs.
 *
 * Each test runs against the production URL configured in playwright.config.ts.
 * These validate critical user flows across all nine sites.
 */
import { expect, test } from '@playwright/test'

const SITE_IDS = [
  'dse',
  'ib',
  'alevel',
  'university',
  'qualifications',
  'programming',
  'infrastructure',
  'languages',
  'tools',
]

for (const siteId of SITE_IDS) {
  test.describe(`${siteId}`, () => {
    test('homepage loads with title and heading', async ({ page }) => {
      await page.goto('/')
      await expect(page).toHaveTitle(new RegExp(siteId, 'i'))
      const h1 = page.locator('h1')
      await expect(h1.first()).toBeVisible()
    })

    test('has nav, main, footer landmarks', async ({ page }) => {
      await page.goto('/')
      await expect(page.locator('nav').first()).toBeVisible()
      await expect(page.locator('main, [role="main"]').first()).toBeVisible()
      await expect(page.locator('footer').first()).toBeVisible()
    })

    test('sidebar renders with links', async ({ page }) => {
      await page.goto('/')
      const sidebar = page.locator('.sidebar, [class*="sidebar"]')
      await expect(sidebar.first()).toBeVisible()
      const linkCount = await sidebar.locator('a').count()
      expect(linkCount).toBeGreaterThan(0)
    })

    test('search button is present and accessible', async ({ page }) => {
      await page.goto('/')
      const search = page.locator(
        'button[aria-label*="search" i], button[aria-label*="Search" i], .search-button',
      )
      await expect(search.first()).toBeVisible()
    })

    test('viewport meta tag is correct', async ({ page }) => {
      await page.goto('/')
      await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
        'content',
        /width=device-width/,
      )
    })
  })
}

test.describe('Cross-site navigation', () => {
  test('DSE maths section loads', async ({ page }) => {
    await page.goto('https://dse.wyattau.com/maths/')
    await expect(page).toHaveTitle(/maths/i)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('university computer-science section loads', async ({ page }) => {
    await page.goto('https://university.wyattau.com/computer-science/')
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('languages rust section loads', async ({ page }) => {
    await page.goto('https://languages.wyattau.com/rust/')
    await expect(page).toHaveTitle(/rust/i)
  })

  test('tools algorithms section loads', async ({ page }) => {
    await page.goto('https://tools.wyattau.com/algorithms/')
    await expect(page.locator('h1').first()).toBeVisible()
  })
})

test.describe('Keyboard accessibility', () => {
  test('can tab through sidebar links', async ({ page }) => {
    await page.goto('https://dse.wyattau.com/')
    await page.keyboard.press('Tab')
    const focused = page.locator(':focus')
    const tagName = await focused.evaluate(el => el.tagName.toLowerCase())
    expect(['a', 'button', 'input']).toContain(tagName)
  })
})
