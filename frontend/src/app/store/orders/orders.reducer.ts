import { ExistingOrder } from '../../core/models/order.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as orderActions from './orders.actions';

export interface OrderState {
  orders: ExistingOrder[];
}

export const initialState: OrderState = {
  orders: [],
};

const orderReducerInternal = createReducer(
  initialState,

  on(orderActions.fetchOrdersCompleted, (state, { orders }): OrderState => {
    return {
      ...state,
      orders,
    };
  })
);

export function orderReducer(state: OrderState | undefined, action: Action): OrderState {
  return orderReducerInternal(state, action);
}
