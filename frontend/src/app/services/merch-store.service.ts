import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { OrderFormDataService } from './order-form-data.service';
import { CartItem } from '../core/models/cart-item.model';
import { NewOrder, OrderStatus } from '../core/models/order.model';
import { OrdersService } from './orders.service';
import { ProductsService } from './products.service';

export enum StoreState {
  Main,
  Form,
  Confirm,
  Success,
  Error,
}

@Injectable({
  providedIn: 'root',
})
export class MerchStoreService {
  private readonly DOM_SHIPPING = ['US', 'AS', 'GU', 'MH', 'FM', 'MP', 'PW', 'PR', 'UM', 'VI'];
  private readonly CAN_SHIPPING = ['CA'];
  private SHIPPING_PRICES = {
    Domestic: 7,
    Canada: 10,
    International: 15,
  };

  private _cart = new BehaviorSubject<CartItem[]>([]);
  cartStore$: Observable<CartItem[]> = this._cart.asObservable();

  constructor(
    private readonly orderFormDataService: OrderFormDataService,
    private readonly ordersService: OrdersService,
    private readonly productsService: ProductsService,
  ) {}

  getCart(): Observable<CartItem[]> {
    return this.cartStore$;
  }

  calculateShipping(country: string): number {
    if (this.DOM_SHIPPING.find((c) => c === country)) {
      return this.SHIPPING_PRICES.Domestic;
    }
    if (this.CAN_SHIPPING.find((c) => c === country)) {
      return this.SHIPPING_PRICES.Canada;
    }
    return this.SHIPPING_PRICES.International;
  }

  submitOrder(orderFormData: any): Observable<NewOrder> {
    const postData = {
      ...orderFormData,
      status: OrderStatus.CREATED,
      country: this.orderFormDataService.getCountryName(orderFormData.country),
      cart: this._cart.value.map((cartItem) => {
        return {
          productName: cartItem.product.name,
          signatureName: cartItem.signatureRequested.requested
            ? cartItem.signatureRequested.toWhom || 'No name'
            : 'No signature',
          price: cartItem.product.price,
        };
      }),
    };
    return this.ordersService.postOrder(postData);
  }

  async addItemToCart(productId: string, itemFormData?: { requested: boolean; toWhom: string }): Promise<boolean> {
    const productToAdd = await lastValueFrom(this.productsService.getProduct(productId));
    if (!productToAdd) {
      return false;
    }
    this._cart.next([
      ...this._cart.value,
      {
        product: productToAdd,
        quantity: 1,
        signatureRequested: itemFormData ? itemFormData : { requested: false, toWhom: '' },
      },
    ]);
    return true;
  }

  async emptyCart(): Promise<boolean> {
    this._cart.next([]);
    return true;
  }
}
