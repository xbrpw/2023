
// look, click me!!

$("#header").on({
  "click.header": function() {
    $(".header__dev").toggleClass("header__dev--open");
  }
});


























setTimeout( function() {
  $(".header__dev").addClass("header__dev--slow").removeClass("header__dev--open");
},1000);


setTimeout( function() {
  $(".header__dev").removeClass("header__dev--slow");
},2400);
