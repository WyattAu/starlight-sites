/**
 * Minimal ambient type for the Desmos graphing-calculator embed API.
 *
 * The Desmos script (loaded from cdn.jsdelivr.net) attaches a global `Desmos`
 * object with a `GraphingCalculator` factory. We type only the surface the
 * component uses; the full API is far larger and is not vendored here.
 */

interface DesmosCalculator {
  setExpression: (state: unknown) => void
  destroy: () => void
  observe: (event: string, handler: () => void) => void
}

interface DesmosGlobal {
  GraphingCalculator: (element: HTMLElement, options?: Record<string, unknown>) => DesmosCalculator
}

interface Window {
  Desmos?: DesmosGlobal
}
