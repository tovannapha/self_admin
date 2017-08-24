import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {

  restaurants: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {

    const queryinfo = gql`
      query  {
        restaurants {
          id
          name
        }
      }
    `;

    this.apollo.watchQuery({
      query: queryinfo
    }).subscribe((x: any) => {
      //var xxx = data;
      this.restaurants = x.data.restaurants
      console.log(x.data.restaurants)
    });

  }


  goToDetail(item) {
    this.router.navigate(['/admin/restaurant/restaurant-detail/', item.id]);
  }

  goToMenu() {
    console.log("GO TO MENU")
  }


  editRestaurant(item){
    console.log("EDIT MENU")
  }


  deteleteRestaurant(item){
    console.log("DELETE MENU")
  }

}
