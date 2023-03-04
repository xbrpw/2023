const ims = [
"https://xbrpw.github.io/editable/batman-middle-finger/index.html",
"https://xbrpw.github.io/editable/tombstone-generator/dist/index.html",
"https://xbrpw.github.io/editable/boleto-ticket-brake/index.html",
"https://xbrpw.github.io/editable/old-time-movie.html",
"https://xbrpw.github.io/editable/lapida/index.html",
"https://xbrpw.github.io/editable/logger-custom-logs/dist/index.html ",
"https://xbrpw.github.io/editable/tombstone-generator/dist/index.html",
"https://xbrpw.github.io/editable/vintage-ticket/dist/index.html",
"https://xbrpw.github.io/editable/svg-text-masking-testing/index.html",
"https://xbrpw.github.io/editable/split-text/index.html",
"https://xbrpw.github.io/editable/bouncy-type-animation/index.html" 
];

const imageArray1 = [
	"http://vignette1.wikia.nocookie.net/meme/images/7/71/BusinessCat2.jpg",   "https://los40.com/los40/imagenes/2022/12/09/bigbang/1670559177_722387_1670559524_gigante_normal.jpg",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDU2IDIyNEgzMTJjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjU2YzAtOS43IDUuOC0xOC41IDE0LjgtMjIuMnMxOS4zLTEuNyAyNi4yIDUuMmw0MCA0MEw0NDIuMyA1LjdDNDQ2IDIgNDUwLjkgMCA0NTYgMHMxMCAyIDEzLjcgNS43bDM2LjcgMzYuN0M1MTAgNDYgNTEyIDUwLjkgNTEyIDU2cy0yIDEwLTUuNyAxMy43TDQzMyAxNDNsNDAgNDBjNi45IDYuOSA4LjkgMTcuMiA1LjIgMjYuMnMtMTIuNSAxNC44LTIyLjIgMTQuOHptMCA2NGM5LjcgMCAxOC41IDUuOCAyMi4yIDE0LjhzMS43IDE5LjMtNS4yIDI2LjJsLTQwIDQwIDczLjQgNzMuNGMzLjYgMy42IDUuNyA4LjUgNS43IDEzLjdzLTIgMTAtNS43IDEzLjdsLTM2LjcgMzYuN0M0NjYgNTEwIDQ2MS4xIDUxMiA0NTYgNTEycy0xMC0yLTEzLjctNS43TDM2OSA0MzNsLTQwIDQwYy02LjkgNi45LTE3LjIgOC45LTI2LjIgNS4ycy0xNC44LTEyLjUtMTQuOC0yMi4yVjMxMmMwLTEzLjMgMTAuNy0yNCAyNC0yNEg0NTZ6bS0yNTYgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNFY0NTZjMCA5LjctNS44IDE4LjUtMTQuOCAyMi4ycy0xOS4zIDEuNy0yNi4yLTUuMmwtNDAtNDBMNjkuNyA1MDYuM0M2NiA1MTAgNjEuMSA1MTIgNTYgNTEycy0xMC0yLTEzLjctNS43TDUuNyA0NjkuN0MyIDQ2NiAwIDQ2MS4xIDAgNDU2czItMTAgNS43LTEzLjdMNzkgMzY5IDM5IDMyOWMtNi45LTYuOS04LjktMTcuMi01LjItMjYuMnMxMi41LTE0LjggMjIuMi0xNC44SDIwMHpNNTYgMjI0Yy05LjcgMC0xOC41LTUuOC0yMi4yLTE0LjhzLTEuNy0xOS4zIDUuMi0yNi4ybDQwLTQwTDUuNyA2OS43QzIgNjYgMCA2MS4xIDAgNTZzMi0xMCA1LjctMTMuN0w0Mi4zIDUuN0M0NiAyIDUwLjkgMCA1NiAwczEwIDIgMTMuNyA1LjdMMTQzIDc5bDQwLTQwYzYuOS02LjkgMTcuMi04LjkgMjYuMi01LjJzMTQuOCAxMi41IDE0LjggMjIuMlYyMDBjMCAxMy4zLTEwLjcgMjQtMjQgMjRINTZ6Ii8+PC9zdmc+"
  
];


const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray1);

button.addEventListener("click", () => generateRandomPicture(imageArray1));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}














// Fetch some CSS boilerplate
fetch('https://gist.githubusercontent.com/shotrifork/662614c8b53c4c4f3612b980ef2024c9/raw/71de5a081d867acad610114450c88259ec498a14/codepen.css').
then(r => r.text()).
then(css => {
	const style = document.body.appendChild(document.createElement('style'));
	style.innerHTML = css;
})

const shareData = {
	title: "Web Share API example",
	text: "A simple pen, found on MDN for showing Web Share API",
	url: "https://codepen.io/netsi1964/pen/KKeMOGL"
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

if ("share" in navigator) {
	document.querySelector(".app").classList.remove("disabled");
	btn.addEventListener("click", async () => {
		try {
			await navigator.share(shareData);
			resultPara.textContent = "MDN shared successfully";
		} catch (err) {
			resultPara.textContent = `Error: ${err}`;
		}
	});
} else {
	document.querySelector(".notAnOption").classList.remove("hidden");
}