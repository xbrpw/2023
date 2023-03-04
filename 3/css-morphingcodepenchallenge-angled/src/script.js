$(document).ready(function () {
	function changeClass() {
		setTimeout(function () {
			$("body").addClass("panda");

			$("h1 span").text("Panda!");
		}, 500);
		setTimeout(function () {
			$("body").removeClass("panda").addClass("cat");

			$("h1 span").text("Cat!");
		}, 5000);
		setTimeout(function () {
			$("body").removeClass("cat");

			$("h1 span").text("Dog!");
			$("button").removeClass("hide");
		}, 10000);
	}
	changeClass();
	$("button").click(function () {
		changeClass();
	});
});
