/* eslint-disable no-undef */
// https://codepen.io/dimaslanjaka/pen/LYegjaV

if (location.host.includes("cdpn")) console.clear();
const idate = document.querySelector("input#date");
const pattern = document.querySelector("input#pattern");
const result = document.querySelector("#moment-result");

const isNumeric = (str) => parseFloat(str) === parseFloat(str);

function moment_format(datestr) {
  if (isNumeric(datestr)) {
    return moment(datestr)
      .tz("Asia/Jakarta")
      .format(pattern.value || "");
  }
  if (typeof datestr === "string") {
    datestr = new Date(datestr);
  }
  return moment(datestr)
    .tz("Asia/Jakarta")
    .format(pattern.value || "");
}

function update() {
  idate.value = new Date().toString();
  const formatted = moment_format(idate.value);
  result.textContent = formatted;
}

document.addEventListener("DOMContentLoaded", function (_e) {
  update(); // update value on-load
  let interval;
  document
    .getElementById("start-interval")
    .addEventListener("click", function (e) {
      e.preventDefault();
      if (!interval) interval = setInterval(update, 1000);
    });
  document
    .getElementById("stop-interval")
    .addEventListener("click", function (e) {
      e.preventDefault();
      clearInterval(interval);
      interval = null;
    });

  document
    .getElementById("copy-moment")
    .addEventListener("click", function (e) {
      e.preventDefault();
      copyTextToClipboard(result.textContent.trim());
    });
  pattern.addEventListener("change", update);
});

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
