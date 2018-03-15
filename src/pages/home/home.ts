import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { AlertController } from 'ionic-angular';
import { Device} from '../device/device';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  num: any;
  devices: any;
  isScanning: boolean;
  boxDetail: any;
  currentCode: any;
  firstConf: any;
  loggedIn: any;
  selectedBox: any;
  selectedBoxName: any;
 networkState = [];
  constructor(public navCtrl: NavController, private ble: BLE, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    var self = this;
    this.num = 0;
    this.devices = [];
    this.boxDetail = [];
    this.isScanning = false;
    self.currentCode = "";
    self.firstConf = false;
    self.loggedIn = false;
    self.selectedBox = "";
    self.selectedBoxName = "";
  }



  ionViewWillEnter(){
    this.devices = [];
    this.boxDetail = [];
    this.num = 0;
  }

  ionViewDidLoad(){
    
  
    this.devices = [];
    this.boxDetail = [];
    
 }

 startScanning() {
  if(this.ble.isEnabled()){
  this.devices = [];
  this.boxDetail = [];
  this.loggedIn = false;
     let loader = this.loadingCtrl.create({
       content: "Scanning for boxes...",
       duration: 2000
     });
     loader.present();
     this.num = 0;
     this.isScanning = true;
     this.ble.startScan(['97859d25-749c-479e-be85-1b7880550000']).subscribe(device => {
       if(this.num == 0){
         this.num++;
         this.devices.push(device);
         this.checkDevice(device.name);
       }else if(this.num > 0 && this.devices[this.num-1].name == device.name){
         
       }else{
         this.num++;
         this.devices.push(device);
         this.checkDevice(device.name);
       }
     });
     setTimeout(() => {
       this.ble.stopScan().then(() => {
       this.isScanning = false;
       });
     }, 2000);
    }else{
      this.showAlert("Bluetooth","Please enable bluetooth","OK")
    }
 
}

//show an simple alert view
showAlert(title,subtitle,button) {
  let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [button]
  });
  alert.present();
}

bytesToString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

stringToBytes(string) {
  var array = new Uint8Array(string.length);
  for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
  }
  return array.buffer;
}

//check color, serial number, date, version of box
checkDevice(name){
  let color = "";
  let imageURL = "";
  if(name[6]+name[7] == "00"){
     color = "white";
     imageURL = "assets/img/box_white.jpg";
  }else{
     color = "black";
     imageURL = "assets/img/box_black.png";
  }
  let boxArray = {date:name[0]+name[1]+name[2]+name[3], version:name[4]+name[5], color:color, image:imageURL, serNum:name.substring(9, name.lenght)};
  this.boxDetail.push(boxArray);
}

getCode(int){
  var self = this;
  this.ble.read(this.selectedBox, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112').then(function(data) {
       self.currentCode = self.bytesToString(data);
       if(self.currentCode == "no"){
         let prompt = self.alertCtrl.create({
          title: 'New Code',
          enableBackdropDismiss: false,
          message: 'Please enter a 4 digit code',
          inputs: [
             {
              name: 'code',
              placeholder: 'Code',
              type: 'password'
             },{
              name: 'repeat_code',
              placeholder: 'repeat code',
              type: 'password'
             }
          ],
          buttons: [
              {
               text: 'Cancel',
               handler: data => {
                self.disconnectFromBox();
               }
              },
             {
          text: 'Save',
          handler: data => {
            if(data["code"] == data["repeat_code"]){
             if(data["code"].length == 4){
                self.setCode(data["code"]);
                self.segueToDevice(int);
                self.loggedIn = true;
             }else{
                
            }
          }else{
            self.getCode(int);
          }
          }
        }
        ]
      });
      prompt.present();
  }else if(self.loggedIn == false){
    let prompt = self.alertCtrl.create({
      title: 'Login',
      enableBackdropDismiss: false,
      message: 'Please enter the code',
      inputs: [
        {
          name: 'code',
          placeholder: 'Code',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            self.disconnectFromBox();
          }
        },
        {
          text: 'Login',
          handler: data => {
            if(data["code"] == self.currentCode){
              self.segueToDevice(int);
               self.loggedIn = true;
               
            }else{
              self.loggedIn = false;
              self.getCode(int);
              
            }
          }
        }
      ]
    });
    prompt.present();
  }
}, function(error) {
  self.loggedIn = false;
});
}

//set new code for box
setCode(code){
  var self = this;
  this.ble.write(this.selectedBox, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112', self.stringToBytes(code.toString()));
}

disconnectFromBox(){
  let currentPage = this.navCtrl.getActive().name;
  console.log(currentPage);
  this.ble.disconnect(this.selectedBox);
  if(currentPage != "HomePage"){
    this.navCtrl.popToRoot();
  }
  this.showAlert(this.selectedBoxName, "Connection to the box was lost","OK");
  
  
  
}


//open box page with arguments
segueToDevice(int){
  this.navCtrl.push(Device, {
    dev: this.devices[int],
    box: this.boxDetail[int],
  });
}

//navigate to device page
connectToDevice(int) {
let id = int;
this.selectedBox = this.devices[int].id;
this.selectedBoxName = this.devices[int].name;

  this.ble.connect(this.selectedBox).subscribe(
    peripheralData => {
      
    
    this.getCode(id);
      
   
    },
     error => this.disconnectFromBox()
 );



  
}
}