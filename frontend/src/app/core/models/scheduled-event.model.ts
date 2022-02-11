export interface NewScheduledEvent {
  date: Date;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  fbEventLink?: string;
}

export interface ExistingScheduledEvent {
  _id: string;
  createdAt: Date;
  date: Date;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  fbEventLink?: string;
}
