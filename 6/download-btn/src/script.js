console.clear();
const btnEl = document.querySelector("button");
const wrapperEl = document.getElementById("btn-wrapper");
const progressBar = document.getElementById("progress-bar");
const progressCompleted = document.getElementById("progress-completed");
let width = 0;
let completed = 0;
let interval;
function startDownload(){
  wrapperEl.classList.toggle("loading");
  if(wrapperEl.classList.contains("loading")){
    btnEl.innerHTML = "&#10006;"
    interval = setInterval(animate,50);
  }
  else{
    btnEl.innerHTML = "Download";
    progressBar.style.width = "0";
    clearInterval(interval)
    width = 0;
    completed = 0;
  }
  // btnEl.className("animate")
}
function animate(){
  let random = Math.round(Math.random() * 3);
  width += random;
  completed = width/220*100;
  progressBar.style.width = width + "px";
  progressCompleted.innerHTML = "<p>" + Math.trunc(completed) + "%</p>";
  if(width >= 220){
    clearInterval(interval)
  }
}