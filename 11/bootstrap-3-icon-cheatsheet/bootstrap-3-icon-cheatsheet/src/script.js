var icons = document.querySelectorAll('li');
var clipboard = new Clipboard(icons, {
  text: function(trigger) {
    var name = trigger.children[0].className;
    var alert_name = document.querySelector('#Alert .name');
    var alert = alert_name.parentNode;
    alert_name.innerHTML = name;
    alert.style.display = "inline-block";
    alert.style.top = trigger.offsetTop + "px";
    alert.style.left = trigger.offsetLeft + "px";
    setTimeout(function() {
      document.querySelector("#Alert").style.display = "none";
    }, 3000)
    return name;
  }
});