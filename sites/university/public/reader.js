/**
 * reader.js — Persistent reading controls for Wyatt's Notes.
 *
 * Provides a floating settings button, reader settings panel, focus mode,
 * reading position memory, and reading progress indicator.
 *
 * All settings are persisted to localStorage using the same keys as the
 * SolidJS SettingsDialog (wn-theme, wn-font-size, etc.) so changes made
 * in either UI are reflected in the other.
 *
 * Injected via Head.astro for Starlight sites and Layout.astro for the
 * landing page. Runs on all pages.
 */

(function () {
  'use strict'

  // ─── Constants ────────────────────────────────────────────────────────────

  const LS_KEYS = {
    THEME: 'wn-theme',
    FONT_SIZE: 'wn-font-size',
    LINE_HEIGHT: 'wn-line-height',
    CONTENT_WIDTH: 'wn-content-width',
    FONT_FAMILY: 'wn-font-family',
    JUSTIFY: 'wn-justify',
    REDUCE_MOTION: 'wn-reduce-motion',
    FOCUS_MODE: 'wn-focus-mode',
    FONT_WEIGHT: 'wn-font-weight',
    LETTER_SPACING: 'wn-letter-spacing',
    PARA_GAP: 'wn-para-gap',
    DIM_IMAGES: 'wn-dim-images',
    AUTO_HIDE: 'wn-auto-hide',
  }

  const THEMES = [
    { value: 'dark', label: 'Dark', icon: '#moon' },
    { value: 'light', label: 'Light', icon: '#sun' },
    { value: 'sepia', label: 'Sepia', icon: '#book' },
    { value: 'nord', label: 'Nord', icon: '#moon' },
    { value: 'dracula', label: 'Dracula', icon: '#moon' },
    { value: 'monokai', label: 'Monokai', icon: '#moon' },
    { value: 'ayu-mirage', label: 'Ayu Mirage', icon: '#moon' },
    { value: 'solarized', label: 'Solarized', icon: '#sun' },
    { value: 'papercolor', label: 'Papercolor', icon: '#sun' },
    { value: 'contrast', label: 'Contrast', icon: '#a11y' },
  ]

  const FONT_FAMILIES = [
    { value: 'sans', label: 'Sans', css: '"Inter", system-ui, -apple-system, sans-serif' },
    { value: 'serif', label: 'Serif', css: '"Merriweather", Georgia, serif' },
    { value: 'mono', label: 'Mono', css: '"JetBrains Mono", "Fira Code", monospace' },
  ]

  const LINE_HEIGHTS = [1.5, 1.7, 1.9, 2.1]

  const CONTENT_WIDTHS = [
    { value: '36rem', label: 'Narrow' },
    { value: '48rem', label: 'Standard' },
    { value: '56rem', label: 'Wide' },
    { value: '100%', label: 'Full' },
  ]

  const PARA_GAPS = ['0.5', '1', '1.5', '2']

  const STORAGE_DEFAULTS = {
    [LS_KEYS.THEME]: 'dark',
    [LS_KEYS.FONT_SIZE]: '1',
    [LS_KEYS.LINE_HEIGHT]: '1.7',
    [LS_KEYS.CONTENT_WIDTH]: '48rem',
    [LS_KEYS.FONT_FAMILY]: 'sans',
    [LS_KEYS.JUSTIFY]: 'false',
    [LS_KEYS.REDUCE_MOTION]: 'false',
    [LS_KEYS.FOCUS_MODE]: 'false',
    [LS_KEYS.FONT_WEIGHT]: '400',
    [LS_KEYS.LETTER_SPACING]: '0',
    [LS_KEYS.PARA_GAP]: '1',
    [LS_KEYS.DIM_IMAGES]: 'true',
    [LS_KEYS.AUTO_HIDE]: 'false',
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  function lsGet(key) { return localStorage.getItem(key) ?? STORAGE_DEFAULTS[key] }
  function lsSet(key, val) { localStorage.setItem(key, String(val)) }

  function applyTheme(value) {
    document.documentElement.setAttribute('data-theme', value)
  }

  function applyFontSize(value) {
    document.documentElement.style.setProperty('--wn-font-size-scale', value)
  }

  function applyLineHeight(value) {
    document.documentElement.style.setProperty('--wn-line-height', value)
  }

  function applyContentWidth(value) {
    document.documentElement.style.setProperty('--wn-content-width', value)
  }

  function applyFontFamily(value) {
    const entry = FONT_FAMILIES.find(function (f) { return f.value === value })
    document.documentElement.style.setProperty('--wn-font-body', entry ? entry.css : FONT_FAMILIES[0].css)
  }

  function applyJustify(value) {
    document.documentElement.setAttribute('data-justify', value)
  }

  function applyReduceMotion(value) {
    document.documentElement.setAttribute('data-reduce-motion', value)
  }

  function applyFocusMode(value) {
    document.documentElement.setAttribute('data-focus-mode', value)
    if (value === 'true') {
      document.body.classList.add('wn-focus-mode')
    } else {
      document.body.classList.remove('wn-focus-mode')
    }
  }

  function applyFontWeight(value) {
    document.documentElement.style.setProperty('--wn-font-weight', value)
  }

  function applyLetterSpacing(value) {
    document.documentElement.style.setProperty('--wn-letter-spacing', value + 'px')
  }

  function applyParaGap(value) {
    document.documentElement.style.setProperty('--wn-para-gap', value)
  }

  function applyDimImages(value) {
    document.documentElement.setAttribute('data-dim-images', value)
  }

  var lastAutoHideScrollY = 0

  function onAutoHideScroll() {
    var currentY = window.scrollY
    if (currentY > lastAutoHideScrollY && currentY > 80) {
      document.body.classList.add('wn-nav-hidden')
    } else if (currentY < lastAutoHideScrollY) {
      document.body.classList.remove('wn-nav-hidden')
    }
    if (currentY <= 80) {
      document.body.classList.remove('wn-nav-hidden')
    }
    lastAutoHideScrollY = currentY
  }

  function applyAutoHide(value) {
    window.removeEventListener('scroll', onAutoHideScroll)
    if (value === 'true') {
      lastAutoHideScrollY = window.scrollY
      window.addEventListener('scroll', onAutoHideScroll, { passive: true })
    } else {
      document.body.classList.remove('wn-nav-hidden')
    }
  }

  function applyAllSettings() {
    applyTheme(lsGet(LS_KEYS.THEME))
    applyFontSize(lsGet(LS_KEYS.FONT_SIZE))
    applyLineHeight(lsGet(LS_KEYS.LINE_HEIGHT))
    applyContentWidth(lsGet(LS_KEYS.CONTENT_WIDTH))
    applyFontFamily(lsGet(LS_KEYS.FONT_FAMILY))
    applyJustify(lsGet(LS_KEYS.JUSTIFY))
    applyReduceMotion(lsGet(LS_KEYS.REDUCE_MOTION))
    applyFocusMode(lsGet(LS_KEYS.FOCUS_MODE))
    applyFontWeight(lsGet(LS_KEYS.FONT_WEIGHT))
    applyLetterSpacing(lsGet(LS_KEYS.LETTER_SPACING))
    applyParaGap(lsGet(LS_KEYS.PARA_GAP))
    applyDimImages(lsGet(LS_KEYS.DIM_IMAGES))
    applyAutoHide(lsGet(LS_KEYS.AUTO_HIDE))
  }

  // ─── SVG Icons ────────────────────────────────────────────────────────────

  var SVG_SPRITE = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  SVG_SPRITE.style.display = 'none'
  SVG_SPRITE.innerHTML = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">',
    '  <symbol id="wn-gear" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
    '  </symbol>',
    '  <symbol id="wn-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M18 6L6 18M6 6l12 12"/>',
    '  </symbol>',
    '  <symbol id="wn-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    '  </symbol>',
    '  <symbol id="wn-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
    '  </symbol>',
    '  <symbol id="wn-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    '  </symbol>',
    '  <symbol id="wn-a11y" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    '  </symbol>',
    '  <symbol id="wn-maximize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
    '  </symbol>',
    '  <symbol id="wn-minimize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M16 21v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',
    '  </symbol>',
    '</svg>',
  ].join('\n')
  document.head.prepend(SVG_SPRITE)

  function icon(name, size) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', String(size || 20))
    svg.setAttribute('height', String(size || 20))
    svg.setAttribute('aria-hidden', 'true')
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', name)
    svg.appendChild(use)
    return svg
  }

  // ─── DOM Creation ─────────────────────────────────────────────────────────

  function el(tag, attrs) {
    var e = document.createElement(tag)
    if (attrs) {
      for (var k in attrs) {
        if (k === 'class') e.className = attrs[k]
        else if (k === 'style' && typeof attrs[k] === 'object') {
          for (var sk in attrs[k]) e.style[sk] = attrs[k][sk]
        }
        else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), attrs[k])
        else if (k === 'dataset') Object.assign(e.dataset, attrs[k])
        else e.setAttribute(k, attrs[k])
      }
    }
    return e
  }

  function text(str) { return document.createTextNode(str) }

  // ─── Styles ───────────────────────────────────────────────────────────────

  var STYLES = [
    '#wn-reader * { box-sizing: border-box }',
    '#wn-reader { position: fixed; z-index: 99999; font-family: "Inter", system-ui, sans-serif; }',
    '#wn-reader button, #wn-reader input, #wn-reader select, #wn-reader textarea { pointer-events: auto }',

    /* Floating button */
    '#wn-fab { position: fixed; bottom: 24px; right: 24px; width: 48px; height: 48px; border-radius: 14px; border: none; background: var(--sl-color-accent, #ff6b35); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3), 0 0 0 0px rgba(255,107,53,0); transition: transform 0.22s cubic-bezier(0.22,1,0.36,1), box-shadow 0.22s cubic-bezier(0.22,1,0.36,1); z-index: 99999; }',
    '#wn-fab:hover { transform: scale(1.08); box-shadow: 0 8px 24px rgba(0,0,0,0.35), 0 0 0 4px rgba(255,107,53,0.15); }',
    '#wn-fab:active { transform: scale(0.95); }',
    '#wn-fab svg { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }',
    '#wn-fab.active svg { transform: rotate(90deg); }',
    '[data-reduce-motion="true"] #wn-fab, [data-reduce-motion="true"] #wn-fab:hover { transition: none; transform: none; }',

    /* Overlay */
    '#wn-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); opacity: 0; visibility: hidden; transition: opacity 0.25s ease, visibility 0.25s ease; z-index: 99998; pointer-events: none; }',
    '#wn-overlay.open { pointer-events: auto; }',
    '#wn-overlay.open { opacity: 1; visibility: visible; }',

    /* Panel */
    '#wn-panel { position: fixed; bottom: 0; left: 0; right: 0; max-height: 80vh; background: var(--wn-bg-elevated, #12121a); border-top: 1px solid var(--wn-border, #2a2a3a); border-radius: 18px 18px 0 0; padding: 0; transform: translateY(100%); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); overflow-y: auto; z-index: 99999; box-shadow: 0 -8px 32px rgba(0,0,0,0.3); }',
    '#wn-panel.open { transform: translateY(0); }',
    '[data-reduce-motion="true"] #wn-panel { transition: none; }',
    '@media (min-width: 640px) { #wn-panel { left: auto; right: 24px; bottom: 80px; width: 380px; max-height: 70vh; border-radius: 18px; border: 1px solid var(--wn-border, #2a2a3a); transform: translateY(10px) scale(0.96); opacity: 0; } #wn-panel.open { transform: translateY(0) scale(1); opacity: 1; } }',

    /* Panel header */
    '#wn-panel-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--wn-border, #2a2a3a); }',
    '#wn-panel-header h2 { margin: 0; font-size: 1rem; font-weight: 700; color: var(--wn-text, #e8e8ed); }',
    '#wn-panel-close { background: none; border: none; color: var(--wn-text-muted, #8888a0); cursor: pointer; padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }',
    '#wn-panel-close:hover { background: var(--wn-bg-hover, #242436); }',

    /* Panel body */
    '#wn-panel-body { padding: 16px 20px 24px; display: flex; flex-direction: column; gap: 16px; }',

    /* Setting group */
    '.wn-setting { display: flex; flex-direction: column; gap: 8px; }',
    '.wn-setting-label { font-size: 0.8rem; font-weight: 600; color: var(--wn-text-muted, #8888a0); text-transform: uppercase; letter-spacing: 0.05em; }',
    '.wn-setting-row { display: flex; gap: 6px; flex-wrap: wrap; }',

    /* Setting chips (radio-style) */
    '.wn-chip { padding: 6px 14px; border-radius: 10px; border: 1px solid var(--wn-border, #2a2a3a); background: transparent; color: var(--wn-text-muted, #8888a0); font-size: 0.85rem; cursor: pointer; transition: all 0.15s ease; font-family: inherit; }',
    '.wn-chip:hover { border-color: var(--sl-color-accent, #ff6b35); color: var(--wn-text, #e8e8ed); }',
    '.wn-chip.active { background: var(--sl-color-accent, #ff6b35); border-color: var(--sl-color-accent, #ff6b35); color: white; font-weight: 600; }',

    /* Font size slider */
    '.wn-slider-row { display: flex; align-items: center; gap: 12px; }',
    '.wn-slider { flex: 1; -webkit-appearance: none; appearance: none; height: 6px; border-radius: 3px; background: var(--wn-border, #2a2a3a); outline: none; }',
    '.wn-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--sl-color-accent, #ff6b35); cursor: pointer; border: 2px solid var(--wn-bg-elevated, #12121a); box-shadow: 0 2px 6px rgba(0,0,0,0.3); }',
    '.wn-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: var(--sl-color-accent, #ff6b35); cursor: pointer; border: 2px solid var(--wn-bg-elevated, #12121a); box-shadow: 0 2px 6px rgba(0,0,0,0.3); }',
    '.wn-slider-value { min-width: 48px; text-align: right; font-size: 0.85rem; font-weight: 600; color: var(--wn-text, #e8e8ed); font-variant-numeric: tabular-nums; }',

    /* Focus mode button */
    '#wn-focus-btn { display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 12px; border: 1px solid var(--wn-border, #2a2a3a); background: transparent; color: var(--wn-text-muted, #8888a0); cursor: pointer; width: 100%; justify-content: center; font-size: 0.85rem; transition: all 0.15s ease; font-family: inherit; }',
    '#wn-focus-btn:hover { border-color: var(--sl-color-accent, #ff6b35); color: var(--wn-text, #e8e8ed); }',
    '#wn-focus-btn.active { background: var(--sl-color-accent, #ff6b35); border-color: var(--sl-color-accent, #ff6b35); color: white; }',

    /* Divider */
    '.wn-divider { height: 1px; background: var(--wn-border, #2a2a3a); margin: 4px 0; }',

    /* Focus mode styles (applied to body) */
    'body.wn-focus-mode .sidebar-container, body.wn-focus-mode .right-sidebar-container, body.wn-focus-mode .top-nav, body.wn-focus-mode .nav-inner, body.wn-focus-mode nav:not(#wn-reader *) { display: none !important; }',
    'body.wn-focus-mode .main-frame { padding-left: 0 !important; }',
    'body.wn-focus-mode .sl-container { max-width: 100% !important; }',

    /* Reading progress */
    '#wn-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, var(--sl-color-accent, #ff6b35), var(--sl-color-accent-high, #ff8c4a)); z-index: 99995; width: 0; transition: width 0.3s linear; pointer-events: none; }',

    /* Panel — ensure it captures scroll events */
    '#wn-panel, #wn-panel-body { pointer-events: auto; }',
    '[data-reduce-motion="true"] #wn-progress { transition: none; }',

    /* Theme-specific tweaks */
    '[data-theme="sepia"] #wn-panel { background: #fef7e8; border-color: #e8dcc8; }',
    '[data-theme="sepia"] #wn-panel-header { border-color: #e8dcc8; }',
    '[data-theme="sepia"] #wn-panel-header h2 { color: #5b4636; }',
    '[data-theme="sepia"] .wn-chip { border-color: #d8ccb8; color: #8b7355; }',
    '[data-theme="sepia"] .wn-chip.active { background: #c97b3a; color: white; }',
    '[data-theme="sepia"] .wn-setting-label { color: #8b7355; }',

    '[data-theme="contrast"] #wn-panel { background: #000; border-color: #fff; }',
    '[data-theme="contrast"] #wn-panel-header { border-color: #fff; }',
    '[data-theme="contrast"] .wn-chip { border-color: #fff; color: #fff; }',
    '[data-theme="contrast"] .wn-chip.active { background: #fff; color: #000; }',

    /* Floating button position on small screens */
    '@media (max-width: 640px) { #wn-fab { bottom: 16px; right: 16px; width: 44px; height: 44px; } }',
  ].join('\n')

  var styleEl = el('style', { id: 'wn-reader-styles' })
  styleEl.textContent = STYLES
  document.head.appendChild(styleEl)

  // ─── Build Panel ──────────────────────────────────────────────────────────

  var panel = el('div', { id: 'wn-panel' })
  var overlay = el('div', { id: 'wn-overlay' })

  // Header
  var header = el('div', { id: 'wn-panel-header' })
  header.appendChild(el('h2', {}).appendChild(text('Reading Settings')))
  var closeBtn = el('button', { id: 'wn-panel-close', 'aria-label': 'Close settings' })
  closeBtn.appendChild(icon('#wn-x', 18))
  closeBtn.addEventListener('click', closePanel)
  header.appendChild(closeBtn)
  panel.appendChild(header)

  // Body
  var body = el('div', { id: 'wn-panel-body' })

  // Theme
  var themeGroup = el('div', { class: 'wn-setting' })
  themeGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Theme')))
  var themeRow = el('div', { class: 'wn-setting-row' })
  THEMES.forEach(function (t) {
    var btn = el('button', {
      class: 'wn-chip',
      dataset: { value: t.value },
      onclick: function () { setTheme(t.value) }
    })
    btn.appendChild(text(t.label))
    themeRow.appendChild(btn)
  })
  themeGroup.appendChild(themeRow)
  body.appendChild(themeGroup)

  // Font Size
  var fsGroup = el('div', { class: 'wn-setting' })
  fsGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Font Size')))
  var fsRow = el('div', { class: 'wn-slider-row' })
  var fsInput = el('input', {
    type: 'range', class: 'wn-slider', min: '0.8', max: '1.5', step: '0.05',
    'aria-label': 'Font size',
    oninput: function () { setFontSize(this.value) }
  })
  var fsVal = el('span', { class: 'wn-slider-value' })
  fsRow.appendChild(fsInput)
  fsRow.appendChild(fsVal)
  fsGroup.appendChild(fsRow)
  body.appendChild(fsGroup)

  // Line Height
  var lhGroup = el('div', { class: 'wn-setting' })
  lhGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Line Height')))
  var lhRow = el('div', { class: 'wn-slider-row' })
  var lhInput = el('input', {
    type: 'range', class: 'wn-slider', min: '1.0', max: '2.5', step: '0.1',
    'aria-label': 'Line height',
    oninput: function () { setLineHeight(this.value) }
  })
  var lhVal = el('span', { class: 'wn-slider-value' })
  lhRow.appendChild(lhInput)
  lhRow.appendChild(lhVal)
  lhGroup.appendChild(lhRow)
  body.appendChild(lhGroup)

  // Content Width
  var cwGroup = el('div', { class: 'wn-setting' })
  cwGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Content Width')))
  var cwRow = el('div', { class: 'wn-setting-row' })
  CONTENT_WIDTHS.forEach(function (w) {
    var btn = el('button', {
      class: 'wn-chip',
      dataset: { value: w.value },
      onclick: function () { setContentWidth(w.value) }
    })
    btn.appendChild(text(w.label))
    cwRow.appendChild(btn)
  })
  cwGroup.appendChild(cwRow)
  body.appendChild(cwGroup)

  // Font Family
  var ffGroup = el('div', { class: 'wn-setting' })
  ffGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Font Family')))
  var ffRow = el('div', { class: 'wn-setting-row' })
  FONT_FAMILIES.forEach(function (f) {
    var btn = el('button', {
      class: 'wn-chip',
      dataset: { value: f.value },
      onclick: function () { setFontFamily(f.value) }
    })
    btn.appendChild(text(f.label))
    ffRow.appendChild(btn)
  })
  ffGroup.appendChild(ffRow)
  body.appendChild(ffGroup)

  // Justify + Reduce Motion row
  var toggleGroup = el('div', { class: 'wn-setting' })
  var toggleRow = el('div', { class: 'wn-setting-row', style: { gap: '8px' } })

  var justifyBtn = el('button', {
    id: 'wn-justify-btn',
    class: 'wn-chip',
    onclick: toggleJustify
  })
  justifyBtn.appendChild(text('Justify'))
  toggleRow.appendChild(justifyBtn)

  var reduceBtn = el('button', {
    id: 'wn-reduce-btn',
    class: 'wn-chip',
    onclick: toggleReduceMotion
  })
  reduceBtn.appendChild(text('Reduce Motion'))
  toggleRow.appendChild(reduceBtn)

  toggleGroup.appendChild(toggleRow)
  body.appendChild(toggleGroup)

  // Font Weight
  var fwGroup = el('div', { class: 'wn-setting' })
  fwGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Font Weight')))
  var fwRow = el('div', { class: 'wn-slider-row' })
  var fwInput = el('input', {
    type: 'range', class: 'wn-slider', min: '300', max: '900', step: '100',
    'aria-label': 'Font weight',
    oninput: function () { setFontWeight(this.value) }
  })
  var fwVal = el('span', { class: 'wn-slider-value' })
  fwRow.appendChild(fwInput)
  fwRow.appendChild(fwVal)
  fwGroup.appendChild(fwRow)
  body.appendChild(fwGroup)

  // Letter Spacing
  var lsGroup = el('div', { class: 'wn-setting' })
  lsGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Letter Spacing')))
  var lsRow = el('div', { class: 'wn-slider-row' })
  var lsInput = el('input', {
    type: 'range', class: 'wn-slider', min: '-0.5', max: '2', step: '0.25',
    'aria-label': 'Letter spacing',
    oninput: function () { setLetterSpacing(this.value) }
  })
  var lsVal = el('span', { class: 'wn-slider-value' })
  lsRow.appendChild(lsInput)
  lsRow.appendChild(lsVal)
  lsGroup.appendChild(lsRow)
  body.appendChild(lsGroup)

  // Paragraph Gap
  var pgGroup = el('div', { class: 'wn-setting' })
  pgGroup.appendChild(el('span', { class: 'wn-setting-label' }).appendChild(text('Paragraph Gap')))
  var pgRow = el('div', { class: 'wn-slider-row' })
  var pgInput = el('input', {
    type: 'range', class: 'wn-slider', min: '0.5', max: '3.0', step: '0.25',
    'aria-label': 'Paragraph gap',
    oninput: function () { setParaGap(this.value) }
  })
  var pgVal = el('span', { class: 'wn-slider-value' })
  pgRow.appendChild(pgInput)
  pgRow.appendChild(pgVal)
  pgGroup.appendChild(pgRow)
  body.appendChild(pgGroup)

  // Dim Images + Auto-hide Nav row
  var extraToggleGroup = el('div', { class: 'wn-setting' })
  var extraToggleRow = el('div', { class: 'wn-setting-row', style: { gap: '8px' } })

  var dimBtn = el('button', {
    id: 'wn-dim-btn',
    class: 'wn-chip',
    onclick: toggleDimImages
  })
  dimBtn.appendChild(text('Dim Images'))
  extraToggleRow.appendChild(dimBtn)

  var autoBtn = el('button', {
    id: 'wn-auto-btn',
    class: 'wn-chip',
    onclick: toggleAutoHide
  })
  autoBtn.appendChild(text('Auto-hide Nav'))
  extraToggleRow.appendChild(autoBtn)

  extraToggleGroup.appendChild(extraToggleRow)
  body.appendChild(extraToggleGroup)

  // Divider
  body.appendChild(el('div', { class: 'wn-divider' }))

  // Focus mode
  var focusBtn = el('button', {
    id: 'wn-focus-btn',
    onclick: toggleFocusMode
  })
  focusBtn.appendChild(icon('#wn-maximize', 16))
  focusBtn.appendChild(text('Reading Mode'))
  body.appendChild(focusBtn)

  panel.appendChild(body)

  // ─── FAB Button ───────────────────────────────────────────────────────────

  var fab = el('button', {
    id: 'wn-fab',
    'aria-label': 'Open reading settings',
    onclick: togglePanel
  })
  fab.appendChild(icon('#wn-gear', 22))

  // ─── Progress Bar ─────────────────────────────────────────────────────────

  var progress = el('div', { id: 'wn-progress' })

  // ─── Append to DOM ────────────────────────────────────────────────────────

  var container = el('div', { id: 'wn-reader' })
  container.appendChild(fab)
  container.appendChild(overlay)
  container.appendChild(panel)
  container.appendChild(progress)

  // Wait for body to exist
  if (document.body) {
    document.body.appendChild(container)
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(container)
    })
  }

  // ─── Table Wrapping ───────────────────────────────────────────────────────
  // Wrap bare <table> elements in a scrollable container so overflow-x:auto
  // works (overflow doesn't apply to display:table elements directly).
  function wrapTables() {
    var tables = document.querySelectorAll('.sl-markdown-content > table, article table, .content table')
    tables.forEach(function (tbl) {
      if (tbl.parentNode.classList && tbl.parentNode.classList.contains('wn-table-wrapper')) return
      var wrapper = document.createElement('div')
      wrapper.className = 'wn-table-wrapper'
      wrapper.style.overflowX = 'auto'
      wrapper.style.maxWidth = '100%'
      wrapper.style.margin = '1.5rem 0'
      tbl.parentNode.insertBefore(wrapper, tbl)
      wrapper.appendChild(tbl)
    })
  }
  if (document.readyState === 'complete') wrapTables()
  else document.addEventListener('DOMContentLoaded', wrapTables)

  // ─── State & Actions ──────────────────────────────────────────────────────

  function togglePanel() {
    var isOpen = panel.classList.contains('open')
    if (isOpen) closePanel()
    else openPanel()
  }

  function openPanel() {
    panel.classList.add('open')
    overlay.classList.add('open')
    fab.classList.add('active')
    updateUI()
  }

  function closePanel() {
    panel.classList.remove('open')
    overlay.classList.remove('open')
    fab.classList.remove('active')
  }

  function setTheme(value) {
    lsSet(LS_KEYS.THEME, value)
    applyTheme(value)
    updateUI()
  }

  function setFontSize(value) {
    lsSet(LS_KEYS.FONT_SIZE, value)
    applyFontSize(value)
    updateUI()
  }

  function setLineHeight(value) {
    lsSet(LS_KEYS.LINE_HEIGHT, value)
    applyLineHeight(value)
    updateUI()
  }

  function setContentWidth(value) {
    lsSet(LS_KEYS.CONTENT_WIDTH, value)
    applyContentWidth(value)
    updateUI()
  }

  function setFontFamily(value) {
    lsSet(LS_KEYS.FONT_FAMILY, value)
    applyFontFamily(value)
    updateUI()
  }

  function toggleJustify() {
    var current = lsGet(LS_KEYS.JUSTIFY)
    var next = current === 'true' ? 'false' : 'true'
    lsSet(LS_KEYS.JUSTIFY, next)
    applyJustify(next)
    updateUI()
  }

  function toggleReduceMotion() {
    var current = lsGet(LS_KEYS.REDUCE_MOTION)
    var next = current === 'true' ? 'false' : 'true'
    lsSet(LS_KEYS.REDUCE_MOTION, next)
    applyReduceMotion(next)
    updateUI()
  }

  function toggleFocusMode() {
    var current = lsGet(LS_KEYS.FOCUS_MODE)
    var next = current === 'true' ? 'false' : 'true'
    lsSet(LS_KEYS.FOCUS_MODE, next)
    applyFocusMode(next)
    closePanel()
    updateUI()
  }

  function setFontWeight(value) {
    lsSet(LS_KEYS.FONT_WEIGHT, value)
    applyFontWeight(value)
    updateUI()
  }

  function setLetterSpacing(value) {
    lsSet(LS_KEYS.LETTER_SPACING, value)
    applyLetterSpacing(value)
    updateUI()
  }

  function setParaGap(value) {
    lsSet(LS_KEYS.PARA_GAP, value)
    applyParaGap(value)
    updateUI()
  }

  function toggleDimImages() {
    var current = lsGet(LS_KEYS.DIM_IMAGES)
    var next = current === 'true' ? 'false' : 'true'
    lsSet(LS_KEYS.DIM_IMAGES, next)
    applyDimImages(next)
    updateUI()
  }

  function toggleAutoHide() {
    var current = lsGet(LS_KEYS.AUTO_HIDE)
    var next = current === 'true' ? 'false' : 'true'
    lsSet(LS_KEYS.AUTO_HIDE, next)
    applyAutoHide(next)
    updateUI()
  }

  // ─── UI Sync ──────────────────────────────────────────────────────────────

  function updateUI() {
    var theme = lsGet(LS_KEYS.THEME)
    var fontSize = lsGet(LS_KEYS.FONT_SIZE)
    var lineHeight = lsGet(LS_KEYS.LINE_HEIGHT)
    var contentWidth = lsGet(LS_KEYS.CONTENT_WIDTH)
    var fontFamily = lsGet(LS_KEYS.FONT_FAMILY)
    var justify = lsGet(LS_KEYS.JUSTIFY)
    var reduceMotion = lsGet(LS_KEYS.REDUCE_MOTION)
    var focusMode = lsGet(LS_KEYS.FOCUS_MODE)
    var fontWeight = lsGet(LS_KEYS.FONT_WEIGHT)
    var letterSpacing = lsGet(LS_KEYS.LETTER_SPACING)
    var paraGap = lsGet(LS_KEYS.PARA_GAP)
    var dimImages = lsGet(LS_KEYS.DIM_IMAGES)
    var autoHide = lsGet(LS_KEYS.AUTO_HIDE)

    // Theme chips
    var chips = themeRow.querySelectorAll('.wn-chip')
    chips.forEach(function (c) {
      c.classList.toggle('active', c.dataset.value === theme)
    })

    // Font size
    fsInput.value = fontSize
    fsVal.textContent = Math.round(parseFloat(fontSize) * 100) + '%'

    // Line height slider
    if (lhInput) { lhInput.value = lineHeight; lhVal.textContent = lineHeight }

    // Content width chips
    var cwChips = cwRow.querySelectorAll('.wn-chip')
    cwChips.forEach(function (c) {
      c.classList.toggle('active', c.dataset.value === contentWidth)
    })

    // Font family chips
    var ffChips = ffRow.querySelectorAll('.wn-chip')
    ffChips.forEach(function (c) {
      c.classList.toggle('active', c.dataset.value === fontFamily)
    })

    // Toggles
    justifyBtn.classList.toggle('active', justify === 'true')
    justifyBtn.style.opacity = justify === 'true' ? '1' : '0.5'
    reduceBtn.classList.toggle('active', reduceMotion === 'true')
    reduceBtn.style.opacity = reduceMotion === 'true' ? '1' : '0.5'

    // Focus mode
    focusBtn.classList.toggle('active', focusMode === 'true')
    focusBtn.innerHTML = ''
    focusBtn.appendChild(icon(focusMode === 'true' ? '#wn-minimize' : '#wn-maximize', 16))
    focusBtn.appendChild(text(focusMode === 'true' ? 'Exit Reading Mode' : 'Reading Mode'))

    // Font weight slider
    fwInput.value = fontWeight
    fwVal.textContent = fontWeight

    // Letter spacing slider
    lsInput.value = letterSpacing
    lsVal.textContent = parseFloat(letterSpacing) + 'px'

    // Paragraph gap slider
    if (pgInput) { pgInput.value = paraGap; pgVal.textContent = paraGap + 'x' }

    // Extra toggles
    dimBtn.classList.toggle('active', dimImages === 'true')
    dimBtn.style.opacity = dimImages === 'true' ? '1' : '0.5'
    autoBtn.classList.toggle('active', autoHide === 'true')
    autoBtn.style.opacity = autoHide === 'true' ? '1' : '0.5'
  }

  // ─── Reading Progress ─────────────────────────────────────────────────────

  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollHeight > 0) {
      var pct = Math.min((scrollTop / scrollHeight) * 100, 100)
      progress.style.width = pct + '%'
    }
  }

  var progressRaf = null
  function onScroll() {
    if (progressRaf) cancelAnimationFrame(progressRaf)
    progressRaf = requestAnimationFrame(updateProgress)
  }

  if (document.readyState === 'complete') {
    updateProgress()
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateProgress)

  // ─── Reading Position Memory ──────────────────────────────────────────────

  var POSITION_KEY = 'wn-pos-' + window.location.pathname

  function savePosition() {
    try {
      var pos = window.scrollY || document.documentElement.scrollTop || 0
      if (pos > 0) {
        sessionStorage.setItem(POSITION_KEY, String(pos))
      }
    } catch (e) {}
  }

  function restorePosition() {
    try {
      var pos = sessionStorage.getItem(POSITION_KEY)
      if (pos && parseInt(pos, 10) > 0) {
        // Restore after a short delay to let the page render
        setTimeout(function () {
          window.scrollTo(0, parseInt(pos, 10))
        }, 100)
      }
    } catch (e) {}
  }

  // Save periodically
  setInterval(savePosition, 2000)

  // Save on unload
  window.addEventListener('beforeunload', savePosition)
  window.addEventListener('pagehide', savePosition)

  // Restore on load
  if (document.readyState === 'complete') {
    restorePosition()
  } else {
    document.addEventListener('DOMContentLoaded', restorePosition)
  }

  // ─── Keyboard Shortcut ────────────────────────────────────────────────────

  document.addEventListener('keydown', function (e) {
    // Ctrl+, or Cmd+, to open settings
    if ((e.ctrlKey || e.metaKey) && e.key === ',') {
      e.preventDefault()
      togglePanel()
    }
    // Escape to close
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closePanel()
    }
  })

  // ─── Initialize ───────────────────────────────────────────────────────────

  applyAllSettings()
  updateUI()
})()
