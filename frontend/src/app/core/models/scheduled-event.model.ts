export interface NewScheduledEvent {
  date: Date;
  endDate?: Date | null;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  fbEventLink?: string;
}

export interface ExistingScheduledEvent extends NewScheduledEvent {
  _id: string;
  createdAt: Date;
}
