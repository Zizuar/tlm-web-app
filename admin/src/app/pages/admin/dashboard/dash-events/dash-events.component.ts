import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { faPlusSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashEventsNewEventModalComponent } from './dash-events-new-event-modal/dash-events-new-event-modal.component';
import { Store } from '@ngrx/store';
import { ExistingScheduledEvent } from "../../../../core/models/scheduled-event.model";
import { selectEventsAscendingByDate, selectEventsFetched } from "../../../../store/events/events.selectors";
import { fetchEvents } from "../../../../store/events/events.actions";

@Component({
  selector: 'app-dash-events',
  templateUrl: './dash-events.component.html',
  styleUrls: ['./dash-events.component.scss'],
})
export class DashEventsComponent implements OnInit, OnDestroy {
  plusSquare: IconDefinition = faPlusSquare;

  events: Observable<ExistingScheduledEvent[]> = this.store.select(selectEventsAscendingByDate);

  private readonly mainSub = new Subscription();

  constructor(private readonly store: Store, private readonly modalService: NgbModal) {}

  ngOnInit() {
    this.mainSub.add(
      this.store
        .select(selectEventsFetched)
        .pipe(
          tap((eventsFetched: boolean) => {
            if (!eventsFetched) {
              this.store.dispatch(fetchEvents());
            }
          })
        )
        .subscribe()
    );
  }

  openNewEventModal() {
    this.modalService.open(DashEventsNewEventModalComponent, {
      size: 'lg',
    });
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }
}
