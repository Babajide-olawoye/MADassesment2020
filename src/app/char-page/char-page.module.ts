import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharPagePageRoutingModule } from './char-page-routing.module';

import { CharPagePage } from './char-page.page';
import {HeadframePageModule} from '../headframe/headframe.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharPagePageRoutingModule,
    HeadframePageModule
  ],
  declarations: [CharPagePage]
})
export class CharPagePageModule {}
