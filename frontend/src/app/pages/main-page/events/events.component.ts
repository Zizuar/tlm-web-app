import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ExistingScheduledEvent } from '../../../core/models/scheduled-event.model';
import { Store } from '@ngrx/store';
import {
  selectEventsFetched,
  selectFutureEvents,
} from '../../../store/events/events.selectors';
import { fetchEvents } from '../../../store/events/events.actions';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit, OnDestroy {
  DEFAULT_EVENTS_TO_SHOW = 3;

  @ViewChild('collapse', { static: true }) collapse: NgbCollapse | undefined;
  futureEvents: ExistingScheduledEvent[] = [];
  numberOfEventsToShow = 0;
  eventsToShow: BehaviorSubject<ExistingScheduledEvent[]> = new BehaviorSubject(
    this.futureEvents.slice(0, this.numberOfEventsToShow)
  );

  areEventsFetched: Observable<boolean> =
    this.store.select(selectEventsFetched);

  subscriptions = new Subscription();

  constructor(
    private readonly eventsService: EventsService,
    private readonly store: Store,
    private readonly viewportScroller: ViewportScroller
  ) {
    this.subscriptions.add(
      this.store
        .select(selectFutureEvents)
        .pipe(
          tap((futureEvents) => {
            this.futureEvents = futureEvents;
            this.numberOfEventsToShow =
              this.futureEvents.length <= this.DEFAULT_EVENTS_TO_SHOW
                ? this.futureEvents.length
                : this.DEFAULT_EVENTS_TO_SHOW;
            this.refreshEvents(this.numberOfEventsToShow);
          })
        )
        .subscribe()
    );
  }

  ngOnInit() {
    this.subscriptions.add(
      this.areEventsFetched.subscribe((areEventsFetched) => {
        if (!areEventsFetched) {
          this.store.dispatch(fetchEvents());
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  showMoreEvents() {
    this.refreshEvents(this.futureEvents.length);
  }

  showFewerEvents() {
    this.refreshEvents(this.DEFAULT_EVENTS_TO_SHOW);
  }

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  private refreshEvents(numberToShow: number) {
    this.numberOfEventsToShow = numberToShow;
    this.eventsToShow.next(
      this.futureEvents
        .slice(0, this.numberOfEventsToShow)
        .sort(EventsService.sortEventsByDateDescending)
    );
  }
}
