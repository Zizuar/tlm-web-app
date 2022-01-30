import { Component, Input } from '@angular/core';
import { Release } from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-details-collections-info',
  templateUrl: './release-details-collections-info.component.html',
  styleUrls: ['./release-details-collections-info.component.scss'],
})
export class ReleaseDetailsCollectionsInfoComponent {
  @Input() release!: Release;
}
