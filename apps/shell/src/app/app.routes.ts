import { Route } from '@angular/router';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'mfe_angular',
    loadChildren: () =>
      import('mfe_angular/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'mfe_react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe_react',
      exposedModule: './Module',
      elementName: 'mfe-react',
    },
  },
  {
    path: 'mfe_react_alternate',
    loadComponent: () =>
      import('./components/react-wrapper.component').then(
        (c) => c.ReactWrapperComponent
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
