import { Document } from 'mongoose';

export interface Venue extends Document {
  name: string;
  eventName: string;
  town: string;
  state: string;
  link?: string;
  timezone: string;
  startHour: number;
  endHour: number;
  startMinute?: number;
  endMinute?: number;
}
