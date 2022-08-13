import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPressComponent } from './dash-press.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';
import { DashPressListItemComponent } from './dash-press-list-item/dash-press-list-item.component';
import { DashPressEditPreleaseModalComponent } from './dash-press-edit-prelease-modal/dash-press-edit-prelease-modal.component';
import { DashPressNewPreleaseModalComponent } from './dash-press-new-prelease-modal/dash-press-new-prelease-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashPressComponent,
    DashPressListItemComponent,
    DashPressEditPreleaseModalComponent,
    DashPressNewPreleaseModalComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule, FormsModule, NgbDatepickerModule],
  exports: [DashPressComponent],
})
export class DashPressModule {}
