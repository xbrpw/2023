var colors = ['#1f5ade', '#fb36b4', '#19a160', '#fc7436', '#fce754', '#fa3143']
var sizes = [30, 60, 90];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  noStroke();
}

function mousePressed() {
  fill(random(colors));
  ellipse(mouseX, mouseY, random(sizes));
}