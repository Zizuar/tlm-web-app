import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsFeatureState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(selectProductsFeatureState, (state: ProductsState) => state.products);

export const selectProductsFetched = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.productsFetched,
);
