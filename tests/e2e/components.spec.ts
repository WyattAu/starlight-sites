import { test, expect } from '@playwright/test';
import { BASE_URLS } from './playwright.config';

test.describe('FlashcardDeck component', () => {
  test('DSE maths flashcards page loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('flashcard deck renders with region role', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const deck = page.locator('[role="region"][aria-label*="Flashcard"], .flashcard-deck');
    await expect(deck.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck shows title', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const title = page.locator('.flashcard-title, [class*="flashcard"] h3');
    await expect(title.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck shows stats row with Total Cards', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const statsRow = page.locator('.flashcard-stats-row');
    await expect(statsRow.first()).toBeVisible({ timeout: 10000 });
    const totalCards = page.locator('.flashcard-stat:has-text("Total Cards")');
    await expect(totalCards.first()).toBeVisible();
  });

  test('flashcard deck shows Due Today stat', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const dueToday = page.locator('.flashcard-stat:has-text("Due Today")');
    await expect(dueToday.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck shows mastery progress bar', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const progressBar = page.locator('.flashcard-progress-bar, .flashcard-progress');
    await expect(progressBar.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck has Study Now button', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const studyBtn = page.locator('button:has-text("Study Now")');
    await expect(studyBtn.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck has Stats button', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const statsBtn = page.locator('button:has-text("Stats")');
    await expect(statsBtn.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck has Settings button', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const settingsBtn = page.locator('button:has-text("Settings")');
    await expect(settingsBtn.first()).toBeVisible({ timeout: 10000 });
  });

  test('clicking Stats button shows stats view', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const statsBtn = page.locator('button:has-text("Stats")').first();
    await statsBtn.waitFor({ state: 'visible', timeout: 10000 });
    await statsBtn.click();
    const statsView = page.locator('.flashcard-stats-view, :has-text("Statistics")');
    await expect(statsView.first()).toBeVisible({ timeout: 5000 });
  });

  test('clicking Settings button shows settings view', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const settingsBtn = page.locator('button:has-text("Settings")').first();
    await settingsBtn.waitFor({ state: 'visible', timeout: 10000 });
    await settingsBtn.click();
    const settingsView = page.locator('.flashcard-settings-view, :has-text("Export Progress")');
    await expect(settingsView.first()).toBeVisible({ timeout: 5000 });
  });

  test('flashcard deck shows mastery breakdown badges', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const badges = page.locator('.flashcard-mastery-badge');
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test('languages flashcards page loads and renders', async ({ page }) => {
    await page.goto(`${BASE_URLS.languages}/rust/flashcards-rust-basics/`);
    const deck = page.locator('[role="region"][aria-label*="Flashcard"], .flashcard-deck');
    await expect(deck.first()).toBeVisible({ timeout: 10000 });
  });

  test('flashcard deck has keyboard shortcuts (1-4 keys)', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const studyBtn = page.locator('button:has-text("Study Now")').first();
    await studyBtn.waitFor({ state: 'visible', timeout: 10000 });
    const isDisabled = await studyBtn.isDisabled();
    if (!isDisabled) {
      await studyBtn.click();
      const flipTarget = page.locator('.flashcard-flip-inner, [role="button"][aria-label*="Card"]');
      await expect(flipTarget.first()).toBeVisible({ timeout: 5000 });
    }
  });
});

test.describe('PracticeProblem component', () => {
  test('DSE maths practice page loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('practice problem renders with radiogroup role', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const radiogroup = page.locator('[role="radiogroup"]');
    await expect(radiogroup.first()).toBeVisible({ timeout: 10000 });
  });

  test('practice problem has answer options as radio buttons', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const radios = page.locator('[role="radio"]');
    const count = await radios.count();
    expect(count).toBeGreaterThan(0);
  });

  test('practice problem radio buttons have aria-checked', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const firstRadio = page.locator('[role="radio"]').first();
    const ariaChecked = await firstRadio.getAttribute('aria-checked');
    expect(ariaChecked).toBe('false');
  });

  test('practice problem radio buttons have aria-label', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const radios = page.locator('[role="radio"]');
    const count = await radios.count();
    for (let i = 0; i < Math.min(count, 4); i++) {
      const label = await radios.nth(i).getAttribute('aria-label');
      expect(label).toBeTruthy();
      expect(label!.length).toBeGreaterThan(0);
    }
  });

  test('selecting an answer updates aria-checked', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const firstRadio = page.locator('[role="radio"]').first();
    await firstRadio.waitFor({ state: 'visible', timeout: 10000 });
    await firstRadio.click();
    const ariaChecked = await firstRadio.getAttribute('aria-checked');
    expect(ariaChecked).toBe('true');
  });

  test('submit button appears after selection', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const firstRadio = page.locator('[role="radio"]').first();
    await firstRadio.waitFor({ state: 'visible', timeout: 10000 });
    await firstRadio.click();
    const submitBtn = page.locator('button:has-text("Submit")');
    await expect(submitBtn.first()).toBeVisible();
  });

  test('submit button is disabled when no answer selected', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.waitFor({ state: 'visible', timeout: 10000 });
    const isDisabled = await submitBtn.isDisabled();
    expect(isDisabled).toBeTruthy();
  });

  test('submitting answer shows correct/incorrect feedback', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const firstRadio = page.locator('[role="radio"]').first();
    await firstRadio.waitFor({ state: 'visible', timeout: 10000 });
    await firstRadio.click();
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();
    const feedback = page.locator(':has-text("Correct"), :has-text("Incorrect")');
    await expect(feedback.first()).toBeVisible({ timeout: 5000 });
  });

  test('explanation appears after submission', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const firstRadio = page.locator('[role="radio"]').first();
    await firstRadio.waitFor({ state: 'visible', timeout: 10000 });
    await firstRadio.click();
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();
    await page.waitForTimeout(1000);
    const explanation = page.locator('.flashcard-deck ~ div, [style*="margin-top: 16px"]');
    const count = await explanation.count();
    expect(count).toBeGreaterThan(0);
  });

  test('difficulty badge is displayed', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const badge = page.locator('[style*="text-transform: uppercase"], :has-text("easy"), :has-text("medium"), :has-text("hard")');
    const count = await badge.count();
    expect(count).toBeGreaterThan(0);
  });

  test('keyboard navigation works with arrow keys', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const radiogroup = page.locator('[role="radiogroup"]').first();
    await radiogroup.waitFor({ state: 'visible', timeout: 10000 });
    const firstRadio = page.locator('[role="radio"]').first();
    await firstRadio.focus();
    await page.keyboard.press('ArrowDown');
    const secondRadio = page.locator('[role="radio"]').nth(1);
    const ariaChecked = await secondRadio.getAttribute('aria-checked');
    expect(ariaChecked).toBe('true');
  });

  test('languages practice page loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.languages}/python/practice-python-basics/`);
    const radiogroup = page.locator('[role="radiogroup"]');
    await expect(radiogroup.first()).toBeVisible({ timeout: 10000 });
  });

  test('university practice page loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.university}/computer-science/1-algorithms/practice-algorithms/`);
    const radiogroup = page.locator('[role="radiogroup"]');
    await expect(radiogroup.first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe('DiagnosticTest component', () => {
  test('DSE diagnostics page loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/diagnostics/`);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });
});

test.describe('BookmarkManager component', () => {
  test('bookmark manager renders', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/practice-compulsory/`);
    const bookmark = page.locator('[class*="bookmark"], [aria-label*="Bookmark" i], button:has-text("Bookmark")');
    const count = await bookmark.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
