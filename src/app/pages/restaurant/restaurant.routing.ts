import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './Restaurant.component';
import { RestaurantHomeComponent } from './Restaurant-home/Restaurant-home.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantTypeComponent } from './restaurant-type/restaurant-type.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

const routes: Routes = [
  {
    path: '',
    //component: RestaurantComponent,
    children: [
      { path: '', redirectTo: 'restaurant-home', pathMatch: 'full' },
      { path: 'restaurant-home', component: RestaurantHomeComponent },
      { path: 'restaurant-add', component: RestaurantAddComponent },
      { path: 'restaurant-edit/:id', component: RestaurantEditComponent },
      { path: 'restaurant-type', component: RestaurantTypeComponent },
      { path: 'restaurant-detail/:id', component: RestaurantDetailComponent },
      { path: 'restaurant-menu/:id', component: RestaurantMenuComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);