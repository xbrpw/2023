// 2

class HtmlIncludes extends HTMLElement {
  constructor() {
    super();
    this.path = this.getAttribute("path");

    this.innerHTML = `<iframestyle="border:none;" style="width:100%; height:300px"   allowfullscreen src=${this.path} onload="this.before(...(this.contentWindow.document.body || this.contentWindow.document).children);this.remove();"></iframe>`;
  }
}

window.customElements.define("include-html", HtmlIncludes);

// style="width:200px; height:300px"