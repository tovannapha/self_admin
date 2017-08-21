import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.scss']
})
export class CouponAddComponent implements OnInit {
  coupon:any = {
    name: '',
    description: '',
    type: '',
    fromdate: '',
    todate: '',
    restaurant_id: ''
  };

  constructor() { }

  ngOnInit() {
  }

  add_coupon() {
    console.log(this.coupon);
  }

}
