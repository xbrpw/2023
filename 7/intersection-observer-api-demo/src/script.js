const getThreshold = () => {
  let data = [];

  for (let i = 0; i <= 1.0; i += 0.005) {
    data.push(i);
  }

  return data;
}

const mountObserver = ({ target, handler, threshold }) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  }

  const observer = new IntersectionObserver(handler, options);

  observer.observe(target);
}

const handleChanges = (entries) => {
  entries.forEach(({ target, intersectionRatio }) => {
    const element = target.querySelector('.percentage__value');
    const view = target.className.split(' ')[1];    
    const percentage = Math.ceil(intersectionRatio * 100);

    element.firstChild.data = percentage;

    scaleLegendBg({
      bg: document.querySelector(`.legend__item--${view}`).querySelector('.legend__bg'),
      percentage: percentage / 100
    })
  });
}

const scaleLegendBg = ({ bg, percentage }) => {
  bg.style.transform = `scaleX(${percentage})`;
};

document.addEventListener('DOMContentLoaded', (event) => {  
  const views = ['.home', '.about', '.contact', '.services'];
  
  views.map((view) => {
    mountObserver({
      target: document.querySelector(view),
      handler: handleChanges,
      threshold: getThreshold()
    });  
  });
});
