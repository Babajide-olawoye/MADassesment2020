import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypePagePage } from './type-page.page';

const routes: Routes = [
  {
    path: '',
    component: TypePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypePagePageRoutingModule {}
