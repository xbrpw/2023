(async function () {
  // Uh oh! No Paint API support...
  if (CSS["paintWorklet"] === undefined) {
    // Let the user know they can't experiment with the pattern
    document.querySelector(
      ".prompt p"
    ).innerHTML = `Ah... the CSS Paint API is not supported in this browser — try Chrome or Edge!`;

    // Disable the regeneration button
    document.querySelector(".prompt__button--regenerate").style.opacity = "0.5";
    document.querySelector(".prompt__button--regenerate").style.pointerEvents =
      "none";
  } else {
    // Source: https://github.com/georgedoescode/fluid-pattern-worklet/blob/main/worklet.js
    CSS.paintWorklet.addModule(
      "https://unpkg.com/@georgedoescode/fluid-pattern-worklet"
    );
    // Update the pattern seed on click
    document
      .querySelector(".prompt__button--regenerate")
      .addEventListener("click", () => {
        document
          .querySelector(".worklet-canvas")
          .style.setProperty("--fluid-pattern-seed", Math.random() * 10000);
      });
  }

  if (!inIframe()) {
    document.querySelector(".prompt__button--fullscreen").style.display =
      "none";
    document.querySelector(".prompt__buttons").style.gridTemplateColumns =
      "1fr";
  }
})();

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}