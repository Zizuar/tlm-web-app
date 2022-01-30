import { Component, Input } from '@angular/core';
import { Release } from '../../../services/releases.service';

@Component({
  selector: 'app-latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.scss'],
})
export class LatestReleasesComponent {
  @Input() releases: Release[] = [];
}
