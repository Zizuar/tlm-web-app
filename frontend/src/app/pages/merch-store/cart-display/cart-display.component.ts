import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../../../core/models/cart-item.model';
import { MerchStoreService, StoreState as StoreStates } from '../../../services/merch-store.service';

class StoreState {}

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss'],
})
export class CartDisplayComponent implements OnChanges {
  @Input() cart!: CartItem[] | null;
  @Input() storeState!: StoreState;
  @Input() country: string = '';
  @Output() enterDetailsButtonClick = new EventEmitter();

  faQuestion: IconDefinition = faQuestionCircle;

  public StoreState = StoreStates;

  productsPrice = 0;
  discount = 0;
  subtotal = 0;
  shipping = 0;
  total = 0;

  constructor(
    private readonly merchStoreService: MerchStoreService,
    private readonly config: NgbPopoverConfig,
  ) {
    config.triggers = 'hover click';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.calculateSubtotal(changes['cart'].currentValue);
  }

  proceedButtonClicked() {
    this.enterDetailsButtonClick.emit();
  }

  private calculateProductsPrice(items: CartItem[]) {
    if (items.length > 0) {
      let subtotal = 0;
      items.forEach((item) => {
        subtotal += item.quantity * item.product.price;
      });
      this.productsPrice = subtotal;
    }
  }

  private calculateDiscount(items: CartItem[]): void {
    // discounts disabled for now
    this.discount = 0;
  }

  private calculateSubtotal(items: CartItem[]) {
    this.calculateProductsPrice(items);
    this.calculateDiscount(items);
    this.subtotal = this.productsPrice - this.discount;
    if (this.storeState === this.StoreState.Confirm && this.country) {
      this.shipping = this.merchStoreService.calculateShipping(this.country);
      this.total = this.subtotal + this.shipping;
    }
  }
}
