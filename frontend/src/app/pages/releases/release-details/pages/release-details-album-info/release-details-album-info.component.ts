import { Component, Input } from '@angular/core';
import { ExistingRelease } from '../../../../../core/models/release.model';

@Component({
  selector: 'app-release-details-album-info',
  templateUrl: './release-details-album-info.component.html',
  styleUrls: ['./release-details-album-info.component.scss'],
})
export class ReleaseDetailsAlbumInfoComponent {
  @Input() release!: ExistingRelease;
  today: Date = new Date();
}
