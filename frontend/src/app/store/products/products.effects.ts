import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { fetchProductsCompleted, ProductsActionTypes } from './products.actions';
import { of, switchMap } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService,
  ) {}

  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActionTypes.FETCH_PRODUCTS),
      switchMap(() => {
        return this.productsService.getProducts();
      }),
      map((products: Product[]) => {
        return products
          .map((product) => {
            // convert date string from database to Date
            return {
              ...product,
              createdAt: new Date(product.createdAt),
            };
          })
          .sort((a: Product, b: Product) => {
            // sort by created date
            return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
          });
      }),
      switchMap((sortedProducts: Product[]) => {
        return of(fetchProductsCompleted({ products: sortedProducts }));
      }),
    );
  });
}
