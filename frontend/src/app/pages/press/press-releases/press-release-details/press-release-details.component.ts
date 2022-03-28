import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NewPressRelease } from '../../../../core/models/press-release.model';

@Component({
  selector: 'app-press-release-details',
  templateUrl: './press-release-details.component.html',
  styleUrls: ['./press-release-details.component.scss'],
})
export class PressReleaseDetailsComponent {
  pressRelease: NewPressRelease =
    this.activatedRoute.snapshot.data['pressRelease'];

  faChevronLeft: IconDefinition = faChevronLeft;

  moment = moment;

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
