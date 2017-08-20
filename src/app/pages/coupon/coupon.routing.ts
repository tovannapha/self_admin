import { Routes, RouterModule } from '@angular/router';

import { CouponComponent } from './coupon.component';
import { CouponHomeComponent } from './coupon-home/coupon-home.component';

const routes: Routes = [
  {
    path: '',
    component: CouponComponent,
    children: [
      { path: '', redirectTo: 'coupon-home', pathMatch: 'full' },
      { path: 'coupon-home', component: CouponHomeComponent },
      { path: 'coupon-add', component: CouponHomeComponent },
      { path: 'coupon-type', component: CouponHomeComponent },
    ] 
  }
];

export const routing = RouterModule.forChild(routes);
