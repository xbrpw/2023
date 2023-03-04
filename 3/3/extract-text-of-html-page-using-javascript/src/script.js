function extractText() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  var myHTML = document.createElement("html");
  myHTML.innerHTML = input;
  var body = myHTML.querySelector("body"); // capture body of page
  output.innerHTML = body.textContent || body.innerText;
  output.innerHTML = output.innerHTML.replace(/^(\s+)/gm, ""); // remove blank lines
}
