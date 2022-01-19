import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashOrdersComponent } from './dash-orders/dash-orders.component';
import { DashScheduleComponent } from './dash-schedule/dash-schedule.component';
import { DashReleasesComponent } from './dash-releases/dash-releases.component';
import { DashPressComponent } from './dash-press/dash-press.component';
import { DashEventsComponent } from './dash-events/dash-events.component';
import { DashProductsComponent } from './dash-products/dash-products.component';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { DashIndexComponent } from './dash-index/dash-index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashScheduleTableComponent } from './dash-schedule/dash-schedule-table/dash-schedule-table.component';
import { DashScheduleTableRowComponent } from './dash-schedule/dash-schedule-table/dash-schedule-table-row/dash-schedule-table-row.component';
import { DashScheduleEditModalComponent } from './dash-schedule/dash-schedule-edit-modal/dash-schedule-edit-modal.component';
import { FormsModule } from "@angular/forms";
import { DashOrdersListComponent } from './dash-orders/dash-orders-list/dash-orders-list.component';
import { DashOrdersListItemComponent } from './dash-orders/dash-orders-list/dash-orders-list-item/dash-orders-list-item.component';
import { DashOrdersListActionButtonComponent } from './dash-orders/dash-orders-list/dash-orders-list-action-button/dash-orders-list-action-button.component';
import { DashOrdersEditModalComponent } from './dash-orders/dash-orders-edit-modal/dash-orders-edit-modal.component';
import { SharedComponentsModule } from "../../../components/components.shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DashOrdersComponent,
    DashScheduleComponent,
    DashReleasesComponent,
    DashPressComponent,
    DashEventsComponent,
    DashProductsComponent,
    DashIndexComponent,
    DashScheduleTableComponent,
    DashScheduleTableRowComponent,
    DashScheduleEditModalComponent,
    DashOrdersListComponent,
    DashOrdersListItemComponent,
    DashOrdersListActionButtonComponent,
    DashOrdersEditModalComponent,
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    FontAwesomeModule,
    FormsModule,
    NgbCollapseModule,
    NgbDropdownModule,
    SharedComponentsModule,
  ],
})
export class DashboardModule {}
