import { chromium } from 'playwright'

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  const results = {}

  // 1. Check flashcard component on DSE
  console.log('=== Checking Flashcard component ===')
  await page.goto(
    'https://dse.wyattau.com/biology/1-cell-biology/1_cell-biology-and-biochemistry/',
    { waitUntil: 'networkidle', timeout: 30000 },
  )
  await page.waitForTimeout(3000)

  const flashcardState = await page.evaluate(() => {
    const islands = document.querySelectorAll('astro-island')
    const flashcardIslands = []
    islands.forEach(island => {
      const props = island.getAttribute('props')
      if (props && props.includes('FlashcardDeck')) {
        flashcardIslands.push({
          props: props.substring(0, 200),
          hasContent: island.innerHTML.trim().length > 0,
        })
      }
    })
    return { totalIslands: islands.length, flashcardIslands }
  })
  console.log('Flashcard state:', JSON.stringify(flashcardState, null, 2))

  // 2. Check Desmos component
  console.log('\n=== Checking Desmos component ===')
  await page.goto('https://alevel.wyattau.com/maths/pure-mathematics/02-quadratics/', {
    waitUntil: 'networkidle',
    timeout: 30000,
  })
  await page.waitForTimeout(3000)

  const desmosState = await page.evaluate(() => {
    const islands = document.querySelectorAll('astro-island')
    const desmosIslands = []
    islands.forEach(island => {
      const props = island.getAttribute('props')
      if (props && props.includes('Desmos')) {
        desmosIslands.push({
          props: props.substring(0, 200),
          hasContent: island.innerHTML.trim().length > 0,
        })
      }
    })
    return { totalIslands: islands.length, desmosIslands }
  })
  console.log('Desmos state:', JSON.stringify(desmosState, null, 2))

  // 3. Check PhET component
  console.log('\n=== Checking PhET component ===')
  await page.goto('https://alevel.wyattau.com/physics/waves/01-wave-properties/', {
    waitUntil: 'networkidle',
    timeout: 30000,
  })
  await page.waitForTimeout(3000)

  const phetState = await page.evaluate(() => {
    const islands = document.querySelectorAll('astro-island')
    const phetIslands = []
    islands.forEach(island => {
      const props = island.getAttribute('props')
      if (props && props.includes('Phet')) {
        phetIslands.push({
          props: props.substring(0, 200),
          hasContent: island.innerHTML.trim().length > 0,
        })
      }
    })
    return { totalIslands: islands.length, phetIslands }
  })
  console.log('PhET state:', JSON.stringify(phetState, null, 2))

  // 4. Check PracticeProblem component
  console.log('\n=== Checking PracticeProblem component ===')
  await page.goto('https://alevel.wyattau.com/maths/pure-mathematics/02-quadratics/', {
    waitUntil: 'networkidle',
    timeout: 30000,
  })
  await page.waitForTimeout(3000)

  const practiceState = await page.evaluate(() => {
    const islands = document.querySelectorAll('astro-island')
    const practiceIslands = []
    islands.forEach(island => {
      const props = island.getAttribute('props')
      if (props && props.includes('PracticeProblem')) {
        practiceIslands.push({
          props: props.substring(0, 200),
          hasContent: island.innerHTML.trim().length > 0,
        })
      }
    })
    return { totalIslands: islands.length, practiceIslands }
  })
  console.log('PracticeProblem state:', JSON.stringify(practiceState, null, 2))

  await browser.close()
})()
