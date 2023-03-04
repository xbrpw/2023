// Switch layouts
var signup = document.querySelector(".signup-container"),
    login = document.querySelector(".login-container");
function toggleScreen() {
    document.body.classList.toggle("login-open");
    document.body.classList.toggle("signup-open");
    
    if(document.body.classList.contains("login-open")) {
        fadeIn(login);
        fadeOut(signup);
    } else {
        fadeIn(signup);
        fadeOut(login);
    }
}

// Subtle SVG line animation
var svg = document.querySelector(".switcher-overlay svg")
function sublteMoveSVG(right) {
    if(right) {
        svg.style.animation = "bounceRight 0.15s";
    } else {
        svg.style.animation = "bounceLeft 0.15s";
    }
}

// Fade out for sections
function fadeOut(elem) {
    (elem.style.opacity -= .1) < 0 ? 
        elem.style.display = "none" 
        : requestAnimationFrame(function() { fadeOut(elem); });
}
function fadeIn(elem) {
    elem.style.opacity = 1;
    elem.style.display = "block";
}

// Size our overlay (necessary for some edge cases)
var overlay = document.querySelector(".switcher-overlay");
function sizeOverlay() {
    overlay.style.height = Math.max(window.innerHeight, signup.clientHeight) + "px";
}

// Apply our animations and listeners
document.querySelector(".switcher-overlay").addEventListener("transitionend", function() {
    if(document.body.classList.contains("login-open")) {
        sublteMoveSVG(true);
    } else {
        sublteMoveSVG(false);
    }
});
document.querySelectorAll(".switch").forEach(btn => {
    btn.addEventListener("click", toggleScreen);
});
document.body.classList.add("login-open");
toggleScreen();

window.addEventListener("resize", sizeOverlay);
sizeOverlay();