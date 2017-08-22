import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-restaurant',
  templateUrl: './menu-restaurant.component.html',
  styleUrls: ['./menu-restaurant.component.scss']
})
export class MenuRestaurantComponent implements OnInit {

  id: String;
  restaurant: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });


    const queryinfo = gql`
          query  ($id:ID!){
            restaurant(id:$id) {
              id
              name
            }
          }
        `;

    this.apollo.watchQuery({
      query: queryinfo,
      variables: {
        id: this.id
      }
    }).subscribe((x: any) => {
      this.restaurant = x.data.restaurant
    });

  }



}
