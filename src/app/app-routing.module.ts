import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main-page/main-page.routing').then(m => m.MainPageRoutingModule)
  },
  {
    path: 'releases',
    loadChildren: () => import('./pages/releases/releases.routing').then(m => m.ReleasesRoutingModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.routing').then(m => m.StoreRoutingModule)
  },
  {
    path: 'press',
    loadChildren: () => import('./pages/press/press.routing').then(m => m.PressRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routing').then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
