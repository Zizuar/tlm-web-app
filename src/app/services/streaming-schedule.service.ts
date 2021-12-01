import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface StreamingScheduleElement {
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

@Injectable({
  providedIn: 'root'
})
export class StreamingScheduleService {

  schedule: StreamingScheduleElement[] = [
    {
      day: 'Monday',
      dayShort: 'Mon',
      isOff: false,
      startHour: '10',
      startAMPM: 'AM',
      endHour: '6',
      endAMPM: 'PM',
      contentLong: 'Loopstation',
      contentShort: 'Loops',
      contentFlexible: false
    },
    {
      day: 'Tuesday',
      dayShort: 'Tue',
      isOff: false,
      startHour: '2',
      startAMPM: 'PM',
      startFlexible: true,
      endHour: '9',
      endAMPM: 'PM',
      contentLong: 'Loopstation',
      contentShort: 'Loops',
      contentFlexible: false
    },
    {
      day: 'Wednesday',
      dayShort: 'Wed',
      isOff: false,
      startHour: '10',
      startAMPM: 'AM',
      endHour: '6',
      endAMPM: 'PM',
      contentLong: 'Acoustic',
      contentShort: 'Acoustic',
      contentFlexible: false
    },
    {
      day: 'Thursday',
      dayShort: 'Thu',
      isOff: false,
      startHour: '1',
      startAMPM: 'PM',
      startFlexible: true,
      endHour: '9',
      endAMPM: 'PM',
      contentLong: 'Loopstation',
      contentShort: 'Loops',
      contentFlexible: false
    },
    {
      day: 'Friday',
      dayShort: 'Fri',
      isOff: true,
      contentLong: 'Rest',
      contentShort: 'Rest',
      contentFlexible: false
    },
    {
      day: 'Saturday',
      dayShort: 'Sat',
      isOff: false,
      startHour: '2',
      startAMPM: 'PM',
      startFlexible: true,
      endHour: '9',
      endAMPM: 'PM',
      contentLong: 'Music/Games',
      contentShort: 'Varies',
      contentFlexible: true
    },
    {
      day: 'Sunday',
      dayShort: 'Sun',
      isOff: false,
      startHour: '2',
      startAMPM: 'PM',
      startFlexible: false,
      endHour: '9',
      endAMPM: 'PM',
      contentLong: 'Loopstation',
      contentShort: 'Loops',
      contentFlexible: false
    },
  ]

  constructor() { }

  getSchedule(): Observable<StreamingScheduleElement[]> {
    return of(this.schedule);
  }
}
