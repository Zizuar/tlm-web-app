import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashOrdersComponent } from './dash-orders.component';
import { DashOrdersListComponent } from './dash-orders-list/dash-orders-list.component';
import { DashOrdersListItemComponent } from './dash-orders-list/dash-orders-list-item/dash-orders-list-item.component';
import { DashOrdersListActionButtonComponent } from './dash-orders-list/dash-orders-list-action-button/dash-orders-list-action-button.component';
import { DashOrdersEditModalComponent } from './dash-orders-edit-modal/dash-orders-edit-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from "../../../../components/components.shared.module";

@NgModule({
  declarations: [
    DashOrdersComponent,
    DashOrdersListComponent,
    DashOrdersListItemComponent,
    DashOrdersListActionButtonComponent,
    DashOrdersEditModalComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, NgbCollapseModule, NgbDropdownModule, SharedComponentsModule],
  exports: [DashOrdersComponent],
})
export class DashOrdersModule {}
