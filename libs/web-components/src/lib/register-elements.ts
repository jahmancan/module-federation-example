import { Card } from './card/card';
import { Icon } from './icon/icon';

export function registerElements(): void {
  customElements.get('wc-card') || customElements.define('wc-card', Card);
  customElements.get('wc-icon') || customElements.define('wc-icon', Icon);
}
