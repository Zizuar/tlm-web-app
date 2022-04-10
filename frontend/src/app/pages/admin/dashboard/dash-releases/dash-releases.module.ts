import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashReleasesComponent } from './dash-releases.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';
import { DashReleasesListItemComponent } from './pages/admin/dashboard/dash-releases/dash-releases-list-item/dash-releases-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashReleasesComponent, DashReleasesListItemComponent],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule],
  exports: [DashReleasesComponent],
})
export class DashReleasesModule {}
