function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Polyfill that sucka! But why is it necessary?!!!
// window.MobileDragDrop.polyfill()
import Splitting from 'https://cdn.skypack.dev/splitting';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const RESULT = Splitting();
const CONFIRM = document.querySelector('.confirm');

const glitches = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('');

const AUDIO = {
  PLUG: new Audio('https://assets.codepen.io/605876/plug-in-piece.mp3'),
  SAD: new Audio('https://assets.codepen.io/605876/robot-sad.mp3'),
  INTRO: new Audio('https://assets.codepen.io/605876/robot-intro.mp3') };



RESULT.forEach(result => result.chars.forEach(char => {
  if (Math.random() > 0.9) {
    char.classList.add('glitchy');
    // Pick out 5 glitches
    char.style.setProperty('--speed', Math.random() * 2);
    char.style.setProperty('--delay', Math.round(Math.random() * 5 + 1));
    for (let g = 0; g < 5; g++) {
      char.style.setProperty(`--char-${g}`, `"${glitches[Math.floor(Math.random() * glitches.length)]}"`);
    }
  }
}));

// Pick 3 random chars in the length of the first result and glitch them...


class Captcha {











  constructor(options) {
    const opts = this._options = { ...Captcha.defaults, ...options };
    this._element = opts.element;
    this._progress = 0;
    this._grid = opts.element.querySelector('.captcha__grid');
    this._img = opts.element.querySelector('.captcha__img');
    if (!this._element || !this._img || !this._grid)
    throw Error('Captcha: Required elements missing!');
    if (opts.pieces > Math.pow(opts.gridSize, 2))
    throw Error('Captcha: Can not have more pieces than available');
    // Set CSS inline custom properties
    this._element.style.setProperty('--captcha-image', `url(${opts.image})`);
    this._element.style.setProperty('--captcha-grid-size', opts.gridSize);
    // Now set up the moveable pieces
    this.setup();
    return this;
  }

  generatePieces() {
    const pieces = [];
    const generatePiece = () => {
      // Create an Array of two items. One is zero or the length.
      // The other is the gap inbetween.
      // Flip a coin to reverse and return the Array.
      const positions = [
      // This can either be the start or the finish
      Math.random() > 0.5 ? -2 : 1,
      // This can be 3, 4, 5, or 6. Gutter is 2
      Math.floor(Math.random() * (this._options.gridSize - 1)) + 3];

      const segment = Math.floor(
      Math.random() * Math.pow(this._options.gridSize, 2));

      const segments = [
      segment % this._options.gridSize,
      Math.floor(segment / this._options.gridSize)];

      return {
        positions: Math.random() > 0.5 ? positions.reverse() : positions,
        segments };

    };
    while (pieces.length !== this._options.pieces) {
      const pushPiece = () => {
        const newPiece = generatePiece();
        const alreadyExists = pieces.filter(
        ({ positions: [px, py], segments: [sx, sy] }) =>
        px === newPiece.positions[0] && py === newPiece.positions[1] ||
        sx === newPiece.segments[0] && sy === newPiece.segments[1]).
        length;
        if (alreadyExists) pushPiece();else
        pieces.push(newPiece);
      };
      pushPiece();
    }
    this._pieces = pieces;
  }

  createPieces() {
    const handleDragStart =
    ({ piece, px, py, sx, sy }) =>
    e => {
      // this._clone = piece.cloneNode(true)
      // this._clone.classList.add('captcha__piece--clone')
      // this._grid.appendChild(this._clone)
      piece.style.opacity = 0.25;
      e.dataTransfer.setData('text/json', JSON.stringify({ px, py, sx, sy }));
    };

    const handleDragEnd = piece => () => {
      piece.style.opacity = 1;
    };
    const doNothing = e => {
      e.preventDefault();
    };
    const handleDrop =
    ({ piece, slot, px, py, sx, sy }) =>
    e => {
      e.stopPropagation();
      e.preventDefault();
      const transferred = JSON.parse(e.dataTransfer.getData('text/json'));
      if (
      transferred.sx === sx &&
      transferred.sy === sy &&
      transferred.px === px &&
      transferred.py === py)
      {
        // It's a match
        AUDIO.PLUG.currentTime = 0;
        AUDIO.PLUG.play();
        piece.remove();
        slot.remove();
        this._progress++;
        if (this._options.onProgress && this._progress !== this._options.pieces) this._options.onProgress(this._progress / this._options.pieces * 100);
        this._element.style.setProperty('--progress', this._progress / this._options.pieces * 100);
        if (this._progress === this._options.pieces && this._options.onComplete) this._options.onComplete();
      }
    };
    for (const {
      positions: [px, py],
      segments: [sx, sy] } of
    this._pieces) {
      const piece = document.createElement('div');
      piece.className = 'captcha__piece';
      piece.setAttribute('draggable', true);
      piece.style.setProperty('--captcha-x', px);
      piece.style.setProperty('--captcha-y', py);

      const slot = document.createElement('div');
      slot.className = 'captcha__slot';
      slot.style.setProperty('--segment-x', sx + 3);
      slot.style.setProperty('--segment-y', sy + 3);
      // Needs to be able to show the correct image
      piece.style.setProperty('--segment-x', -sx);
      piece.style.setProperty('--segment-y', -sy);
      this._grid.appendChild(piece);
      this._grid.appendChild(slot);

      // Do the event binding here
      piece.addEventListener(
      'dragstart',
      handleDragStart({ piece, px, py, sx, sy }));

      piece.addEventListener('dragend', handleDragEnd(piece));
      slot.addEventListener('dragover', doNothing);
      slot.addEventListener('dragenter', doNothing);
      slot.addEventListener('dragleave', doNothing);
      slot.addEventListener('drop', handleDrop({ piece, slot, px, py, sx, sy }));
    }
  }

  setup() {
    this.generatePieces();
    this.createPieces();
  }}_defineProperty(Captcha, "defaults", { gridSize: 5, // image: 'https://source.unsplash.com/random/720x720?moon',
  // image: 'https://images.unsplash.com/photo-1499578124509-1611b77778c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9vbnx8fHx8fDE2NTA3MzA3MzM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720',
  // image: new URL('../../../assets/moon.jpeg', import.meta.url),
  // image: new URL('../../../assets/phil-is-on-fire--cropped.png', import.meta.url),
  image: 'https://assets.codepen.io/605876/phil-moon.png', pieces: 4, onComplete: () => console.info('captcha: You are not a robot?') });let CAPTCHA;const ROBOT = document.querySelector('.robot');
const FORM = document.querySelector('form');

const onSubmit = e => {
  e.preventDefault();
  FORM.classList.add('form--submitted');
  CAPTCHA._element.style.display = ROBOT.style.display = 'block';
  AUDIO.INTRO.currentTime = 0;
  AUDIO.INTRO.play();
};

const revealConfirm = () => {
  CONFIRM.style.display = 'block';
};

const onComplete = () => {
  CAPTCHA._element.addEventListener('animationend', revealConfirm);
  CAPTCHA._element.classList.add('captcha--finished');
  ROBOT.style.setProperty('--progress', 200);
  ROBOT.classList.add('robot--disappointed');
  // Play Robot Noise
  AUDIO.SAD.currentTime = 0;
  AUDIO.SAD.play();
  confetti();
};

const onProgress = progress => {
  if (progress > 0) {
    ROBOT.querySelector('.robot__eyes--happy').style.display = 'none';
    ROBOT.querySelector('.robot__eyes--sad').style.display = 'block';
  }
  if (progress > 30) {
    ROBOT.querySelector('.robot__mouth--happy').style.display = 'none';
    ROBOT.querySelector('.robot__mouth--sad').style.display = 'block';
  }
  ROBOT.style.setProperty('--progress', progress);
};

CAPTCHA = new Captcha({ pieces: 8, element: document.querySelector('.captcha'), onComplete, onProgress });

FORM.addEventListener('submit', onSubmit);

CONFIRM.addEventListener('click', () => {
  CAPTCHA._element.removeAttribute('style');
  CAPTCHA._element.removeEventListener('animationend', revealConfirm);
  CAPTCHA._element.classList.remove('captcha--finished');
  CAPTCHA._element.style.display = ROBOT.style.display = 'none';
  CAPTCHA = new Captcha({ pieces: 8, element: document.querySelector('.captcha'), onComplete, onProgress });
  FORM.classList.remove('form--submitted');
  ROBOT.style.setProperty('--progress', 0);
  ROBOT.classList.remove('robot--disappointed');
  CONFIRM.removeAttribute('style');
  ROBOT.querySelector('.robot__eyes--happy').style.display = 'block';
  ROBOT.querySelector('.robot__eyes--sad').style.display = 'none';
  ROBOT.querySelector('.robot__mouth--happy').style.display = 'block';
  ROBOT.querySelector('.robot__mouth--sad').style.display = 'none';
});