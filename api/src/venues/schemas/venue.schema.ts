import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VenueDocument = Venue & Document;

@Schema({ timestamps: true })
export class Venue {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  eventName: string;

  @Prop({ required: true })
  town: string;

  @Prop({ required: true })
  state: string;

  @Prop()
  link?: string;

  @Prop({ required: true })
  timezone: string;

  @Prop({ required: true })
  startHour: number;

  @Prop({ required: true })
  startMinute: number;

  @Prop()
  endHour: number;

  @Prop()
  endMinute: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
