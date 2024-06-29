export interface NewEventVenue {
  name: string;
  eventName: string;
  town: string;
  link?: string;
  timezone?: string;
  state: string;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface ExistingEventVenue extends NewEventVenue {
  _id: string;
  createdAt: Date;
}
