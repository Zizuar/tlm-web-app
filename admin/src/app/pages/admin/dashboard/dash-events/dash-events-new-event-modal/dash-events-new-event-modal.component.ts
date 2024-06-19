import { Component } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { getCountry } from 'countries-and-timezones';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { NewScheduledEvent } from "../../../../../core/models/scheduled-event.model";
import { EventsService } from "../../../../../services/events.service";
import { createEvent } from "../../../../../store/events/events.actions";

export interface MinDate {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './dash-events-new-event-modal.component.html',
  styleUrls: ['./dash-events-new-event-modal.component.scss'],
})
export class DashEventsNewEventModalComponent {
  timezones: string[] = getCountry('US').timezones;

  event: NewScheduledEvent;
  today: Date;
  minDate: MinDate;
  minEndDate: MinDate;

  formDate: NgbDateStruct | undefined;
  formTime: NgbTimeStruct | undefined;
  formEndDateEnabled = false;
  formEndDate: NgbDateStruct | undefined;
  formEndTime: NgbTimeStruct | undefined;
  formTimezone: string = 'America/New_York';

  faCalendar: IconDefinition = faCalendarDay;

  constructor(public readonly activeModal: NgbActiveModal, private readonly store: Store) {
    const now = new Date();
    this.event = {
      date: now,
      name: '',
      venue: '',
      town: '',
      venueLink: '',
      fbEventLink: '',
      timezone: 'America/New_York',
    };
    this.today = now;
    // configure datepicker
    this.minDate = this.minEndDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
    };
  }

  saveNewEvent() {
    if (!this.formDate || !this.formTime) {
      return;
    }
    this.event.date = EventsService.buildDateFromDatepicker(this.formDate, this.formTime, this.formTimezone);
    if (this.formEndDateEnabled && this.formEndDate && this.formEndTime) {
      this.event.endDate = EventsService.buildDateFromDatepicker(this.formEndDate, this.formEndTime, this.formTimezone);
    }
    this.event.timezone = this.formTimezone;
    this.store.dispatch(createEvent({ event: this.event }));
    this.activeModal.dismiss();
  }

  updateEndDate() {
    if (this.formDate) {
      if (!this.formEndDate && this.formEndDateEnabled) {
        this.formEndDate = this.formDate;
      }
      this.minEndDate = {
        year: this.formDate.year,
        month: this.formDate.month,
        day: this.formDate.day,
      };
    }
  }
}
