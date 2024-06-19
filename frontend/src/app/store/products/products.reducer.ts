import { Product } from '../../core/models/product.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as productsActions from './products.actions';

export interface ProductsState {
  productsFetched: boolean;
  products: Product[];
}

export const initialState: ProductsState = {
  productsFetched: false,
  products: [],
};

const productsReducerInternal = createReducer(
  initialState,

  on(productsActions.fetchProductsCompleted, (state, { products }): ProductsState => {
    return {
      ...state,
      products,
      productsFetched: true,
    };
  }),
);

export function productsReducer(state: ProductsState | undefined, action: Action): ProductsState {
  return productsReducerInternal(state, action);
}
