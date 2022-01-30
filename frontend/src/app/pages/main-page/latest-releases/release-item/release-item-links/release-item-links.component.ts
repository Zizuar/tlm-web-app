import { Component, Input } from '@angular/core';
import { ReleaseLinks } from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-item-links',
  templateUrl: './release-item-links.component.html',
  styleUrls: ['./release-item-links.component.scss'],
})
export class ReleaseItemLinksComponent {
  @Input() links!: ReleaseLinks;
}
