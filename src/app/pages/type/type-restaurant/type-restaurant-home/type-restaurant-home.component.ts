import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-type-restaurant-home',
  templateUrl: './type-restaurant-home.component.html',
  styleUrls: ['./type-restaurant-home.component.scss']
})
export class TypeRestaurantHomeComponent implements OnInit {

  types: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {
    const queryinfo = gql`
      query  {
        restaurant_types {
          name
          slug
          description
        }
      }
    `;

    this.apollo.watchQuery({
      query: queryinfo,
    }).subscribe((x: any) => {
      this.types = x.data.restaurant_types;
      console.log(x.data.types);
    });
  }
  
  goToDetail(item) {
    console.log("click detail")
  }

}
