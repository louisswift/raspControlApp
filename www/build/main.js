webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_settings_main_settings__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Device page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Device = (function () {
    function Device(platform, menuCtrl, navCtrl, navParams, ble, alertCtrl) {
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        var self = this;
        this.device = navParams.get('dev');
        this.boxDetail = this.navParams.get('box');
    }
    Device.prototype.ionViewDidLoad = function () {
        //enable slide out menu
        this.menuCtrl.enable(true);
    };
    //disconnect from box and segue back to HomePage
    Device.prototype.disconnectFromBox = function () {
        this.ble.disconnect(this.device.id);
        this.navCtrl.pop();
    };
    //open selected page with parameters
    Device.prototype.openPage = function (page) {
        console.log(page);
        if (page == "NetworkPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__network_network__["a" /* NetworkPage */], {
                dev: this.device,
                box: this.boxDetail,
            });
        }
        else if (page == "main-settings") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_settings_main_settings__["a" /* MainSettingsPage */], {
                dev: this.device,
                box: this.boxDetail,
            });
        }
    };
    Device = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/Users/louisbecker/Desktop/raspControl2/src/pages/device/device.html"*/'\n<ion-header>\n<ion-navbar>\n <ion-title>{{device.name}} </ion-title>\n <button style="float: right;"(click)="disconnectFromBox()" ><img style="width: 25px; height:25px; float: right;" src="assets/img/close.png"/></button>\n</ion-navbar>\n</ion-header>\n<ion-content>\n<ion-card>\n  <ion-list-header>\n    \n        <ion-title>Home </ion-title>\n      </ion-list-header>\n      <ion-item>\n      <img style="width: 88.8px; height:50px; float: right;" src="{{boxDetail.image}}"/>\n      <p>{{device.name}}</p>\n      <p>{{device.id}}</p>\n     </ion-item>\n\n\n     \n\n  <ion-list>\n    <button (click)="openPage(\'NetworkPage\')" ion-item>\n      <ion-icon name="wifi" item-start></ion-icon>\n      Network\n    </button>\n\n    <button (click)="openPage(\'main-settings\')" ion-item>\n      <ion-icon  name="build" item-start></ion-icon>\n      Settings\n    </button>\n    \n    \n\n  </ion-list>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/louisbecker/Desktop/raspControl2/src/pages/device/device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Device);
    return Device;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainSettingsPage = (function () {
    function MainSettingsPage(menuCtrl, navCtrl, navParams, ble, alertCtrl, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        var self = this;
        this.device = navParams.get('dev');
        this.boxDetail = this.navParams.get('box');
        this.menuCtrl.enable(false);
        self.networkModeCheckbox = [false, true];
    }
    MainSettingsPage.prototype.stringToBytes = function (string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    MainSettingsPage.prototype.setNewCode = function () {
        var self = this;
        var prompt = self.alertCtrl.create({
            title: 'New Code',
            enableBackdropDismiss: false,
            message: 'Please enter a 4 digit code',
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Code',
                    type: 'password'
                }, {
                    name: 'repeat_code',
                    placeholder: 'repeat code',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        if (data["code"] == data["repeat_code"]) {
                            if (data["code"].length == 4) {
                                self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112', self.stringToBytes(data["code"]));
                            }
                            else {
                            }
                        }
                        else {
                            self.setNewCode();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    MainSettingsPage.prototype.shutdown = function () {
        var self = this;
        self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550115', self.stringToBytes("shutdown"));
        this.navCtrl.popToRoot();
    };
    MainSettingsPage.prototype.reboot = function () {
        var self = this;
        self.ble.write(self.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550115', self.stringToBytes("reboot"));
        this.navCtrl.popToRoot();
    };
    MainSettingsPage.prototype.disconnectFromBox = function () {
        this.ble.disconnect(this.device.id);
        this.navCtrl.popToRoot();
    };
    MainSettingsPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    MainSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainSettingsPage');
    };
    MainSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-settings',template:/*ion-inline-start:"/Users/louisbecker/Desktop/raspControl2/src/pages/main-settings/main-settings.html"*/'<!--\n  Generated template for the Device page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n     <ion-title>Main Settings</ion-title>\n     <button style="float: right;"(click)="disconnectFromBox()" ><img style="width: 25px; height:25px; float: right;" src="assets/img/close.png"/></button>\n    </ion-navbar>\n   </ion-header>\n   \n   <ion-content style="background-color:#ecf0f1" class="outer-content">\n      \n   \n    <ion-list>\n        \n     <ion-list-header>\n       \n      Passcode\n       \n     </ion-list-header>\n     <ion-item style="height: 20px"> \n      <button (click)="setNewCode()" style="color:#2c3e50; font-size: 15px; text-align: center" ion-button clear>Set new passcode</button>\n    </ion-item>\n    \n    <ion-list-header>\n      \n     Power\n      \n    </ion-list-header>\n    <ion-item style="height: 20px">\n     <button (click)="reboot()" style="color:#2c3e50; font-size: 15px; text-align: center; height: 14px" ion-button clear>Reboot</button>\n   </ion-item>\n   <ion-item style="height: 20px">\n    <button (click)="shutdown()" style="color:#2c3e50; font-size: 15px; text-align: center; height: 14px" ion-button clear>Shutdown</button>\n  </ion-item>\n    </ion-list>\n   \n      \n   </ion-content>\n   '/*ion-inline-end:"/Users/louisbecker/Desktop/raspControl2/src/pages/main-settings/main-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MainSettingsPage);
    return MainSettingsPage;
}());

//# sourceMappingURL=main-settings.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NetworkPage = (function () {
    function NetworkPage(toastCtrl, menuCtrl, navCtrl, navParams, ble, alertCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        self.networkModeCheckbox = [false, false];
        self.firstRun = true;
    }
    NetworkPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.networkInterval);
        this.menuCtrl.enable(true);
    };
    NetworkPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Scanning for wireless networks...",
            duration: 4000
        });
        loader.present();
        this.getAvailableNetworks();
        this.getNetworkMode();
        this.getCurrentNetwork();
        this.networkInterval = setInterval(function () { _this.getAvailableNetworks(); _this.getCurrentNetwork(); }, 9000);
    };
    //disconnect from box and segue back to HomePage
    NetworkPage.prototype.disconnectFromBox = function () {
        this.ble.disconnect(this.device.id);
        clearInterval(this.networkInterval);
        this.navCtrl.popToRoot();
    };
    NetworkPage.prototype.doRefresh = function (refresher) {
        this.getAvailableNetworks();
        this.getNetworkMode();
        this.getCurrentNetwork();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    NetworkPage.prototype.deleteNetworks = function () {
        var _this = this;
        var self = this;
        var alert = this.alertCtrl.create({
            title: 'Delete wireless networks',
            subTitle: 'Are sure you want to delete all networks?',
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        _this.ble.read(_this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550113').then(function (data) {
                        }, function (error) {
                            console.log("Error Read" + error);
                        });
                        self.getCurrentNetwork();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                }]
        });
        alert.present();
    };
    //convert bytes from box to string
    NetworkPage.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    NetworkPage.prototype.stringToBytes = function (string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    NetworkPage.prototype.getNetworkMode = function () {
        var self = this;
        this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550114').then(function (data) {
            self.networkMode = self.bytesToString(data);
            if (self.networkMode == "wifi") {
                self.networkModeCheckbox = [false, true];
                self.getCurrentNetwork();
            }
            else if (self.networkMode == "adhoc") {
                self.networkModeCheckbox = [true, false];
                self.getCurrentNetwork();
            }
            else {
                self.networkModeCheckbox = [false, false];
                self.getCurrentNetwork();
            }
        }, function (error) {
        });
    };
    //set network mode on the box to wifi or adhoc
    NetworkPage.prototype.setNetworkMode = function (mode) {
        var self = this;
        var setMode = "";
        if (mode == 0) {
            setMode = "adhoc";
            self.networkModeCheckbox = [true, false];
            self.getCurrentNetwork();
        }
        else if (mode == 1) {
            setMode = "wifi";
            self.networkModeCheckbox = [false, true];
            self.getCurrentNetwork();
        }
        this.ble.write(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550114', self.stringToBytes(setMode.toString()));
        setTimeout(function () {
            self.disconnectFromBox();
            self.getCurrentNetwork();
        }, 500);
    };
    //add selected network to procambox
    NetworkPage.prototype.addNetwork = function (int) {
        var _this = this;
        var self = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.ble.write(_this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550011', self.stringToBytes(self.networks[int].ssid + "," + data["pass"]));
                        var alert = _this.alertCtrl.create({
                            title: 'Wireless network',
                            subTitle: 'Added ' + self.networks[int].ssid,
                            buttons: [{
                                    text: 'OK',
                                    handler: function (data) {
                                        self.firstConf = true;
                                        _this.getAvailableNetworks();
                                        self.getCurrentNetwork();
                                    }
                                }]
                        });
                        setTimeout(function () {
                            alert.present();
                        }, 3500);
                    }
                }
            ]
        });
        prompt.present();
    };
    NetworkPage.prototype.check = function () {
        var self = this;
        var url = "";
        if (self.networkMode == "adhoc") {
            url = "192.168.1.1";
        }
        else if (self.currentNetwork[1] == "no network connected" || self.currentNetwork[1] == "") {
            self.check();
        }
        else if (self.currentNetwork[1] == "no network connected" && self.currentNetwork[2] == "no network connected") {
            self.check();
        }
        else if (self.currentNetwork[1] != "" && self.currentNetwork[2] == "no network connected" || self.currentNetwork[1] != "no network connected" && self.currentNetwork[2] == "no network connected") {
            url = self.currentNetwork[1].toString();
        }
        else if (self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] == "no network connected" || self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] == "no network connected") {
            url = self.currentNetwork[2].toString();
        }
        else if (self.currentNetwork[2] != "no network connected" && self.currentNetwork[1] != "no network connected") {
            url = self.currentNetwork[2].toString();
        }
    };
    //get current network and ip
    NetworkPage.prototype.getCurrentNetwork = function () {
        var self = this;
        this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550111').then(function (data) {
            self.currentNetwork = self.bytesToString(data).split("|");
            console.log(self.bytesToString(data));
            if (self.currentNetwork[2] == "undefined") {
                self.currentNetwork[2] = "no network connected";
            }
            if (self.currentNetwork[0] == "undefined" && self.currentNetwork[1] == "undefined") {
                self.currentNetwork[0] = "no network connected";
                self.currentNetwork[1] = "no network connected";
                self.networkConnected = false;
            }
            else if (self.currentNetwork[0] != "undefined" && self.currentNetwork[1] == "undefined") {
                self.currentNetwork[1] = "";
                self.networkConnected = false;
                self.getCurrentNetwork();
            }
            else {
                if (self.firstConf == true) {
                    self.firstConf = false;
                    self.check();
                }
                self.networkConnected = true;
            }
        }, function (error) {
        });
    };
    NetworkPage.prototype.getAvailableNetworks = function () {
        var l = "";
        var self = this;
        /*
        let loader = this.loadingCtrl.create({
         content: "Scanning for wireless networks...",
         duration: 4000
        });
        loader.present();
        **/
        this.ble.read(this.device.id, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550011').then(function (data) {
            var arrayLength = self.bytesToString(data).length;
            for (var i = 0; i < arrayLength; i++) {
                l = l + self.bytesToString(data)[i];
            }
            setTimeout(function () {
                var detail = [];
                self.networkArray = "";
                self.networks = [];
                self.networkArray = l;
                detail = self.networkArray.split("\n");
                for (var i = 0; i < detail.length; i++) {
                    var temp = detail[i].split("|");
                    if (temp[1] == "wpa2" || temp[1] == "wpa") {
                        if (temp[0] == self.currentNetwork[1]) {
                            console.log("schon verbunden");
                        }
                        self.networks.push({ ssid: temp[0], security: "assets/img/wpa2.svg", quality: temp[2] });
                    }
                    else if (temp[1] == "open") {
                        if (self.device.name != temp[0]) {
                            self.networks.push({ ssid: temp[0], security: "assets/img/open.svg", quality: temp[2] });
                        }
                        else {
                        }
                    }
                }
            }, 4000);
        }, function (error) {
        });
    };
    NetworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-network',template:/*ion-inline-start:"/Users/louisbecker/Desktop/raspControl2/src/pages/network/network.html"*/'<!--\n  Generated template for the Device page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n   <ion-title>Network</ion-title>\n   <button style="float: right;"(click)="disconnectFromBox()" ><img style="width: 25px; height:25px; float: right;" src="assets/img/close.png"/></button>\n  </ion-navbar>\n </ion-header>\n \n <ion-content style="background-color:#ecf0f1" class="outer-content">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="ios"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n  <ion-list>\n  \n   <ion-list-header>\n     \n    Network Info\n     \n   </ion-list-header>\n  \n   \n \n    <ion-item>\n       \n     <ion-label>Current network: {{currentNetwork[0]}}</ion-label>\n    </ion-item>\n    <ion-item>\n     <ion-label>IP: {{currentNetwork[1]}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>LAN IP: {{currentNetwork[2]}}</ion-label>\n     </ion-item>\n    <ion-list-header >Network Mode\n        \n        </ion-list-header>\n    \n    <ion-list [(ngModel)]="netMode" radio-group>\n       \n   \n     <ion-item>\n       <ion-label>Ad hoc</ion-label>\n       <ion-radio (click)="setNetworkMode(0)" [checked]="networkModeCheckbox[0]" value="adhoc"></ion-radio>\n     </ion-item>\n   \n     <ion-item>\n       <ion-label>Wifi</ion-label>\n       <ion-radio (click)="setNetworkMode(1)" [checked]="networkModeCheckbox[1]" value="wifi"></ion-radio>\n     </ion-item>\n   \n \n  \n \n  \n    \n   \n \n \n \n     <ion-list-header >Available networks\n    \n    </ion-list-header>\n  \n    <ion-item *ngFor="let wlan of networks; let i = index;" (click)="addNetwork(i)" style="height: 60px"><p style="position: absolute;  top: 5px !important" >{{networks[i].ssid}}</p> \n      <img style="width: 35px; height:35px; float: right;" src="{{networks[i].security}}"/>\n      <progress style="height: 10px; left:5px; position: absolute; bottom: 5px; width: 100%" id="progressbar" max="100" value="{{networks[i].quality}}"> </progress>\n     </ion-item>\n  </ion-list>\n</ion-list>\n \n \n  \n \n  \n         \n       \n \n </ion-content>\n '/*ion-inline-end:"/Users/louisbecker/Desktop/raspControl2/src/pages/network/network.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NetworkPage);
    return NetworkPage;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/device/device.module": [
		275,
		2
	],
	"../pages/main-settings/main-settings.module": [
		276,
		1
	],
	"../pages/network/network.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, ble, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.networkState = [];
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
    HomePage.prototype.ionViewWillEnter = function () {
        this.devices = [];
        this.boxDetail = [];
        this.num = 0;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.devices = [];
        this.boxDetail = [];
    };
    HomePage.prototype.startScanning = function () {
        var _this = this;
        if (this.ble.isEnabled()) {
            this.devices = [];
            this.boxDetail = [];
            this.loggedIn = false;
            var loader = this.loadingCtrl.create({
                content: "Scanning for boxes...",
                duration: 2000
            });
            loader.present();
            this.num = 0;
            this.isScanning = true;
            this.ble.startScan(['97859d25-749c-479e-be85-1b7880550000']).subscribe(function (device) {
                if (_this.num == 0) {
                    _this.num++;
                    _this.devices.push(device);
                    _this.checkDevice(device.name);
                }
                else if (_this.num > 0 && _this.devices[_this.num - 1].name == device.name) {
                }
                else {
                    _this.num++;
                    _this.devices.push(device);
                    _this.checkDevice(device.name);
                }
            });
            setTimeout(function () {
                _this.ble.stopScan().then(function () {
                    _this.isScanning = false;
                });
            }, 2000);
        }
        else {
            this.showAlert("Bluetooth", "Please enable bluetooth", "OK");
        }
    };
    //show an simple alert view
    HomePage.prototype.showAlert = function (title, subtitle, button) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: [button]
        });
        alert.present();
    };
    HomePage.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    HomePage.prototype.stringToBytes = function (string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    //check color, serial number, date, version of box
    HomePage.prototype.checkDevice = function (name) {
        var color = "";
        var imageURL = "";
        if (name[6] + name[7] == "00") {
            color = "white";
            imageURL = "assets/img/box_white.jpg";
        }
        else {
            color = "black";
            imageURL = "assets/img/box_black.png";
        }
        var boxArray = { date: name[0] + name[1] + name[2] + name[3], version: name[4] + name[5], color: color, image: imageURL, serNum: name.substring(9, name.lenght) };
        this.boxDetail.push(boxArray);
    };
    HomePage.prototype.getCode = function (int) {
        var self = this;
        this.ble.read(this.selectedBox, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112').then(function (data) {
            self.currentCode = self.bytesToString(data);
            if (self.currentCode == "no") {
                var prompt_1 = self.alertCtrl.create({
                    title: 'New Code',
                    enableBackdropDismiss: false,
                    message: 'Please enter a 4 digit code',
                    inputs: [
                        {
                            name: 'code',
                            placeholder: 'Code',
                            type: 'password'
                        }, {
                            name: 'repeat_code',
                            placeholder: 'repeat code',
                            type: 'password'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: function (data) {
                                self.disconnectFromBox();
                            }
                        },
                        {
                            text: 'Save',
                            handler: function (data) {
                                if (data["code"] == data["repeat_code"]) {
                                    if (data["code"].length == 4) {
                                        self.setCode(data["code"]);
                                        self.segueToDevice(int);
                                        self.loggedIn = true;
                                    }
                                    else {
                                    }
                                }
                                else {
                                    self.getCode(int);
                                }
                            }
                        }
                    ]
                });
                prompt_1.present();
            }
            else if (self.loggedIn == false) {
                var prompt_2 = self.alertCtrl.create({
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
                            handler: function (data) {
                                self.disconnectFromBox();
                            }
                        },
                        {
                            text: 'Login',
                            handler: function (data) {
                                if (data["code"] == self.currentCode) {
                                    self.segueToDevice(int);
                                    self.loggedIn = true;
                                }
                                else {
                                    self.loggedIn = false;
                                    self.getCode(int);
                                }
                            }
                        }
                    ]
                });
                prompt_2.present();
            }
        }, function (error) {
            self.loggedIn = false;
        });
    };
    //set new code for box
    HomePage.prototype.setCode = function (code) {
        var self = this;
        this.ble.write(this.selectedBox, '97859d25-749c-479e-be85-1b7880550010', '97859d25-749c-479e-be85-1b7880550112', self.stringToBytes(code.toString()));
    };
    HomePage.prototype.disconnectFromBox = function () {
        var currentPage = this.navCtrl.getActive().name;
        console.log(currentPage);
        this.ble.disconnect(this.selectedBox);
        if (currentPage != "HomePage") {
            this.navCtrl.popToRoot();
        }
        this.showAlert(this.selectedBoxName, "Connection to the box was lost", "OK");
    };
    //open box page with arguments
    HomePage.prototype.segueToDevice = function (int) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* Device */], {
            dev: this.devices[int],
            box: this.boxDetail[int],
        });
    };
    //navigate to device page
    HomePage.prototype.connectToDevice = function (int) {
        var _this = this;
        var id = int;
        this.selectedBox = this.devices[int].id;
        this.selectedBoxName = this.devices[int].name;
        this.ble.connect(this.selectedBox).subscribe(function (peripheralData) {
            _this.getCode(id);
        }, function (error) { return _this.disconnectFromBox(); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/louisbecker/Desktop/raspControl2/src/pages/home/home.html"*/'<ion-header style="background-color: #212121 !important; border-width:1px; border-style: solid;border-bottom-color: #e74c3c">\n  <ion-navbar style="background-color: #212121 !important">\n    <button style="background-color: #212121 !important; color: #e74c3c;" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="background-color: #212121 !important; color: #e74c3c;"><p style="color: #e74c3c !important; ">Home</p></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background: #424242 !important;" padding>\n  \n  \n <button (click)="startScanning()" ion-button color="secondary" style="width:100%; padding: 5px; background-color: #212121 !important;">Scan for boxes</button>\n <ion-item style="background: #424242 !important;">\n  <h1 style="color: white">Boxes</h1>\n  <ion-badge item-right>{{num}}</ion-badge>\n </ion-item>\n\n <ion-list style="background: #424242 !important;">\n  <ion-item style="background: #424242 !important;" *ngFor="let device of devices; let i = index;" (click)="connectToDevice(i)">\n   <h3 style="font-size: 17px; color: white; " ><b>{{device.name}}</b></h3>\n   <img style="width: 30px; height:38px; float: right;" src="assets/img/logo.png"/>\n   <p style="color: white">{{device.id}}</p>\n  </ion-item>\n </ion-list>\n \n</ion-content>\n'/*ion-inline-end:"/Users/louisbecker/Desktop/raspControl2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_device_device__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_network_network__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_settings_main_settings__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_device_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_6__pages_network_network__["a" /* NetworkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_settings_main_settings__["a" /* MainSettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/device/device.module#DeviceModule', name: 'Device', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-settings/main-settings.module#MainSettingsPageModule', name: 'MainSettingsPage', segment: 'main-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_device_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_6__pages_network_network__["a" /* NetworkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_settings_main_settings__["a" /* MainSettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_ble__["a" /* BLE */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/louisbecker/Desktop/raspControl2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/louisbecker/Desktop/raspControl2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map