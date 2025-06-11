import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../components/card-display.component').then(
        (c) => c.CardDisplayComponent
      ),
  },
];
