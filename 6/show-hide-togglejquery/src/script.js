$(document).ready(function(){
  $(".showmeCiencias").click(function(){
    $("#CienciasESO").fadeIn(500);
  });
});

$(document).ready(function(){
  $(".showmeMore").click(function(){
    $("esoToggle").animate({
      height: 'toggle'
    });
  });
});