//Full Project: https://berniesanders.com/revolution/

$(document).ready(function(){
  $('.bg, .donate-27').mouseenter(function(){
    $('.donate-27').removeClass('bounceOut').addClass('animated bounceIn');
  });
  $('.bg').mouseleave(function(){
    $('.donate-27').addClass('bounceOut')
  })
})