import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Device } from '../pages/device/device';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NetworkPage} from '../pages/network/network';
import { BLE } from '@ionic-native/ble';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainSettingsPage} from '../pages/main-settings/main-settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Device,
    NetworkPage,
    MainSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Device,
    NetworkPage,
    MainSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
