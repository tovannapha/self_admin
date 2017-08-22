import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { TypeComponent } from './type.component';

import { TypeRestaurantComponent } from './type-restaurant/type-restaurant.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TypeComponent,
    children: [
      { path: '', redirectTo: 'type-restaurant', pathMatch: 'full' },
      { path: 'type-restaurant', component: TypeRestaurantComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
