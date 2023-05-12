class HtmlIncludes extends HTMLElement {
  constructor() {
    super();
    this.path = this.getAttribute("path");

    this.innerHTML = `<iframe style="width:350px; height:250px; border:none;" allowfullscreen src=${this.path} onload="this.before(...(this.contentWindow.document.body || this.contentWindow.document).children);this.remove();"></iframe>`;
  }
}

window.customElements.define("include-html", HtmlIncludes);
//"width:350px; height:250px;
// style="width:175px; height:125px;