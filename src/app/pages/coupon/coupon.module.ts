import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CouponComponent } from './coupon.component';
import { routing } from './coupon.routing';
import { CouponHomeComponent } from './coupon-home/coupon-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    CouponComponent,
    CouponHomeComponent,
  ]
})
export class CouponModule {}