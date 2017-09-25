import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LaoAddress } from '../../../static_param/lao_address';


import * as Cropper from 'cropperjs';

import * as _ from "lodash"

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {


  //Define Reactiveform
  restaurantAdd = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    phone: new FormControl(),
    detail: new FormControl(),
    location_x: new FormControl(),
    location_y: new FormControl(),
    tables: new FormControl(),
    seats: new FormControl(),
    parkinglot_capacity: new FormControl(),
    operation_days_days: new FormControl(),
    cards: new FormControl(),
    feature: new FormControl(),
    district: new FormControl(),
    province: new FormControl(),
  });

  CHOOSE1:any;
  CHOOSE2:any;
  CHOOSE3:any;
  CHOOSE4:any;
  CHOOSE5:any;
  CHOOSE6:any;
  CHOOSE7:any;



  //image parameter
  imageResult: any = [];
  croppedResult: any = [];
  cropper: any = [];
  cropFlag: any;
  openFlag: any;
  editButtonFlag: any = false;
  Uploadable: any = false;

  //data for image upload format
  imageUploadData: any = [];

  //Init Restaurants Type 
  initResTypes: any;

  //Init Operation Days
  operationDays: any = [];

  //init date now
  dataNow: any;



  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer,
    private fb: FormBuilder,
  ) {
    //Setting Validator for RestaurantAdd
    this.restaurantAdd = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      phone: "",
      province: ['', Validators.required],
      district: ['', Validators.required],
      detail: "",
      location_x: "",
      location_y: "",
      tables: "",
      seats: "",
      parkinglot_capacity: "",
      operation_days_days: "",
      cards: "",
      feature: "",
    });

    //Define date now
    this.dataNow = new Date();
  }

  ngOnInit() {
    /* Get Restaurant Type */
    const initResTypeQl = gql`{
      restaurant_types {
        id
        name
      }
    }`

    this.apollo.watchQuery({
      query: initResTypeQl
    }).subscribe((x: any) => {

      //console.log(x.data.restaurant_types)
      this.initResTypes = x.data.restaurant_types;
    });


    this.ADDRESS = LaoAddress;
  }




  /*  */
  /* Fire Restaurant to Apollo */
  /*  */
  add_restaurant() {

    console.log(this.dataNow.getTime())

    /* //Set Image form for upload */
    for (let ii = 0; ii < this.croppedResult.length; ii++) {
      let imageData = {
        filename: "res-" + this.dataNow.getTime() + '-' + ii + ".jpeg",
        mime: this.croppedResult[ii].type,
        dataImage: this.croppedResult[ii].picUrl
      }
      this.imageUploadData.push(imageData)
      //console.log(imageData)
    }

    /* //Set Operationdays form to upload to Apollo */
    this.restaurantAdd.value.operation_days_days = this.operationDays;

    /* //Set Image form to upload to Apollo */
    this.restaurantAdd.value.pictures = this.imageUploadData;

    console.log(this.restaurantAdd.value)


    //upload format
    var uploadFormat = {
      name: this.restaurantAdd.value.name,
      type: this.restaurantAdd.value.type,
      address: {
        province: this.restaurantAdd.value.province,
        district: this.restaurantAdd.value.district,
        detail: this.restaurantAdd.value.detail
      },
      location: {
        x: this.restaurantAdd.value.location_x,
        y: this.restaurantAdd.value.location_y
      },
      phones: [this.restaurantAdd.value.phone],
      pictures: this.restaurantAdd.value.pictures,
      operation_days: {
        days: this.restaurantAdd.value.operation_days_days,
        time: ""
      },			// need more detail
      cards: {
        cardinfo: this.restaurantAdd.value.cards
      },
      capacity: {
        tables: this.restaurantAdd.value.tables || 0,
        seats: this.restaurantAdd.value.seats || 0
      },
      parking_lot: {
        status: true,
        capacity: this.restaurantAdd.value.parkinglot_capacity || 0
      },
    }


    console.log(uploadFormat)

    /* //Set Apollo mutation  */
    const mutationinfo = gql`
      mutation ($data : RestaurantInput!) {
        addRestaurant(data:$data) {
          id
          name
        }
      }
    `;



    //Fire to backend server
    this.apollo.mutate({
      mutation: mutationinfo,
      variables: {
        data: uploadFormat
      }
    }).subscribe(({ data }: any) => {
      console.log(data)
      this.router.navigate(['/admin/restaurant/restaurant-detail/', data.addRestaurant.id]);
    });


  }




  /*  */
  // Render image when there is file input
  /*  */
  fileChangeEvent(file: any) {
    if (file.target.files && file.target.files[0]) {
      for (let ii = 0; ii < file.target.files.length; ii++) {
        var reader = new FileReader();
        reader.addEventListener('load', (event: Event) => {
          this.imageResult.push((<any>event.target).result)
          console.log((<any>event.target))

          //ກຳນົດຮູບແບບຂອງ croppedResult
          var data = {
            flag: false,
            picUrl: "",
            type: file.target.files[ii].type
          }
          //set cropperResult
          this.croppedResult.push(data)
        });

        reader.readAsDataURL(file.target.files[ii]);
      }
      //console.log(this.croppedResult)
    }
  }




  /*  */
  /* Delete an image */
  /*  */
  close(n) {
    this.imageResult.splice(n, 1);
    this.croppedResult.splice(n, 1);
    //console.log(this.imageResult)
    //console.log(this.croppedResult)
  }




  /*  */
  /* Set flag of chosen image */
  /*  */
  setFlag(n) {
    this.openFlag = n;
    this.editButtonFlag = true;
    this.cropFlag = false;
    //console.log(this.openFlag)
    //Delete Crop when Crop is Opening
    for (let ii = 0; ii < this.imageResult.length; ii++) {
      if (this.cropper[ii]) {
        this.cropper[ii].destroy();
      }
    }

  }






  /*  */
  /* edit chosen image */
  /*  */
  edit(n) {
    //Hide Edit button
    this.editButtonFlag = false;
    var image = <HTMLImageElement>document.querySelector('.chooseModalImg' + n);
    //console.log(image)
    this.cropper[n] = new Cropper(image, {
      aspectRatio: 1 / 1,
      background: false,
      center: false,
      autoCropArea: 1,
      minCropBoxWidth: 120,
      minCropBoxHeight: 80,
      movable: true,
      rotatable: true,
      scalable: false,
      zoomable: false,
      responsive: true,
      ready: function () {
        this.croppable = true;

      }
    });

    //Display crop button
    this.cropFlag = true;

  }





  /*  */
  /* rotate left image when open cropping */
  /*  */
  rotate_left() {
    this.cropper[this.openFlag].rotate(-90);
  }





  /*  */
  /* rotate right image when open cropping */
  /*  */
  rotate_right() {
    this.cropper[this.openFlag].rotate(90);
  }






  /*  */
  /* Crop image */
  /*  */
  crop() {

    //Display Edit button
    this.editButtonFlag = true;

    var croppedCanvas;
    var roundedCanvas;


    // Crop
    croppedCanvas = this.cropper[this.openFlag].getCroppedCanvas();

    //////////////////////////////////////////
    //  Set Canvas to get Base64 file
    ///////////////////////////////////////////
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = croppedCanvas.width;
    var height = croppedCanvas.height;

    canvas.width = width;
    canvas.height = height;

    context.imageSmoothingEnabled = true;
    context.drawImage(croppedCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.fill();
    //set Canvas
    roundedCanvas = canvas;

    ///////////////////////////////////////////


    // Destroy opening cropper
    this.cropper[this.openFlag].destroy();

    // close cropFlag
    this.cropFlag = false;


    //set Data for croppedResult
    var data = {
      flag: true,
      picUrl: roundedCanvas.toDataURL(this.croppedResult[this.openFlag].type), // toDataUrl need MIME type to redeuce filesize!
      type: this.croppedResult[this.openFlag].type
    }

    /* Update data to croppedResult */
    this.croppedResult[this.openFlag] = data

    /* Check if there is any cropped image...if not cannot use submit button */
    for (let j = 0; j < this.croppedResult.length; j++) {
      if (this.croppedResult[j].flag == true) {
        this.Uploadable = true;
      }
    }

  }





  /*  */
  /* set arrays of set operation days */
  /*  */
  setChooseDay(day) {
    var index = this.operationDays.indexOf(day);
    if (index == -1) {
      this.operationDays.push(day)
    } else {
      this.operationDays.splice(index, 1)
    }
  }




  /*  */
  //Go to restaurant type manage
  /*  */
  goToSetType() {
    this.router.navigate(['/admin/type/type-restaurant/type-restaurant-home']);
  }


  /*  */
  //init Address
  /*  */
  //init ADDRESS
  ADDRESS: any;
  DISTRICT: any;
  provinceChange(e) {
    console.log(e)
    if (e.target.value != '--ເລືອກແຂວງ--') {
      this.DISTRICT = _.find(this.ADDRESS, { 'province_name': e.target.value })
    } else {
      this.DISTRICT = "";
    }
  }

}//end constructor
