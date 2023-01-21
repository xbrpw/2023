// OPTIONS
const opts = {
  TEXT: [
  "Responsive Design",
  "Images*Icons",
  "Developer Software",
  "Forms & Resources",
  "Accessibility",
  "Curator-web",
  "marketing"],


  FONT_SIZE: 160,
  FILL: "#F38B49",
  BG_COLOR: "#D4342B",

  LINE_GAP: 10,

  CURVE_STRENGTH: 0.8,
  WAVE_SPEED: 0.02,

  LOOP: true };


const COLORS = [
"#F2E9DF",
"#F2E9DF",
"#552B22",
"#552B22",
"#F18A54",
"#F18A54"];


let resetFills = false;

console.clear();

function map(n, start1, stop1, start2, stop2) {
  return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

function randColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

const fontFile = "https://assets.codepen.io/9332/rubikmono.ttf";

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", () => {
  opts.BG_COLOR = randColor();
  lines = shuffle(lines);
  resetFills = true;
});

// Global state
let font;
let path;
let lines = [];
let width;
let height;

let timer = 0;

/**
 * Size canvas
 */
function setupCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // Set actual size in memory (scaled to account for extra pixel density).
  // Change scale to 1 on retina screens to see blurry canvas.
  let scale = window.devicePixelRatio;
  canvas.width = width * scale;
  canvas.height = height * scale;

  // Normalize coordinate system to use css pixels.
  ctx.scale(scale, scale);
}

/**
 * Clear canvas
 */
function clearCanvas() {
  ctx.fillStyle = opts.BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class Line {
  constructor(font, str) {
    this.str = str.trim().split(" ").join("");
    this.path = font.getPath(this.str, 0, 0, opts.FONT_SIZE);
    this.fill = randColor();
    this.path.fill = this.fill;

    Object.assign(this, this.path.getBoundingBox());
    this.width = this.x2 - this.x1;
    this.height = this.y2 - this.y1;
  }

  reset() {
    this.path = font.getPath(this.str, 0, 0, opts.FONT_SIZE);
    if (resetFills) {
      this.fill = randColor();
    }
    this.path.fill = this.fill;
  }

  moveY(y) {
    this.path.commands.forEach(cmd => {
      switch (cmd.type) {
        case "M":
        case "L":
          cmd.y += y;
          break;
        case "C":
          cmd.y1 += y;
          cmd.y2 += y;
          cmd.y += y;
          break;
        case "Q":
          cmd.y1 += y;
          cmd.y += y;
          break;}

    });
  }

  stretchX() {
    this.path.commands.forEach(cmd => {
      Line.processCmdPoints(cmd, (x, y) => {
        return {
          x: map(x, this.x1, this.x2, 0, width),
          y };

      });
    });
  }

  topOffset(index) {
    this.path.commands.forEach(cmd => {
      Line.processCmdPoints(cmd, (x, y) => {
        let yImpact = (this.y2 - y) / this.height * opts.CURVE_STRENGTH;

        let sinX = map(
        x,
        0,
        width,
        0 + timer + index,
        2 * Math.PI + timer + index);

        let sinY = Math.sin(sinX);
        const offsetY = y + sinY * this.height * yImpact;
        return {
          x,
          y: offsetY };

      });
    });
  }

  bottomOffset(index) {
    this.path.commands.forEach(cmd => {
      Line.processCmdPoints(cmd, (x, y) => {
        let yImpact = (y - this.y1) / this.height * opts.CURVE_STRENGTH;

        let sinX = map(
        x,
        0,
        width,
        0 + timer + index,
        2 * Math.PI + timer + index);

        let sinY = Math.sin(sinX);
        const offsetY = y + sinY * this.height * yImpact;
        return {
          x,
          y: offsetY };

      });
    });
  }

  static processCmdPoints(cmd, func) {
    // callback.apply(this, args);
    if (cmd.x) {
      let point = func.apply(this, [cmd.x, cmd.y]);
      cmd.x = point.x;
      cmd.y = point.y;
    }
    if (cmd.x1) {
      let point = func.apply(this, [cmd.x1, cmd.y1]);
      cmd.x1 = point.x;
      cmd.y1 = point.y;
    }
    if (cmd.x2) {
      let point = func.apply(this, [cmd.x2, cmd.y2]);
      cmd.x2 = point.x;
      cmd.y2 = point.y;
    }
  }}


async function main() {
  // Load font and get path
  font = await opentype.load(fontFile);

  opts.TEXT.forEach(line => {
    lines.push(new Line(font, line));
  });
  draw();
}

function draw() {
  clearCanvas();

  let y = 0;

  timer += opts.WAVE_SPEED;

  lines.forEach((line, index) => {
    line.reset();
    y += line.height + opts.LINE_GAP;
    line.stretchX();

    if (index % 2 === 0) {
      line.bottomOffset(Math.floor(index / 2) / 2);
    } else {
      line.topOffset(Math.floor(index / 2) / 2);
    }
    line.moveY(y);
    line.path.draw(ctx);
  });

  resetFills = false;

  if (opts.LOOP) {
    requestAnimationFrame(draw);
  }
}

window.addEventListener("resize", setupCanvas);

setupCanvas();
main();