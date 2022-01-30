import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../../components/components.shared.module';
import { LatestReleasesComponent } from './latest-releases.component';
import { ReleaseItemComponent } from './release-item/release-item.component';
import { ReleaseItemLinksComponent } from './release-item/release-item-links/release-item-links.component';
import { ReleaseItemLinksListComponent } from './release-item/release-item-links-list/release-item-links-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LatestReleasesComponent,
    ReleaseItemComponent,
    ReleaseItemLinksComponent,
    ReleaseItemLinksListComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, RouterModule],
  exports: [LatestReleasesComponent],
})
export class LatestReleasesModule {}
