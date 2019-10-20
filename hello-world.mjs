import { html, render } from 'https://unpkg.com/lit-html?module';

/**
 * 単純にHello Worldと出力するだけ.
 */
export default class extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  get template() {
    return html`<p>Hello World</p>`;
  }

  render() {
    render(this.template, this.shadowRoot);
  }
}
