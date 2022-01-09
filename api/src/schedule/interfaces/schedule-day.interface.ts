import { Document } from 'mongoose';

export interface ScheduleDay extends Document {
  dayId: number;
  day: string;
  dayShort: string;
  contentLong: string;
  contentShort: string;
  contentFlexible: boolean;
  isOff: boolean;
  startHour?: string;
  startAMPM?: string;
  startFlexible?: boolean;
  endHour?: string;
  endAMPM?: string;
}
