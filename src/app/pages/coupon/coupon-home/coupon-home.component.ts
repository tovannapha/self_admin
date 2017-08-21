import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-coupon-home',
  templateUrl: './coupon-home.component.html',
  styleUrls: ['./coupon-home.component.scss']
})
export class CouponHomeComponent implements OnInit {
  coupons;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {
    const queryinfo = gql`
      query  {
        cupons {
          id
          name
          description
          period{
            fromDate
            toDate
          }
        }
      }
    `;

    this.apollo.watchQuery({
      query: queryinfo
    }).subscribe((x: any) => {
      console.log(x.data)
      //this.coupons = x.data.coupons
    });
  }

}
