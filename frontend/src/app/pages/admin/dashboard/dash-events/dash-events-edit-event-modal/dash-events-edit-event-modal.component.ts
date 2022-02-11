import { Component, Input, OnInit } from '@angular/core';
import { ExistingScheduledEvent } from '../../../../../core/models/scheduled-event.model';
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { updateEvent } from '../../../../../store/events/events.actions';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './dash-events-edit-event-modal.component.html',
  styleUrls: ['./dash-events-edit-event-modal.component.scss'],
})
export class DashEventsEditEventModalComponent implements OnInit {
  @Input() event!: ExistingScheduledEvent;

  moment = moment;
  timezones: string[] = moment.tz.zonesForCountry('US');

  today: Date = new Date();
  minDate;

  formDate: NgbDateStruct | undefined;
  formTime: NgbTimeStruct | undefined;
  formTimezone: string = 'America/New_York';

  faCalendar: IconDefinition = faCalendarDay;

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store
  ) {
    // configure datepicker
    this.minDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
    };
  }

  ngOnInit() {
    const tzDate = moment.tz(this.event.date, 'America/New_York');
    this.formDate = {
      year: tzDate.year(),
      month: tzDate.month() + 1,
      day: tzDate.date(),
    };
    this.formTime = {
      hour: tzDate.hour(),
      minute: tzDate.minute(),
      second: 0,
    };
  }

  private buildTime(): Date {
    // build date from date and timepicker data
    const momentDate = moment.tz(
      `${this.formDate?.year}-${this.formDate?.month
        .toString()
        .padStart(2, '0')}-${this.formDate?.day
        .toString()
        .padStart(2, '0')}T${this.formTime?.hour
        .toString()
        .padStart(2, '0')}:${this.formTime?.minute
        .toString()
        .padStart(2, '0')}`,
      this.formTimezone
    );
    return momentDate.toDate();
  }

  updateEvent() {
    this.event.date = this.buildTime();
    this.store.dispatch(updateEvent({ updatedEvent: this.event }));
    this.activeModal.dismiss();
  }
}
