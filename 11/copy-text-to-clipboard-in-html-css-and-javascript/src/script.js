// HTML BOx JS Code
let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");

HTMLButton.onclick = function() {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLButton.innerText = "Codes Copied"
}

// CSS Box Js Code
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSButton");

CSSButton.onclick = function() {
  CSSBox.select();
  document.execCommand("copy");
  CSSButton.innerText = "Codes Copied"
}
// JavaScript BOx JS Code
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSButton");

JSButton.onclick = function() {
  JSBox.select();
  document.execCommand("copy");
  JSButton.innerText = "Codes Copied"
}