import { Component } from '@angular/core';
import { NewProduct } from '../../../../../core/models/product.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { createProduct } from '../../../../../store/products/products.actions';

@Component({
  selector: 'app-dash-products-new-product-modal',
  templateUrl: './dash-products-new-product-modal.component.html',
  styleUrls: ['./dash-products-new-product-modal.component.scss'],
})
export class DashProductsNewProductModalComponent {
  product: NewProduct = {
    description: '',
    name: '',
    price: 0,
    signable: false,
    spotifyLink: '',
    promo: '',
  };

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store
  ) {}

  saveNewProduct() {
    this.store.dispatch(createProduct({ product: this.product }));
    this.activeModal.dismiss();
  }
}
