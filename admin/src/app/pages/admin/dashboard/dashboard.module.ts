import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DashProductsModule } from './dash-products/dash-products.module';
import { DashScheduleModule } from './dash-schedule/dash-schedule.module';
import { DashOrdersModule } from './dash-orders/dash-orders.module';
import { DashIndexModule } from './dash-index/dash-index.module';
import { DashEventsModule } from './dash-events/dash-events.module';
import { DashReleasesModule } from './dash-releases/dash-releases.module';
import { DashPressModule } from './dash-press/dash-press.module';
import { SharedComponentsModule } from "../../../components/components.shared.module";
import { DashVenuesModule } from "./dash-venues/dash-venues.module";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    SharedComponentsModule,
    DashEventsModule,
    DashIndexModule,
    DashOrdersModule,
    DashPressModule,
    DashProductsModule,
    DashReleasesModule,
    DashScheduleModule,
    DashVenuesModule,
  ],
})
export class DashboardModule {}
