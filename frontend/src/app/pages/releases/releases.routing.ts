import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseListComponent } from './release-list/release-list.component';
import { ReleaseDetailsComponent } from './release-details/release-details.component';
import { ReleaseListResolver } from './release-list/release-list.resolver';
import { ReleaseDetailsResolver } from './release-details/release-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReleaseListComponent,
    pathMatch: 'full',
    resolve: {
      releases: ReleaseListResolver,
    },
  },
  {
    path: ':category',
    component: ReleaseListComponent,
    pathMatch: 'full',
    resolve: {
      releases: ReleaseListResolver,
    },
  },
  {
    path: ':category/:id',
    component: ReleaseDetailsComponent,
    pathMatch: 'full',
    resolve: {
      release: ReleaseDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesRoutingModule {}
