import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashEventsComponent } from './dash-events.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';

@NgModule({
  declarations: [DashEventsComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [DashEventsComponent],
})
export class DashEventsModule {}
