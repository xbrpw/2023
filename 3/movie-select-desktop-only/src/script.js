$('.movies').slick({
  centerMode: true,
  slidesToShow: 3,
  initialSlide: 2,
  arrows: false,
  infinite:false,     
  centerPadding:'200px',
  responsive: [
    {
      breakpoint: 968,
      settings: {
        centerMode: true,
      slidesToShow: 3,
      initialSlide: 2,
      arrows: false,
      infinite:false,     
      centerPadding:'0px',
      }
    }]
  });

$('.movies').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var poster = $('.slick-center .movie-poster').css('background-image');
  $('.joker-wallpaper').attr('style','background-image:'+poster);
  $('.replace-wallpaper').attr('style','background-image:'+poster);
  $('.replace-wallpaper').addClass('replace');
});
