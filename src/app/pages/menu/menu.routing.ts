import { Routes, RouterModule }  from '@angular/router';

import { MenuComponent } from './menu.component';
import { ModuleWithProviders } from '@angular/core';

import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuRestaurantComponent } from './menu-restaurant/menu-restaurant.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'menu-home', pathMatch: 'full' },
      { path: 'menu-home', component: MenuHomeComponent },
      { path: 'menu-restaurant/:id', component: MenuRestaurantComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
