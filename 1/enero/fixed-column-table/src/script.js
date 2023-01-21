
    class ScrollListener {
      constructor() {
        this.hsObservers = [];
        this.vsObservers = [];
        this.scrollLeftPos = 0;
        this.scrollTopPos = 0;
      }

      // subscribe to both vertical and horizontal scroll event
      subscribe(observer) {
        this.hsObservers.push(observer)
        this.vsObservers.push(observer)
      }

      // subscribe to Horizontal Scroll
      subscribeHS(observer) {
        this.hsObservers.push(observer)
      }

      // subscribe to Vertical Scroll
      subscribeVS(observer) {
        this.vsObservers.push(observer)
      }

      unSubscribe(obsever) {
        // implement this metho
      }

      // set top and left scroll pos
      setScroll(posX, posY, source) {
        this.setScrollLeft(posX)
        this.setScrollTop(posY)
      }

      // set top scroll pos
      setScrollTop(pos, source = {}) {
        let obs = this.vsObservers.filter(x => x.id != source.id)
        for (let o of obs) {
          o.scrollTop = pos
        }
        this.scrollTopPos = pos
      }

      // set left scroll pos
      setScrollLeft(pos, source = {}) {
        let obs = this.hsObservers.filter(x => x.id != source.id)
        for (let o of obs) {
          o.scrollLeft = pos
        }
        this.scrollLeftPos = pos
      }
    }

    let scrollListener = new ScrollListener()
    let headerScrollable = document.getElementById("headerScrollable")
    let bodyScrollable = document.getElementById("bodyScrollable")
    let bodySticky = document.getElementById("bodySticky");

    scrollListener.subscribeHS(headerScrollable)
    scrollListener.subscribe(bodyScrollable)
    scrollListener.subscribeVS(bodySticky);

    headerScrollable.addEventListener('scroll', (e) => handleScroll(headerScrollable, "horizontal"));
    bodyScrollable.addEventListener('scroll', (e) => handleScroll(bodyScrollable));
    bodySticky.addEventListener('scroll', (e) => handleScroll(bodySticky, "vertical"));

    let scrollState = { id: undefined }

    let handleScroll = (elem, scrollDir = "") => {
      if (scrollState.id == undefined) {
        scrollState.id = elem.id
      } else if (scrollState.id != elem.id) {
        return
      }

      scrollStopper()

      // fire events w.r.t scroll direction
      if (scrollDir == 'vertical') {
        scrollListener.setScrollTop(elem.scrollTop, elem)
      } else if (scrollDir == 'horizontal') {
        scrollListener.setScrollLeft(elem.scrollLeft, elem)
      } else {
        scrollListener.setScroll(elem.scrollLeft, elem.scrollTop, elem)
      }
    }

    // the following blocks of code is used to detect when the scroll is stopped
    let delayedExec = function (after, fn) {
      let timer;
      return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
      };
    };

    let scrollStopper = delayedExec(100, function () {
      scrollState.id = undefined
    });
