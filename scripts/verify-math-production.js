// Verify the mathematics deploy end to end on production.
const { chromium } = require('playwright')

const EXEC =
  process.env.PLAYWRIGHT_CHROMIUM ||
  '/home/wyatt/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell'
const BASE = 'https://mathematics.wyattau.com'

;(async () => {
  const b = await chromium.launch({ executablePath: EXEC })
  let bad = 0

  // 1. Retired monolith routes must redirect, not 404.
  const routes = [
    '/complex-analysis/',
    '/abstract-algebra/',
    '/real-analysis/',
    '/linear-algebra/',
    '/number-theory/',
    '/probability/',
    '/probability-and-statistics/',
    '/multivariable-calculus/',
    '/differential-equations/',
  ]
  console.log('--- redirects (expect 200/301/302, body containing the track) ---')
  const probe = await b.newPage({ viewport: { width: 390, height: 844 } })
  for (const r of routes) {
    const res = await probe.request.get(BASE + r, { maxRedirects: 5 })
    const body = await res.text()
    const ok = res.status() === 200 && !/Page Not Found/i.test(body)
    if (!ok) bad++
    console.log(`${ok ? 'ok      ' : 'BROKEN  '} ${r} -> ${res.status()}${ok ? '' : ' (404 page)'}`)
  }

  // 2. A table-heavy page must not overflow the document at phone width.
  console.log('\n--- phone layout (390px) ---')
  const page = await b.newPage({ viewport: { width: 390, height: 844 } })
  const targets = [
    '/11-functional-analysis/4_the-fundamental-theorems/',
    '/10-measure-theory/3_lebesgue-outer-measure-and-caratheodory-extension/',
    '/9-topology/9_introduction-to-algebraic-topology/',
    '/2-linear-algebra/6_problem-set/',
  ]
  for (const t of targets) {
    await page.goto(BASE + t, { waitUntil: 'load', timeout: 60000 })
    await page.waitForTimeout(2200)
    const m = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      innerW: window.innerWidth,
      wrapped: document.querySelectorAll('.table-wrap').length,
      bare: (() => {
        let n = 0
        for (const tab of document.querySelectorAll('.sl-markdown-content table')) {
          if (!tab.closest('.table-wrap, .table-wrapper, .wn-table-wrapper')) n++
        }
        return n
      })(),
      h2: document.querySelector('h1, h2') ? document.querySelector('h1,h2').textContent.trim().slice(0, 44) : '',
    }))
    const clean = m.scrollW <= m.innerW + 1
    if (!clean) bad++
    console.log(
      `${clean ? 'ok      ' : 'OVERFLOW'} ${t}\n           scrollW=${m.scrollW}/${m.innerW}  wrapped=${m.wrapped}  bare=${m.bare}  "${m.h2}"`,
    )
  }

  // 3. The invented term must be gone from the live pages.
  console.log('\n--- terminology ---')
  for (const t of [
    '/9-topology/9_introduction-to-algebraic-topology/',
    '/6-complex-analysis/5_cauchy-s-theorem/',
  ]) {
    await page.goto(BASE + t, { waitUntil: 'load', timeout: 60000 })
    await page.waitForTimeout(1500)
    const term = await page.evaluate(() =>
      /directly connected/i.test(document.body.innerText) ? 'PRESENT' : 'gone',
    )
    if (term === 'PRESENT') bad++
    console.log(`${term === 'gone' ? 'ok      ' : 'BROKEN  '} ${t}: ${term}`)
  }

  // 4. KaTeX still single-rendered (self-hosted CSS did not regress).
  await page.goto(BASE + '/9-topology/9_introduction-to-algebraic-topology/', { waitUntil: 'load', timeout: 60000 })
  await page.waitForTimeout(2200)
  const math = await page.evaluate(() => {
    const el = document.querySelector('.katex-mathml')
    if (!el) return { present: false }
    const cs = getComputedStyle(el)
    return { present: true, pos: cs.position, w: Math.round(el.getBoundingClientRect().width) }
  })
  const mathOk = !math.present || (math.pos === 'absolute' && math.w <= 2)
  if (!mathOk) bad++
  console.log(`\n--- katex ---\n${mathOk ? 'ok      ' : 'BROKEN  '} .katex-mathml ${JSON.stringify(math)}`)

  await b.close()
  console.log(`\n${bad === 0 ? 'ALL PRODUCTION CHECKS PASS' : `${bad} CHECK(S) FAILED`}`)
  process.exit(bad ? 1 : 0)
})().catch((e) => {
  console.error('ERR:', e.message.split('\n')[0])
  process.exit(2)
})
