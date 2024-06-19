import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ExistingScheduledEvent } from '../../../core/models/scheduled-event.model';
import { Store } from '@ngrx/store';
import { selectShowEventsInBrowserTimezone } from '../../../store/events/events.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit, OnDestroy {
  @Input() scheduledEvent!: ExistingScheduledEvent;

  $showInBrowserTimezone = this.store.select(selectShowEventsInBrowserTimezone);

  dayjs = dayjs;
  startDayjs: dayjs.Dayjs;
  endDayjs: dayjs.Dayjs | null;
  duration = 0;

  private timezoneSub: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.timezoneSub = this.$showInBrowserTimezone.subscribe((showInBrowserTimezone) => {
      const timezone = showInBrowserTimezone ? dayjs.tz.guess() : this.scheduledEvent.timezone ?? 'America/New_York';
      this.startDayjs = dayjs.tz(this.scheduledEvent.date, timezone);
      this.endDayjs = this.scheduledEvent.endDate ? dayjs.tz(this.scheduledEvent.endDate, timezone) : null;
      if (this.endDayjs) {
        this.duration = dayjs.duration(this.endDayjs.diff(this.startDayjs)).asHours();
      }
    });
  }

  ngOnDestroy() {
    if (this.timezoneSub) {
      this.timezoneSub.unsubscribe();
    }
  }
}
