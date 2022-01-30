import { createAction, props } from '@ngrx/store';
import { NewProduct, Product } from '../../core/models/product.model';

export enum ProductsActionTypes {
  FETCH_PRODUCTS = '[Products] Fetch products',
  FETCH_PRODUCTS_COMPLETED = '[Products] Fetch products completed',
  CREATE_PRODUCT = '[Products] Create product',
  CREATE_PRODUCT_COMPLETED = '[Products] Create product completed',
  UPDATE_PRODUCT = '[Products] Update product',
  UPDATE_PRODUCT_COMPLETED = '[Products] Update product completed',
  REMOVE_PRODUCT = '[Products] Remove product',
  REMOVE_PRODUCT_COMPLETED = '[Products] Remove product completed',
}

export const fetchProducts = createAction(ProductsActionTypes.FETCH_PRODUCTS);

export const fetchProductsCompleted = createAction(
  ProductsActionTypes.FETCH_PRODUCTS_COMPLETED,
  props<{ products: Product[] }>()
);

export const createProduct = createAction(
  ProductsActionTypes.CREATE_PRODUCT,
  props<{ product: NewProduct }>()
);
export type CreateProduct = ReturnType<typeof createProduct>;

export const createProductCompleted = createAction(
  ProductsActionTypes.CREATE_PRODUCT_COMPLETED
);

export const updateProduct = createAction(
  ProductsActionTypes.UPDATE_PRODUCT,
  props<{ updatedProduct: Product }>()
);
export type UpdateProduct = ReturnType<typeof updateProduct>;

export const updateProductCompleted = createAction(
  ProductsActionTypes.UPDATE_PRODUCT_COMPLETED
);

export const removeProduct = createAction(
  ProductsActionTypes.REMOVE_PRODUCT,
  props<{ id: string }>()
);
export type RemoveProduct = ReturnType<typeof removeProduct>;

export const removeProductCompleted = createAction(
  ProductsActionTypes.REMOVE_PRODUCT_COMPLETED
);
