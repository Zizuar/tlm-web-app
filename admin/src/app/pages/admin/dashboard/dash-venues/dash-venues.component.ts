import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlusSquare, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Observable, Subscription, tap } from "rxjs";
import { ExistingEventVenue } from "../../../../core/models/event-venue.model";
import { selectVenuesAscendingByName, selectVenuesFetched } from "../../../../store/venues/venues.selectors";
import { Store } from "@ngrx/store";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { fetchVenues } from "../../../../store/venues/venues.actions";
import { DashVenuesModalComponent } from "./dash-venues-modal/dash-venues-modal.component";

@Component({
  selector: 'app-dash-venues',
  templateUrl: './dash-venues.component.html',
  styleUrl: './dash-venues.component.scss'
})
export class DashVenuesComponent implements OnInit, OnDestroy {
  // pagination
  page = 1;
  pageSize = 25;
  pageSizeOptions = [10, 25, 50];

  plusSquare: IconDefinition = faPlusSquare;
  deleteIcon: IconDefinition = faTrash;

  venues: Observable<ExistingEventVenue[]> = this.store.select(selectVenuesAscendingByName);

  private readonly mainSub = new Subscription();

  constructor(private readonly store: Store, private readonly modalService: NgbModal) {}

  ngOnInit() {
    this.mainSub.add(
      this.store.select(selectVenuesFetched).pipe(
        tap((venuesFetched: boolean) => {
          if (!venuesFetched) {
            this.store.dispatch(fetchVenues());
          }
        })
      ).subscribe()
    );
  }

  openNewVenueModal() {
    const modalRef = this.modalService.open(DashVenuesModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.isNew = true;
    modalRef.componentInstance.initialValue = null;
  }

  pageSizeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pageSize = Number(input.value);
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }

}
