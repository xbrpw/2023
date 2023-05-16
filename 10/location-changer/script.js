$('.current-location').on('click', function () {
  var $box = $(this).parent().nextAll('.all-locations');
  $box.toggleClass('visible');
});

$('.location-picker input').on('change', function () {
  var $box = $(this).parent().parent(),
      $location = $box.parent().find('.current-location'),
      $checked = $box.find(':checked');
  
  if ($('#all-locations').is(':checked')) {
    $location.text('All Locations');
  } else if ($checked.length > 1) {
    $location.text('Multiple Locations');
  } else if ($checked.length === 0) {
    $location.text('No Locations');
  } else {
    $location.text($checked.next('label').text());
  }
});

$('.location-picker').on('click', function (e) {
  e.stopPropagation();
});
$(document).on('click', function () {
  $('.all-locations').removeClass('visible');
});