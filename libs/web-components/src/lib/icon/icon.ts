import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

export class Icon extends LitElement {
  private _icon!: string;
  @property({ type: String })
  set icon(value: string) {
    const oldValue = this._icon;
    this._icon = value;
    this.requestUpdate('icon', oldValue);
  }
  get icon() {
    return this._icon;
  }

  private _size?: number;

  @property()
  set size(value: number | undefined) {
    const oldValue = this._size;
    this._size = value;
    this.requestUpdate('size', oldValue);
  }

  get size() {
    return this._size;
  }

  static override styles = css`
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 18px;
      display: inline-block;
      line-height: 24px;
      letter-spacing: normal;
      text-transform: none;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      position: relative;
      left: 2px;
    }
  `;

  override render(): unknown {
    const style = this.size
      ? {
          height: `${this.size}px`,
          width: `${this.size}px`,
          fontSize: `${this.size}px`,
          lineHeight: `${this.size - 8}px`,
        }
      : {};

    return html`
      <span class="material-icons" style=${styleMap(style)}>${this.icon}</span>
    `;
  }
}
