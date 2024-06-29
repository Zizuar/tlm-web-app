import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedComponentsModule } from "../../../../components/components.shared.module";
import { DashVenuesComponent } from "./dash-venues.component";
import { DashVenuesModalComponent } from "./dash-venues-modal/dash-venues-modal.component";
import { DashVenuesListItemComponent } from "./dash-venues-list-item/dash-venues-list-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbDatepickerModule, NgbPaginationModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [DashVenuesComponent, DashVenuesModalComponent, DashVenuesListItemComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FontAwesomeModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPaginationModule
  ],
  exports: [DashVenuesComponent],
})
export class DashVenuesModule { }
