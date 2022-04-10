import { Component, Input } from '@angular/core';
import { ExistingRelease } from '../../../core/models/release.model';

@Component({
  selector: 'app-latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.scss'],
})
export class LatestReleasesComponent {
  @Input() releases: ExistingRelease[] | null | undefined;
}
