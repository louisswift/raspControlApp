import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { HomePage } from '../home/home';
import { MainSettingsPage} from '../main-settings/main-settings';
import { NetworkPage} from '../network/network';
import { AlertController,Platform, MenuController   } from 'ionic-angular';


/**
 * Generated class for the Device page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})

export class Device {
 device: any;
 boxDetail: any;
 

 constructor(public platform: Platform,public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, private ble: BLE,  public alertCtrl: AlertController) {
   var self = this;
   this.device = navParams.get('dev');
   this.boxDetail = this.navParams.get('box');
 }

 ionViewDidLoad(){
   //enable slide out menu
   this.menuCtrl.enable(true);
 }

 //disconnect from box and segue back to HomePage
disconnectFromBox(){
  this.ble.disconnect(this.device.id);
  this.navCtrl.pop();
}

//open selected page with parameters
openPage(page){
  console.log(page);
  if(page == "NetworkPage"){
    this.navCtrl.push(NetworkPage, {
      dev: this.device,
      box: this.boxDetail,
    });

  }
  else if(page == "main-settings"){
    this.navCtrl.push(MainSettingsPage, {
      dev: this.device,
      box: this.boxDetail,
    });
  }
  
}
}
