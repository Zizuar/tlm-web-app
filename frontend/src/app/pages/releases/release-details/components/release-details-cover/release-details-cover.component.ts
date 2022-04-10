import { Component, Input } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { ExistingRelease } from '../../../../../core/models/release.model';

@Component({
  selector: 'app-release-details-cover',
  templateUrl: './release-details-cover.component.html',
  styleUrls: ['./release-details-cover.component.scss'],
})
export class ReleaseDetailsCoverComponent {
  @Input() release!: ExistingRelease;

  environment = environment;
}
