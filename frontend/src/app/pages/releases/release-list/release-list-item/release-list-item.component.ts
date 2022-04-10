import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ExistingRelease } from '../../../../core/models/release.model';

@Component({
  selector: 'app-release-list-item',
  templateUrl: './release-list-item.component.html',
  styleUrls: ['./release-list-item.component.scss'],
})
export class ReleaseListItemComponent {
  @Input() release!: ExistingRelease;

  environment = environment;
}
