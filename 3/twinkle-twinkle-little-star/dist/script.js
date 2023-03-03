function addStar() {
  var s = document.createElement('div')
  s.className = 'star'
  s.style.setProperty('--size', Math.random()*10 + 3 + 'vmin')
  s.style.left = Math.floor(Math.random()*100) + '%'
  s.style.top = Math.floor(Math.random()*100) + '%'
  s.onanimationend = function() { this.remove() }
  document.body.appendChild(s)
}
setInterval(addStar,50)