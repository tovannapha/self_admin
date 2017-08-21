import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  id: String;
  restaurant:any;

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
    }).subscribe((x:any) => {
      //var xxx = data;
      this.restaurant = x.data.restaurant
      console.log(x.data.restaurant)
    });  
  }



}
