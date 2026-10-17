// Measure horizontal overflow on rendered pages at a phone viewport.
//
// The signal that matters is `documentElement.scrollWidth > innerWidth`: that is
// the document itself sliding sideways, which drags the header, sidebar and prose
// out of alignment and is what users report as "broken on my phone".
//
// A table wider than its scroll container is fine and expected -- that is what
// the container is for. Only overflow that escapes to the document is a defect.
const { chromium } = require('playwright')

const EXEC =
  process.env.PLAYWRIGHT_CHROMIUM ||
  '/home/wyatt/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell'

async function audit(page, label) {
  return page.evaluate(tag => {
    const vw = document.documentElement.clientWidth
    const escapes = []
    for (const el of document.querySelectorAll('body *')) {
      // KaTeX emits a MathML copy of every formula for assistive technology and
      // clips it to 1px with `position: absolute`. Its `<math>`/`<semantics>`
      // children still report a wide bounding box, but being absolutely
      // positioned they contribute nothing to scrollWidth. Reporting them makes
      // every page look broken and trains the reader to ignore the output.
      if (el.closest('.katex-mathml')) continue

      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.right <= vw + 2) continue
      const style = getComputedStyle(el)
      if (style.position === 'absolute' || style.position === 'fixed') continue
      if (style.visibility === 'hidden' || style.display === 'none') continue

      // Report only the outermost offender: walk up while the parent also spills.
      let top = el
      for (let p = el.parentElement; p; p = p.parentElement) {
        if (p.getBoundingClientRect().right > vw + 2) top = p
        else break
      }
      if (escapes.some(x => x.node.contains(top))) continue
      escapes.push({
        tag: tag,
        sel: `${top.tagName}${top.className ? `.${String(top.className).trim().split(/\s+/)[0]}` : ''}`,
        right: Math.round(top.getBoundingClientRect().right),
        width: Math.round(top.getBoundingClientRect().width),
        text: (top.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 44),
        node: top,
      })
    }

    // Only report offenders on pages that actually overflow. On a clean page,
    // a wide element inside a correctly-scrolling container is working as
    // designed -- `scrollWidth` is the verdict, and printing non-culprits on a
    // passing page teaches the reader to ignore the detail lines.
    return {
      scrollWidth: document.documentElement.scrollWidth,
      viewport: vw,
      overflows: document.documentElement.scrollWidth > vw + 1,
      tables: document.querySelectorAll('.sl-markdown-content table').length,
      escapes: (document.documentElement.scrollWidth > vw + 1
        ? escapes.map(({ node, ...rest }) => rest)
        : []
      ).slice(0, 6),
    }
  }, label)
}

async function main() {
  const [widthArg, ...urls] = process.argv.slice(2)
  const width = Number(widthArg || 390)
  const browser = await chromium.launch({ executablePath: EXEC })
  const page = await browser.newPage({ viewport: { width, height: 844 } })

  let bad = 0
  for (const url of urls) {
    await page.goto(url, { waitUntil: 'load', timeout: 120000 })
    await page.waitForTimeout(2500)
    const r = await audit(page, url)
    if (r.overflows) bad++
    console.log(
      `${r.overflows ? 'OVERFLOW' : 'ok      '} ${width}px  scrollW=${String(r.scrollWidth).padStart(5)}  ` +
        `tables=${String(r.tables).padStart(2)}  ${url.replace(/^https?:\/\//, '')}`,
    )
    for (const e of r.escapes) {
      console.log(`           ${e.sel} right=${e.right} w=${e.width}  "${e.text}"`)
    }
  }

  await browser.close()
  console.log(`\n${urls.length - bad}/${urls.length} pages clean at ${width}px`)
  process.exit(bad > 0 ? 1 : 0)
}

main().catch(e => {
  console.error('ERR:', e.message.split('\n')[0])
  process.exit(2)
})
