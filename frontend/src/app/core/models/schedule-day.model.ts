export interface StreamingScheduleElement {
  dayId: number;
  day: string;
  dayShort: string;
  contentLong: string;
  contentShort: string;
  contentFlexible: boolean;
  isOff: boolean;
  startHour?: string;
  startAMPM?: string;
  startFlexible?: boolean
  endHour?: string;
  endAMPM?: string;
}
