const container = document.getElementById('container'),
mask = document.getElementById('mask'),
turbVal = { val: 0.0 },
octavesVal = { val: 0 },
turb = document.querySelector('#noise feTurbulence'),

turbTl = gsap.timeline({
  paused: true,
  repeat: -1,
  yoyo: true,
  onUpdate: function () {
    turb.setAttribute('baseFrequency', turbVal.val);
    // turb.setAttribute('numOctaves', octavesVal.val);
  } }),

maskTl = gsap.timeline({ paused: true });

turbTl.to(turbVal, 12, { ease: Sine.easeInOut, val: 0.03 });

maskTl.to(mask, 0.5, { ease: Sine.ease, opacity: 0.9 });

container.addEventListener('mouseenter', e => {
  turbTl.restart();
  maskTl.restart();
});

container.addEventListener('mouseleave', e => {
  turbTl.delay(0.5).reverse(1);
  maskTl.reverse(1);
});

const imageListItem = document.querySelectorAll('#imageList li'),
overlayListItem = document.querySelectorAll('#overlayList li'),
image = document.getElementById('image');

for (const item of imageListItem) {
  item.addEventListener('click', function (e) {
    imageListItem.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    image.style.mixBlendMode = this.getAttribute('data-mode');
  });
}

for (const item of overlayListItem) {
  item.addEventListener('click', function (e) {
    overlayListItem.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    mask.style.backgroundBlendMode = this.getAttribute('data-mode');
  });
}

// Handle perspective, from: https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/

(function () {
  // Init
  var container = document.getElementById("container"),
  inner = document.getElementById("inner");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    } };


  mouse.setOrigin(container);

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
    (mouse.y / inner.offsetHeight / 2).toFixed(2),
    (mouse.x / inner.offsetWidth / 2).toFixed(2));

  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();




// Another idea for later
// function onMouseMove(e) { 
//    var rect = this.getBoundingClientRect()

//     // Find its child
//    var follower = this.querySelector('#mask')

//    TweenMax.to(follower, 0.3, {
//      x: e.offsetX,
//      y: e.offsetY,
//      ease:Power4.easeOut
//    })
// }

// function init() {
//   // Listen for mouse movement when over either one of the parents
//   container.addEventListener('mousemove', onMouseMove)
// };

// document.addEventListener("DOMContentLoaded", function(event) {
//   // wait until window, stylesheets, images, links, and other media assets are loaded
//   window.onload = function() {         
//     // Center the pivot point of the follower
//     TweenMax.set('#mask', {
//       xPercent: -50,
//       yPercent: -50
//     })

//     // All ready, start!
//     init();
//   };
// });