import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class MerchStoreService {

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

  private _cart = new BehaviorSubject<CartItem[]>([]);
  cartStore$: Observable<CartItem[]> = this._cart.asObservable();

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCart(): Observable<CartItem[]> {
    return this.cartStore$;
  }

  async postOrder(orderFormData: any): Promise<boolean> {
    console.log('posting', orderFormData, this._cart);
    return true;
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
}
