import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './Restaurant.component';
import { RestaurantHomeComponent } from './Restaurant-home/Restaurant-home.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantTypeComponent } from './restaurant-type/restaurant-type.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent,
    children: [
      { path: '', redirectTo: 'restaurant-home', pathMatch: 'full' },
      { path: 'restaurant-home', component: RestaurantHomeComponent },
      { path: 'restaurant-add', component: RestaurantAddComponent },
      { path: 'restaurant-type', component: RestaurantTypeComponent }
    ] 
  }
];

export const routing = RouterModule.forChild(routes);