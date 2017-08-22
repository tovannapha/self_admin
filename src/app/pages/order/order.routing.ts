import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { OrderComponent } from './order.component';

import { OrderHomeComponent } from './order-home/order-home.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      { path: '', redirectTo: 'order-home', pathMatch: 'full' },
      { path: 'order-home', component: OrderHomeComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
