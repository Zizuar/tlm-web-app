import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-merch-promo',
  templateUrl: './merch-promo.component.html',
  styleUrls: ['./merch-promo.component.scss']
})
export class MerchPromoComponent {
  faTshirt: IconDefinition = faTshirt;
}
