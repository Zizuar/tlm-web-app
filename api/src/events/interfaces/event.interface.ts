import { Document } from 'mongoose';

export interface Event extends Document {
  date: Date;
  name: string;
  venue: string;
  town: string;
  venueLink?: string;
  fbEventLink?: string;
}
