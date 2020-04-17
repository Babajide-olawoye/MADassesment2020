import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadframePageRoutingModule } from './headframe-routing.module';

import { HeadframePage } from './headframe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadframePageRoutingModule
  ],
  declarations: [HeadframePage],
  exports: [HeadframePage]
})
export class HeadframePageModule {}
