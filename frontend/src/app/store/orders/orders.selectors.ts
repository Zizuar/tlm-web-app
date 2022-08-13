import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './orders.reducer';

export const selectOrdersFeatureState = createFeatureSelector<OrderState>('order');

export const selectOrders = createSelector(selectOrdersFeatureState, (state: OrderState) => state.orders);
