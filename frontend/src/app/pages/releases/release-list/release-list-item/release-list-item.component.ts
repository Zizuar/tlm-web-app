import { Component, Input } from '@angular/core';
import { Release } from '../../../../services/releases.service';

@Component({
  selector: 'app-release-list-item',
  templateUrl: './release-list-item.component.html',
  styleUrls: ['./release-list-item.component.scss']
})
export class ReleaseListItemComponent {
  @Input() release!: Release;

}
