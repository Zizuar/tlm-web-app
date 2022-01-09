import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDayDocument = ScheduleDay & Document;

@Schema()
export class ScheduleDay {
  @Prop({ required: true })
  dayId: number;

  @Prop({ required: true })
  day: string;

  @Prop({ required: true })
  dayShort: string;

  @Prop({ required: true })
  contentLong: string;

  @Prop({ required: true })
  contentShort: string;

  @Prop({ required: true })
  contentFlexible: boolean;

  @Prop({ required: true })
  isOff: boolean;

  @Prop()
  startHour?: string;

  @Prop()
  startAMPM?: string;

  @Prop()
  startFlexible?: boolean;

  @Prop()
  endHour?: string;

  @Prop()
  endAMPM?: string;
}

export const ScheduleDaySchema = SchemaFactory.createForClass(ScheduleDay);
