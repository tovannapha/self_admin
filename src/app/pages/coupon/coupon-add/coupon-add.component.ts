import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.scss']
})
export class CouponAddComponent implements OnInit {
  name: any;
  description;
  cupon_type;
  fromDate;
  toDate;
  restaurant_id;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
  }

  add_coupon() {
    // console.log(this.coupon);

    const submitRepository = gql`
        mutation ($name: String, $description: String, $fromDate: String, $toDate: String) {
          addCupon(data:{
            name:$name,
            description: $description,
            period: {
              fromDate: $fromDate,
              toDate: $toDate
            }      
          }) {
            name
            description
          }
        }
      `;

    // 
    //  TODO: Change fromDate & toDate to this.fromDate & this.toDate
    // 
     this.apollo.mutate({
      mutation: submitRepository,
      variables : {
        name: this.name,
        description: this.description,
        fromDate: '1503326562978',
        toDate: '1503326562978',
      }
      
    }).subscribe(({ data }) => {
      console.log(data)
    });

  }

}
