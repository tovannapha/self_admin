import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
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
  cropper: any;

  nnn: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer
  ) {



  }

  ngOnInit() {

    var image = <HTMLImageElement>document.getElementById('image');
    var cropBoxData;
    var canvasData;

    /* this.cropper = new Cropper(image, {
      aspectRatio: 1 / 1
    }); */

    console.log(this.cropper)


  }

  add_restaurant() {
    /*   console.log(this.restaurant_name);
      console.log(this.restaurant_type);
      console.log(this.restaurant_phone);
      console.log(this.restaurant_address);
      console.log(this.restaurant_address);
      console.log(this.restaurant_location_x);
      console.log(this.restaurant_location_y);
      console.log(this.restaurant_tables); */
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

    var xxx = this.cropper.getCroppedCanvas().toDataURL();
    console.log(xxx)
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



  async fileChangeEvent(file: any) {
    if (file.target.files && file.target.files[0]) {
      var reader = new FileReader();

      reader.addEventListener('load', (event:Event) => {
        $('#preview').attr('src', (<any> event.target).result);
        var image = <HTMLImageElement>document.getElementById('preview');
        this.cropper = new Cropper(image, {
          aspectRatio: 1 / 1,
          minContainerWidth:50
        });
      }, false);

      

      reader.readAsDataURL(file.target.files[0]);
    }
  }

}
