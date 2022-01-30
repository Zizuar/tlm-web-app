import { Component } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-order-error',
  templateUrl: './order-error.component.html',
  styleUrls: ['./order-error.component.scss'],
})
export class OrderErrorComponent {
  faExclamationTriangle: IconDefinition = faExclamationTriangle;

  constructor() {}
}
