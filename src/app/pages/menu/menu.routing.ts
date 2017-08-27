import { Routes, RouterModule }  from '@angular/router';

import { MenuComponent } from './menu.component';
import { ModuleWithProviders } from '@angular/core';

import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuRestaurantComponent } from './menu-restaurant/menu-restaurant.component';
import { MenuRestaurantAddComponent } from './menu-restaurant-add/menu-restaurant-add.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'menu-home', pathMatch: 'full' },
      { path: 'menu-home', component: MenuHomeComponent },
      { path: 'menu-restaurant/:id', component: MenuRestaurantComponent },
      { path: 'menu-restaurant-add/:id', component: MenuRestaurantAddComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
