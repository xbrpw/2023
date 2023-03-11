$(document).ready(function(){
  $('[data-toggle="select2"]').select2({
    templateResult: function(item) {
      return $(
        '<div class="unit-wrapper">'
        + '<address class="unit-address"><strong>' + item.text + '</strong><br>' + $(item.element).data('address') + '<br>' + $(item.element).data('zipcode') + ' ' + $(item.element).data('city') +'</address>'
        + '<div class="unit-pno">' + item.id + '</div>'
        + '</div>'
      )
    }
  });
});