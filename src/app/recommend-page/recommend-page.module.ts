import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendPagePageRoutingModule } from './recommend-page-routing.module';

import { RecommendPagePage } from './recommend-page.page';
import {HeadframePageModule} from '../headframe/headframe.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendPagePageRoutingModule,
    HeadframePageModule
  ],
  declarations: [RecommendPagePage]
})
export class RecommendPagePageModule {}
