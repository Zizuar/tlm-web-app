import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from "rxjs";
import { OrderFormDataService } from './order-form-data.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../core/models/product.model';
import { CartItem } from '../core/models/cart-item.model';
import { NewOrder, OrderStatus } from "../core/models/order.model";
import { environment } from "../../environments/environment";
import { OrdersService } from "./orders.service";

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
  private readonly productsApiUrl = `${environment.apiBaseUrl}/v1/products`;

  private readonly DOM_SHIPPING = [
    'US',
    'AS',
    'GU',
    'MH',
    'FM',
    'MP',
    'PW',
    'PR',
    'UM',
    'VI',
  ];
  private readonly CAN_SHIPPING = ['CA'];
  private SHIPPING_PRICES = {
    Domestic: 700,
    Canada: 1000,
    International: 1500,
  };

  private _cart = new BehaviorSubject<CartItem[]>([]);
  cartStore$: Observable<CartItem[]> = this._cart.asObservable();

  constructor(
    private readonly orderFormDataService: OrderFormDataService,
    private readonly http: HttpClient,
    private readonly ordersService: OrdersService,
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsApiUrl);
  }

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

  async addItemToCart(
    productId: string,
    itemFormData?: any
  ): Promise<boolean> {
    const productToAdd = await lastValueFrom(this.http.get<Product>(`${this.productsApiUrl}/${productId}`));
    if (!productToAdd) {
      return false;
    }
    this._cart.next([
      ...this._cart.value,
      {
        product: productToAdd,
        quantity: 1,
        signatureRequested: itemFormData,
      },
    ]);
    return true;
  }

  async emptyCart(): Promise<boolean> {
    this._cart.next([]);
    return true;
  }


}
