const email = 'luis.angel.maciel.padilla@gmail.com'
const subject = 'Hola! Me interesa hacer...';
const body = 'Kære Jørgen\n\nDu har udvist interesse for...\n\nMed venlig hilsen\n\nMig';
let href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
document.querySelector('a').setAttribute('href', href)