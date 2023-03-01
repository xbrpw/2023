var giftamount = 10;
var gw = $('.gift').outerWidth(true);
var giftcenter = gw/2;
var cycle = 7;

var containercenter = $('.boxwrapper').outerWidth(true)/2;
for(var i = 0; i <=5; i++)
{
  var giftduplicate = $('.giftwrapper').children().clone(true,true);
   $('.giftwrapper').append(giftduplicate);   
}    
 
$('.button').click(function(){
  var btn = $(this);
  btn.hide();
  var randomgift = Math.floor((Math.random() * 10) + 1);
  var distance = giftamount * gw * cycle + containercenter + (randomgift*gw) - giftcenter;
  
  // Get visual center of pointer
  var $pointer = $('.rafflebox .pointer');
  var pointerX = $pointer.offset().left + $pointer.width() * 0.5;
  var pointerY = $pointer.offset().top + $pointer.height() * 0.5;
  
  $( ".giftwrapper" ).css({left: "0"});
  
  $('.giftwrapper').animate({left: "-="+distance},10000,function(){
    // Hide pointer first, otherwise it will be returned as the topmost element
    $pointer.hide();
    
    // Get element from pointer's visual center
    var prize = document.elementFromPoint(pointerX, pointerY);
    
    // Show it again
    $pointer.show();
    alert('You Won Gift' + $(prize).data('prize')); 
    btn.show();                  
   });
});