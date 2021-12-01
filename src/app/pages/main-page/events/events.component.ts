import { Component, OnDestroy, ViewChild } from '@angular/core';
import { EventsService, ScheduledEvent } from '../../../services/events.service';
import { Subscription } from 'rxjs';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnDestroy{
  @ViewChild('collapse', { static: true }) collapse: NgbCollapse | undefined;
  futureEvents: ScheduledEvent[] = [];
  isCollapsed = true;
  subscriptions = new Subscription();

  constructor(
    private readonly eventsService: EventsService,
  ) {
    this.eventsService.getFutureEvents().subscribe(eventlist => this.futureEvents = eventlist);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
