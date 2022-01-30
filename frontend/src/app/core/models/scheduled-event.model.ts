export interface ScheduledEvent {
  date: Date;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  eventLink?: string;
}

export interface ApiEvent {
  date: string;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  eventLink?: string;
}
