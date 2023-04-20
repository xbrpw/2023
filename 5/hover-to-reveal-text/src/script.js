import splitting from 'https://cdn.skypack.dev/splitting'

const target = document.querySelectorAll('.fader')

splitting({
  target,
  by: 'chars'
})