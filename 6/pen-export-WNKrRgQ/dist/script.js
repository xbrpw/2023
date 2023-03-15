function openTab(evt, TabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("Tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += "";
}





$('.menu-open').click(function(e) {
  $(e.delegateTarget).parent().addClass('open');
});

$('.menu-close').click(function(e) {
  $(e.delegateTarget).parent().removeClass('open');
});



 var i = 0;
        var txt = 'designer luisangel.maciel';
        var speed = 65;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("powered ").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }