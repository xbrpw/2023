// Reload + position

 console.clear();
    const storage =
      typeof sessionStorage !== "undefined" ? sessionStorage : localStorage;
    // load scroll position after page fully loaded
    (function() {
      document.scrollingElement.scrollLeft = sessionStorage.getItem("scroll-x");
      document.scrollingElement.scrollTop = sessionStorage.getItem("scroll-y");
    })();
    // save while scrolling page
    window.addEventListener("scroll", function() {
      storage.setItem("scroll-x", document.scrollingElement.scrollLeft);
      storage.setItem("scroll-y", document.scrollingElement.scrollTop);
    });
    // log
    console.log(sessionStorage);
    // refresh button
    const refbtn = document.getElementById("reload");
    refbtn.addEventListener("click", function() {
      window.location.reload(1);
    });

// Add active class to the current button (highlight it)
var header = document.getElementById("myLISTADO");
var btns = header.getElementsByClassName("listado");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeli");
  current[0].className = current[0].className.replace(" activeli", "");
  this.className += " activeli";
  });
}