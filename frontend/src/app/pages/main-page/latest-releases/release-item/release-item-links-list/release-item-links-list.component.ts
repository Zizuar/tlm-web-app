import {Component, Input} from '@angular/core';
import {ReleaseLinks} from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-item-links-list',
  templateUrl: './release-item-links-list.component.html',
  styleUrls: ['./release-item-links-list.component.scss']
})
export class ReleaseItemLinksListComponent {
  @Input() linksArray!: ReleaseLinks[];
}
