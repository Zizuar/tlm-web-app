import { Component } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { getCountry } from 'countries-and-timezones';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { NewScheduledEvent } from "../../../../../core/models/scheduled-event.model";
import { EventsService } from "../../../../../services/events.service";
import { createEvent } from "../../../../../store/events/events.actions";
import { Debug } from 'src/app/utils/Debug';
import {
  DashEventsSelectVenueModalComponent
} from "../dash-events-select-venue-modal/dash-events-select-venue-modal.component";
import { ExistingEventVenue } from "../../../../../core/models/event-venue.model";

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

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly modalService: NgbModal,
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

  async openVenueSelectModal() {
    const modal = this.modalService.open(DashEventsSelectVenueModalComponent);
    try {
      const result = await modal.result as (ExistingEventVenue | undefined);
      if (result) {
        this.event.name = result.eventName;
        this.event.venue = result.name;
        this.event.town = `${result.town}, ${result.state}`;
        this.event.venueLink = result.link;
        this.formTimezone = result.timezone ?? 'America/New_York';
        this.formTime = {
          hour: result.startHour,
          minute: result.startMinute,
          second: 0,
        };
        this.formEndTime = {
          hour: result.endHour,
          minute: result.endMinute,
          second: 0,
        };
        this.formEndDateEnabled = true;
      }
    } catch (_) {
      Debug.log('Dialog closed without answer');
    }
  }
}
