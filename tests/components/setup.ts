/**
 * Vitest component-test setup.
 *
 * Polyfills jsdom gaps that Kobalte's headless primitives need for full
 * WAI-ARIA behaviour (pointer capture, scrollIntoView). These are no-ops; they
 * exist only so Kobalte's popper/listbox interactions do not throw in jsdom.
 *
 * The real behavioural gate is the Playwright GUI/e2e suite against built
 * sites; these polyfills let the unit tests assert the ARIA contract of the
 * Kobalte-backed components without a browser.
 */



// Kobalte (via @solid-aria) calls these for pointer capture during press and
// drag interactions; jsdom does not implement them.
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false
}
if (!Element.prototype.setPointerCapture) {
  // @ts-expect-error -- jsdom lacks the typing; runtime no-op is intentional.
  Element.prototype.setPointerCapture = () => {}
}
if (!Element.prototype.releasePointerCapture) {
  // @ts-expect-error -- jsdom lacks the typing; runtime no-op is intentional.
  Element.prototype.releasePointerCapture = () => {}
}

// Kobalte scrolls the active option into view on open / keyboard navigation.
if (!Element.prototype.scrollIntoView) {
  // @ts-expect-error -- jsdom lacks the typing; runtime no-op is intentional.
  Element.prototype.scrollIntoView = () => {}
}
