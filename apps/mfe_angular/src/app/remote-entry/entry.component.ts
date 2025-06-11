import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-mfe_angular-entry',
  template: `<main><router-outlet></router-outlet></main>`,
})
export class RemoteEntryComponent {}
