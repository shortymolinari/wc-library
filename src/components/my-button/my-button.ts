import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './my-button.css.lit';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="component-container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
