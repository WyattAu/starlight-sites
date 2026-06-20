import { fireEvent } from '@solidjs/testing-library'

/**
 * Simulate a real user press on an element.
 *
 * Kobalte's headless primitives (via @solid-aria) listen for the pointerdown
 * of a press, not the synthetic `click` event alone. A real browser delivers
 * pointerdown -> pointerup -> click for a click; we mirror that so the
 * primitives behave in jsdom exactly as they do in a browser.
 *
 * The Playwright GUI/e2e suite remains the cross-browser behavioural gate;
 * this helper only lets unit tests drive the Kobalte-backed interactions.
 */
export async function press(el: Element): Promise<void> {
  await fireEvent.pointerDown(el, { button: 0, pointerType: 'mouse' })
  await fireEvent.pointerUp(el, { button: 0, pointerType: 'mouse' })
  await fireEvent.click(el)
}
