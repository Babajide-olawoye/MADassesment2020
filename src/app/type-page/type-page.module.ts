import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypePagePageRoutingModule } from './type-page-routing.module';

import { TypePagePage } from './type-page.page';
import {HeadframePageModule} from '../headframe/headframe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePagePageRoutingModule,
    HeadframePageModule
  ],
  declarations: [TypePagePage]
})
export class TypePagePageModule {}
