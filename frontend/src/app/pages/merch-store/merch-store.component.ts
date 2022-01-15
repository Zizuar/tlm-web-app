import { Component } from '@angular/core';
import {
  MerchStoreService,
  StoreState,
} from '../../services/merch-store.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../core/models/cart-item.model';

@Component({
  selector: 'app-store',
  templateUrl: './merch-store.component.html',
  styleUrls: ['./merch-store.component.scss'],
})
export class MerchStoreComponent {
  cart$: Observable<CartItem[]> = this.merchStoreService.getCart();
  formData = {
    email: '',
    mailName: '',
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
  };
  storeState: StoreState = StoreState.Main;
  StoreState = StoreState;
  loading = false;

  constructor(private readonly merchStoreService: MerchStoreService) {}

  backToMain() {
    this.storeState = StoreState.Main;
  }

  proceedToForm() {
    this.storeState = StoreState.Form;
  }

  proceedToConfirm(formData: any) {
    this.storeState = StoreState.Confirm;
    this.formData = {
      ...this.formData,
      ...formData,
    };
  }

  submitOrder() {
    this.loading = true;
    this.merchStoreService.postOrder(this.formData).subscribe({
      next: (response) => {
        if (response) {
          this.storeState = StoreState.Success;
        } else {
          this.storeState = StoreState.Error;
        }
        this.loading = false;
      },
      error: (err) => {
        this.storeState = StoreState.Error;
        this.loading = false;
      },
    });
    this.formData = {
      email: '',
      mailName: '',
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
    };
    this.merchStoreService.emptyCart();
  }
}
