(function () {
  'use strict'

  var SITES = {
    'Exam Boards': [
      { name: 'DSE', url: 'https://dse.wyattau.com', tags: 'Math, Physics, Chem, Bio, ICT' },
      { name: 'IB', url: 'https://ib.wyattau.com', tags: 'Math AA/AI, Physics, Chem, Bio, CS' },
      { name: 'A-Level', url: 'https://alevel.wyattau.com', tags: 'Math, Further Maths, Physics, Chem' },
      { name: 'GCSE', url: 'https://gcse.wyattau.com', tags: 'Bio, Chem, Physics, Maths, English' },
      { name: 'AP', url: 'https://ap.wyattau.com', tags: 'Calculus, Physics, Chem, Bio, Stats' },
      { name: 'Highers', url: 'https://highers.wyattau.com', tags: 'Bio, Chem, Physics, Maths, CS' },
      { name: 'Leaving Cert', url: 'https://leaving-cert.wyattau.com', tags: 'Bio, Chem, Physics, Maths' },
      { name: 'CBSE', url: 'https://cbse.wyattau.com', tags: 'Chem, Physics, Maths' },
      { name: 'Gaokao', url: 'https://gaokao.wyattau.com', tags: 'Maths' },
      { name: 'HSC', url: 'https://hsc.wyattau.com', tags: 'Physics' },
      { name: 'SAT', url: 'https://sat.wyattau.com', tags: 'Math, Reading, Writing' },
    ],
    'Programming Languages': [
      { name: 'C++', url: 'https://cpp.wyattau.com', tags: 'Ownership, RAII, Templates' },
      { name: 'Java', url: 'https://java.wyattau.com', tags: 'OOP, JVM, Concurrency' },
      { name: 'Python', url: 'https://python.wyattau.com', tags: 'Typing, Async, Data Structures' },
      { name: 'Rust', url: 'https://rust.wyattau.com', tags: 'Ownership, Traits, Async' },
      { name: 'Go', url: 'https://go.wyattau.com', tags: 'Goroutines, Channels, Interfaces' },
      { name: 'Kotlin', url: 'https://kotlin.wyattau.com', tags: 'Null Safety, Coroutines' },
      { name: 'TypeScript', url: 'https://typescript.wyattau.com', tags: 'Types, Generics, React' },
      { name: 'Dart', url: 'https://dart.wyattau.com', tags: 'Flutter, Async, Null Safety' },
      { name: 'Swift', url: 'https://swift.wyattau.com', tags: 'Protocols, Closures' },
      { name: 'Ruby', url: 'https://ruby.wyattau.com', tags: 'Metaprogramming, Blocks, Rails' },
      { name: 'Haskell', url: 'https://haskell.wyattau.com', tags: 'Monads, Type Classes' },
      { name: 'Elixir', url: 'https://elixir.wyattau.com', tags: 'OTP, Phoenix, BEAM' },
    ],
    'CS Tools': [
      { name: 'Languages', url: 'https://languages.wyattau.com', tags: 'Comparative notes' },
      { name: 'Tools', url: 'https://tools.wyattau.com', tags: 'Algorithms, Git, Licensing' },
      { name: 'Computer Science', url: 'https://computer-science.wyattau.com', tags: 'Systems, Theory, Algorithms' },
    ],
    'Further Studies': [
      { name: 'Mathematics', url: 'https://mathematics.wyattau.com', tags: 'Algebra, Analysis, Geometry' },
      { name: 'Physics', url: 'https://physics.wyattau.com', tags: 'Mechanics, E&M, Quantum' },
      { name: 'Chemistry', url: 'https://chemistry.wyattau.com', tags: 'Physical, Organic, Inorganic' },
      { name: 'Admissions', url: 'https://admissions.wyattau.com', tags: 'Test prep' },
    ],
    Infrastructure: [
      { name: 'Networking', url: 'https://networking.wyattau.com', tags: 'Protocols, Config' },
      { name: 'Linux', url: 'https://linux.wyattau.com', tags: 'Administration, Scripting' },
      { name: 'Security', url: 'https://security.wyattau.com', tags: 'Hardening, Monitoring' },
      { name: 'Databases', url: 'https://databases.wyattau.com', tags: 'SQL, Administration' },
      { name: 'TrueNAS', url: 'https://truenas.wyattau.com', tags: 'Storage, Config' },
      { name: 'Tuning', url: 'https://tuning.wyattau.com', tags: 'Performance' },
      { name: 'Licensing', url: 'https://licensing.wyattau.com', tags: 'Licenses, Compliance' },
      { name: 'Machine Learning', url: 'https://machine-learning.wyattau.com', tags: 'Concepts, Techniques' },
    ],
  }

  var CATEGORY_ICONS = {
    'Exam Boards': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
    'Programming Languages': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    'CS Tools': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'Further Studies': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    'Infrastructure': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
  }

  function html(str) { return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }

  function buildOverlay() {
    var overlay = document.createElement('div')
    overlay.id = 'site-nav-overlay'
    overlay.setAttribute('aria-hidden', 'true')
    overlay.innerHTML = '<div class="site-nav-backdrop"></div><div class="site-nav-panel" role="dialog" aria-label="Site navigator">' +
      '<div class="site-nav-header"><h2>All Sites</h2><button class="site-nav-close" aria-label="Close">✕</button></div>' +
      '<div class="site-nav-body">' +
      Object.keys(SITES).map(function (cat) {
        return '<div class="site-nav-category"><div class="site-nav-cat-header">' + (CATEGORY_ICONS[cat] || '') +
          '<span>' + html(cat) + '</span></div><div class="site-nav-grid">' +
          SITES[cat].map(function (s) {
            return '<a href="' + html(s.url) + '" class="site-nav-card" target="_blank" rel="noopener">' +
              '<strong>' + html(s.name) + '</strong>' +
              '<span class="site-nav-tags">' + html(s.tags) + '</span></a>'
          }).join('') +
          '</div></div>'
      }).join('') +
      '</div></div>'
    document.body.appendChild(overlay)
    return overlay
  }

  function injectButton() {
    // Find the header right group (where search/social icons are)
    var header = document.querySelector('.page > .header') || document.querySelector('header')
    if (!header) return

    // Create the sites button
    var btn = document.createElement('button')
    btn.className = 'site-nav-btn sl-flex'
    btn.setAttribute('aria-label', 'Browse all sites')
    btn.setAttribute('title', 'Browse all sites')
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>' +
      '<rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' +
      '<span>Sites</span>'
    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      openOverlay()
    })

    // Insert before the search or in the right-group
    var search = document.querySelector('#custom-search') || document.querySelector('.right-group')
    if (search && search.parentNode) {
      search.parentNode.insertBefore(btn, search)
    } else {
      // Fallback: add to the title wrapper area
      var titleWrap = document.querySelector('.title-wrapper')
      if (titleWrap) titleWrap.after(btn)
    }
  }

  var overlay = null
  function openOverlay() {
    if (!overlay) overlay = buildOverlay()
    overlay.setAttribute('aria-hidden', 'false')
    document.body.classList.add('site-nav-open')
  }
  function closeOverlay() {
    if (overlay) overlay.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('site-nav-open')
  }

  function init() {
    injectButton()

    // Delegate click events for overlay once it exists
    document.addEventListener('click', function (e) {
      if (overlay && overlay.getAttribute('aria-hidden') === 'false') {
        if (e.target.closest('.site-nav-close') || e.target.closest('.site-nav-backdrop')) {
          closeOverlay()
        }
      }
    })
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.getAttribute('aria-hidden') === 'false') {
        closeOverlay()
        // Focus back to button
        var btn = document.querySelector('.site-nav-btn')
        if (btn) btn.focus()
      }
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
