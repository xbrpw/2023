class HtmlIncludes extends HTMLElement {
  constructor() {
    super();
    this.path = this.getAttribute("path");

    this.innerHTML = `<iframe style="width:116px; height:83px" border:none;" allowfullscreen src=${this.path} onload="this.before(...(this.contentWindow.document.body || this.contentWindow.document).children);this.remove();"></iframe>`;
  }
}

window.customElements.define("include-html", HtmlIncludes);
