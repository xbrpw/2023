$('.button').on('click',function(event){
  var scrollTop = $(window).scrollTop(),
      topOffset = $(this).offset().top + ($(this).outerHeight()/2) - scrollTop,
      leftOffset = $(this).offset().left + ($(this).outerWidth()/2),
      $target = $($(this).attr('href'));
  event.preventDefault;
  $target.css('transform-origin',leftOffset + 'px ' + topOffset + 'px');
  $target.addClass('is-open');
});

$('.overlay').on('click',function(event){
  $(this).removeClass('is-open');
});