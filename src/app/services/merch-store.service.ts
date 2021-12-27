import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, throwError} from 'rxjs';
import {OrderFormDataService} from './order-form-data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

export interface Product {
  name: string;
  description: string;
  price: number;
  signable: boolean;
  spotifyLink?: string;
  preOrderDate?: Date;
  promo?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  signatureRequested: {
    requested: boolean;
    toWhom?: string;
  };
}

export enum StoreState {
  Main,
  Form,
  Confirm,
  Success,
  Error
}

@Injectable({
  providedIn: 'root'
})
export class MerchStoreService {
  private readonly orderApiUrl = '/api/v1/orders';

  products: Product[] = [
    {
      name: 'Songs for Being Alone CD',
      description: 'A full-length album featuring 11(+1) songs, all self-produced by Tyler. ',
      price: 1500,
      signable: true,
      spotifyLink: 'https://open.spotify.com/album/30qnxAB3tBNDhOZCzQHkl5'
    },
    {
      name: 'Tyler Levs EP (2019) CD',
      description: 'An EP from 2019 featuring Life Sure Does, At the End of the Night and Hit Me Like a Dream (self-produced version)',
      price: 1000,
      signable: true,
      spotifyLink: 'https://open.spotify.com/album/5ZbA2ZzZMP1gVZlOw7KRbW',
      promo: '$5 off when ordering together with SFBA!'
    },
  ]

  private readonly DOM_SHIPPING = ['US', 'AS', 'GU', 'MH', 'FM', 'MP', 'PW', 'PR', 'UM', 'VI'];
  private readonly CAN_SHIPPING = ['CA'];
  private SHIPPING_PRICES = {
    Domestic: 700,
    Canada: 1000,
    International: 1500
  };

  private _cart = new BehaviorSubject<CartItem[]>([]);
  cartStore$: Observable<CartItem[]> = this._cart.asObservable();

  constructor(
    private readonly orderFormDataService: OrderFormDataService,
    private readonly http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCart(): Observable<CartItem[]> {
    return this.cartStore$;
  }

  calculateShipping(country: string): number {
    if (this.DOM_SHIPPING.find(c => c === country)) {
      return this.SHIPPING_PRICES.Domestic;
    }
    if (this.CAN_SHIPPING.find(c => c === country)) {
      return this.SHIPPING_PRICES.Canada;
    }
    return this.SHIPPING_PRICES.International;
  }

  postOrder(orderFormData: any): Observable<any> {
    const postData = {
      ...orderFormData,
      country: this.orderFormDataService.getCountryName(orderFormData.country),
      cart: [
        ...this._cart.value
      ]
    }
    return this.http.post(this.orderApiUrl, postData).pipe(
      catchError(this.handleError)
    );
  }

  async addItemToCart(productName: string, itemFormData?: any): Promise<boolean> {
    const productToAdd = this.products.find(product => product.name === productName);
    if (!productToAdd) {
      return false;
    }
    this._cart.next([
      ...this._cart.value,
      {
        product: productToAdd,
        quantity: 1,
        signatureRequested: itemFormData
      }
    ]);
    return true;
  }
  async emptyCart(): Promise<boolean> {
    this._cart.next([]);
    return true;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error)
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error)
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }


}
