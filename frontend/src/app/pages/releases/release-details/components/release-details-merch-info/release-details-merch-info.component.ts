import { Component } from '@angular/core';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-release-details-merch-info',
  templateUrl: './release-details-merch-info.component.html',
  styleUrls: ['./release-details-merch-info.component.scss'],
})
export class ReleaseDetailsMerchInfoComponent {
  protected readonly faTshirt = faTshirt;
}
