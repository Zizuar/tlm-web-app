import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectOrders } from '../../../../store/orders/orders.selectors';
import { map } from 'rxjs/operators';
import { fetchOrders } from '../../../../store/orders/orders.actions';
import { ExistingOrder, OrderStatus } from "src/app/core/models/order.model";

@Component({
  selector: 'app-dash-orders',
  templateUrl: './dash-orders.component.html',
  styleUrls: ['./dash-orders.component.scss'],
})
export class DashOrdersComponent implements OnInit {
  readonly orders$: Observable<ExistingOrder[]>;

  readonly newOrders$: Observable<ExistingOrder[]>;
  readonly invoicedOrders$: Observable<ExistingOrder[]>;
  readonly paidOrders$: Observable<ExistingOrder[]>;
  readonly shippedOrders$: Observable<ExistingOrder[]>;
  readonly abandonedOrders$: Observable<ExistingOrder[]>;
  readonly archivedOrders$: Observable<ExistingOrder[]>;

  constructor(private readonly store: Store) {
    this.orders$ = this.store.select(selectOrders);
    // sort orders into categories
    this.newOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.CREATED).sort(this.sortOrdersByDate))
    );
    this.invoicedOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.INVOICE_SENT).sort(this.sortOrdersByDate))
    );
    this.paidOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.PAID).sort(this.sortOrdersByDate))
    );
    this.shippedOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.SHIPPED).sort(this.sortOrdersByDate))
    );
    this.abandonedOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.ABANDONED).sort(this.sortOrdersByDate))
    );
    this.archivedOrders$ = this.orders$.pipe(
      map((orders) => orders.filter((order) => order.status === OrderStatus.ARCHIVED).sort(this.sortOrdersByDate))
    );
  }

  ngOnInit() {
    this.store.dispatch(fetchOrders());
  }

  private sortOrdersByDate(a: ExistingOrder, b: ExistingOrder) {
    return a.createdDate > b.createdDate ? 1 : a.createdDate < b.createdDate ? -1 : 0;
  }
}
