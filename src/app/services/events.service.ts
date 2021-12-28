import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface ScheduledEvent {
  date: Date;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  eventLink?:string;
}

interface ApiEvent {
  date: string;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  eventLink?:string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventsApiUrl = '/api/v1/events';

  constructor(private readonly http: HttpClient) { }

  getAllEvents() {
    return this.http.get<ScheduledEvent[]>(this.eventsApiUrl);
  }

  getFutureEvents(): Observable<ScheduledEvent[]> {
    return this.http.get<ApiEvent[]>(this.eventsApiUrl).pipe(
      map(apiEventArray => apiEventArray.map<ScheduledEvent>(apiEvent => {
        return {
          ...apiEvent,
          date: new Date(apiEvent.date)
        }
      })),
      map(scheduledEventArray => {
        const now = new Date();
        return scheduledEventArray.filter(event => {
          return event.date > now
        })
      })
    );
  }
}
