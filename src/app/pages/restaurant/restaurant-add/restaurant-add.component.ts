import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { NgUploaderOptions } from 'ngx-uploader';


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

    const mutationinfo = gql`
        mutation ($name: String!) {
          addRestaurant(data:{
            name:$name
          }) {
            name
          }
        }
      `;


    this.apollo.mutate({
      mutation: mutationinfo,
      variables: {
        name: this.retaurant_name
      }
    }).subscribe(({ data }) => {
      console.log(data)
    });
  }



  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: 'assets/images/muaku.PNG'
  };
  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };



}
