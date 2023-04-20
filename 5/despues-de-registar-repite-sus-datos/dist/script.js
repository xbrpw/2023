function readOut() {
	var humanReadable = new Date(dob.value).toLocaleString();
	description.innerHTML = "Your name is " + firstname.value + " " + lastname.value + " " + "and your were born on " + dob.value;
}

personalinfo.addEventListener("submit", function(e) {
	e.preventDefault();
	readOut();
})