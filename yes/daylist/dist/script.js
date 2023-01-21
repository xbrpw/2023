var current_time = document.querySelector(".current_time");
var input = document.getElementById("input");
var list = document.querySelector(".list");
var list_item = document.querySelector(".list_item");
var list_item_text = document.querySelector(".list_item_text");

var li;

input.addEventListener("keyup", function(e) {

  if (e.which == 13) {
    let d = new Date;
    let h = d.getHours();
    let m = d.getMinutes();
    let val = e.target.value;

    //Make minutes with 2 numbers
    if (m <= 9) {
      m = "0" + m;
    }
    //Make hours with 2 numbers
    if (h <= 9) {
      h = "0" + h;
    }

    li = document.createElement("LI");
    list.appendChild(li);
    li.classList.add("list_item");
    li.innerHTML = "<span class='list_item_text' autofocus='autofocus'>" + val + "</span>" + " " + "<time class='hour'>" + h + ":" + "</time>" + "<time class='minute'>" + m + "</time>";
    input.value = " ";

    //Set item for localStorage
    var lists = list.innerHTML;
    localStorage.setItem('lists', lists);
  }

}, false);

//Get item for localStorage
if (localStorage.getItem('lists')) {
  list.innerHTML = localStorage.getItem('lists')
}

//Double click to remove item
document.querySelector('body').addEventListener('dblclick', function(event) {
  //Double click on list_item to remove
  if (event.target.classList[0] === 'list_item') {
    event.target.remove();
    var lists = list.innerHTML;
    localStorage.setItem('lists', lists);
  }
  //Double click list_item_text to edit
  if (event.target.classList[0] === 'list_item_text') {
    event.target.contentEditable = true;
    //Click enter to complete edit
    event.target.addEventListener("keydown", function(e) {
      if (e.keyCode == 13) {
        var lists = list.innerHTML;
        localStorage.setItem('lists', lists);
        event.target.contentEditable = false;
      }
    }, false);

  }
});

function update_time() {

  var current_d = new Date;
  var current_h = current_d.getHours();
  var current_m = current_d.getMinutes();

  //Make with two numbers
  if (current_h <= 9) {
    current_h = "0" + current_h;
  }
  //Make with two numbers
  if (current_m <= 9) {
    current_m = "0" + current_m;
  }

  current_time.innerHTML = current_h + ":" + current_m;

  if (current_h > 22 && current_m > 58) {
    localStorage.clear();
    console.log("localStorage cleared!");
  }

}
setInterval(update_time, 500);