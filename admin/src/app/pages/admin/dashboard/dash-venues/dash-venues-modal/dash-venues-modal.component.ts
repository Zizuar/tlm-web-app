import { Component, Input, OnInit } from '@angular/core';
import { ExistingEventVenue, NewEventVenue } from "../../../../../core/models/event-venue.model";
import { getCountry } from "countries-and-timezones";
import { NgbActiveModal, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import { Debug } from "../../../../../utils/Debug";
import { GeoUtils } from "../../../../../utils/GeoUtils";
import { createVenue, updateVenue } from "../../../../../store/venues/venues.actions";

@Component({
  selector: 'app-dash-venues-modal',
  templateUrl: './dash-venues-modal.component.html',
  styleUrl: './dash-venues-modal.component.scss'
})
export class DashVenuesModalComponent implements OnInit {
  @Input() isNew: boolean;
  @Input() venue: ExistingEventVenue | null;

  formVenue: NewEventVenue = {
    name: '',
    eventName: '',
    town: '',
    state: 'NH',
    timezone: 'America/New_York',
    startHour: 18,
    startMinute: 0,
    endHour: 21,
    endMinute: 0,
    link: undefined,
  }

  timezones: string[] = getCountry('US').timezones;
  states = GeoUtils.usStates;

  formTime: NgbTimeStruct | undefined;
  formEndTime: NgbTimeStruct | undefined;

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store
  ) {}

  ngOnInit() {
    if (this.venue) {
      this.formVenue = {
        name: this.venue.name,
        eventName: this.venue.eventName,
        town: this.venue.town,
        state: this.venue.state,
        timezone: this.venue.timezone,
        startHour: this.venue.startHour,
        startMinute: this.venue.startMinute,
        endHour: this.venue.endHour,
        endMinute: this.venue.endMinute,
        link: this.venue.link,
      };
      this.formTime = {
        hour: this.venue.startHour,
        minute: this.venue.startMinute,
        second: 0,
      };
      this.formEndTime = {
        hour: this.venue.endHour,
        minute: this.venue.endMinute,
        second: 0,
        };
    } else {
      this.formTime = {
        hour: 18,
        minute: 0,
        second: 0,
      }
      this.formEndTime = {
        hour: 21,
        minute: 0,
        second: 0,
      }
    }
  }

  updateVenue() {
    if (!this.venue) {
      return;
    }
    this.store.dispatch(updateVenue({ updatedVenue: {
        ...this.formVenue,
        _id: this.venue._id,
        createdAt: this.venue.createdAt,
      }
    }));
    this.activeModal.close();
  }

  createVenue() {
    this.store.dispatch(createVenue({ venue: this.formVenue }));
    this.activeModal.close();
  }

  updateFormTime() {
    this.formVenue.startHour = this.formTime?.hour ?? 0;
    this.formVenue.startMinute = this.formTime?.minute ?? 0;
  }

  updateFormEndTime() {
    this.formVenue.endHour = this.formEndTime?.hour ?? 0;
    this.formVenue.endMinute = this.formEndTime?.minute ?? 0;
  }
}
