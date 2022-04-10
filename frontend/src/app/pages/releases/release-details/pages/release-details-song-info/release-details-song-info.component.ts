import { Component, Input } from '@angular/core';
import { ExistingRelease } from '../../../../../core/models/release.model';

@Component({
  selector: 'app-release-details-song-info',
  templateUrl: './release-details-song-info.component.html',
  styleUrls: ['./release-details-song-info.component.scss'],
})
export class ReleaseDetailsSongInfoComponent {
  @Input() release!: ExistingRelease;
}
