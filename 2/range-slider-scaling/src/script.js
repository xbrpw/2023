var range = document.querySelector("#range");
var form = document.querySelector("#form");

range.addEventListener("input", function() {
  form.style["font-size"] = this.value + "em";
});