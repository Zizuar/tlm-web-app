import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take, tap } from "rxjs";
import { faPlusSquare, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashEventsNewEventModalComponent } from './dash-events-new-event-modal/dash-events-new-event-modal.component';
import { Store } from '@ngrx/store';
import { ExistingScheduledEvent } from "../../../../core/models/scheduled-event.model";
import { selectEventsAscendingByDate, selectEventsFetched } from "../../../../store/events/events.selectors";
import { fetchEvents, removeEventsById } from "../../../../store/events/events.actions";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteConfirmDialogResult, DeleteConfirmModalComponent } from "../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-dash-events',
  templateUrl: './dash-events.component.html',
  styleUrls: ['./dash-events.component.scss'],
})
export class DashEventsComponent implements OnInit, OnDestroy {
  // pagination
  page = 1;
  pageSize = 25;
  pageSizeOptions = [10, 25, 50];

  plusSquare: IconDefinition = faPlusSquare;
  deleteIcon: IconDefinition = faTrash;

  events: Observable<ExistingScheduledEvent[]> = this.store.select(selectEventsAscendingByDate);
  pastEvents: ExistingScheduledEvent[] = [];

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
    this.mainSub.add(
      this.events.pipe(
        tap((events) => {
          this.pastEvents = events.filter((event) => event.date < new Date());
        })
      ).subscribe()
    );
  }

  openNewEventModal() {
    this.modalService.open(DashEventsNewEventModalComponent, {
      size: 'lg',
    });
  }

  pageSizeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pageSize = Number(input.value ?? '10');
  }

  async openDeleteOldEventsConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'past events';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deleteOldEvents();
      }
    } catch (e) {
      console.log('Dialog closed without answer');
    }
  }

  deleteOldEvents() {
    const idArray = this.pastEvents.map((event) => event._id);
    if (idArray.length === 0) {
      return;
    }
    this.store.dispatch(removeEventsById({ idArray }));
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }
}
