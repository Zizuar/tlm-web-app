import { Component } from '@angular/core';
import {
  faCheckCircle,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss'],
})
export class OrderSuccessComponent {
  faCheckCircle: IconDefinition = faCheckCircle;

  constructor() {}
}
