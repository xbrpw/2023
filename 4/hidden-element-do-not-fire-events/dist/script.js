var hidden = document.querySelector('.hidden');
hidden.addEventListener('click', function() {
	alert('clicked');
});
document.querySelector('.toggle').addEventListener('click', function() {
	hidden.classList.toggle('visible');
});