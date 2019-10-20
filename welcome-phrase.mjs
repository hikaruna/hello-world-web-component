import { html, render } from 'https://unpkg.com/lit-html?module';

/**
 * ようこそ挨拶文.
 *
 * @Prop name [string]: 歓迎する者の名前
 */
export default class extends HTMLElement {

  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();
    this.name = "xxx";
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  get template() {
    return html`<p>Welcome ${this.name} !</p>`;
  }

  render() {
    render(this.template, this.shadowRoot);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case 'name':
        this.name = newValue;
        break
      default: throw new Error();
    }

    this.render();
  }

}
