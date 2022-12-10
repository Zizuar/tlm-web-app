import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashReleasesComponent } from './dash-releases.component';
import { DashReleasesListItemComponent } from './dash-releases-list-item/dash-releases-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashReleasesEditReleaseModalComponent } from './dash-releases-edit-release-modal/dash-releases-edit-release-modal.component';
import { DashReleasesNewReleaseModalComponent } from './dash-releases-new-release-modal/dash-releases-new-release-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedComponentsModule } from "../../../../components/components.shared.module";

@NgModule({
  declarations: [
    DashReleasesComponent,
    DashReleasesListItemComponent,
    DashReleasesEditReleaseModalComponent,
    DashReleasesNewReleaseModalComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule, FormsModule, NgbDatepickerModule, NgbPaginationModule],
  exports: [DashReleasesComponent],
})
export class DashReleasesModule {}
