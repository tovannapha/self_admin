import { Routes, RouterModule } from '@angular/router';

import { TypeRestaurantComponent} from './type-restaurant.component';
import { TypeRestaurantHomeComponent } from './type-restaurant-home/type-restaurant-home.component';
import { TypeRestaurantAddComponent } from './type-restaurant-add/type-restaurant-add.component';


const routes: Routes = [
  {
    path: '',
    component: TypeRestaurantComponent,
    children: [
      { path: '', redirectTo: 'type-restaurant-home', pathMatch: 'full' },
      { path: 'type-restaurant-home', component: TypeRestaurantHomeComponent },
      { path: 'type-restaurant-add', component: TypeRestaurantAddComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);