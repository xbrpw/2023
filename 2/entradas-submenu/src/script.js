$('.actions-btn, .close-drawer').on('click', function(e) {
	$('.button-drawer').toggleClass("toggleDrawer");
	e.preventDefault();
 });