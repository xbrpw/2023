$(document).ready(function(){

// Scroll 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".mid-section-header").addClass("fixed-header");
    }else
	{
	   $(".mid-section-header").removeClass("fixed-header");
	}
}); //missing );


// Background Color 
$('.background-color').click(function(){

   $(this).toggleClass('active-bg')

});

$('.option-for-bg li').click(function(){
   var getBg = $(this).attr('data-Bg');
   if(getBg=='black')
   {
       $('body').addClass('bg-black');
   }else
   {
       $('body').removeClass('bg-black');
   }
   
   $('li').removeClass('active-bg');
   $(this).addClass('active-bg');

});

// View Option 
$('.view-type i').click(function(){
      var getViewType = $(this).attr('data-view-type');
	  if(getViewType=='grid')
	  {
	     $('.grid-list-tile').addClass('list-view-width');
	     $(this).removeClass('view-type-active');
		 $('.list-view').addClass('view-type-active');
	  }else
	  {
	    $('.grid-list-tile').removeClass('list-view-width');
	    $(this).removeClass('view-type-active');
		 $('.grid-view').addClass('view-type-active');
	  }

});


$('.type-something input').keypress(function() {
    var getContent = this.value;
	$('.demo-text').html(getContent);
    
});




})