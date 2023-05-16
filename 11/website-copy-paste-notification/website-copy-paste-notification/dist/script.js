$(function() {
  $(document).bind('copy', function() {
    //Check Session Storage and show the message
    if (sessionStorage.getItem('copyNotify') != 'off') {
      $('.copy-notify')
        .removeClass('hideDown')
        .addClass('showUp')
        .css('opacity', '1');
      $('.site-wrapper').addClass('blur-it')
    }
  });
  //Check Session Storage and show the message
  $('.close-it').click(function() {
    $('.copy-notify')
      .removeClass('showUp')
      .addClass('hideDown')
      .css('opacity', '0');
    $('.site-wrapper').removeClass('blur-it')
    sessionStorage.setItem('copyNotify', 'off');
  });
});