import { Routes, RouterModule } from '@angular/router';

import { CouponComponent } from './coupon.component';
import { CouponHomeComponent } from './coupon-home/coupon-home.component';
import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponTypeComponent } from './coupon-type/coupon-type.component';

const routes: Routes = [
  {
    path: '',
    component: CouponComponent,
    children: [
      { path: '', redirectTo: 'coupon-home', pathMatch: 'full' },
      { path: 'coupon-home', component: CouponHomeComponent },
      { path: 'coupon-add', component: CouponAddComponent },
      { path: 'coupon-type', component: CouponTypeComponent },
    ] 
  }
];

export const routing = RouterModule.forChild(routes);
