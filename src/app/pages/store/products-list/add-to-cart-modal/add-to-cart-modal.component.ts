import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../../../services/merch-store.service';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.html',
  styleUrls: ['./add-to-cart-modal.component.scss']
})
export class AddToCartModalComponent {
  @Input() product!: Product;

  signatureRequested = {
    requested: false,
    toWhom: undefined,
  }

  constructor(public activeModal: NgbActiveModal) { }

  handleAddToCart() {
    this.activeModal.close(this.signatureRequested);
  }
}
