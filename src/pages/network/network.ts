import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the NetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {
device: any;
boxDetail: any;
networks: any;
networkArray: any;
currentNetwork: any;
currentCode: any;
firstConf: any;
loggedIn: any;
networkConnected: any;
networkModeCheckbox: any;
networkMode: any;
ad: boolean;
wf: boolean;
firstRun: boolean;
networkInterval: any;


constructor(public toastCtrl: ToastController, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, private ble: BLE,  public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  var self = this;
  this.menuCtrl.enable(false);
  this.device = navParams.get('dev');
  this.boxDetail = this.navParams.get('box');
  self.currentNetwork = [];
  self.currentCode = "";
  self.firstConf = false;
  self.networkConnected = false;
  self.loggedIn = false;
  self.networkMode = "";
  self.networkModeCheckbox = [false,false];
  self.firstRun = true;
}

ionViewWillLeave(){
  clearInterval(this.networkInterval);
  this.menuCtrl.enable(true);
}

ionViewDidLoad(){

  let loader = this.loadingCtrl.create({
    content: "Scanning for wireless networks...",
    duration: 4000
   });
   loader.present();
 this.getAvailableNetworks();
 this.getNetworkMode();
 this.getCurrentNetwork();
 
this.networkInterval = setInterval(() => {this.getAvailableNetworks();this.getCurrentNetwork();}, 9000);
}

//disconnect from box and segue back to HomePage
disconnectFromBox(){
 this.ble.disconnect(this.device.id);
 clearInterval(this.networkInterval);
 this.navCtrl.popToRoot();
}

doRefresh(refresher) {
  this.getAvailableNetworks();
  this.getNetworkMode();
  this.getCurrentNetwork();
  setTimeout(() => {
    refresher.complete();
  }, 2000);
}


deleteNetworks(){
 var self = this;
 let alert = this.alertCtrl.create({
   title: 'Delete wireless networks',
   subTitle: 'Are sure you want to delete all networks?',
   buttons: [{
      text: 'OK',
      handler: data => {
       this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550113').then(function(data) {
         
    }, function(error) {
          console.log("Error Read" + error);
    });
    
        self.getCurrentNetwork();
      }
   },
   {
     text: 'Cancel',
     handler: data => {
     }
   }]
});
  alert.present();
}

//convert bytes from box to string
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

getNetworkMode(){
 var self = this;
 this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550114').then(function(data) {
     self.networkMode = self.bytesToString(data);
     if(self.networkMode == "wifi"){
        self.networkModeCheckbox = [false,true];
        self.getCurrentNetwork();
     }else if(self.networkMode == "adhoc"){
        self.networkModeCheckbox = [true,false];
        self.getCurrentNetwork();
     }else{
        self.networkModeCheckbox = [false,false];
        self.getCurrentNetwork();
     }
 }, function(error) {
});
}

//set network mode on the box to wifi or adhoc
setNetworkMode(mode){
 var self = this;
 var setMode = "";
 if(mode == 0){
    setMode = "adhoc";
    self.networkModeCheckbox = [true,false];
    
    self.getCurrentNetwork();
 }else if(mode == 1){
    setMode = "wifi";
    self.networkModeCheckbox = [false,true];
 
    self.getCurrentNetwork();
 }
 this.ble.write(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550114', self.stringToBytes(setMode.toString()));
 
 setTimeout(
   function () {
     self.disconnectFromBox()
     self.getCurrentNetwork();
   }, 500);
 
}

//add selected network to procambox
addNetwork(int) {
 var self = this;
 let prompt = this.alertCtrl.create({
     title: 'Add network',
     message: self.networks[int].ssid,
     inputs: [
       {
         name: 'pass',
         placeholder: 'Password',
         type: 'password'
       },
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
           this.ble.write(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550011', self.stringToBytes(self.networks[int].ssid+","+data["pass"]));
           let alert = this.alertCtrl.create({
               title: 'Wireless network',
               subTitle: 'Added '+self.networks[int].ssid,
               buttons: [{
                  text: 'OK',
                  handler: data => {
                    self.firstConf = true;
                    this.getAvailableNetworks();
                    self.getCurrentNetwork();
                    
                  }
               }]
           });
          setTimeout(
            function () {
              alert.present();
            }, 3500);

            
          

          }
       }
     ]
   });
   prompt.present();
}


check(){
 var self = this;

var url = "";
 if(self.networkMode == "adhoc"){
    url = "192.168.1.1";
    
}else if(self.currentNetwork[1] == "no network connected" || self.currentNetwork[1] == ""){
   self.check();
 }else if(self.currentNetwork[1] == "no network connected" && self.currentNetwork[2] == "no network connected"){
    self.check();
 }else if(self.currentNetwork[1] != "" && self.currentNetwork[2] == "no network connected"|| self.currentNetwork[1] != "no network connected" && self.currentNetwork[2] == "no network connected"){
  url = self.currentNetwork[1].toString();
 
 }else if(self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] == "no network connected"|| self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] == "no network connected"){
  url = self.currentNetwork[2].toString();

 }else if(self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] != "no network connected"){
  url = self.currentNetwork[2].toString();
  
 }






}



//get current network and ip
getCurrentNetwork(){
var self = this;
this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550111').then(function(data) {
             self.currentNetwork = self.bytesToString(data).split("|");
             console.log(self.bytesToString(data));
             if(self.currentNetwork[2] == "undefined"){
                self.currentNetwork[2] = "no network connected";
             }
             if(self.currentNetwork[0] == "undefined" && self.currentNetwork[1] == "undefined"){
                self.currentNetwork[0] = "no network connected";
                self.currentNetwork[1] = "no network connected";
                self.networkConnected = false;
                
             }else if (self.currentNetwork[0] != "undefined" && self.currentNetwork[1] == "undefined"){
                 self.currentNetwork[1] = "";
                 self.networkConnected = false;
                 self.getCurrentNetwork();
             }else{
               if(self.firstConf == true){
                 self.firstConf = false;
                 self.check();
               }
               self.networkConnected = true;
             }
             
}, function(error) {
});
}



getAvailableNetworks(){
var l = "";
var self = this;
/*
let loader = this.loadingCtrl.create({
 content: "Scanning for wireless networks...",
 duration: 4000
});
loader.present();
**/
this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550011').then(function(data) {
  var arrayLength = self.bytesToString(data).length;
  for (var i = 0; i < arrayLength; i++) {
      l = l+self.bytesToString(data)[i];
  }
  

  setTimeout(
   function () {
     var detail = [];
     self.networkArray = "";
     self.networks = [];
     self.networkArray = l;
       detail = self.networkArray.split("\n");
       for(var i = 0; i < detail.length; i++){
         var temp = detail[i].split("|");
         if(temp[1] == "wpa2" || temp[1] == "wpa"){
           if(temp[0] == self.currentNetwork[1]){
             console.log("schon verbunden");
           }
            self.networks.push({ssid:temp[0],security:"assets/img/wpa2.svg",quality:temp[2]});
         }else if(temp[1] == "open"){
           
           if(self.device.name != temp[0]){
             self.networks.push({ssid:temp[0],security:"assets/img/open.svg",quality:temp[2]});
           }else{
            
           }
           
         }
         
       }
   }, 4000);


}, function(error) {
});
}

}
