import { Component } from '@angular/core';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-release-details-order-info',
  templateUrl: './release-details-order-info.component.html',
  styleUrls: ['./release-details-order-info.component.scss'],
})
export class ReleaseDetailsOrderInfoComponent {
  protected readonly faCd = faCompactDisc;
}
