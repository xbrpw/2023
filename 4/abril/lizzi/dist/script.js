const imageArray = [
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(1).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(2).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(3).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(4).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(5).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(6).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(7).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(8).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(9).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(10).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(11).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(12).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(13).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(14).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(15).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(16).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(17).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(18).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(19).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(20).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(21).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(22).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(23).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(24).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(25).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(26).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(27).webp",
"https://xbrpw.github.io/2023/img/avatar/z9/lizzi-maciel%20(28).webp"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}