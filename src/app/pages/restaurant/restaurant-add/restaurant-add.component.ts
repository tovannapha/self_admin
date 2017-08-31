import { Component, OnInit, ElementRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import * as Cropper from 'cropperjs';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

  restaurant_name: any;
  restaurant_type: any;
  restaurant_phone: any;
  restaurant_address: any;
  restaurant_location_x: any;
  restaurant_location_y: any;
  restaurant_tables: any;
  restaurant_seats: any;
  restaurant_picture: any;
  retaurant_operation_days_days: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {

    var image = <HTMLImageElement>document.getElementById('image');
    //console.log(image)
    var cropper = new Cropper(image, {
      aspectRatio: 1/ 1,
      crop: function (e) {
        console.log(e.detail.x);
        console.log(e.detail.y);
        console.log(e.detail.width);
        console.log(e.detail.height);
        console.log(e.detail.rotate);
        console.log(e.detail.scaleX);
        console.log(e.detail.scaleY);
        console.log(e.detail.scaleY);
      }
    });

    console.log(cropper)
    var xxx = cropper.getCroppedCanvas();

    console.log(xxx)

  }

  add_restaurant() {
    console.log(this.restaurant_name);
    console.log(this.restaurant_type);
    console.log(this.restaurant_phone);
    console.log(this.restaurant_address);
    console.log(this.restaurant_address);
    console.log(this.restaurant_location_x);
    console.log(this.restaurant_location_y);
    console.log(this.restaurant_tables);
    console.log(this.restaurant_picture);

    const mutationinfo = gql`
        mutation ($name: String!) {
          addRestaurant(data:{
            name:$name
          }) {
            id
            name
          }
        }
      `;



    /* this.apollo.mutate({
      mutation: mutationinfo,
      variables: {
        name: this.restaurant_name
      }
    }).subscribe(({ data }:any) => {
      console.log(data)
      this.router.navigate(['/admin/restaurant/restaurant-detail/', data.addRestaurant.id]);
    }); */
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
