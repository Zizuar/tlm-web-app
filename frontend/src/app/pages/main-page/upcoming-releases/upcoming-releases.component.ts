import { Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';
import { ExistingRelease } from '../../../core/models/release.model';

@Component({
  selector: 'app-upcoming-releases',
  templateUrl: './upcoming-releases.component.html',
  styleUrls: ['./upcoming-releases.component.scss'],
})
export class UpcomingReleasesComponent {
  @Input() countdowns: ExistingRelease[] | null | undefined;
  dayjs = dayjs;

  constructor() {}
}
