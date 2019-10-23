import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    children: [
      {
        path: '',
        loadChildren: './list/list.module#ListPageModule'
      },
      {
        path: ':id',
        loadChildren: './detail/detail.module#DetailPageModule'
      }
      ]
  },
  {
    path: 'add-surah',
    loadChildren: './add-surah/add-surah.module#AddSurahPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
