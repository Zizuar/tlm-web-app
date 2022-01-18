import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

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
    loadChildren: () => import('./pages/merch-store/merch-store.routing').then(m => m.StoreRoutingModule)
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
    path: 'login',
    component: AppComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'https://tlm-auth.us.auth0.com/authorize'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href=(route.data as any).externalUrl
      }
    }
  ]
})
export class AppRoutingModule { }
