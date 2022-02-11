import { Component } from '@angular/core';
import { NewScheduledEvent } from '../../../../../core/models/scheduled-event.model';
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { createEvent } from '../../../../../store/events/events.actions';
import * as moment from 'moment-timezone';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './dash-events-new-event-modal.component.html',
  styleUrls: ['./dash-events-new-event-modal.component.scss'],
})
export class DashEventsNewEventModalComponent {
  moment = moment;
  timezones: string[] = moment.tz.zonesForCountry('US');

  event: NewScheduledEvent;
  today: Date;
  minDate;

  formDate: NgbDateStruct | undefined;
  formTime: NgbTimeStruct | undefined;
  formTimezone: string = 'America/New_York';

  faCalendar: IconDefinition = faCalendarDay;

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store
  ) {
    const now = new Date();
    this.event = {
      date: now,
      name: '',
      venue: '',
      town: '',
      venueLink: '',
      fbEventLink: '',
    };
    this.today = now;
    // configure datepicker
    this.minDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
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

  saveNewEvent() {
    this.event.date = this.buildTime();
    this.store.dispatch(createEvent({ event: this.event }));
    this.activeModal.dismiss();
  }
}
