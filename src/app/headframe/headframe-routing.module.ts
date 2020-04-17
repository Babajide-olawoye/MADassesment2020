import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadframePage } from './headframe.page';

const routes: Routes = [
  {
    path: '',
    component: HeadframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadframePageRoutingModule {}
