$(document).ready(function () {
	function changeClass() {
		setTimeout(function () {
			$("body").addClass("panda");

			$("h1 span").text("¡Un panda!");
		}, 500);
		setTimeout(function () {
			$("body").removeClass("panda").addClass("cat");

			$("h1 span").text("¡Un gato!");
		}, 5000);
		setTimeout(function () {
			$("body").removeClass("cat");

			$("h1 span").text("¡Un perro!");
			$("button").removeClass("hide");
		}, 10000);
	}
	changeClass();
	$("button").click(function () {
		changeClass();
	});
});