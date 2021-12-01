import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface ScheduledEvent {
  date: Date;
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
  events: ScheduledEvent[] = [
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
    {
      date: new Date("2021-12-18T17:00:00"),
      name: "Live performance",
      venue: "Twin Barns Brewing Co.",
      town: "Meredith, NH",
      venueLink: "https://www.facebook.com/twinbarnsbrewing"
    },
  ]

  constructor() { }

  getEvents() {
    return of(this.events);
  }

  getFutureEvents(): Observable<ScheduledEvent[]> {
    const now = new Date();
    return of(this.events.filter(event => event.date > now));
  }
}
