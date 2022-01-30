import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashReleasesComponent } from './dash-releases.component';
import { SharedComponentsModule } from '../../../../components/components.shared.module';

@NgModule({
  declarations: [DashReleasesComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [DashReleasesComponent],
})
export class DashReleasesModule {}
