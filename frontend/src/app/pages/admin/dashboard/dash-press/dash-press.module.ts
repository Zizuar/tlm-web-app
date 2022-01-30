import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPressComponent } from './dash-press.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';

@NgModule({
  declarations: [DashPressComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [DashPressComponent],
})
export class DashPressModule {}
