(function() {

  var CONST = {
    COLS: 32,
    ROWS: 25
  },

  CLASS = {
    ACTIVE: 'active',
    BLOCK: 'block',
    BARKING: 'barking',
    CANVAS: 'canvas',
    ENV: 'env',
    WOOF: 'woof'
  },

  ATTR = {
    ARIA_PRESSED: 'aria-pressed',
    BG_IMG: 'background-image',
    DATA_TITLE: 'data-title',
    DATA_SIZE: 'data-size',
    HREF: 'href'
  },

  EVT = {
    CLICK: 'click',
    RESIZE: 'resize'
  },

  TAG = {
    A: 'A',
    AUDIO: 'audio',
    BODY: 'body',
    DIV: 'div',
    H1: 'H1',
    NAV: 'nav',
    SPAN: 'span'
  },

  SEL = {
    ENV: '.' + CLASS.ENV,
    BLOCK: '.' + CLASS.BLOCK,
    CANVAS: '.' + CLASS.CANVAS,
    WOOF: '.' + CLASS.WOOF
  },

  WINDOW = window,
  BODY = document.getElementsByTagName(TAG.BODY)[0],
  BLOCKS = document.querySelectorAll(SEL.BLOCK),
  CANVAS = document.querySelector(SEL.CANVAS),

  barking = false,
  blockSize, i;


  function _hasClass(el, c) {
    return (' ' + el.className + ' ').indexOf(' ' + c + ' ') > -1;
  }

  function _addClass(el, c) {
    var classes = el.className;

    if (!el || !c) return;

    if (!classes) {
      el.className = c;
    } else {
      if (classes.indexOf(c) !== '-1') {
        el.className = classes + ' ' + c;
      }
    }
  }

  function _removeClass(el, c) {
    var classes = el.className;

    if (!el || !c || !classes) return;
    classes = classes.replace(' ' + c, '');
    classes = classes.replace(c + ' ', '');
    classes = classes.replace(c, '');

    el.className = classes;
  }

  function _getViewportWidth() {
    return WINDOW.innerWidth;
  }

  function _getViewportHeight() {
    return WINDOW.innerHeight;
  }

  function _getUnitSize() {
    var vw = _getViewportWidth(),
        vh = _getViewportHeight();

    return (vw > vh) ? ((vh / CONST.ROWS) * 0.7) : ((vw / CONST.COLS) * 0.7);
  }

  function _setBlockSize() {
    blockSize = _getUnitSize();
  }

  function _setCanvasSize() {
    CANVAS.style.width = (blockSize * CONST.COLS) + 'px';
    CANVAS.style.height = (blockSize * CONST.ROWS) + 'px';
  }

  function _woof(evt) {
    evt.preventDefault();
    var audio = document.getElementsByTagName(TAG.AUDIO)[0],
        woof = document.querySelector(SEL.WOOF);

    if (!barking) {
      barking = true;
      _addClass(woof, CLASS.BARKING);
      audio.play();
      setTimeout(function(){
        _removeClass(woof, CLASS.BARKING);
        barking = false;
      }, 900); // 2s is the time of the audio clip
    }
  }

  function _toggleEnv(evt) {
    evt.preventDefault();
    var me = evt.target,
        textSpan = document.getElementsByTagName(TAG.SPAN),
        envLinks = document.querySelectorAll(SEL.ENV),
        i, thisLink,
        url, text;

    // Set all the current item to invalid and enable the new one
    for (i = 0; i < envLinks.length; i++) {
      thisLink = envLinks[i];
      _removeClass(thisLink, CLASS.ACTIVE);
      thisLink.setAttribute(ATTR.ARIA_PRESSED, false);
    }
    _addClass(me, CLASS.ACTIVE);
    me.setAttribute(ATTR.ARIA_PRESSED, true);

    // Get the new image and text from the DOM
    url = me.getAttribute(ATTR.HREF);
    text = me.getAttribute(ATTR.DATA_TITLE);

    // Update the background image
    BODY.style.backgroundImage = 'url(' + url + ')';

    // Update text in h1
    for(i = 0; i < textSpan.length; i++) {
      if(textSpan[i].parentNode.tagName === TAG.H1) {
        textSpan[i].innerHTML = text;
        break;
      }
    }
  }

  function _renderBlocks() {
    var i = 0,
        thisBlock,
        size;

    _setBlockSize();
    _setCanvasSize();

    for (i; i < BLOCKS.length; i++) {
      thisBlock = BLOCKS[i];

      size = (thisBlock.getAttribute(ATTR.DATA_SIZE) * blockSize) + "px";
      thisBlock.style.width = size;
      thisBlock.style.height = blockSize + 'px';
    }
  }

  function _eventListeners() {
    WINDOW.addEventListener(EVT.RESIZE, _renderBlocks);

    CANVAS.addEventListener(EVT.CLICK, _woof);

    document.getElementsByTagName(TAG.NAV)[0].addEventListener(EVT.CLICK, function(evt){
      if(_hasClass(evt.target, CLASS.ENV)) {
        _toggleEnv(evt);
      }
    });
  }

  _renderBlocks();
  _eventListeners();
})();