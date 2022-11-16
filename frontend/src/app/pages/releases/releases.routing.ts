import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseListComponent } from './release-list/release-list.component';
import { ReleaseDetailsComponent } from './release-details/release-details.component';
import { ReleaseDetailsResolver } from './release-details/release-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReleaseListComponent,
    pathMatch: 'full',
  },
  {
    path: ':category',
    component: ReleaseListComponent,
    pathMatch: 'full',
  },
  {
    path: ':category/:id',
    component: ReleaseDetailsComponent,
    pathMatch: 'full',
    runGuardsAndResolvers: 'pathParamsChange',
    resolve: { dataFetched: ReleaseDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesRoutingModule {}
