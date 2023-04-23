TweenMax.set("svg", { visibility: "visible" });

const randomMinMax = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const rippleSmallH = document.querySelectorAll(".horizontalRippleSmall"),
rippleMedH = document.querySelectorAll(".horizontalRippleMedium"),
rippleSmallV = document.querySelectorAll(".verticalRippleSmall"),
rippleMedV = document.querySelectorAll(".verticalRippleMedium"),
rippleBigV = document.querySelectorAll(".verticalRippleBig");

// Animate Pool
const poolTl = new TimelineMax({});

poolTl.
to(rippleSmallH, 6, { x: 800, ease: Linear.easeNone, repeat: -1 }, "one").
to(rippleMedH, 6, { x: 800, ease: Linear.easeNone, repeat: -1 }, "one").
to(rippleSmallV, 6, { y: -600, ease: Linear.easeNone, repeat: -1 }, "one").
to(rippleMedV, 6, { y: -600, ease: Linear.easeNone, repeat: -1 }, "one+=0.1").
to(
rippleBigV,
6,
{ y: -600, ease: Linear.easeNone, repeat: -1 },
"one+=0.1");


// Rotate man + tube
const tube = document.querySelector("#tube"),
man = document.querySelector("#man"),
glassLeft = document.querySelectorAll(".leftGM"),
glassRight = document.querySelectorAll(".rightGM"),
straw = document.querySelector("#straw");

TweenMax.set(glassLeft, {
  rotation: -7,
  scaleX: 0.8,
  x: -15.5,
  transformOrigin: "center center" });

TweenMax.set(glassRight, {
  rotation: -7,
  scaleX: 0.8,
  x: -15.5,
  transformOrigin: "center center" });


const glassTl = new TimelineMax({ repeat: -1, repeatDelay: 0.1 });
// glasses reflection
glassTl.
to(glassLeft, 2.5, { x: 15.5, ease: Power1.easeIn, rotation: 0 }, "rotate").
to(
glassRight,
2.5,
{ x: 15.5, ease: Power1.easeOut, rotation: 0 },
"rotate+=2.4").

to(
glassRight,
2.5,
{ x: -15.5, rotation: -7, ease: Power1.easeIn },
"rotate+=4.9").

to(
glassLeft,
2.5,
{ x: -15.5, rotation: -7, ease: Power1.easeOut },
"rotate+=7.4");


const rotateTl = new TimelineMax({ repeat: -1 });
rotateTl.
to(
tube,
5,
{ rotation: 10, ease: Linear.easeNone, transformOrigin: "center center" },
"rotate").

to(
man,
5,
{ rotation: 10, ease: Linear.easeNone, transformOrigin: "50% 45%" },
"rotate").

to(
tube,
5,
{ rotation: 0, ease: Linear.easeNone, transformOrigin: "center center" },
"out").

to(
man,
5,
{ rotation: 0, ease: Linear.easeNone, transformOrigin: "50% 45%" },
"out")

// straw
.to(
straw,
5,
{ rotation: 5, transformOrigin: "right bottom", ease: Linear.easeNone },
"rotate").

to(
straw,
5,
{ rotation: 0, transformOrigin: "right bottom", ease: Linear.easeNone },
"out");


// Animating the tube shadow
const shadowArm = document.querySelector("#armShadow"),
shadowHead = document.querySelector("#headShadow"),
shadowTube = document.querySelector("#tubeShadow");

TweenMax.set(shadowHead, { x: 5 });

// Rotating the shadow
const shadowTl = new TimelineMax({ repeat: -1 });
shadowTl.
to(
shadowTube,
12,
{
  rotation: "+=360",
  transformOrigin: "center center",
  ease: Linear.easeNone },

"rotate").

to(
shadowHead,
12,
{
  rotation: "+=360",
  transformOrigin: "center center",
  ease: Linear.easeNone },

"rotate").

to(
"#armShadow path",
12,
{
  rotation: "+=360",
  transformOrigin: "center center",
  ease: Linear.easeNone },

"rotate");


// Move shadow when rotation takes place
const moveTl = new TimelineMax({ repeat: -1 });
moveTl.
to(shadowHead, 5, { x: 30, ease: Linear.easeNone }, "rotate").
to(shadowHead, 5, { x: 5, ease: Linear.easeNone }, "rotate+=5").
to(
shadowArm,
5,
{ rotation: 9, y: 10, x: 12, ease: Linear.easeNone },
"rotate").

to(
shadowArm,
5,
{ rotation: 0, y: 0, x: 0, ease: Linear.easeNone },
"rotate+=5");


// Create tube ripples
const ripples = document.querySelectorAll(".tubeRipple"),
rippleTl = new TimelineMax({ repeat: -1 });

rippleTl.
staggerTo(
ripples,
3,
{ scale: 1.3, transformOrigin: "center center", ease: Sine.easeInOut },
1,
"in").

staggerTo(ripples, 1, { attr: { "stroke-width": "1.5" } }, 0.5, "in+=1.5").
staggerTo(
ripples,
1,
{ opacity: 0, transformOrigin: "center center" },
0.5,
"in+=2.35");


// breathe
const breatheTl = new TimelineMax({ repeat: -1 }),
body = document.querySelector("#body"),
trunks = document.querySelector("#trunks"),
shadow = document.querySelector("#hShadow");

breatheTl.
to(
body,
2,
{ scale: 1.02, transformOrigin: "center center", ease: Sine.easeInOut },
"in").

to(
trunks,
2,
{ scale: 1.03, transformOrigin: "center center", ease: Sine.easeInOut },
"in").

to(
shadow,
2,
{ scale: 1.05, transformOrigin: "center center", ease: Sine.easeInOut },
"in").

to(
shadow,
2,
{ y: -3, transformOrigin: "center center", ease: Sine.easeInOut },
"in").

to(
body,
2,
{ scale: 1, transformOrigin: "center center", ease: Sine.easeInOut },
"out").

to(
trunks,
2,
{ scale: 1, transformOrigin: "center center", ease: Sine.easeInOut },
"out").

to(
shadow,
2,
{ scale: 1, transformOrigin: "center center", ease: Sine.easeInOut },
"out").

to(
shadow,
2,
{ y: 0, transformOrigin: "center center", ease: Sine.easeInOut },
"out");

// Feet
const feetTl = new TimelineMax({ repeat: -1, yoyo: true });

feetTl.to("#feetWater", 0.35, { y: -2, ease: Linear.easeNone });

// Water Reflection
const reflectionGroup = document.querySelector("#waterReflection"),
reflectOpacity = new TimelineMax({
  repeat: -1,
  repeatDelay: randomMinMax(1, 1.5) });


reflectOpacity.
fromTo(
reflectionGroup,
1,
{ opacity: 0.13, transformOrigin: "center center" },
{ opacity: 0.3, ease: Sine.easeIn },
"in").

to(reflectionGroup, 1, { opacity: 0.13, ease: Sine.easeOut });

const waterReflectionTl = new TimelineMax({ repeat: -1 }),
waterReflectionFilter = document.querySelector(
"#waterReflect feTurbulence");


waterReflectionTl.
fromTo(
waterReflectionFilter,
8,
{ attr: { baseFrequency: "0.005 0.015" } },
{ attr: { baseFrequency: "0.03 0.045" }, ease: Linear.easeNone },
"in").

fromTo(
waterReflectionFilter,
8,
{ attr: { baseFrequency: "0.03 0.045" } },
{ attr: { baseFrequency: "0.005 0.015" }, ease: Linear.easeNone });