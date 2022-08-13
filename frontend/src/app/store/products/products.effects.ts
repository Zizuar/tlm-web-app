import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import {
  CreateProduct,
  createProductCompleted,
  fetchProducts,
  fetchProductsCompleted,
  ProductsActionTypes,
  RemoveProduct,
  removeProductCompleted,
  UpdateProduct,
  updateProductCompleted,
} from './products.actions';
import { of, switchMap } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { map } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService,
    private readonly toastService: ToastService
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
      })
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreateProduct>(ProductsActionTypes.CREATE_PRODUCT),
      switchMap((action) => {
        return this.productsService.postProduct(action.product);
      }),
      switchMap(() => {
        return of(createProductCompleted());
      })
    );
  });

  createProductCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActionTypes.CREATE_PRODUCT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Product successfully created',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchProducts());
      })
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateProduct>(ProductsActionTypes.UPDATE_PRODUCT),
      switchMap((action) => {
        return this.productsService.patchProduct(action.updatedProduct);
      }),
      switchMap(() => {
        return of(updateProductCompleted());
      })
    );
  });

  updateProductCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActionTypes.UPDATE_PRODUCT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Product successfully updated',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchProducts());
      })
    );
  });

  removeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RemoveProduct>(ProductsActionTypes.REMOVE_PRODUCT),
      switchMap((action) => {
        return this.productsService.deleteProduct(action.id);
      }),
      switchMap(() => {
        return of(removeProductCompleted());
      })
    );
  });

  removeProductCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActionTypes.REMOVE_PRODUCT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Product successfully removed',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchProducts());
      })
    );
  });
}
