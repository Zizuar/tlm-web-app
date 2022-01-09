import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {ScheduledEvent} from '../../../../services/events.service';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() scheduledEvent!: ScheduledEvent;

  moment = moment;

  constructor() { }

}
