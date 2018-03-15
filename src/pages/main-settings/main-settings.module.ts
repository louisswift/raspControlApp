import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainSettingsPage } from './main-settings';

@NgModule({
  declarations: [
    MainSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainSettingsPage),
  ],
  exports: [
    MainSettingsPage
  ]
})
export class MainSettingsPageModule {}
