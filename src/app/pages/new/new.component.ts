import { Component, OnInit } from '@angular/core';

import * as Cropper from 'cropperjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  imageResult: any = [];
  croppedResult: any = [];
  cropper: any = [];
  cropFlag: any;
  openFlag: any;
  editButtonFlag:any = false;

  constructor() {

  }

  ngOnInit() {



  }


  fileChangeEvent(file: any) {
    if (file.target.files && file.target.files[0]) {
      for (let ii = 0; ii < file.target.files.length; ii++) {
        var reader = new FileReader();
        reader.addEventListener('load', (event: Event) => {
          this.imageResult.push((<any>event.target).result)
          console.log((<any>event.target))

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

      console.log(this.croppedResult)

    }
  }


  close(n) {
    this.imageResult.splice(n, 1);
    this.croppedResult.splice(n, 1);
    console.log(this.imageResult)
  }

  setFlag(n) {
    this.openFlag = n;
    this.editButtonFlag = true;
    console.log(this.openFlag)
    //Delete Crop when Crop is Opening
    for (let ii = 0; ii < this.imageResult.length; ii++) {
      if (this.cropper[ii]) {
        this.cropper[ii].destroy();
      }
    }

  }

  edit(n) {
    //Hide Edit button
    this.editButtonFlag = false;
    var image = <HTMLImageElement>document.querySelector('.chooseModalImg' + n);
    console.log(image)
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
      preview: '.preview',
      responsive: true,
      ready: function () {
        this.croppable = true;

      }
    });

    //Display crop button
    this.cropFlag = true;

  }


  rotate_left(){
    console.log("WPRL")
    this.cropper[this.openFlag].rotate(-90);
  }

  rotate_right(){
    console.log("WPRL")
    this.cropper[this.openFlag].rotate(90);
  }

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

    this.croppedResult[this.openFlag] = data
    console.log("result:", this.croppedResult)
  }



}


