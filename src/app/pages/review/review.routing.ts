import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { ReviewComponent } from './review.component';

import { ReviewHomeComponent } from './review-home/review-home.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ReviewComponent,
    children: [
      { path: '', redirectTo: 'order-home', pathMatch: 'full' },
      { path: 'order-home', component: ReviewHomeComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
