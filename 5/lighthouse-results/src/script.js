import { createApp } from "https://cdn.skypack.dev/petite-vue@0.4.1";

const app = () => {
 const metrics = [
  {
   title: "Performance",
   pct: 89
  },
  {
   title: "Accessibility",
   pct: 100
  },
  {
   title: "Best Practices",
   pct: 98
  },
  {
   title: "SEO",
   pct: 89
  }
 ];
 return {
  title: "website.com",
  metrics,
  color(pct) {
   if (pct > 89) {
    return "green";
   } else if (pct > 49) {
    return "orange";
   }

   return "red";
  }
 };
};

createApp({ app }).mount();

/**
 * Scaling <iframe>-elements.
 *
 * Emanuel Kluge
 * twitter.com/Herschel_R
 */
(function (win, doc) {
 /** Below this point the scaling takes effect. */
 var BREAKPOINT = 300;

 /**
  * The `window.resize`-callback gets throttled
  * to an interval of 30ms.
  */
 var THROTTLE = 30;

 /** Just the declaration. Definition comes later. */
 var IFRAME_HEIGHT;

 var iframe = doc.getElementsByTagName("iframe")[0],
  timestamp = 0;

 /** Defining the inital iframe-height. */
 IFRAME_HEIGHT = parseInt(getComputedStyle(iframe).height, 45);

 /**
  * Takes an object with CSS-transform-properties
  * and generates a cross-browser-ready style string.
  *
  * @param  {Object} obj
  * @return {String}
  */
 function transformStr(obj) {
  var obj = obj || {},
   val = "",
   j;
  for (j in obj) {
   val += j + "(" + obj[j] + ") ";
  }
  val += "translateZ(0)";
  return (
   "-webkit-transform: " +
   val +
   "; " +
   "-moz-transform: " +
   val +
   "; " +
   "transform: " +
   val
  );
 }

 /**
  * Scaling the iframe if necessary.
  *
  * @return {Function}
  */
 function onResize() {
  var now = +new Date(),
   winWidth = win.innerWidth,
   noResizing = winWidth > BREAKPOINT,
   scale,
   width,
   height,
   offsetLeft;

  if (now - timestamp < THROTTLE || noResizing) {
   /** Remove the style-attr if we're out of the "scaling-zone". */
   noResizing &&
    iframe.hasAttribute("style") &&
    iframe.removeAttribute("style");
   return onResize;
  }

  timestamp = now;

  /**
   * The required scaling; using `Math.pow` to get
   * a safely small enough value.
   */
  scale = Math.pow(winWidth / BREAKPOINT, 1.2);

  /**
   * To get the corresponding width that compensates
   * the shrinking and thus keeps the width of the
   * iframe consistent, we have to divide 100 by the
   * scale. This gives us the correct value in percent.
   */
  width = 100 / scale;

  /**
   * We're using the initial height and the compen-
   * sating width to compute the compensating height
   * in px.
   */
  height = IFRAME_HEIGHT / scale;

  /**
   * We have to correct the position of the iframe,
   * when changing its width.
   */
  offsetLeft = (width - 95) / 2;

  /** Setting the styles. */
  iframe.setAttribute(
   "style",
   transformStr({
    scale: scale,
    translateX: "-" + offsetLeft + "%"
   }) +
    "; width: " +
    width +
    "%; " +
    "height: " +
    height +
    "px"
  );

  return onResize;
 }

 /** Listening to `window.resize`. */
 win.addEventListener("resize", onResize(), false);
})(window.self, document);

// DOM Elements
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tabcontent");
const darkModeSwitch = document.querySelector("#dark-mode-switch");

// Functions
const activateTab = (tabnum) => {
 tabs.forEach((tab) => {
  tab.classList.remove("active");
 });

 tabContents.forEach((tabContent) => {
  tabContent.classList.remove("active");
 });

 document.querySelector("#tab" + tabnum).classList.add("active");
 document.querySelector("#tabcontent" + tabnum).classList.add("active");
 localStorage.setItem("jstabs-opentab", JSON.stringify(tabnum));
};

// Event Listeners
tabs.forEach((tab) => {
 tab.addEventListener("click", () => {
  activateTab(tab.dataset.tab);
 });
});

darkModeSwitch.addEventListener("change", () => {
 document.querySelector("body").classList.toggle("darkmode");
 localStorage.setItem("jstabs-darkmode", JSON.stringify(!darkmode));
});

// Retrieve stored data
let darkmode = JSON.parse(localStorage.getItem("jstabs-darkmode"));
const opentab = JSON.parse(localStorage.getItem("jstabs-opentab")) || "3";

// and..... Action!
if (darkmode === null) {
 darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches; // match to OS theme
}
if (darkmode) {
 document.querySelector("body").classList.add("darkmode");
 document.querySelector("#dark-mode-switch").checked = "checked";
}
activateTab(opentab);
