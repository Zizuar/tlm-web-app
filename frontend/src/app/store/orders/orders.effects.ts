import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from '../../services/orders.service';
import {
  fetchOrders,
  fetchOrdersCompleted,
  OrderActionTypes,
  RemoveOrder,
  removeOrderCompleted,
  UpdateOrder,
  updateOrderCompleted,
} from './orders.actions';
import { of, switchMap } from 'rxjs';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class OrderEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ordersService: OrdersService,
    private readonly toastService: ToastService
  ) {}

  fetchOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActionTypes.FETCH_ORDERS),
      switchMap(() => {
        return this.ordersService.getOrders();
      }),
      switchMap((orders) => {
        return of(fetchOrdersCompleted({ orders }));
      })
    );
  });

  updateOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateOrder>(OrderActionTypes.UPDATE_ORDER),
      switchMap((action) => {
        return this.ordersService.patchOrder(action.updatedOrder);
      }),
      switchMap(() => {
        return of(updateOrderCompleted());
      })
    );
  });

  updateOrderCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActionTypes.UPDATE_ORDER_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Order successfully updated',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchOrders());
      })
    );
  });

  removeOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RemoveOrder>(OrderActionTypes.REMOVE_ORDER),
      switchMap((action) => {
        return this.ordersService.removeOrder(action.id);
      }),
      switchMap(() => {
        return of(removeOrderCompleted());
      })
    );
  });

  removeOrderCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActionTypes.REMOVE_ORDER_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Order successfully removed',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchOrders());
      })
    );
  });
}
