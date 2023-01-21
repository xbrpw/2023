console.clear();

const elApp = document.querySelector('#app');
const elStateNav = document.querySelectorAll('[data-to]');

Array.from(elStateNav).forEach(el => {
  el.addEventListener('click', () => {
    elApp.dataset.state = el.dataset.to;
  });
});