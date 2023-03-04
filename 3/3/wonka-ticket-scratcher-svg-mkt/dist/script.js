let MOUSEDOWN = false;
let newLine = true;
window.addEventListener('mousedown', (evt) => {
	MOUSEDOWN = true;
});
window.addEventListener('mouseup', (evt) => {
	MOUSEDOWN = false;
	newLine = true;
});
window.addEventListener('touchstart', (evt) => {
	MOUSEDOWN = true;
});
window.addEventListener('touchend', (evt) => {
	MOUSEDOWN = false;
});

function makeScratcher() {
	// Find your root SVG element
	const svg = document.querySelector('#scratcher');

	// Create an SVGPoint for future math
	const pt = new DOMPoint();

	// Get point in global SVG space
	const cursorPoint = (e) => {
		if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
    var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    pt.x = touch.pageX;
    pt.y = touch.pageY;
} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
    pt.x = e.clientX;
    pt.y = e.clientY;
}
 
		return pt.matrixTransform(svg.getScreenCTM().inverse());
	}

	svg.addEventListener('mousemove',function(evt){
		if (MOUSEDOWN) {
			if (newLine) {
				let pd = document.querySelector('#userPath').getAttribute('d');
				document.querySelector('#userPath').setAttribute('d', pd += 'M');
			}
			newLine = false;
			const loc = cursorPoint(evt);
			const dd = ` ${loc.x.toFixed(0)},${loc.y.toFixed(0)}`;
			let pd = document.querySelector('#userPath').getAttribute('d');
			document.querySelector('#userPath').setAttribute('d', pd += dd);
		}
	},false);

	svg.addEventListener('touchmove', (evt) => {
		evt.preventDefault();
			if (newLine) {
				let pd = document.querySelector('#userPath').getAttribute('d');
				document.querySelector('#userPath').setAttribute('d', pd += 'M');
			}
			newLine = false;
			const loc = cursorPoint(evt);
			const dd = ` ${loc.x.toFixed(0)},${loc.y.toFixed(0)}`;
		
			let pd = document.querySelector('#userPath').getAttribute('d');
			//document.querySelector('.touching').innerHTML = pd;
		document.querySelector('#userPath').setAttribute('d', pd += dd);
	}, false);
}

makeScratcher();

// RESET
function reset() {
	document.querySelector('#userPath').setAttribute('d', '');
	
	// randomize win/lose
	const randInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let op = randInt(0,1);
	document.querySelector('.winner').style.opacity = op;
	document.querySelector('.loser').style.opacity = Math.abs(op - 1);
	confetti(document.querySelector('#scratcher'));
}


document.querySelector('.reset').addEventListener('click', reset);

//initial randomization
window.onload = reset;