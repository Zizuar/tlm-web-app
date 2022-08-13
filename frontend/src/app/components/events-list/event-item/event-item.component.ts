import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ExistingScheduledEvent } from '../../../core/models/scheduled-event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() scheduledEvent!: ExistingScheduledEvent;

  moment = moment;
  startMoment: moment.Moment;
  endMoment: moment.Moment | null;
  duration = 0;

  constructor() {}

  ngOnInit() {
    this.startMoment = moment(this.scheduledEvent.date);
    this.endMoment = this.scheduledEvent.endDate ? moment(this.scheduledEvent.endDate) : null;
    if (this.endMoment) {
      this.duration = moment.duration(this.endMoment.diff(this.startMoment)).asHours();
    }
  }
}
