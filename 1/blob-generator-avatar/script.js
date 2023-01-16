function generateBlob() {
  const percentage1 = _.random(25, 75);
  const percentage2 = _.random(25, 75);
  const percentage3 = _.random(25, 75);
  const percentage4 = _.random(25, 75);
  var percentage11 = 100 - percentage1;
  var percentage21 = 100 - percentage2;
  var percentage31 = 100 - percentage3;
  var percentage41 = 100 - percentage4;
  var borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
  $(".blob").css("border-radius", borderRadius);
  $(".style span").html(borderRadius)
}

$(document).ready(function(){
  generateBlob();
});