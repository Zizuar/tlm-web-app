import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';

export enum ProductsActionTypes {
  FETCH_PRODUCTS = '[Products] Fetch products',
  FETCH_PRODUCTS_COMPLETED = '[Products] Fetch products completed',
}

export const fetchProducts = createAction(ProductsActionTypes.FETCH_PRODUCTS);

export const fetchProductsCompleted = createAction(
  ProductsActionTypes.FETCH_PRODUCTS_COMPLETED,
  props<{ products: Product[] }>(),
);
