import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'type-page',
    loadChildren: () => import('./type-page/type-page.module').then( m => m.TypePagePageModule)
  },
  {
    path: 'recommend-page',
    loadChildren: () => import('./recommend-page/recommend-page.module').then( m => m.RecommendPagePageModule)
  },
  {
    path: 'char-page',
    loadChildren: () => import('./char-page/char-page.module').then( m => m.CharPagePageModule)
  },
  {
    path: 'fav-page',
    loadChildren: () => import('./fav-page/fav-page.module').then( m => m.FavPagePageModule)
  },
  {
    path: 'headframe',
    loadChildren: () => import('./headframe/headframe.module').then( m => m.HeadframePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
