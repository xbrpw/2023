var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var rating = 0;
var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

checkboxes.forEach(checkbox =>
	checkbox.addEventListener("click", function() {
		changeRating(event);
	})
);

canvas.width = window.innerWidth;
canvas.height = document.getElementById('container').offsetHeight;

var stars = [],
		FPS = 0,
		x = canvas.width;

for (let i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random(),
    vx: Math.floor(Math.random() * 10) - 5,
    vy: Math.floor(Math.random() * 10) - 5
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = "lighter";
  
  for (let i = 0, x = stars.length; i < x; i++) {
    let s = stars[i];
  
    ctx.fillStyle = "#f6dde8";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
  
draw();

function changeRating(e) {
	e.target.checked = true;
	e.target.classList.remove('hide');
	
	let val = parseInt(e.target.value);
	
	if (val === this.rating) {
		this.setRating(0);
		this.clearAllCheckboxes();
	} else {
		this.setRating(val);
		this.setCheckboxes();
	}
	
	e.target.blur();
	this.updateStarCount();
}
	
function setRating(val) {
	this.rating = val;
}

function clearCheckbox(checkbox) {
	checkbox.classList.add('hide');
	checkbox.checked = false;
}

function clearAllCheckboxes() {
	this.checkboxes.forEach(checkbox => {
		this.clearCheckbox(checkbox);
	});
}

function clearCheckboxesGreaterThanRating() {
	this.checkboxes.forEach(checkbox => {
		if(checkbox.value > this.rating) {
			this.clearCheckbox(checkbox);
		}
	})
}

function setCheckboxes() {
	this.clearCheckboxesGreaterThanRating();
		for (let i = 0; i < this.rating; i++) {
			if (!this.checkboxes[i].checked) {
			this.checkboxes[i].classList.remove('hide');
				
			setTimeout(function() {
				this.checkboxes[i].checked = true;
			}, 200 * i);
		}
	}
}

function updateStarCount() {
	let countText = `${this.rating} de ${this.checkboxes.length} estrellas`;
	// 	let countText = `${this.rating} de ${this.checkboxes.length} estrellas`; 
	
	document.getElementById('star_count').innerText = countText;
}