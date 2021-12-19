import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CartItem} from '../../../services/merch-store.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent implements OnChanges{
  @Input() cart!: CartItem[] | null;

  productsPrice = 0;
  discount = 0;
  subtotal = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.calculateSubtotal(changes['cart'].currentValue);
  }

  private calculateProductsPrice(items: CartItem[]) {
    if (items.length > 0) {
      let subtotal = 0;
      items.forEach(item => {
        subtotal += item.quantity * item.product.price;
      })
      this.productsPrice = subtotal;
    }
  }

  private calculateDiscount(items: CartItem[]): void {
    if (items.length > 0) {
      const sfba = items.find(item => item.product.name === 'Songs for Being Alone CD');
      const ep = items.find(item => item.product.name === 'Tyler Levs EP (2019) CD');
      if (sfba && ep) {
        this.discount = 500
      }
    }
  }

  private calculateSubtotal(items: CartItem[]) {
    this.calculateProductsPrice(items);
    this.calculateDiscount(items);
    this.subtotal = this.productsPrice - this.discount;
  }
}
