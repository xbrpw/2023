var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName("body")[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight || e.clientHeight || g.clientHeight;

var player = d.getElementById("player"),
playerBox,
mouse = { left: 0, top: 0 },
jumping = false;

var timeDiff,
prevTime = 0;

var tick = function (time) {
  timeDiff = 0.001 * (time - prevTime);
  prevTime = time;

  x = w.innerWidth || e.clientWidth || g.clientWidth;
  y = w.innerHeight || e.clientHeight || g.clientHeight;

  playerBox = player.getBoundingClientRect();

  // distance check
  // console.log(Math.abs(playerBox.left - mouse.left))
  if (!jumping && Math.abs(playerBox.left + 100 - mouse.left) < 100) {
    jumping = true;

    if (playerBox.left > 0.5 * x) {
      player.style.left =
      String(playerBox.left - 100 - Math.random() * 0.5 * (x - 300)) + "px";
    } else {
      player.style.left =
      String(playerBox.left + 100 + Math.random() * 0.5 * (x - 300)) + "px";
    }

    setTimeout(function () {
      jumping = false;
    }, 350);
  }

  // eye movement
  if (mouse.left > playerBox.left) {
    player.classList.remove("left");
    player.classList.add("right");
  } else if (mouse.left <= playerBox.left) {
    player.classList.remove("right");
    player.classList.add("left");
  }

  // again!
  requestAnimationFrame(tick);
};

// mouse
document.addEventListener(
"mousemove",
function (e) {
  mouse = { left: e.pageX, top: e.pageY };
},
false);


// fire
requestAnimationFrame(tick);