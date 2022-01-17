import { Component, Input } from "@angular/core";
import { ExistingOrder } from "../../../../../../core/models/order.model";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dash-orders-list-item',
  templateUrl: './dash-orders-list-item.component.html',
  styleUrls: ['./dash-orders-list-item.component.scss']
})
export class DashOrdersListItemComponent {
  @Input() order!: ExistingOrder;

  faPlus: IconDefinition = faPlus;
  faMinus: IconDefinition = faMinus;

  isCollapsed = true;

}
