import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashScheduleTableComponent } from './dash-schedule-table/dash-schedule-table.component';
import { DashScheduleTableRowComponent } from './dash-schedule-table/dash-schedule-table-row/dash-schedule-table-row.component';
import { DashScheduleEditModalComponent } from './dash-schedule-edit-modal/dash-schedule-edit-modal.component';
import { DashScheduleComponent } from './dash-schedule.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../../../components/components.shared.module';

@NgModule({
  declarations: [
    DashScheduleComponent,
    DashScheduleTableComponent,
    DashScheduleTableRowComponent,
    DashScheduleEditModalComponent,
  ],
  imports: [CommonModule, FormsModule, SharedComponentsModule],
  exports: [DashScheduleComponent],
})
export class DashScheduleModule {}
