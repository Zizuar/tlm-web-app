import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashReleasesComponent } from './dash-releases.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';
import { DashReleasesListItemComponent } from './dash-releases-list-item/dash-releases-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashReleasesEditReleaseModalComponent } from './dash-releases-edit-release-modal/dash-releases-edit-release-modal.component';
import { DashReleasesNewReleaseModalComponent } from './dash-releases-new-release-modal/dash-releases-new-release-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashReleasesComponent,
    DashReleasesListItemComponent,
    DashReleasesEditReleaseModalComponent,
    DashReleasesNewReleaseModalComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule, FormsModule, NgbDatepickerModule],
  exports: [DashReleasesComponent],
})
export class DashReleasesModule {}
