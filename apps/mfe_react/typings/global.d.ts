import * as React from 'react';
import { CardDetails } from '@module-federation-example/web-components';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      // ENTRY
      'mfe-react': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'wc-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { icon: string; size?: number };
      'wc-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        details: CardDetails;
      };
    }
  }
}
