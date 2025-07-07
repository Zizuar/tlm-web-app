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
    const tzDate = dayjs(this.event.date).tz(this.event.timezone ?? 'America/New_York');
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
      const tzEndDate = dayjs(this.event.endDate).tz(this.event.timezone ?? 'America/New_York');
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
    const date = new Date(
      this.formDate.year,
      this.formDate.month - 1,
      this.formDate.day,
      this.formTime.hour,
      this.formTime.minute,
    );
    this.event.date = date;

    if (this.formEndDateEnabled && this.formEndDate && this.formEndTime) {
      const endDate = new Date(
        this.formEndDate.year,
        this.formEndDate.month - 1,
        this.formEndDate.day,
        this.formEndTime.hour,
        this.formEndTime.minute,
      );
      this.event.endDate = endDate;
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
