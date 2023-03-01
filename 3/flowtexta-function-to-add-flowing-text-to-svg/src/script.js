var eleText = document.querySelector('.text'),
	eleSvg = document.querySelector('.output'),
	eleSvgCode = document.querySelector('.svgCode'),
	eleHtml = document.querySelector('.html'),
	eleFunction = document.querySelector('.function'),
	eleWidth = document.querySelector('.width'),
	style = {
		padding: {
			top: 10,
			left: 10
		}
	};

function init() {
	render();
	eleWidth.addEventListener("change", render);
	eleText.addEventListener("keyup", render);
	eleText.addEventListener("change", render);
}

function render() {
	var text = eleText.value,
		width = eleWidth.value;
	eleHtml.innerText = text;

	eleSvg.style.width = width + 'px';
	eleHtml.style.width = width + 'px';
	eleHtml.style.paddingLeft = style.padding.left + 'px';
	eleHtml.style.paddingTop = style.padding.top + 'px';
	eleFunction.innerText = "flowText('"+text.substring(0,10)+"...', eleSvg, "+width+", "+JSON.stringify(style)+")";
	flowText(text, eleSvg, width, style);
	eleSvgCode.innerText = eleSvg.innerHTML.split("</text>").join("</text>\n");
}

function flowText(text, svg, width, style) {
	svg.innerHTML = "";
	width = width - style.padding.left;

	var svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
	var textNode = document.createTextNode("");
	svgText.appendChild(textNode);
	var testElement = svg.appendChild(svgText);

	var words = text.split(" ");
	var len = 0,
		start = 0,
		count = 0,
		part = "",
		y = style.padding.top,
		x = style.padding.left,
		lineHeight = 0,
		bbox,
		last;

	do {
		last = start
		do {
			count++;
			part = words.slice(start, count).join(" ");
			testElement.innerHTML = part;
			bbox = testElement.getBBox();
			len = bbox.width;
			lineHeight = bbox.height;
		} while (count <= words.length && len < width && len !== 0);
		count--;
		y += lineHeight
		part = words.slice(start, count).join(" ");
		addText(part, x, y)
		start = count;
	} while (start != last);
	testElement.remove()
	if (start != words.length) {
		part = words.slice(start, words.length).join(" ");
		addText(part, x, y)
	}

	function addText(text, x, y) {
		if (text.length === 0) return false;
		var line = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var lineText = document.createTextNode(text);
		line.setAttribute('x', x + 'px');
		line.setAttribute('y', y + 'px');
		line.appendChild(lineText);
		svg.appendChild(line);
	}
}

init();