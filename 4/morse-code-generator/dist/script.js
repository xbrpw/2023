class MorseCode {
  constructor() {
    this.DOT = 'dot';
    this.DASH = 'dash';
    this.SPACE = 'space';
    this.map = {
      'a': [this.DOT, this.DASH],
      'b': [this.DASH, this.DOT, this.DOT, this.DOT],
      'c': [this.DASH, this.DOT, this.DASH, this.DOT],
      'd': [this.DASH, this.DOT, this.DOT],
      'e': [this.DOT],
      'f': [this.DOT, this.DOT, this.DASH, this.DOT],
      'g': [this.DASH, this.DASH, this.DAT],
      'h': [this.DOT, this.DOT, this.DOT, this.DOT],
      'i': [this.DOT, this.DOT],
      'j': [this.DOT, this.DASH, this.DASH, this.DASH],
      'k': [this.DASH, this.DOT, this.DASH],
      'l': [this.DOT, this.DASH, this.DOT, this.DOT],
      'm': [this.DASH, this.DASH],
      'n': [this.DASH, this.DOT],
      'o': [this.DASH, this.DASH, this.DASH],
      'p': [this.DOT, this.DASH, this.DASH, this.DOT],
      'q': [this.DASH, this.DASH, this.DOT, this.DASH],
      'r': [this.DOT, this.DASH, this.DOT],
      's': [this.DOT, this.DOT, this.DOT],
      't': [this.DASH],
      'u': [this.DOT, this.DOT, this.DASH, this.DASH],
      'v': [this.DOT, this.DOT, this.DOT, this.DASH],
      'w': [this.DOT, this.DASH, this.DASH],
      'x': [this.DASH, this.DOT, this.DOT, this.DASH],
      'y': [this.DASH, this.DOT, this.DASH, this.DASH],
      'z': [this.DASH, this.DASH, this.DOT, this.DOT],
      ' ': [this.SPACE],
      '1': [this.DOT, this.DASH, this.DASH, this.DASH, this.DASH],
      '2': [this.DOT, this.DOT, this.DASH, this.DASH, this.DASH],
      '3': [this.DOT, this.DOT, this.DOT, this.DASH, this.DASH],
      '4': [this.DOT, this.DOT, this.DOT, this.DOT, this.DASH],
      '5': [this.DOT, this.DOT, this.DOT, this.DOT, this.DOT],
      '6': [this.DASH, this.DOT, this.DOT, this.DOT, this.DOT],
      '7': [this.DASH, this.DASH, this.DOT, this.DOT, this.DOT],
      '8': [this.DASH, this.DASH, this.DASH, this.DOT, this.DOT],
      '9': [this.DASH, this.DASH, this.DASH, this.DASH, this.DOT],
      '0': [this.DASH, this.DASH, this.DASH, this.DASH, this.DASH],
      '.': [this.DOT, this.DASH, this.DOT, this.DASH, this.DOT, this.DASH],
      ',': [this.DASH, this.DASH, this.DOT, this.DOT, this.DASH, this.DASH],
      '\'': [this.DASH, this.DOT, this.DASH, this.DOT, this.DASH, this.DOT],
      '!': [this.DASH, this.DOT, this.DASH, this.DOT, this.DASH, this.DASH],
      '-': [this.DASH, this.DOT, this.DOT, this.DOT, this.DOT, this.DASH],
      '&': [this.DOT, this.DASH, this.DOT, this.DOT, this.DOT],
      '?': [this.DOT, this.DOT, this.DASH, this.DASH, this.DOT, this.DOT],
      '/': [this.DASH, this.DOT, this.DOT, this.DASH, this.DOT],
      '(': [this.DASH, this.DOT, this.DASH, this.DASH, this.DOT],
      ')': [this.DASH, this.DOT, this.DASH, this.DASH, this.DOT, this.DASH],
      ':': [this.DASH, this.DASH, this.DASH, this.DOT, this.DOT, this.DOT],
      ';': [this.DASH, this.DOT, this.DASH, this.DOT, this.DASH, this.DOT],
      '=': [this.DASH, this.DOT, this.DOT, this.DOT, this.DASH],
      '+': [this.DOT, this.DASH, this.DOT, this.DASH, this.DOT],
      '_': [this.DOT, this.DOT, this.DASH, this.DASH, this.DOT, this.DASH],
      '"': [this.DOT, this.DASH, this.DOT, this.DOT, this.DASH, this.DOT],
      '$': [this.DOT, this.DOT, this.DOT, this.DASH, this.DOT, this.DOT, this.DASH],
      '@': [this.DOT, this.DASH, this.DASH, this.DOT, this.DASH, this.DOT] };

  }

  parse(input) {
    input = input.split('');


    for (let i = 0, ii = input.length; i < ii; i++) {
      input[i] = {
        original: input[i].toLowerCase(),
        sequence: this.map[input[i].toLowerCase()] };

    }

    console.log(input);
    return input;
  }

  humanReadable(input) {
    let text = ' ';
    input = this.parse(input);

    for (let i = 0, ii = input.length; i < ii; i++) {
      let current = input[i];

      for (let c = 0, cc = current.sequence.length; c < cc; c++) {
        let char;

        switch (current.sequence[c]) {
          case this.SPACE:
            char = '\n';
            break;
          case this.DOT:
            char = '•';
            break;
          case this.DASH:
            char = '–';}


        text += char;
      }

      text += ' ';
    }

    console.log(text);
    return text;
  }}


let morseCode = new MorseCode();

let input = $('textarea.input');
let run = $('button.run');
let output = $('pre.output');
let clear = $('button.clear');

run.on('click', e => {
  let inputText = input.val();
  console.log('run');

  output.text(morseCode.humanReadable(inputText));
});

clear.on('click', e => {
  input.val('');
  output.text('');
});