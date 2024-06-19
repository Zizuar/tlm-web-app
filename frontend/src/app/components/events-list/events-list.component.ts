import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import {
  selectEventsFetched,
  selectFutureEvents,
  selectShowEventsInBrowserTimezone,
} from '../../store/events/events.selectors';
import { EventsService } from '../../services/events.service';
import { Store } from '@ngrx/store';
import { fetchEvents, setShowEventsInBrowserTimezone } from '../../store/events/events.actions';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronRight, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit, OnDestroy {
  @Input() showAllEvents = false;

  DEFAULT_EVENTS_TO_SHOW = 3;

  faEnvelope: IconDefinition = faEnvelope;
  faCog: IconDefinition = faCog;

  @ViewChild('collapse', { static: true }) collapse: NgbCollapse | undefined;
  futureEvents: ExistingScheduledEvent[] = [];
  numberOfEventsToShow = 0;
  eventsToShow: BehaviorSubject<ExistingScheduledEvent[]> = new BehaviorSubject(
    this.futureEvents.slice(0, this.numberOfEventsToShow),
  );

  isSettingsCollapsed = true;
  $showEventsInBrowserTimezone: Observable<boolean> = this.store.select(selectShowEventsInBrowserTimezone);
  showEventsInBrowserTimezone: boolean = false;

  areEventsFetched: Observable<boolean> = this.store.select(selectEventsFetched);

  subscriptions = new Subscription();

  constructor(
    private readonly eventsService: EventsService,
    private readonly store: Store,
  ) {
    this.subscriptions.add(
      this.store
        .select(selectFutureEvents)
        .pipe(
          tap((futureEvents) => {
            this.futureEvents = futureEvents;
            this.numberOfEventsToShow =
              this.futureEvents.length <= this.DEFAULT_EVENTS_TO_SHOW || this.showAllEvents
                ? this.futureEvents.length
                : this.DEFAULT_EVENTS_TO_SHOW;
            this.refreshEvents(this.numberOfEventsToShow);
          }),
        )
        .subscribe(),
    );
  }

  ngOnInit() {
    this.subscriptions.add(
      this.areEventsFetched.subscribe((areEventsFetched) => {
        if (!areEventsFetched) {
          this.store.dispatch(fetchEvents());
        }
      }),
    );
    this.subscriptions.add(
      this.$showEventsInBrowserTimezone.subscribe((showEventsInBrowserTimezone) => {
        this.showEventsInBrowserTimezone = showEventsInBrowserTimezone;
      }),
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

  changeShowEventsInBrowserTimezone(showInBrowserTimezone: boolean) {
    this.store.dispatch(setShowEventsInBrowserTimezone({ showEventsInBrowserTimezone: showInBrowserTimezone }));
  }

  private refreshEvents(numberToShow: number) {
    this.numberOfEventsToShow = numberToShow;
    this.eventsToShow.next(
      this.futureEvents.sort(EventsService.sortEventsByDateDescending).slice(0, this.numberOfEventsToShow),
    );
  }

  protected readonly faChevronRight = faChevronRight;
  protected readonly faChevronDown = faChevronDown;
}
