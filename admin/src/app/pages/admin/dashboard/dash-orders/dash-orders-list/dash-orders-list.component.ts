import { Component, Input } from "@angular/core";
import { ExistingOrder, OrderStatus } from "../../../../../core/models/order.model";

@Component({
  selector: 'app-dash-orders-list',
  templateUrl: './dash-orders-list.component.html',
  styleUrls: ['./dash-orders-list.component.scss'],
})
export class DashOrdersListComponent {
  @Input() orders: ExistingOrder[] = [];
  @Input() title: string = '';
  @Input() status: OrderStatus = OrderStatus.CREATED;

  readonly OrderStatus = OrderStatus;

  // pagination
  page = 1;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50];

  pageSizeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pageSize = Number(input.value ?? '10');
  }
}
