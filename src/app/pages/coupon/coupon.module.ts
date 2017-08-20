import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CouponComponent } from './coupon.component';
import { routing } from './coupon.routing';
import { CouponHomeComponent } from './coupon-home/coupon-home.component';
import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponTypeComponent } from './coupon-type/coupon-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    CouponComponent,
    CouponHomeComponent,
    CouponAddComponent,
    CouponTypeComponent,
  ]
})
export class CouponModule {}