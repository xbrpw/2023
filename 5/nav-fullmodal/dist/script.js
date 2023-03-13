function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }

//random
const imageArray1 = [
	"https://www.xbr.pw/go/icon-xbrpw/esfera-del-dragon-negra.svg",
	"https://www.xbr.pw/go/icon-xbrpw/esfera-del-dragon.svg",
	"https://www.xbr.pw/go/icon-xbrpw/usuario-verificado.svg",
  "https://www.xbr.pw/go/icon-xbrpw/xbr-coins.svg",
  "https://www.xbr.pw/go/icon-xbrpw/who-homero-escondiendose-en-una-bolsa.svg",
  "https://assets.codepen.io/191814/1920-1080.jpg",
  "https://www.xbr.pw/go/icon-xbrpw/pokebolas.svg"
];


const image = document.querySelector(".imgrandom");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray1);

button.addEventListener("click", () => generateRandomPicture(imageArray1));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}

'use strict';

document.addEventListener('DOMContentLoaded', function() {
	copyText.init()
});

var copyText = {
	init: function() {
		if (document.querySelectorAll('[data-copy-text]').length) {
			var cp = document.querySelectorAll('[data-copy-text]');

			for (var i = 0, l = cp.length; i < l; i++) {
				copyText.addCopy(cp[i]);
			}
		}
	},
	addCopy: function(el) {
		if (typeof el !== 'undifined') {
			var parent = el.parentNode;
			if (!parent.querySelectorAll('span.copy-btn').length && window.getSelection) {
				var cpBtn = document.createElement('I');

				parent.setAttribute('style', 'position:relative');
				parent.appendChild(cpBtn);

				cpBtn.classList.add('material-icons');
				cpBtn.textContent = '';
        //cpBtn.textContent = 'content_copy';
				cpBtn.setAttribute('title', 'Copy Text');

				copyText.addCopyEvent(cpBtn, el);
			}
		}
	},
	addCopyEvent: function(btn, el) {
		var coppied = false;
		var timer = 0;

		function copyText() {
			function showCheckmark() {
				btn.textContent = 'Copiado';
        //btn.textContent = 'check';
				btn.classList.add('active');
			}

			function hideCheckmark() {
				btn.classList.remove('active');
				btn.textContent = 'content_copy';
				timer = 0;
			}
			
			if (timer === 0) {
				if (window.getSelection) {
					var selection = window.getSelection();
					var range = document.createRange();
					range.selectNodeContents(el);
					selection.removeAllRanges();
					selection.addRange(range);

					try {
						document.execCommand('copy');
						coppied = true;
					} catch (err) {
						console.error(err);
					}

					selection.removeAllRanges();
				} else {
					console.error('your browser does not support copy');
				}

				if (coppied) {
					clearTimeout(timer);
					showCheckmark();
					timer = setTimeout(hideCheckmark, 2000);
				}
			}
		}

		if (typeof btn !== 'undifined' && typeof el !== 'undifined') {
			btn.addEventListener('click', copyText, false);
		}
	},
}

//open Nav 

function openNavAtajos() {
  document.getElementById("mySidenavBTN").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNavAtajos() {
  document.getElementById("mySidenavBTN").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}