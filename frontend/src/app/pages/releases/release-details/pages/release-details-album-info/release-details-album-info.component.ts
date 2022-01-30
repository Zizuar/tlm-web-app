import { Component, Input } from '@angular/core';
import { Release } from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-details-album-info',
  templateUrl: './release-details-album-info.component.html',
  styleUrls: ['./release-details-album-info.component.scss'],
})
export class ReleaseDetailsAlbumInfoComponent {
  @Input() release!: Release;
}
