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
    path: 'signup',
    loadChildren: './signup/signup.module#SignupPageModule'
  },
  {
    path: 'add-surah',
    loadChildren: './add-surah/add-surah.module#AddSurahPageModule'
  },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  {
    path: 'update',
    children: [
      {
        path: '',
        loadChildren: './update/update.module#UpdatePageModule'
      },
      {
        path: ':id',
        loadChildren: './update/update.module#UpdatePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
