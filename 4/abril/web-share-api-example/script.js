// Fetch some CSS boilerplate
fetch('./style.css').
then(r => r.text()).
then(css => {
	const style = document.body.appendChild(document.createElement('style'));
	style.innerHTML = css;
})

const shareData = {
	title: "Web Share API example",
	text: "A simple pen, found on MDN for showing Web Share API",
	url: "https://xbrpw.github.io"
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