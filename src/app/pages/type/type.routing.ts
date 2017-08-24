import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { TypeComponent } from './type.component';
import { TypeAllComponent } from './type-all/type-all.component';

import { TypeRestaurantComponent } from './type-restaurant/type-restaurant.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TypeComponent,
    children: [
      { path: '', redirectTo: 'type-all', pathMatch: 'full' },
      { path: 'type-all', component: TypeAllComponent },
      { path: 'type-restaurant', loadChildren: './type-restaurant/type-restaurant.module#TypeRestaurantModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
