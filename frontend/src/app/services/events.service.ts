import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ExistingScheduledEvent } from '../core/models/scheduled-event.model';
import dayjs from 'dayjs';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends ApiBaseService {
  eventsApiUrl = `${environment.apiBaseUrl}/v1/events?futureOnly=true`;

  constructor(
    private readonly http: HttpClient,
    toastService: ToastService,
  ) {
    super(toastService);
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
        }),
      ),
    );
  }

  getEvent(id: string): Observable<ExistingScheduledEvent> {
    return this.http.get<ExistingScheduledEvent>(`${this.eventsApiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // STATIC HELPER FUNCTIONS

  static filterFutureEvents(events: ExistingScheduledEvent[]): ExistingScheduledEvent[] {
    const now = dayjs();
    return events.filter((event) => {
      // only compare the day, not the actual start time
      return !now.isAfter(event.date, 'day');
    });
  }

  static sortEventsByDateDescending(a: ExistingScheduledEvent, b: ExistingScheduledEvent) {
    return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
  }

  static sortEventsByDateAscending(a: ExistingScheduledEvent, b: ExistingScheduledEvent) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  }
}
