import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  NewScheduledEvent,
  ExistingScheduledEvent,
} from '../core/models/scheduled-event.model';
import * as moment from 'moment';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends ApiBaseService {
  eventsApiUrl = `${environment.apiBaseUrl}/v1/events`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllEvents(): Observable<ExistingScheduledEvent[]> {
    return this.http.get<ExistingScheduledEvent[]>(this.eventsApiUrl).pipe(
      map((apiEventArray) =>
        apiEventArray.map<ExistingScheduledEvent>((apiEvent) => {
          return {
            ...apiEvent,
            date: new Date(apiEvent.date),
            createdAt: new Date(apiEvent.createdAt),
          };
        })
      )
    );
  }

  getEvent(id: string): Observable<ExistingScheduledEvent> {
    return this.http
      .get<ExistingScheduledEvent>(`${this.eventsApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  postEvent(newEvent: NewScheduledEvent): Observable<ExistingScheduledEvent> {
    return this.http
      .post<ExistingScheduledEvent>(this.eventsApiUrl, newEvent)
      .pipe(catchError(this.handleError));
  }

  patchEvent(
    updatedEvent: ExistingScheduledEvent
  ): Observable<ExistingScheduledEvent> {
    return this.http
      .patch<ExistingScheduledEvent>(
        `${this.eventsApiUrl}/${updatedEvent._id}`,
        updatedEvent
      )
      .pipe(catchError(this.handleError));
  }

  deleteEvent(id: string): Observable<ExistingScheduledEvent> {
    return this.http
      .delete<ExistingScheduledEvent>(`${this.eventsApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // STATIC HELPER FUNCTIONS

  static filterFutureEvents(
    events: ExistingScheduledEvent[]
  ): ExistingScheduledEvent[] {
    const now = moment();
    return events.filter((event) => {
      // only compare the day, not the actual start time
      return !now.isAfter(moment(event.date), 'day');
    });
  }

  static sortEventsByDateDescending(
    a: ExistingScheduledEvent,
    b: ExistingScheduledEvent
  ) {
    return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
  }

  static sortEventsByDateAscending(
    a: ExistingScheduledEvent,
    b: ExistingScheduledEvent
  ) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  }
}
