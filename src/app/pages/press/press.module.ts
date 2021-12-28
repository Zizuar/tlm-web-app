import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import {SharedComponentsModule} from '../../components/components.shared.module';
import { PressReleaseCarouselComponent } from './press-release-carousel/press-release-carousel.component';
import { PressPhotosComponent } from './press-photos/press-photos.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { PressReleaseDetailsComponent } from './press-releases/press-release-details/press-release-details.component';



@NgModule({
  declarations: [
    PressComponent,
    PressReleaseCarouselComponent,
    PressPhotosComponent,
    PressReleasesComponent,
    PressReleaseDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgbCarouselModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class PressModule { }
