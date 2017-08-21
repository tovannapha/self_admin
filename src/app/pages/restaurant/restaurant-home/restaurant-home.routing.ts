import { Routes, RouterModule } from '@angular/router';

import { RestaurantHomeComponent } from './Restaurant-home.component';
import { RestaurantDetailComponent } from './../restaurant-detail/restaurant-detail.component';


const routes: Routes = [
  {
    path: '',
    component: RestaurantHomeComponent,
    children: [
      { path: '', redirectTo: 'restaurant-aaa', pathMatch: 'full' },
      { path: 'restaurant-aaa', component: RestaurantDetailComponent },
    ] 
  }
];

export const routing = RouterModule.forChild(routes);