import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReleaseDetailsComponent} from './release-details/release-details.component';

const routes: Routes = [
  {path: '', component: ReleaseDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }
