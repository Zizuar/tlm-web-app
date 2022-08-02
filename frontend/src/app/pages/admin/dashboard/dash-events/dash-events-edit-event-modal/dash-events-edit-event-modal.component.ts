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
import { MinDate } from '../dash-events-new-event-modal/dash-events-new-event-modal.component';
import { EventsService } from '../../../../../services/events.service';

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
    private readonly store: Store
  ) {
    // configure datepicker
    this.minDate = this.minEndDate = {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate(),
    };
  }

  ngOnInit() {
    this.minEndDate = {
      year: this.event.date.getFullYear(),
      month: this.event.date.getMonth() + 1,
      day: this.event.date.getDate(),
    };
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
    if (this.event.endDate) {
      this.formEndDateEnabled = true;
      const tzEndDate = moment.tz(this.event.date, 'America/New_York');
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
  }

  updateEvent() {
    if (!this.formDate || !this.formTime) {
      return;
    }
    this.event.date = EventsService.buildDateFromDatepicker(
      this.formDate,
      this.formTime,
      this.formTimezone
    );
    if (this.formEndDateEnabled && this.formEndDate && this.formEndTime) {
      this.event.endDate = EventsService.buildDateFromDatepicker(
        this.formEndDate,
        this.formEndTime,
        this.formTimezone
      );
    } else if (!this.formEndDateEnabled) {
      this.event.endDate = null;
    }
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
