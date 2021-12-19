import { Component } from '@angular/core';
import {CartItem, MerchStoreService} from '../../services/merch-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  cart$: Observable<CartItem[]> = this.merchStoreService.getCart();

  constructor(
    private readonly merchStoreService: MerchStoreService
  ) { }

}
