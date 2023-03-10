const imageArray1 = [
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005407_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005423_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005430_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005438_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005507_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005511_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005523_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005530_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005537_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005554_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005601_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005608_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005617_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005630_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005638_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005648_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005659_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005712_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005723_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005732_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005743_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230307_005809_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223903_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223907_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223908_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223910_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223912_com.google.android.apps.photos~2.webp",
"https://xbrpw.github.io/2023/img/reface/Screenshot_20230308_223917_com.google.android.apps.photos~2.webp"
];


const image = document.querySelector(".imgrandom");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray1);

button.addEventListener("click", () => generateRandomPicture(imageArray1));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}