import { Component, Input, OnInit } from "@angular/core";
import { ExistingOrder } from "../../../../../core/models/order.model";

@Component({
  selector: 'app-dash-orders-list',
  templateUrl: './dash-orders-list.component.html',
  styleUrls: ['./dash-orders-list.component.scss'],
})
export class DashOrdersListComponent {
  @Input() orders: ExistingOrder[] = [];
  @Input() title: string = '';
}
