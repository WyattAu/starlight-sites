/**
 * remark-client-only-directives
 *
 * A remark plugin that auto-injects `client:only="solid"` into MDX AST nodes
 * for interactive Solid components that are not SSR-safe under Astro 6.
 *
 * Without this plugin, `<PracticeProblem>` in MDX content triggers SSR of
 * Kobalte's popper module (which calls solid-js/web template() at top level —
 * a client-only API), causing a build failure. The plugin transparently
 * adds the `client:only` directive so Astro skips SSR for these islands
 * and hydrates them client-side only.
 *
 * Affected components (add more here if new non-SSR-safe islands are added):
 *   - PracticeProblem (Kobalte RadioGroup + Dialog via QuestionDialog)
 *   - DiagnosticTest (Kobalte RadioGroup + Dialog via QuestionDialog)
 *   - FlashcardDeck (Kobalte Dialog via QuestionDialog)
 *
 * Usage in astro.config.mjs:
 *   import { clientOnlyDirectives } from '../../shared/integrations/client-only-directives'
 *   // ...
 *   markdown: { remarkPlugins: [clientOnlyDirectives] }
 */

const CLIENT_ONLY_COMPONENTS = new Set(['PracticeProblem', 'DiagnosticTest', 'FlashcardDeck'])

function addDirective(node) {
  if (!CLIENT_ONLY_COMPONENTS.has(node.name)) return
  if (!node.attributes) node.attributes = []
  const hasDirective = node.attributes.some(
    (a) => a.name === 'client:only' || a.name === 'client:load' || a.name === 'client:visible',
  )
  if (!hasDirective) {
    node.attributes.push({
      type: 'mdxJsxAttribute',
      name: 'client:only',
      value: 'solid',
    })
  }
}

// Walk the AST without any external dependencies. The MDX AST is a tree of
// nodes, each with a `type` and optionally `children`.
function walk(node) {
  if (!node || typeof node !== 'object') return
  if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
    addDirective(node)
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child)
  }
  // Some nodes store sub-trees in other array fields
  for (const key of Object.keys(node)) {
    if (key === 'children' || key === 'type') continue
    const val = node[key]
    if (Array.isArray(val)) {
      for (const item of val) {
        if (item && typeof item === 'object') walk(item)
      }
    }
  }
}

export function clientOnlyDirectives() {
  return (tree) => {
    walk(tree)
  }
}
