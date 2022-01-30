import { Component, Input } from '@angular/core';
import { Release } from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-details-song-info',
  templateUrl: './release-details-song-info.component.html',
  styleUrls: ['./release-details-song-info.component.scss'],
})
export class ReleaseDetailsSongInfoComponent {
  @Input() release!: Release;
}
