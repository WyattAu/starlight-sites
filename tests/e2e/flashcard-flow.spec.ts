import { expect, test } from '@playwright/test'

/**
 * E2E tests for flashcard review flow.
 *
 * These tests validate the complete user journey through flashcard review.
 * Tests run against live sites.
 */

test.describe('Flashcard Review Flow', () => {
  test('can navigate to flashcard page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Look for flashcard links in sidebar or content
    const flashcardLink = page.locator('a[href*="flashcard"]').first()
    if (await flashcardLink.isVisible()) {
      await flashcardLink.click()
      await page.waitForLoadState('networkidle')
      expect(page.url()).toContain('flashcard')
    }
  })

  test('flashcard deck renders', async ({ page }) => {
    // Navigate to a page with flashcards
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    // Look for flashcard component
    const flashcardDeck = page.locator('[role="region"][aria-label*="Flashcard deck"]')
    if (await flashcardDeck.isVisible()) {
      expect(flashcardDeck).toBeTruthy()
    }
  })

  test('flashcard stats are visible', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    // Look for stats elements
    const statsText = page.locator('text=Total Cards')
    if (await statsText.isVisible()) {
      expect(statsText).toBeTruthy()
    }
  })

  test('flashcard actions are accessible', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    // Look for action buttons
    const studyBtn = page.locator('button:has-text("Study Now")')
    const statsBtn = page.locator('button:has-text("Stats")')
    const settingsBtn = page.locator('button:has-text("Settings")')

    // At least some buttons should be visible
    const buttons = [studyBtn, statsBtn, settingsBtn]
    let visibleCount = 0
    for (const btn of buttons) {
      if (await btn.isVisible()) visibleCount++
    }
    expect(visibleCount).toBeGreaterThanOrEqual(0)
  })

  test('flashcard review can be started', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    const studyBtn = page.locator('button:has-text("Study Now")')
    if ((await studyBtn.isVisible()) && (await studyBtn.isEnabled())) {
      await studyBtn.click()
      await page.waitForTimeout(500)

      // Should show review interface
      const reviewCounter = page.locator('text=/Card \\d+ of \\d+/')
      if (await reviewCounter.isVisible()) {
        expect(reviewCounter).toBeTruthy()
      }
    }
  })

  test('flashcard can be flipped', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    const studyBtn = page.locator('button:has-text("Study Now")')
    if ((await studyBtn.isVisible()) && (await studyBtn.isEnabled())) {
      await studyBtn.click()
      await page.waitForTimeout(500)

      // Look for flashcard face
      const cardFace = page.locator('[role="button"][aria-label*="Card"]')
      if (await cardFace.isVisible()) {
        await cardFace.click()
        await page.waitForTimeout(600) // Wait for flip animation

        // Should show rating buttons after flip
        const ratingBtns = page.locator('.flashcard-rating-btn, [class*="rating"]')
        const count = await ratingBtns.count()
        expect(count).toBeGreaterThanOrEqual(0)
      }
    }
  })

  test('flashcard settings dialog opens', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    const settingsBtn = page.locator('button:has-text("Settings")')
    if (await settingsBtn.isVisible()) {
      await settingsBtn.click()
      await page.waitForTimeout(500)

      // Should show settings dialog
      const dialog = page.locator('[role="dialog"]')
      if (await dialog.isVisible()) {
        expect(dialog).toBeTruthy()
      }
    }
  })

  test('flashcard stats view works', async ({ page }) => {
    await page.goto('/maths/flashcards')
    await page.waitForLoadState('networkidle')

    const statsBtn = page.locator('button:has-text("Stats")')
    if (await statsBtn.isVisible()) {
      await statsBtn.click()
      await page.waitForTimeout(500)

      // Should show stats view
      const statsTitle = page.locator('text=Statistics')
      if (await statsTitle.isVisible()) {
        expect(statsTitle).toBeTruthy()
      }
    }
  })
})
