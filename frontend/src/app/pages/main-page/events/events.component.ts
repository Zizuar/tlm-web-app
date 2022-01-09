import { Component, OnDestroy, ViewChild } from '@angular/core';
import { EventsService, ScheduledEvent } from '../../../services/events.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnDestroy{
  DEFAULT_EVENTS_TO_SHOW = 3;

  @ViewChild('collapse', { static: true }) collapse: NgbCollapse | undefined;
  futureEvents: ScheduledEvent[] = [];
  numberOfEventsToShow = 0;
  eventsToShow: BehaviorSubject<ScheduledEvent[]> =
    new BehaviorSubject(this.futureEvents.slice(0, this.numberOfEventsToShow));

  subscriptions = new Subscription();

  constructor(
    private readonly eventsService: EventsService,
  ) {
    this.eventsService.getFutureEvents().subscribe(eventList => {
      this.futureEvents = eventList;
      this.numberOfEventsToShow = this.futureEvents.length <= this.DEFAULT_EVENTS_TO_SHOW
        ? this.futureEvents.length : this.DEFAULT_EVENTS_TO_SHOW;
      this.refreshEvents(this.numberOfEventsToShow);
    });
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

  private refreshEvents(numberToShow: number) {
    this.numberOfEventsToShow = numberToShow;
    this.eventsToShow.next(this.futureEvents.slice(0, this.numberOfEventsToShow));
  }

}
