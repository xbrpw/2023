var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function(event) {
  var iframeLLVidContainer = document.querySelector(".iframe-lazy-load");
  var iframeLLVids = document.querySelectorAll(".iframe-lazy-load");
  var iframeVid = document.querySelector(".iframe-lazy-load iframe");
  
  if(isInViewport(iframeLLVidContainer) && iframeVid == null) {
    iframeLLVids.forEach(function(videoDiv){ 
    var iframeVid = document.querySelector(".iframe-lazy-load iframe");
      var src = videoDiv.getAttribute("data-src");
      var front = '<iframe src=';
      var back = '" frameborder="0" allowfullscreen="allowfullscreen"></iframe>';
      videoDiv.innerHTML = (front + src + back);
    });
  }
});