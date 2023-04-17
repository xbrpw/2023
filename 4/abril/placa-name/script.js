var checkbox = document.querySelector('input'),
      sun = document.querySelector('.sun'),
      root = document.querySelector(':root'),
      darkmode = true,
      styleVars = ['--background-color','--accent','--text-color','--focus'],
      colors = {
        darkmode:['#1d1f21','#de935f','#c5c8c6','#81a2be'],
        lightmode:['#f5e7de','#a67c53','#4c4742','#5986b2']
      };
const toggle = function(){
  /* color switch */
  let switchTo = (darkmode) ? colors.lightmode :colors.darkmode;
  styleVars.forEach((p, i) => {root.style.setProperty(styleVars[i], switchTo[i])})
  /*transform sun */
  if(darkmode){sun.style.setProperty('left', '0')} 
  else {sun.style.setProperty('left', '19%')}
  
  darkmode = !darkmode
}

/* not vue needed */
checkbox.addEventListener("click", toggle);