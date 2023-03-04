const inputs = document.querySelectorAll("input");
const submit = document.querySelector("button");

const assessment = document.querySelector(".survey");
const results = document.querySelector(".results");

const tableScoreVals = document.querySelectorAll(".tableScoreVal");
const details = document.querySelectorAll("details");
const descriptionTitles = document.querySelectorAll(".descriptionTitle");
const scoreVals = document.querySelectorAll(".scoreVal");

inputs.forEach(input => {
  const min = parseInt(input.min);
  const max = parseInt(input.max);
  
  input.addEventListener('change', () => {
    if (parseInt(input.value) < min) {
      input.value = min;
    } else if(parseInt(input.value) > max) {
      input.value = max;
    }
  });
});

submit.onclick = () => {
  let scores = [0, 0, 0, 0, 0, 0, 0];
  inputs.forEach((input, i) => {
    scores[i % 7] += parseInt(input.value) || parseInt(input.min);
  });
  
  scores.map((val, i) => {
    tableScoreVals[i].innerText = scoreVals[i].innerText = val;
    details[i].style.order = val * 30 - descriptionTitles[i].innerText.charCodeAt(0) - 65;
  });
  
  assessment.style.display = "none";
  results.style.display = "block";
  
  window.scrollTo(0, 0);
};