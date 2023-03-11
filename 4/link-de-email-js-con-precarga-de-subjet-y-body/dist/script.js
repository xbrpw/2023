const email = 'lamacpad@gmail.com'
const subject = 'Hola!';
const body = 'Hola Luis\n\nSaludos\n\nDesde Codepen';
let href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
document.querySelector('a').setAttribute('href', href)