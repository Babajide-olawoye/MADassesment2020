import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharPagePage } from './char-page.page';

const routes: Routes = [
  {
    path: '',
    component: CharPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharPagePageRoutingModule {}
