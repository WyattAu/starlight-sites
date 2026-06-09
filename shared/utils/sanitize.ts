import DOMPurify from 'dompurify';

export function sanitizeHtml(dirty: string): string {
  if (typeof window === 'undefined') {
    return dirty;
  }

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p', 'div', 'br', 'hr',
      'span', 'strong', 'b', 'em', 'i', 'u', 's', 'mark', 'small',
      'sub', 'sup', 'abbr', 'code', 'kbd', 'var', 'samp',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'dl', 'dt', 'dd',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
      'caption', 'colgroup', 'col',
      'pre', 'blockquote',
      'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'mfrac', 'msqrt', 'mrow',
      'msup', 'msub', 'msubsup', 'munder', 'mover', 'munderover',
      'mtable', 'mtr', 'mtd', 'maligngroup', 'malignmark',
      'annotation', 'semantics',
      'svg', 'g', 'path', 'circle', 'ellipse', 'rect', 'line',
      'polyline', 'polygon', 'text', 'tspan', 'textPath', 'clipPath',
      'defs', 'use', 'image', 'marker', 'pattern',
      'linearGradient', 'radialGradient', 'stop',
      'a',
    ],
    ALLOWED_ATTR: [
      'class', 'id', 'style', 'title', 'lang', 'dir', 'role',
      'aria-label', 'aria-hidden', 'aria-live', 'aria-describedby',
      'aria-expanded', 'data-testid', 'data-*',
      'href', 'target', 'rel',
      'colspan', 'rowspan', 'align', 'valign',
      'data-language',
      'mathvariant', 'mathsize', 'mathcolor', 'mathbackground',
      'displaystyle', 'scriptlevel', 'linethickness', 'stretchy',
      'rowalign', 'columnalign', 'columnspacing', 'rowspacing',
      'notation', 'encoding',
      'viewBox', 'xmlns', 'width', 'height', 'x', 'y', 'rx', 'ry',
      'd', 'cx', 'cy', 'r', 'x1', 'y1', 'x2', 'y2', 'dx', 'dy',
      'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'opacity',
      'transform', 'text-anchor', 'dominant-baseline',
      'font-size', 'font-family', 'font-weight', 'text-decoration',
      'points', 'offset', 'stop-color', 'stop-opacity',
      'gradientUnits', 'gradientTransform', 'patternUnits',
      'markerWidth', 'markerHeight', 'refX', 'refY', 'orient',
      'clip-path', 'marker-start', 'marker-mid', 'marker-end',
      'preserveAspectRatio', 'flood-color', 'flood-opacity',
      'id', 'href', 'xlink:href',
    ],
    ALLOW_DATA_ATTR: true,
    SANITIZE_DOM: true,
  });
}
