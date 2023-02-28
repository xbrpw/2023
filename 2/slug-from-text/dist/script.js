import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element/lit-element.js?module";

class NetsiSlug extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      value: { type: String },
      slug: { type: String },
    };
  }
  
  constructor() {
    super();
  }

  static get styles() {
    return css`
.app {
font-family: sans-serif;
display: flex;
align-items: center;
flex-direction: column;
      font-weight: 100;
}
h1 {
line-height: 100%;
margin: 0;
}
    input {
      font-size: 14pt;
      padding: 8px;
      width: 300px;
border-radius: 5px;
background: hsla(0,0%,90%,.7);
box-shadow:  1px 1px 10px hsla(0,0%,70%,.8), 
             -2px -2px 10px hsla(0,0%,80%,.8);
border: solid hsla(0,0%,80%,.8) 1px;
outline: none;
}
    .slug {
      font-size: 14pt;
      margin-top: 18px;
    }
    .info {
      font-size: 12pt;
      padding: 12px;
    }
    mark {
      background: deepskyblue;
    }
`;
  }
  
  connectedCallback() {
    super.connectedCallback()
    this.generateSlug();
  }
  
  generateSlug(evt) {
    const value  = typeof evt !== "undefined" ? evt.target.value : this.value;
    if (value) {   
      const slug = value.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
      this.slug = slug;
    } else {
      this.slug = '';
    }
  }
 

  render() {
    return html`
<div class="app">
<h1>Slug* from text</h1>
<div class="info">*) A slug the part of an URL which explains the content of the page.</div>
  <input @input="${this.generateSlug}" type="text" placeholder="${this.placeholder}" value="${this.value}" />
  <div class="slug">https://my-domain.com/<mark>${this.slug}</div></div>
</div>`;
  }
}

customElements.define("netsi-slug", NetsiSlug);