import { test, expect, type Page } from '@playwright/test';
import { BASE_URLS } from './playwright.config';

const SITES = Object.entries(BASE_URLS);

for (const [siteId, baseUrl] of SITES) {
  test.describe(`${siteId} site`, () => {
    test.use({ baseURL: baseUrl });

    test('homepage loads with title and heading', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveTitle(new RegExp(siteId, 'i'));
      const h1 = page.locator('h1');
      await expect(h1.first()).toBeVisible();
    });

    test('has <nav> element in page', async ({ page }) => {
      await page.goto('/');
      const nav = page.locator('nav');
      await expect(nav.first()).toBeVisible();
    });

    test('sidebar renders with links', async ({ page }) => {
      await page.goto('/');
      const sidebar = page.locator('.sidebar, [class*="sidebar"]');
      await expect(sidebar.first()).toBeVisible();
      const sidebarLinks = sidebar.locator('a');
      const count = await sidebarLinks.count();
      expect(count).toBeGreaterThan(0);
    });

    test('sidebar links navigate to sections', async ({ page }) => {
      await page.goto('/');
      const sidebar = page.locator('.sidebar, [class*="sidebar"]');
      const firstLink = sidebar.locator('a').first();
      const href = await firstLink.getAttribute('href');
      expect(href).toBeTruthy();
      await firstLink.click();
      await expect(page).toHaveURL(new RegExp(href!.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    });

    test('main content area renders', async ({ page }) => {
      await page.goto('/');
      const main = page.locator('main, [role="main"]');
      await expect(main.first()).toBeVisible();
    });

    test('footer renders', async ({ page }) => {
      await page.goto('/');
      const footer = page.locator('footer');
      await expect(footer.first()).toBeVisible();
    });

    test('page has valid viewport meta tag', async ({ page }) => {
      await page.goto('/');
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', /width=device-width/);
    });
  });
}

test.describe('Cross-site navigation', () => {
  test('DSE maths section loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/`);
    await expect(page).toHaveTitle(/maths/i);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('DSE physics section loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/physics/`);
    await expect(page).toHaveTitle(/physics/i);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('languages rust section loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.languages}/rust/`);
    await expect(page).toHaveTitle(/rust/i);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('programming section loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.programming}/`);
    await expect(page).toHaveTitle(/programming/i);
  });

  test('university computer-science section loads', async ({ page }) => {
    await page.goto(`${BASE_URLS.university}/computer-science/`);
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Breadcrumbs', () => {
  test('DSE maths compulsory page shows breadcrumbs', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/compulsory/`);
    const breadcrumbs = page.locator('.breadcrumbs, nav[aria-label*="Breadcrumb" i], [class*="breadcrumb"]');
    await expect(breadcrumbs.first()).toBeVisible();
  });

  test('DSE maths flashcards page shows breadcrumbs', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/maths/flashcards-compulsory/`);
    const breadcrumbs = page.locator('.breadcrumbs, nav[aria-label*="Breadcrumb" i], [class*="breadcrumb"]');
    await expect(breadcrumbs.first()).toBeVisible();
  });

  test('languages flashcards page shows breadcrumbs', async ({ page }) => {
    await page.goto(`${BASE_URLS.languages}/rust/flashcards-rust-basics/`);
    const breadcrumbs = page.locator('.breadcrumbs, nav[aria-label*="Breadcrumb" i], [class*="breadcrumb"]');
    await expect(breadcrumbs.first()).toBeVisible();
  });
});

test.describe('Page navigation via keyboard', () => {
  test('can tab through sidebar links', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    const tagName = await focused.evaluate((el) => el.tagName.toLowerCase());
    expect(['a', 'button', 'input']).toContain(tagName);
  });
});
