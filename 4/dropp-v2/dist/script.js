$(document).ready(function() {

  $('input[name="dropp"]').on("change", function(e){
    var value = $(this).val();
    $('.js-value').text(value);
  });

// Keyboard events---------------------

  $('.dropp-header').keyup(function(){
    $(this).addClass('focused');
    $('.dropp-body').addClass('open');
    $('input[name="dropp"]:first').focus();
  });

  $('input[name="dropp"]').keyup(function(e){
    if(e.which == 13 || e.which == 32 || e.which == 9){// on enter, space or tab key press
      $('.dropp-header').removeClass('focused');
      $('.dropp-body').removeClass('open');
    }
  });

// End Keyboard events------------------

});