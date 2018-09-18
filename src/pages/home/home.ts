import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; //importing camera from ionic-native

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myphoto: string;                              //define the taken picture by myphoto i.e. of string type

  constructor(public navCtrl: NavController, private camera: Camera) { //injecting Camera

  }

//-------------------------------taking photo through device camera----------------------------------


 takePhoto(){
  
  const options: CameraOptions = {
    quality: 70,                         //define the quality type (in pixels)
    targetHeight:500,                      //height and width of image in pixel
    targetWidth:500,
    destinationType: this.camera.DestinationType.FILE_URI,        //return image file URI
    encodingType: this.camera.EncodingType.JPEG,                  //encoding type is JPEG here or we can use PNG
    mediaType: this.camera.MediaType.PICTURE                      //media type is PICTURE that is selecting still picture
  }

  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   
   this.myphoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
 } 

//-------------------------------getting photo from device image gallery----------------------------------

 getPhoto(){
  const options: CameraOptions = {
    quality: 70,                         //define the quality type (in pixels)
    targetHeight:500,                    //height and width in pixel of image
    targetWidth:500,
    destinationType: this.camera.DestinationType.FILE_URI,        //return image file URI
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,        //getting the photo from photolibrary of device         
    saveToPhotoAlbum:false                                        
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   
   this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
   // Handle error
  });
 } 

//-------------------------------Croping any image taken from device gallery----------------------------------

 cropPhoto(){
  const options: CameraOptions = {
    quality: 70,                         //define the quality type (in pixels)
    targetHeight:300,
    targetWidth:300,
    allowEdit:true,                      // allowing editing(like croping etc) on photo
    destinationType: this.camera.DestinationType.FILE_URI,        //return image file URI
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,                 
    saveToPhotoAlbum:false                     
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   
   this.myphoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
 } 

}
