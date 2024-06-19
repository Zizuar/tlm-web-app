import { Component, Input } from '@angular/core';
import { MerchStoreService } from '../../../../services/merch-store.service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddToCartModalComponent } from '../add-to-cart-modal/add-to-cart-modal.component';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
})
export class ProductsListItemComponent {
  @Input() product!: Product;

  faSpotify: IconDefinition = faSpotify;

  constructor(
    private readonly modalService: NgbModal,
    private readonly merchStoreService: MerchStoreService,
  ) {}

  async handleAddToCartClick() {
    try {
      if (this.product.signable) {
        const modalRef = this.modalService.open(AddToCartModalComponent);
        modalRef.componentInstance.product = this.product;
        const result = await modalRef.result;
        this.addToCart(result);
      } else {
        this.addToCart();
      }
    } catch (e) {
      console.error("Can't add to cart without an answer");
    }
  }

  private addToCart(signatureRequested?: any) {
    this.merchStoreService.addItemToCart(this.product._id, signatureRequested);
  }
}
