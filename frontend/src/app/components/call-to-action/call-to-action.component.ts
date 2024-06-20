import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faAmazon, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent {
  faSpotify: IconDefinition = faSpotify;
  faAmazon: IconDefinition = faAmazon;
  faApple: IconDefinition = faApple;

  constructor() {}
}
