import { Component, OnInit, ElementRef } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import 'rxjs/add/operator/switchMap';

import * as GoogleMapsLoader from 'google-maps';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  id: String;
  restaurant: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _elementRef: ElementRef,
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
      //var xxx = data;
      this.restaurant = x.data.restaurant
      console.log(x.data.restaurant)
    });
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }



}
