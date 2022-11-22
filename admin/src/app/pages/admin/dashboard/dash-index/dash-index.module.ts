import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashIndexComponent } from './dash-index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from "../../../../components/components.shared.module";

@NgModule({
  declarations: [DashIndexComponent],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule],
  exports: [DashIndexComponent],
})
export class DashIndexModule {}
