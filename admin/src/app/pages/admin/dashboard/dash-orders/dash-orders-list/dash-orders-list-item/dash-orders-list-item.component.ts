import { Component, Input, OnInit } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ExistingOrder, OrderStatus } from "../../../../../../core/models/order.model";

@Component({
  selector: 'app-dash-orders-list-item',
  templateUrl: './dash-orders-list-item.component.html',
  styleUrls: ['./dash-orders-list-item.component.scss'],
})
export class DashOrdersListItemComponent implements OnInit{
  @Input() order!: ExistingOrder;

  faPlus: IconDefinition = faPlus;
  faMinus: IconDefinition = faMinus;

  isCollapsed = true;

  statusText = '';

  ngOnInit() {
    switch (this.order.status) {
      case OrderStatus.CREATED:
        this.statusText = 'New';
        break;
      case OrderStatus.INVOICE_SENT:
        this.statusText = 'Invoiced';
        break;
      case OrderStatus.PAID:
        this.statusText = 'Paid';
        break;
      case OrderStatus.SHIPPED:
        this.statusText = 'Shipped';
        break;
      case OrderStatus.ARCHIVED:
        this.statusText = 'Archived';
        break;
      case OrderStatus.ABANDONED:
        this.statusText = 'Abandoned';
        break;
    }
  }
}
