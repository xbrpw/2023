$(document).ready(function() {
  
  var spins = 0;
	$('.spin-button').click(function() {
    spins++;
		var randDegree = Math.floor(Math.random() * 1800) + 1;
    var totalDegree = spins * 1800 + randDegree;
		$('#wheel').css({'transform' : 'rotate(' + totalDegree + 'deg)'});
	});
  
  $('.fa-heart').click(function() {
    $('.overlay').fadeIn();
  })
  
  $('.overlay').click(function() {
    $(this).fadeOut();
  })

});