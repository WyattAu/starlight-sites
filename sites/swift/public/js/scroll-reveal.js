// Scroll reveal animation system
;(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el)
  })

  // Also handle dynamic content
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          node.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
            observer.observe(el)
          })
        }
      })
    })
  })

  mutationObserver.observe(document.body, { childList: true, subtree: true })
})()
