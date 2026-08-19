;(() => {
  // --- Fourier series ---
  var fCanvas = document.getElementById('hero-fourier-canvas')
  if (fCanvas) {
    var fCtx = fCanvas.getContext('2d')
    var fTerms = 10
    var drawFourier = function () {
      var w = fCanvas.width,
        h = fCanvas.height
      var cx = w / 2,
        cy = h / 2,
        scale = h * 0.35
      fCtx.clearRect(0, 0, w, h)
      fCtx.strokeStyle = 'rgba(150,150,200,0.15)'
      fCtx.lineWidth = 1
      fCtx.beginPath()
      fCtx.moveTo(0, cy)
      fCtx.lineTo(w, cy)
      fCtx.stroke()
      fCtx.strokeStyle = '#ff6b35'
      fCtx.lineWidth = 1.5
      fCtx.beginPath()
      for (var i = 0; i <= w; i++) {
        var x = i / w,
          y = 0
        for (var n = 1; n <= fTerms; n++) {
          y += (1 / (2 * n - 1)) * Math.sin((2 * n - 1) * x * 2 * Math.PI)
        }
        y *= 4 / Math.PI
        var px = cx + (x - 0.5) * w * 0.85,
          py = cy - y * scale
        if (i === 0) fCtx.moveTo(px, py)
        else fCtx.lineTo(px, py)
      }
      fCtx.stroke()
    }
    drawFourier()
    var fSlider = document.getElementById('fourier-slider')
    var fLabel = document.getElementById('fourier-label')
    if (fSlider)
      fSlider.addEventListener('input', function () {
        fTerms = parseInt(this.value, 10)
        fLabel.textContent = String(fTerms)
        drawFourier()
      })
  }

  // --- Sine wave ---
  var sCanvas = document.getElementById('hero-sine-canvas')
  if (sCanvas) {
    var sCtx = sCanvas.getContext('2d')
    ;(function drawSine() {
      var w = sCanvas.width,
        h = sCanvas.height,
        cy = h / 2,
        scale = h * 0.32
      sCtx.clearRect(0, 0, w, h)
      sCtx.strokeStyle = 'rgba(150,150,200,0.15)'
      sCtx.lineWidth = 1
      sCtx.beginPath()
      sCtx.moveTo(0, cy)
      sCtx.lineTo(w, cy)
      sCtx.stroke()
      sCtx.strokeStyle = '#ff6b35'
      sCtx.lineWidth = 1.5
      sCtx.beginPath()
      for (var i = 0; i <= w; i++) {
        var px = i,
          py = cy - Math.sin((i / w) * 6 * Math.PI) * scale
        if (i === 0) sCtx.moveTo(px, py)
        else sCtx.lineTo(px, py)
      }
      sCtx.stroke()
    })()
  }

  // --- Lissajous curve ---
  var lCanvas = document.getElementById('hero-lissajous-canvas')
  if (lCanvas) {
    var lCtx = lCanvas.getContext('2d')
    var aVal = 3,
      bVal = 2
    var drawLissajous = function () {
      var w = lCanvas.width,
        h = lCanvas.height,
        cx = w / 2,
        cy = h / 2,
        r = Math.min(w, h) * 0.35
      lCtx.clearRect(0, 0, w, h)
      lCtx.strokeStyle = '#ff6b35'
      lCtx.lineWidth = 1.5
      lCtx.beginPath()
      for (var i = 0; i <= 500; i++) {
        var t = (i / 500) * 2 * Math.PI
        var px = cx + Math.sin(aVal * t) * r
        var py = cy + Math.cos(bVal * t) * r
        if (i === 0) lCtx.moveTo(px, py)
        else lCtx.lineTo(px, py)
      }
      lCtx.stroke()
    }
    drawLissajous()
    var lSliderA = document.getElementById('lissajous-a')
    var lSliderB = document.getElementById('lissajous-b')
    if (lSliderA)
      lSliderA.addEventListener('input', function () {
        aVal = parseInt(this.value, 10)
        drawLissajous()
      })
    if (lSliderB)
      lSliderB.addEventListener('input', function () {
        bVal = parseInt(this.value, 10)
        drawLissajous()
      })
  }
})()
