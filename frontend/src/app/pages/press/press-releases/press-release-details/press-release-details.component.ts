import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { PressRelease } from '../../../../services/press-release.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-press-release-details',
  templateUrl: './press-release-details.component.html',
  styleUrls: ['./press-release-details.component.scss'],
})
export class PressReleaseDetailsComponent {
  pressRelease: PressRelease =
    this.activatedRoute.snapshot.data['pressRelease'];

  faChevronLeft: IconDefinition = faChevronLeft;

  moment = moment;

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
