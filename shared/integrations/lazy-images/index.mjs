/**
 * Rehype plugin: set loading="lazy" and decoding="async" on content images.
 *
 * Applied to every site's markdown pipeline. The first content image is left
 * eager (it is typically above the fold and should load immediately); all
 * subsequent images are lazy-loaded. Images that already declare an explicit
 * loading attribute are not overwritten.
 *
 * Rationale: native lazy loading defers off-screen image fetches until they
 * approach the viewport, reducing initial network cost and Largest Contentful
 * Paint without any client-side JavaScript.
 *
 * @returns {function} rehype transformer
 */
export default function rehypeLazyImages() {
  return tree => {
    let seen = 0
    visit(tree, node => {
      if (node.type !== 'element' || node.tagName !== 'img') return
      seen += 1
      if (!node.properties) node.properties = {}
      // Leave the first image eager (likely above the fold).
      if (seen > 1 && node.properties.loading === undefined) {
        node.properties.loading = 'lazy'
      }
      if (node.properties.decoding === undefined) {
        node.properties.decoding = 'async'
      }
    })
  }
}

/** Minimal depth-first visitor over a hast tree. */
function visit(node, fn) {
  fn(node)
  if (node.children && Array.isArray(node.children)) {
    for (const child of node.children) visit(child, fn)
  }
}
