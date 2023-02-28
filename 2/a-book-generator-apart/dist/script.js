$('form').on('submit', function( event ){
  event.preventDefault();
  
  $('input[type="text"]').each(function(){
    var val = $(this).val();
    var target = $(this).data('target');
    if(~target.indexOf('line')) {
      val = val.toUpperCase(); 
    }
    
    $('#'+target).text(val);
  });

  $('input[type="color"]').each(function(){
    var val = $(this).val();
    console.log(val);
    
    $('#color').css('fill',val);

  });
  
  updateDownload();

});

var updateDownload = function(){
  $('a[download]').attr({
    'href': `data:image/svg+xml;base64,${  btoa(document.querySelector('svg').outerHTML ) }`
    //'href': document.querySelector('svg').toDataURL("image/png")
  });
};

updateDownload();