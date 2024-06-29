import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true, type: Date })
  date: Date;

  @Prop({ required: false, type: Date })
  endDate: Date;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  venue: string;

  @Prop({ required: true })
  town: string;

  @Prop()
  venueLink?: string;

  @Prop()
  fbEventLink?: string;

  @Prop()
  timezone?: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
