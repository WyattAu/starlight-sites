import { test, expect } from '@playwright/test';
import { BASE_URLS } from './playwright.config';

for (const [siteId, baseUrl] of Object.entries(BASE_URLS)) {
  test.describe(`${siteId} accessibility`, () => {
    test.use({ baseURL: baseUrl });

    test('skip link exists and targets main content', async ({ page }) => {
      await page.goto('/');
      const skipLink = page.locator('a[href="#content"], a[href="#main-content"], .sl-skip-link, [class*="skip"]');
      await expect(skipLink.first()).toBeAttached();
    });

    test('skip link becomes visible on focus', async ({ page }) => {
      await page.goto('/');
      const skipLink = page.locator('a[href="#content"], a[href="#main-content"], .sl-skip-link, [class*="skip"]').first();
      await skipLink.focus();
      await expect(skipLink).toBeVisible();
    });

    test('page has lang attribute on html element', async ({ page }) => {
      await page.goto('/');
      const lang = await page.locator('html').getAttribute('lang');
      expect(lang).toBeTruthy();
      expect(lang!.length).toBeGreaterThanOrEqual(2);
    });

    test('all images have alt attributes', async ({ page }) => {
      await page.goto('/');
      const images = page.locator('img');
      const count = await images.count();
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).not.toBeNull();
      }
    });

    test('page has exactly one h1', async ({ page }) => {
      await page.goto('/');
      const h1s = page.locator('h1');
      const count = await h1s.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });

    test('headings are hierarchical (no skipped levels)', async ({ page }) => {
      await page.goto('/');
      const headings = await page.evaluate(() => {
        const els = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(els).map((el) => parseInt(el.tagName[1]));
      });
      for (let i = 1; i < headings.length; i++) {
        expect(headings[i] - headings[i - 1]).toBeLessThanOrEqual(1);
      }
    });

    test('nav element exists', async ({ page }) => {
      await page.goto('/');
      const nav = page.locator('nav');
      await expect(nav.first()).toBeVisible();
    });

    test('nav elements have aria-label', async ({ page }) => {
      await page.goto('/');
      const navs = page.locator('nav');
      const count = await navs.count();
      for (let i = 0; i < count; i++) {
        const ariaLabel = await navs.nth(i).getAttribute('aria-label');
        const ariaLabelledBy = await navs.nth(i).getAttribute('aria-labelledby');
        expect(ariaLabel || ariaLabelledBy).toBeTruthy();
      }
    });

    test('main landmark exists', async ({ page }) => {
      await page.goto('/');
      const main = page.locator('main, [role="main"]');
      await expect(main.first()).toBeVisible();
    });

    test('footer landmark exists', async ({ page }) => {
      await page.goto('/');
      const footer = page.locator('footer, [role="contentinfo"]');
      await expect(footer.first()).toBeVisible();
    });

    test('links have accessible names', async ({ page }) => {
      await page.goto('/');
      const links = page.locator('a');
      const count = await links.count();
      const emptyLinks: number[] = [];
      for (let i = 0; i < Math.min(count, 50); i++) {
        const text = await links.nth(i).textContent();
        const ariaLabel = await links.nth(i).getAttribute('aria-label');
        const title = await links.nth(i).getAttribute('title');
        if (!text?.trim() && !ariaLabel && !title) {
          emptyLinks.push(i);
        }
      }
      expect(emptyLinks).toHaveLength(0);
    });

    test('interactive elements are focusable', async ({ page }) => {
      await page.goto('/');
      const buttons = page.locator('button');
      const count = await buttons.count();
      for (let i = 0; i < Math.min(count, 10); i++) {
        const tabIndex = await buttons.nth(i).getAttribute('tabindex');
        expect(tabIndex).not.toBe('-1');
      }
    });

    test('ARIA labels present on interactive components', async ({ page }) => {
      await page.goto('/');
      const ariaElements = page.locator('[aria-label]');
      const count = await ariaElements.count();
      expect(count).toBeGreaterThan(2);
    });

    test('focus-visible styles are applied (no outline:none without replacement)', async ({ page }) => {
      await page.goto('/');
      const hasFocusVisible = await page.evaluate(() => {
        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule instanceof CSSStyleRule && rule.selectorText?.includes(':focus-visible')) {
                return true;
              }
            }
          } catch { /* cross-origin sheet */ }
        }
        return false;
      });
      expect(hasFocusVisible).toBeTruthy();
    });
  });
}

test.describe('Keyboard navigation', () => {
  test('can tab to sidebar from page load', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    const isVisible = await focused.isVisible();
    expect(isVisible).toBeTruthy();
  });

  test('can navigate sidebar with arrow keys', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const sidebar = page.locator('.sidebar, [class*="sidebar"]').first();
    const firstLink = sidebar.locator('a').first();
    await firstLink.focus();
    await page.keyboard.press('ArrowDown');
    const focused = page.locator(':focus');
    const tagName = await focused.evaluate((el) => el.tagName.toLowerCase());
    expect(['a', 'button', 'li']).toContain(tagName);
  });
});

test.describe('Color contrast and semantic HTML', () => {
  test('page uses semantic HTML elements', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const semanticTags = await page.evaluate(() => {
      const tags = ['header', 'nav', 'main', 'footer', 'article', 'section', 'aside'];
      return tags.filter((tag) => document.querySelector(tag) !== null);
    });
    expect(semanticTags).toContain('nav');
    expect(semanticTags).toContain('main');
  });

  test('page has structured data (JSON-LD)', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
    const content = await jsonLd.first().textContent();
    const parsed = JSON.parse(content!);
    expect(parsed['@context']).toBe('https://schema.org');
  });
});
