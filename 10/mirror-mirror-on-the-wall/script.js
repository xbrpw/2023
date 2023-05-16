// Grab elements, create settings, etc.
var video = document.getElementById("video");
var img = document.getElementById("overlay-image");
var video_btn = document.getElementById("turn-on-video-btn");
var localStream;

function turnOnMirror() {
	charr.style.color = "transparent";
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices
			.getUserMedia({
				video: { facingMode: "user" }
			})
			.then(function (stream) {
				//video.src = window.URL.createObjectURL(stream);
				video.srcObject = stream;
				localStream = stream;
				video.play();
			});
	}
}

var char = document.querySelector("video");
var charr = document.querySelector("#mirror");
var cha = char.getBoundingClientRect();
var half = window.innerWidth / 2;
var halfH = window.innerHeight / 2;

window.addEventListener("mousemove", function (e) {
	var x = e.clientX;
	var r = x < half ? -(1 - x / half) : (1 - half / x) * 2;
	var y = e.clientY;
	var ry = y < halfH ? 1 - y / halfH : -(1 - halfH / y) * 2;
	// console.log(ry)

	char.style.transform =
		"translate(-50%,-50%) rotateY(" + r * 55 + "deg) rotateX(" + ry * 15 + "deg)";
	charr.style.transform =
		"translate(-50%,-50%) rotateY(" + r * 55 + "deg) rotateX(" + ry * 15 + "deg)";
});

charr.addEventListener("click", turnOnMirror);