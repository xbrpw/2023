
//////////////////////////Word count
$(function() {
    var text = $('#columns').text();
    var charsLength = text.length;
    var wordsCount = text.split(' ').length;

    $('#output').html('Word Count: ' + wordsCount);
  $('#output2').html('Character Count: ' + charsLength);
});

/////////////////////////////////Font size
$('input').on('change', function() {
  var v = $(this).val();
  $('#columns').css('font-size', v + 'px')
  $('#fontSize span').html(v);
});

/////////////////////////////////Scroll buttons
function next() {
  var elmnt = document.getElementById("parent");
  elmnt.scrollLeft += ($('#columns').width()) + 20; //20 = gutter/gap
}

function previous() {
  var elmnt = document.getElementById("parent");
  elmnt.scrollLeft -= ($('#columns').width()) + 20; //20 = gutter/gap
}

/////////////////////////////////Get width of columns
(function($) {
  $.fn.extend({
    getColumnsWidth: function() {

      // append an empty <span>
      $this = $(this).append('<span></span>');

      // grab left position
      var pos = $this.find('span:last-of-type').position().left;

      // get prefix for css3
      var prefix;
      if (jQuery.browser.webkit) prefix = '-webkit-';
      else if (jQuery.browser.opera) prefix = '-o-';
      else if (jQuery.browser.mozilla) prefix = '-moz-';
      else if (jQuery.browser.msie) prefix = '-ms-';

      // add the width of the final column
      pos += parseInt($this.css(prefix + 'column-width'), 10);

      // subtract one column gap (not sure why this is necessary?)
      pos -= parseInt($this.css(prefix + 'column-gap'), 10);

      // remove empty <span>
      $(this).find('span:last-of-type').remove();

      // return position
      return pos;

    }
  });
})(jQuery);

$('#colw1').html($('#columns').width());
$('#colw2').html($('#columns').getColumnsWidth());

/////////////

