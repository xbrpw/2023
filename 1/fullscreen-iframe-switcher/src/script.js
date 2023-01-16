

$('div').on('click', function() {
  $(this).addClass('active');
});

$('span').on('click', function(e) {
  $('div').removeClass('active');    
});