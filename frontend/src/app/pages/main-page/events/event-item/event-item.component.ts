import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { NewScheduledEvent } from '../../../../core/models/scheduled-event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent {
  @Input() scheduledEvent!: NewScheduledEvent;

  moment = moment;

  constructor() {}
}
