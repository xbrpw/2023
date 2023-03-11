;(function($){
  var settings = {
    cssClass : 'item'
  };
  
  
  $.fn.scrollReveal = function(userSettings){    
    var $imgList = this,
           $head = $('head'),
           cache = new Array($imgList.length),
             css = '', 
           count = 0,
             opt = $.extend(userSettings, settings, {});
      
     
        $imgList.each(function(){
          var $r   = $(this),
              $img = $r.children('img'),
              src  = $img.attr('src'),
              sel  = opt.cssClass+"-"+count++;
          
          $img.hide();
          $r.addClass(sel);
          
          css += '.'+sel+"{background-image:url("+src+");}";
        });
        
        $head.append('<style>'+css+'</style>');
  }

})(jQuery);

console.timeStamp("Look here");
$('.reveal').scrollReveal();