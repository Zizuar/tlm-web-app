import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ExistingScheduledEvent } from '../../../core/models/scheduled-event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent {
  @Input() scheduledEvent!: ExistingScheduledEvent;

  moment = moment;

  constructor() {}
}
