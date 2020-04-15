import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendPagePage } from './recommend-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendPagePageRoutingModule {}
