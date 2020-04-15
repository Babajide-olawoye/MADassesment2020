import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypePagePageRoutingModule } from './type-page-routing.module';

import { TypePagePage } from './type-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePagePageRoutingModule
  ],
  declarations: [TypePagePage]
})
export class TypePagePageModule {}
