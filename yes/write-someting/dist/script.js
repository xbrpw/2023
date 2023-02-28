var input = document.getElementsByClassName("text-write")[0];

var interval = setInterval(textChange, 3000);

function textChange() {
  var phrases = [
    "Once upon a time...",
    "Eggs, bacon, fish, flour",
    "185 Berry St",
    "Dear John,",
    "(415) 123-4567",
    "Things I’d do for love:"
  ];
  
  var placeholder = phrases[Math.floor(Math.random()*phrases.length)];
  
  input.setAttribute("placeholder", placeholder);
}