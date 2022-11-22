import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProducts, selectProductsFetched } from "../../../../../store/products/products.selectors";
import { Product } from "../../../../../core/models/product.model";
import { fetchProducts } from "../../../../../store/products/products.actions";

@Component({
  selector: 'app-dash-products-list',
  templateUrl: './dash-products-list.component.html',
  styleUrls: ['./dash-products-list.component.scss'],
})
export class DashProductsListComponent implements OnInit, OnDestroy {
  areProductsFetched: Observable<boolean> = this.store.select(selectProductsFetched);
  products: Observable<Product[]>;

  mainSub: Subscription = new Subscription();

  constructor(private readonly store: Store) {
    this.products = this.store.select(selectProducts);
  }

  ngOnInit(): void {
    this.mainSub.add(
      this.areProductsFetched.subscribe((productsFetched) => {
        if (!productsFetched) {
          this.store.dispatch(fetchProducts());
        }
      })
    );
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }
}
