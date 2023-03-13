class InlineContent extends HTMLElement {
  
  get path() {
    return this.getAttribute('path') || '';
  }
  
  connectedCallback() {
    this._render();
  }
  
  _render() {
    this.innerHTML = `
      <iframe src="${this.path}" onload="this.before(this.contentDocument.children[0]); this.remove();" name="contenteditable" height="600px" width="100%" title="title" style="border:none;" allowfullscreen ></iframe>
    `;  
  }
}

if ('customElements' in window) {
  customElements.define('inline-content', InlineContent);
}