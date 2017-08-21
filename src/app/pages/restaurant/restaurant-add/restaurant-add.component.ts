import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';



@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

  retaurant_name: any;
  retaurant_type: any;
  retaurant_phone: any;
  retaurant_address: any;
  retaurant_location_x: any;
  retaurant_location_y: any;
  retaurant_tables: any;
  retaurant_seats: any;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {







  }

  add_restaurant() {
    console.log(this.retaurant_name);
    console.log(this.retaurant_type);
    console.log(this.retaurant_phone);
    console.log(this.retaurant_address);
    console.log(this.retaurant_address);
    console.log(this.retaurant_location_x);
    console.log(this.retaurant_location_y);
    console.log(this.retaurant_tables);

    const submitRepository = gql`
        mutation ($name: String!) {
          addRestaurant(data:{
            name:$name
          }) {
            name
          }
        }
      `;


     this.apollo.mutate({
      mutation: submitRepository,
      variables : {
        name: this.retaurant_name
      }
    }).subscribe(({ data }) => {
      console.log(data)
    }); 
  }

}
