import {Component, Input} from '@angular/core';
import {Release} from '../../../services/releases.service';
import * as moment from 'moment';

@Component({
  selector: 'app-upcoming-releases',
  templateUrl: './upcoming-releases.component.html',
  styleUrls: ['./upcoming-releases.component.scss']
})
export class UpcomingReleasesComponent {
  @Input() countdowns: Release[] = [];
  moment = moment;

  constructor() { }

}
