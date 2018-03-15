import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { MenuController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-main-settings',
  templateUrl: 'main-settings.html',
})
export class MainSettingsPage {
  device: any;
  boxDetail: any;



 networkModeCheckbox: any;
  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams, private ble: BLE,  public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  var self = this;

  this.device = navParams.get('dev');
  this.boxDetail = this.navParams.get('box');
  this.menuCtrl.enable(false);
  self.networkModeCheckbox = [false,true];





  
}




  stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
        array[i] = string.charCodeAt(i);
    }
    return array.buffer;
  }

setNewCode(){
  var self = this;
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
          
         }
        },
       {
    text: 'Save',
    handler: data => {
      if(data["code"] == data["repeat_code"]){
       if(data["code"].length == 4){
          self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112', self.stringToBytes(data["code"]));
       }else{
          
      }
    }else{
      self.setNewCode();
    }
    }
  }
  ]
});
prompt.present();

}
shutdown(){
  var self = this;
  self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550115', self.stringToBytes("shutdown"));
  this.navCtrl.popToRoot();
}

reboot(){
  var self = this;
  self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550115', self.stringToBytes("reboot"));
  this.navCtrl.popToRoot();

}
disconnectFromBox(){
  this.ble.disconnect(this.device.id);
  this.navCtrl.popToRoot();
 }
 ionViewWillLeave(){
  this.menuCtrl.enable(true);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainSettingsPage');
   
  }

}
