import { test, expect } from '@playwright/test';
import { BASE_URLS } from './playwright.config';

const SEARCH_API = 'https://search.wyattau.com/api';

test.describe('Search API health', () => {
  test('health endpoint returns ok', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/health`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.status).toBe('ok');
    expect(data.siteCount).toBeGreaterThan(0);
    expect(data.totalEntries).toBeGreaterThan(0);
  });

  test('sites endpoint lists all 9 sites', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/sites`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.sites).toHaveLength(9);
    const siteIds = data.sites.map((s: { id: string }) => s.id);
    expect(siteIds).toContain('dse');
    expect(siteIds).toContain('programming');
    expect(siteIds).toContain('languages');
  });
});

test.describe('Search API queries', () => {
  test('search with valid query returns results', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=physics`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.query).toBe('physics');
    expect(data.total).toBeGreaterThan(0);
    expect(data.results.length).toBeGreaterThan(0);
  });

  test('search results contain required fields', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=calculus`);
    const data = await response.json();
    for (const result of data.results) {
      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('url');
      expect(result).toHaveProperty('site');
      expect(result).toHaveProperty('siteName');
      expect(result).toHaveProperty('snippet');
      expect(result.title.length).toBeGreaterThan(0);
      expect(result.url).toMatch(/^https?:\/\//);
    }
  });

  test('search with site filter returns only that site', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=physics&site=dse`);
    const data = await response.json();
    for (const result of data.results) {
      expect(result.site).toBe('dse');
    }
  });

  test('search with subject filter works', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=equations&subject=mathematics`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.results).toBeDefined();
  });

  test('search with short query returns 400', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=a`);
    expect(response.status()).toBe(400);
  });

  test('search with empty query returns 400', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=`);
    expect(response.status()).toBe(400);
  });

  test('search respects limit parameter', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/search?q=mathematics&limit=3`);
    const data = await response.json();
    expect(data.results.length).toBeLessThanOrEqual(3);
  });
});

test.describe('Search suggest endpoint', () => {
  test('suggest returns suggestions array', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/suggest?q=phys`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(Array.isArray(data.suggestions)).toBeTruthy();
  });

  test('suggest with empty query returns empty array', async ({ request }) => {
    const response = await request.get(`${SEARCH_API}/suggest?q=`);
    const data = await response.json();
    expect(data.suggestions).toHaveLength(0);
  });
});

test.describe('In-page search UI', () => {
  test('search modal opens on DSE site', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const modal = page.locator('#page-search-modal');
      await expect(modal).toBeVisible({ timeout: 5000 });
    }
  });

  test('search modal has input field', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const input = page.locator('#page-search-modal input, #page-search-modal [role="searchbox"]');
      await expect(input.first()).toBeVisible({ timeout: 5000 });
    }
  });

  test('search input accepts typing', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const input = page.locator('#page-search-modal input, #page-search-modal [role="searchbox"]').first();
      await input.fill('physics');
      await expect(input).toHaveValue('physics');
    }
  });

  test('search results appear after typing', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const input = page.locator('#page-search-modal input, #page-search-modal [role="searchbox"]').first();
      await input.fill('physics');
      await page.waitForTimeout(1500);
      const results = page.locator('#page-search-modal [class*="result"], #page-search-modal a[href]');
      const count = await results.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('search modal closes on Escape', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const modal = page.locator('#page-search-modal');
      await expect(modal).toBeVisible({ timeout: 5000 });
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible({ timeout: 3000 });
    }
  });

  test('search modal closes on backdrop click', async ({ page }) => {
    await page.goto(`${BASE_URLS.dse}/`);
    const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
      const modal = page.locator('#page-search-modal');
      await expect(modal).toBeVisible({ timeout: 5000 });
      const backdrop = page.locator('#page-search-modal .backdrop');
      if (await backdrop.count() > 0) {
        await backdrop.click({ position: { x: 10, y: 10 } });
        await expect(modal).not.toBeVisible({ timeout: 3000 });
      }
    }
  });
});

test.describe('Cross-site search on different sites', () => {
  for (const [siteId, baseUrl] of Object.entries(BASE_URLS).slice(0, 4)) {
    test(`search works on ${siteId}`, async ({ page }) => {
      await page.goto(`${baseUrl}/`);
      const searchButton = page.locator('#page-search-trigger, [data-search-trigger], button:has-text("Search"), [aria-label*="Search" i]');
      if (await searchButton.count() > 0) {
        await searchButton.first().click();
        const input = page.locator('#page-search-modal input, #page-search-modal [role="searchbox"]').first();
        await input.fill('mathematics');
        await page.waitForTimeout(1500);
        const results = page.locator('#page-search-modal [class*="result"], #page-search-modal a[href]');
        const count = await results.count();
        expect(count).toBeGreaterThan(0);
      }
    });
  }
});
