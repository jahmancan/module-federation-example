import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import App from './app/app';
import { StrictMode } from 'react';

// the entry is created as a webcomponent
class MfeReactElement extends HTMLElement {
  private root!: ReactDOM.Root;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
  disconnectedCallback() {
    this.root.unmount();
  }
}

// register the webcomponent
customElements.define('mfe-react', MfeReactElement);
