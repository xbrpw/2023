$(document).on("click",".emoji-picker",function(e){
   e.stopPropagation();
   var elem = $(e.target.parentElement).parent().parent().attr('data-upload');
    $('[data-upload=' + elem + '] .intercom-composer-emoji-popover').toggleClass("active");
});

$(document).click(function (e) {
    if ($(e.target).attr('class') != '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length == 0) {
        $(".intercom-composer-emoji-popover").removeClass("active");
    }
});

$(document).on("click",".intercom-emoji-picker-emoji",function(e){
    var elem = $(e.target).closest('.formline').attr('data-upload');
    $('[data-upload=' + elem + '] .test-emoji').html($(this).html());
});

$('.intercom-composer-popover-input').on('input', function(e) {
    var elem = $(e.target).closest('.formline').attr('data-upload');
    $('[data-upload=' + elem + '] .intercom-emoji-picker-emoji').show();
    var query = this.value.toLowerCase();
    if(query != ""){
      $('[data-upload=' + elem + '] .intercom-emoji-picker-emoji:not([title*="'+query+'"])').hide();
    }
    else{
      $('[data-upload=' + elem + '] .intercom-emoji-picker-emoji').show();
    }
});