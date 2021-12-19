import {Component, Input} from '@angular/core';
import {CartItem} from '../../../services/merch-store.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Input() cart: CartItem[] | null = [];
  constructor() { }
}
