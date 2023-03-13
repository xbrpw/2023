const modalTriggers = document.querySelectorAll(".gallery__item");
const modalCloseTrigger = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

modalTriggers.forEach(trigger => {
  trigger.addEventListener(
    "click",
    e => {
      var src = e.target.getAttributeNode("src").value;
      console.log(src);
    },
    false
  );
});
