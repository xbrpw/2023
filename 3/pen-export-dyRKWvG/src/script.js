var tl = anime.timeline({
  duration: 750
});

// Add children
tl.add({
  targets: "#disk-1",
  scale: [0, 1],
  opacity: [0, 1],
  translateZ: -200,
  duration: 1000
})
  .add(
    {
      targets: "#big-disk",
      scale: [0, 1],
      opacity: [0, 1],
      translateZ: -400,
      duration: 1000
    },
    "-=800"
  )
  .add(
    {
      targets: "#small-disk",
      scale: [0, 1],
      opacity: [0, 1],
      translateZ: 100,
      duration: 1000
    },
    "-=800"
  );

anime({
  targets: ".fade-in",
  opacity: [0, 0.5],
  duration: 8000,
  delay: anime.stagger(400, { start: 400 })
});

anime({
  targets: "#line",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 3000,
  easing: "easeInOutExpo",
  delay: 300
});

anime({
  targets: ".draw-in",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 3000,
  easing: "easeOutExpo",
  delay: anime.stagger(30)
});

anime({
  targets: "#flipper",
  rotateY: [
    { value: -180, duration: 4000, delay: 1500 },
    { value: 0, duration: 4000, delay: 1500 }
  ],
  loop: true,
  easing: "easeInOutExpo"
});

anime({
  targets: ".mouse",
  keyframes: [
    { translateY: -40, translateX: 20 },
    { translateX: 190 },
    { translateY: 40 },
    { translateX: -200, translateY: -40 },
    { translateY: 0 },
    { translateX: 0 }
  ],
  duration: 12000,
  easing: "easeOutElastic(1, .8)",
  loop: true
});
