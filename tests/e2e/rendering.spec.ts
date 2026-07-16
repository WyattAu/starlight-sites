/**
 * Rendering verification tests: KaTeX, Mermaid, Asides, Canvas demos.
 *
 * Validates that critical rendering pipelines produce correct output
 * on live sites. Runs against production URLs.
 */
import { expect, test } from '@playwright/test'

// ---- KaTeX Math Rendering ----
test.describe('KaTeX math rendering', () => {
  test('mathematics site renders KaTeX elements', async ({ page }) => {
    await page.goto('https://mathematics.wyattau.com/1-abstract-algebra/1_groups/')
    // KaTeX renders math as <span class="katex"> elements
    const katexElements = page.locator('span.katex')
    const count = await katexElements.count()
    expect(count).toBeGreaterThan(0)
  })

  test('KaTeX CSS is loaded', async ({ page }) => {
    await page.goto('https://mathematics.wyattau.com/1-abstract-algebra/1_groups/')
    const katexCSS = page.locator('link[href*="katex"]')
    await expect(katexCSS).toHaveCount(1)
  })

  test('DSE biology page renders inline math', async ({ page }) => {
    await page.goto(
      'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    )
    const katexElements = page.locator('span.katex')
    const count = await katexElements.count()
    expect(count).toBeGreaterThan(0)
  })
})

// ---- Mermaid Diagram Rendering ----
test.describe('Mermaid diagram rendering', () => {
  test('IB CS page has mermaid SVG output', async ({ page }) => {
    await page.goto(
      'https://ib.wyattau.com/computer-science/1-system-fundamentals/2_system-organization/',
    )
    // After mermaid-render.js runs, pre.mermaid should contain SVG
    const mermaidPre = page.locator('pre.mermaid, pre[data-processed="true"]')
    const count = await mermaidPre.count()
    expect(count).toBeGreaterThan(0)
    // Check that SVG was rendered (not raw text)
    const hasSVG = await mermaidPre.first().locator('svg').count()
    expect(hasSVG).toBeGreaterThan(0)
  })

  test('mermaid.min.js is loaded', async ({ page }) => {
    await page.goto(
      'https://ib.wyattau.com/computer-science/1-system-fundamentals/2_system-organization/',
    )
    const mermaidScript = page.locator('script[src*="mermaid"]')
    await expect(mermaidScript).toHaveCount(1)
  })

  test('mermaid-render.js is loaded', async ({ page }) => {
    await page.goto(
      'https://ib.wyattau.com/computer-science/1-system-fundamentals/2_system-organization/',
    )
    const renderScript = page.locator('script[src="/mermaid-render.js"]')
    await expect(renderScript).toHaveCount(1)
  })
})

// ---- Admonition/Aside Rendering ----
test.describe('Admonition rendering', () => {
  test('DSE biology page has rendered aside elements', async ({ page }) => {
    await page.goto(
      'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    )
    // After directive conversion, should have <aside> with starlight-aside classes
    const asides = page.locator('aside.starlight-aside')
    const count = await asides.count()
    expect(count).toBeGreaterThan(0)
  })

  test('aside elements have correct variant classes', async ({ page }) => {
    await page.goto(
      'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    )
    // Should have at least one caution or info aside
    const cautionAsides = page.locator('aside.starlight-aside--caution')
    const infoAsides = page.locator('aside.starlight-aside--note')
    const total = (await cautionAsides.count()) + (await infoAsides.count())
    expect(total).toBeGreaterThan(0)
  })

  test('aside elements have title paragraphs', async ({ page }) => {
    await page.goto(
      'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    )
    const asideTitles = page.locator('aside.starlight-aside .starlight-aside__title')
    const count = await asideTitles.count()
    expect(count).toBeGreaterThan(0)
  })

  test('no raw ::: directive syntax remains in HTML', async ({ page }) => {
    await page.goto(
      'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    )
    const bodyText = await page.locator('main').textContent()
    // Should not contain raw ::: syntax
    expect(bodyText).not.toMatch(/:::(caution|tip|note|info|danger)/)
  })
})

// ---- Landing Page Canvas Demos ----
test.describe('Landing page demos', () => {
  test('canvas elements are present', async ({ page }) => {
    await page.goto('https://wyattsnotes.wyattau.com/')
    const canvases = page.locator('canvas')
    const count = await canvases.count()
    expect(count).toBeGreaterThanOrEqual(3) // Fourier, sine, Lissajous
  })

  test('hero search input is present', async ({ page }) => {
    await page.goto('https://wyattsnotes.wyattau.com/')
    const searchInput = page.locator('#hero-search-input')
    await expect(searchInput).toBeVisible()
  })

  test('nav dropdowns are present', async ({ page }) => {
    await page.goto('https://wyattsnotes.wyattau.com/')
    const dropdowns = page.locator('.nav-dropdown')
    const count = await dropdowns.count()
    expect(count).toBeGreaterThanOrEqual(4) // Exam Boards, CS, Further Studies, Infrastructure
  })

  test('site cards render in grid', async ({ page }) => {
    await page.goto('https://wyattsnotes.wyattau.com/')
    const siteCards = page.locator('.site-card')
    const count = await siteCards.count()
    expect(count).toBeGreaterThan(20) // We have 40+ sites
  })
})

// ---- Sidebar Rendering ----
test.describe('Sidebar rendering', () => {
  test('sidebar has links on mathematics site', async ({ page }) => {
    await page.goto('https://mathematics.wyattau.com/1-abstract-algebra/1_groups/')
    const sidebar = page.locator('#starlight__sidebar, .sidebar-pane')
    await expect(sidebar).toBeVisible()
    const links = sidebar.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThan(0)
  })

  test('sidebar has links on IB site', async ({ page }) => {
    await page.goto('https://ib.wyattau.com/biology/1-cell-biology/1-cell-biology/')
    // Wait for sidebar to render
    await page.waitForSelector('[id*="sidebar"] a, nav a', { timeout: 10000 })
    const links = page.locator('[id*="sidebar"] a, nav a[href*="/"]')
    const count = await links.count()
    expect(count).toBeGreaterThan(0)
  })

  test('active page is highlighted in sidebar', async ({ page }) => {
    await page.goto('https://ib.wyattau.com/biology/1-cell-biology/1-cell-biology/')
    // Wait for page to fully load
    await page.waitForLoadState('networkidle')
    // Starlight uses aria-current="page" on the active sidebar link
    const activeLink = page.locator('[aria-current="page"]')
    await expect(activeLink.first()).toBeVisible({ timeout: 10000 })
  })
})
