import {Component, Input} from '@angular/core';
import {ReleaseLinks} from '../../../../../services/releases.service';

@Component({
  selector: 'app-release-details-streaming-icons',
  templateUrl: './release-details-streaming-icons.component.html',
  styleUrls: ['./release-details-streaming-icons.component.scss']
})
export class ReleaseDetailsStreamingIconsComponent {
  @Input() links!: ReleaseLinks | undefined;
}
