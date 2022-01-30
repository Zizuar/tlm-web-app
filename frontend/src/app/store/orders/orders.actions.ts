import { createAction, props } from '@ngrx/store';
import { ExistingOrder } from '../../core/models/order.model';

export enum OrderActionTypes {
  FETCH_ORDERS = '[Order] Fetch orders',
  FETCH_ORDERS_COMPLETED = '[Order] Fetch orders completed',
  UPDATE_ORDER = '[Order] Update order',
  UPDATE_ORDER_COMPLETED = '[Order] Update order completed',
  REMOVE_ORDER = '[Order] Remove order',
  REMOVE_ORDER_COMPLETED = '[Order] Remove order completed',
}

export const fetchOrders = createAction(OrderActionTypes.FETCH_ORDERS);

export const fetchOrdersCompleted = createAction(
  OrderActionTypes.FETCH_ORDERS_COMPLETED,
  props<{ orders: ExistingOrder[] }>()
);

export const updateOrder = createAction(
  OrderActionTypes.UPDATE_ORDER,
  props<{ updatedOrder: ExistingOrder }>()
);
export type UpdateOrder = ReturnType<typeof updateOrder>;

export const updateOrderCompleted = createAction(
  OrderActionTypes.UPDATE_ORDER_COMPLETED
);

export const removeOrder = createAction(
  OrderActionTypes.REMOVE_ORDER,
  props<{ id: string }>()
);
export type RemoveOrder = ReturnType<typeof removeOrder>;

export const removeOrderCompleted = createAction(
  OrderActionTypes.REMOVE_ORDER_COMPLETED
);
