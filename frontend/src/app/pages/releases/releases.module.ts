import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseDetailsComponent } from './release-details/release-details.component';
import { ReleaseListComponent } from './release-list/release-list.component';
import { SharedComponentsModule } from '../../components/components.shared.module';
import { ReleaseListItemComponent } from './release-list/release-list-item/release-list-item.component';
import { RouterModule } from '@angular/router';
import { ReleaseDetailsCoverComponent } from './release-details/components/release-details-cover/release-details-cover.component';
import { ReleaseDetailsStreamingIconsComponent } from './release-details/components/release-details-streaming-icons/release-details-streaming-icons.component';
import { ReleaseDetailsSongInfoComponent } from './release-details/pages/release-details-song-info/release-details-song-info.component';
import { ReleaseDetailsCollectionsInfoComponent } from './release-details/pages/release-details-collections-info/release-details-collections-info.component';
import { ReleaseDetailsAlbumInfoComponent } from './release-details/pages/release-details-album-info/release-details-album-info.component';
import { StreamingIconComponent } from './release-details/components/release-details-streaming-icons/streaming-icon/streaming-icon.component';
import { ReleaseDetailsMerchInfoComponent } from './release-details/components/release-details-merch-info/release-details-merch-info.component';
import { ReleaseDetailsOrderInfoComponent } from './release-details/components/release-details-order-info/release-details-order-info.component';
import { AlbumTracklistComponent } from './release-details/pages/release-details-album-info/album-tracklist/album-tracklist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ReleaseDetailsComponent,
    ReleaseListComponent,
    ReleaseListItemComponent,
    ReleaseDetailsCoverComponent,
    ReleaseDetailsStreamingIconsComponent,
    ReleaseDetailsSongInfoComponent,
    ReleaseDetailsCollectionsInfoComponent,
    ReleaseDetailsAlbumInfoComponent,
    StreamingIconComponent,
    ReleaseDetailsMerchInfoComponent,
    ReleaseDetailsOrderInfoComponent,
    AlbumTracklistComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, RouterModule, FontAwesomeModule],
})
export class ReleasesModule {}
