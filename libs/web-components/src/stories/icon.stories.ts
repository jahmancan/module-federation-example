import { html } from 'lit-html';
import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Wc Icon',
  component: 'wc-icon',
};

export const Icon = () => html`<wc-icon icon="alternate_email"></wc-icon>`;

export const IconBig = () =>
  html`<wc-icon icon="alternate_email" size="36"></wc-icon>`;
