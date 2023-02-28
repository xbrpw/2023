import "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
import { createApp } from 'https://unpkg.com/petite-vue?module';

createApp({
  title:'Accessibility is Hard and Important',
  summary:'Two things about web accessibility that we need to stop letting hold us back.',
  isSquare:false,
  get year() {
    return new Date().getFullYear();
  },
  saveDown() {
    const containerToRender = document.querySelector('.featured-image');
    html2canvas(
      containerToRender,
      { 
        allowTaint: true, 
        useCORS: true, 
        backgroundColor: "transparent",  
        width: containerToRender.offsetWidth, 
        height: containerToRender.offsetHeight,
      }
    ).then(canvas => {
      const previewArea = document.querySelector('.preview-area');
      previewArea.innerHTML = "";
      previewArea.appendChild(canvas);
    });
  }
}).mount();