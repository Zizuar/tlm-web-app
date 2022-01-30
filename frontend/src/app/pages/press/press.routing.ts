import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressComponent } from './press.component';
import { PressResolver } from './press.resolver';
import { PressReleaseDetailsComponent } from './press-releases/press-release-details/press-release-details.component';
import { PressReleaseDetailsResolver } from './press-releases/press-release-details/press-release-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: PressComponent,
    pathMatch: 'full',
    resolve: {
      releases: PressResolver,
    },
  },
  {
    path: 'press-releases/:songId',
    component: PressReleaseDetailsComponent,
    resolve: {
      pressRelease: PressReleaseDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressRoutingModule {}
