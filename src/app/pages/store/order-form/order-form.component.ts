import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../../../services/merch-store.service';
import {Country, OrderFormDataService, State} from '../../../services/order-form-data.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Input() cart: CartItem[] | null = [];
  @Input() formData = {
    email: '',
    name: '',
    street1: '',
    street2: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    other: '',
    termsCheck: false,
    privacyCheck: false,
    captcha: '',
  }
  @Output() orderFormSubmitted = new EventEmitter<any>();
  @Output() backButtonClick = new EventEmitter();

  countries: Country[] = this.orderFormData.getCountries();
  states: State[] = this.orderFormData.getStates();

  constructor(
    private readonly orderFormData: OrderFormDataService
  ) { }

  goBack() {
    this.backButtonClick.emit();
  }

  submitOrder() {
    this.orderFormSubmitted.emit(this.formData);
  }
}
