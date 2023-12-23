import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { BioPageComponent } from './pages/bio-page/bio-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main-page/main-page.routing').then((m) => m.MainPageRoutingModule),
  },
  {
    path: 'releases',
    loadChildren: () => import('./pages/releases/releases.routing').then((m) => m.ReleasesRoutingModule),
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/merch-store/merch-store.routing').then((m) => m.StoreRoutingModule),
  },
  {
    path: 'press',
    loadChildren: () => import('./pages/press/press.routing').then((m) => m.PressRoutingModule),
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'events',
    component: EventsPageComponent,
  },
  {
    path: 'about',
    component: BioPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
})
export class AppRoutingModule {}
