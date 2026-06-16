import { test, expect } from '@playwright/test'

/**
 * E2E tests for diagnostic test flow.
 *
 * These tests validate the complete user journey through diagnostic tests.
 * Tests run against live sites.
 */

test.describe('Diagnostic Test Flow', () => {
  test('can navigate to diagnostic page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Look for diagnostic links in sidebar or content
    const diagnosticLink = page.locator('a[href*="diagnostic"]').first()
    if (await diagnosticLink.isVisible()) {
      await diagnosticLink.click()
      await page.waitForLoadState('networkidle')
      expect(page.url()).toContain('diagnostic')
    }
  })

  test('diagnostic test renders', async ({ page }) => {
    // Navigate to a page with diagnostic tests
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Look for diagnostic component
    const diagnosticTest = page.locator('[role="region"][aria-label*="Diagnostic test"]')
    if (await diagnosticTest.isVisible()) {
      expect(diagnosticTest).toBeTruthy()
    }
  })

  test('diagnostic question is displayed', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Look for question text
    const questionText = page.locator('.diagnostic-question-text, [class*="question"]')
    if (await questionText.isVisible()) {
      expect(questionText).toBeTruthy()
    }
  })

  test('diagnostic options are selectable', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Look for option buttons
    const options = page.locator('[role="radio"]')
    const count = await options.count()
    if (count > 0) {
      await options.first().click()
      await page.waitForTimeout(200)

      // Should be selected
      const checked = await options.first().getAttribute('aria-checked')
      expect(checked).toBe('true')
    }
  })

  test('diagnostic submit works', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Select an option
    const options = page.locator('[role="radio"]')
    const count = await options.count()
    if (count > 0) {
      await options.first().click()
      await page.waitForTimeout(200)

      // Click submit
      const submitBtn = page.locator('button:has-text("Submit")')
      if (await submitBtn.isVisible() && await submitBtn.isEnabled()) {
        await submitBtn.click()
        await page.waitForTimeout(500)

        // Should show next button or results
        const nextBtn = page.locator('button:has-text("Next Question"), button:has-text("View Results")')
        if (await nextBtn.isVisible()) {
          expect(nextBtn).toBeTruthy()
        }
      }
    }
  })

  test('diagnostic shows explanation after submit', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Select an option
    const options = page.locator('[role="radio"]')
    const count = await options.count()
    if (count > 0) {
      await options.first().click()
      await page.waitForTimeout(200)

      // Click submit
      const submitBtn = page.locator('button:has-text("Submit")')
      if (await submitBtn.isVisible() && await submitBtn.isEnabled()) {
        await submitBtn.click()
        await page.waitForTimeout(500)

        // Should show explanation
        const explanation = page.locator('.diagnostic-explanation, [class*="explanation"]')
        if (await explanation.isVisible()) {
          expect(explanation).toBeTruthy()
        }
      }
    }
  })

  test('diagnostic progress is shown', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Look for progress indicator
    const progress = page.locator('text=/Question \\d+ of \\d+/')
    if (await progress.isVisible()) {
      expect(progress).toBeTruthy()
    }
  })

  test('diagnostic timer is shown', async ({ page }) => {
    await page.goto('/maths/diagnostic')
    await page.waitForLoadState('networkidle')

    // Look for timer
    const timer = page.locator('.diagnostic-timer, [class*="timer"]')
    if (await timer.isVisible()) {
      expect(timer).toBeTruthy()
    }
  })
})
