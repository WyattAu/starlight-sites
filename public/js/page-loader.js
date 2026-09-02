// Page loading indicator
(function() {
  // Show loading state
  const loader = document.createElement('div');
  loader.className = 'page-loading';
  loader.innerHTML = '<div class="loading-spinner"></div>';
  document.body.prepend(loader);
  
  // Hide loading when page is ready
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 300);
    }, 100);
  });
})();
