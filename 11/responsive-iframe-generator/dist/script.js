function copyDivToClipboard(id) {
  var range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}

function update() {
  var $url = $("#url"),
  $preview = $("#preview"),
  $css = $("#css"),
  $html = $("#html"),
  $aspect = $('[type="radio"]:checked'),
  $size = $("#size"),
  $container = $('<div class="iframe-container" />'),
  $style = $("#style"),
  $iframe = $('<iframe loading="lazy" />');

  var aspect = $aspect.val().split("x");
  aspect = 100 * aspect[1] / aspect[0];

  $iframe.attr("src", $url.val());
  $container.html($iframe);
  $preview.html($container);

  $html.text($container.prop("outerHTML"));

  var css = ".iframe-container {\n";
  css += "&nbsp;&nbsp;overflow: hidden;\n";
  css += "&nbsp;&nbsp;padding-top: " + aspect + "%;\n";
  css += "&nbsp;&nbsp;position: relative;\n";
  css += "}\n";
  css += "\n";
  css += ".iframe-container iframe {\n";
  css += "&nbsp;&nbsp;border: 0;\n";
  css += "&nbsp;&nbsp;height: 100%;\n";
  css += "&nbsp;&nbsp;left: 0;\n";
  css += "&nbsp;&nbsp;position: absolute;\n";
  css += "&nbsp;&nbsp;top: 0;\n";
  css += "&nbsp;&nbsp;width: 100%;\n";
  css += "}";
  $css.html(css.replace(/(?:\r\n|\r|\n)/g, "<br />"));

  $size.html($("#preview").width() + "x" + $("#preview").height() + "px");

  $style.text(css.replace(/&nbsp;/gi, ""));
}

$('#html').click(function () {
  copyDivToClipboard('html');
  $(this).append('<span class="copied">Copied!</span>');
  setTimeout(function () {
    $('.copied', $('#html')).remove();
  }, 2000);
});

$('#css').click(function () {
  copyDivToClipboard('html');
  $(this).append('<span class="copied">Copied!</span>');
  setTimeout(function () {
    $('.copied', $('#css')).remove();
  }, 2000);
});

$("input").change(function () {
  update();
});

update();