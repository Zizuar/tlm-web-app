import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { getCountry } from 'countries-and-timezones';
import { MinDate } from '../dash-events-new-event-modal/dash-events-new-event-modal.component';
import { ExistingScheduledEvent } from "../../../../../core/models/scheduled-event.model";
import { EventsService } from "../../../../../services/events.service";
import { updateEvent } from "../../../../../store/events/events.actions";

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './dash-events-edit-event-modal.component.html',
  styleUrls: ['./dash-events-edit-event-modal.component.scss'],
})
export class DashEventsEditEventModalComponent implements OnInit {
  @Input() event!: ExistingScheduledEvent;

  timezones: string[] = getCountry('US').timezones;

  today: Date = new Date();
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
    // configure datepicker
    this.minDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
    };
  }

  ngOnInit() {
    const tzDate = dayjs.tz(this.event.date, 'America/New_York');
    this.minEndDate = {
      year: tzDate.year(),
      month: tzDate.month() + 1,
      day: tzDate.date(),
    };
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
    if (this.event.endDate) {
      this.formEndDateEnabled = true;
      const tzEndDate = dayjs.tz(this.event.endDate, 'America/New_York');
      this.formEndDate = {
        year: tzEndDate.year(),
        month: tzEndDate.month() + 1,
        day: tzEndDate.date(),
      };
      this.formEndTime = {
        hour: tzEndDate.hour(),
        minute: tzEndDate.minute(),
        second: 0,
      };
    }
    this.formTimezone = this.event.timezone ?? 'America/New_York';
  }

  updateEvent() {
    if (!this.formDate || !this.formTime) {
      return;
    }
    this.event.date = EventsService.buildDateFromDatepicker(this.formDate, this.formTime, this.formTimezone);
    if (this.formEndDateEnabled && this.formEndDate && this.formEndTime) {
      this.event.endDate = EventsService.buildDateFromDatepicker(this.formEndDate, this.formEndTime, this.formTimezone);
    } else if (!this.formEndDateEnabled) {
      this.event.endDate = null;
    }
    this.event.timezone = this.formTimezone;
    this.store.dispatch(updateEvent({ updatedEvent: this.event }));
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
