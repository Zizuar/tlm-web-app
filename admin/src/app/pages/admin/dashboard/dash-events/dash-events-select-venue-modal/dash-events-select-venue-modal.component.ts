import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NgbActiveModal, NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";
import {
  selectVenuesAscendingByName,
  selectVenuesFetched
} from "../../../../../store/venues/venues.selectors";
import { debounceTime, distinctUntilChanged, Observable, OperatorFunction, switchMap, take, tap } from "rxjs";
import { fetchVenues } from "../../../../../store/venues/venues.actions";
import { map } from "rxjs/operators";
import { ExistingEventVenue } from "../../../../../core/models/event-venue.model";

@Component({
  selector: 'app-dash-events-select-venue-modal',
  templateUrl: './dash-events-select-venue-modal.component.html',
  styleUrl: './dash-events-select-venue-modal.component.scss'
})
export class DashEventsSelectVenueModalComponent implements OnInit {
  model: ExistingEventVenue | undefined | null;

  areVenuesFetched = this.store.select(selectVenuesFetched);
  venues = this.store.select(selectVenuesAscendingByName);

  private selectedVenue: ExistingEventVenue | null = null;

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store,
  ) {}

  ngOnInit() {
    this.areVenuesFetched.pipe(
      tap((fetched) => {
        if (!fetched) {
          this.store.dispatch(fetchVenues());
        }
      }),
      take(1)
    ).subscribe()
  }

  public onSearchEventFocus(e: Event): void {
    e.stopPropagation();
    setTimeout(() => {
      const inputEvent: Event = new Event('input');
      e.target && e.target.dispatchEvent(inputEvent);
    }, 0);
  }

  searchVenues: OperatorFunction<string, readonly ExistingEventVenue[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this.venues.pipe(
          map(venuesArray =>
            venuesArray
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
          )
        )
      )
    );

  formatter = (venue: ExistingEventVenue) => venue.name;

  selectVenue(event: NgbTypeaheadSelectItemEvent) {
    this.selectedVenue = event.item;
  }

  confirmVenue() {
    this.activeModal.close(this.selectedVenue);
  }
}
