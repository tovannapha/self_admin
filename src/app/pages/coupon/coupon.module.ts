import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CouponComponent } from './coupon.component';
import { routing } from './coupon.routing';
import { CouponHomeComponent } from './coupon-home/coupon-home.component';
import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponTypeComponent } from './coupon-type/coupon-type.component';

import { CouponService } from './coupon.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
  ],
  declarations: [
    CouponComponent,
    CouponHomeComponent,
    CouponAddComponent,
    CouponTypeComponent,
  ],
  providers: [CouponService],
})
export class CouponModule { }
