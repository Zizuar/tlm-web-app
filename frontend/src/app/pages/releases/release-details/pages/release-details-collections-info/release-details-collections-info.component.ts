import { Component, Input } from '@angular/core';
import { ExistingRelease } from '../../../../../core/models/release.model';

@Component({
  selector: 'app-release-details-collections-info',
  templateUrl: './release-details-collections-info.component.html',
  styleUrls: ['./release-details-collections-info.component.scss'],
})
export class ReleaseDetailsCollectionsInfoComponent {
  @Input() release!: ExistingRelease;
}
