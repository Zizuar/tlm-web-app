import {Component, Input} from '@angular/core';
import {Release} from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-details-cover',
  templateUrl: './release-details-cover.component.html',
  styleUrls: ['./release-details-cover.component.scss']
})
export class ReleaseDetailsCoverComponent {
  @Input() release!: Release;
}
