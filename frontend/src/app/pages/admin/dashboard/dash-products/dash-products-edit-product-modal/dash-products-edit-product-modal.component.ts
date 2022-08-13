import { Component, Input } from '@angular/core';
import { Product } from '../../../../../core/models/product.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateProduct } from '../../../../../store/products/products.actions';

@Component({
  selector: 'app-dash-products-edit-product-modal',
  templateUrl: './dash-products-edit-product-modal.component.html',
  styleUrls: ['./dash-products-edit-product-modal.component.scss'],
})
export class DashProductsEditProductModalComponent {
  @Input() product!: Product;

  constructor(public readonly activeModal: NgbActiveModal, private readonly store: Store) {}

  saveChanges() {
    this.store.dispatch(updateProduct({ updatedProduct: this.product }));
    this.activeModal.dismiss();
  }
}
