import { createAction, props } from '@ngrx/store';
import { StreamingScheduleElement } from '../../core/models/schedule-day.model';

export enum ScheduleActionTypes {
  FETCH_SCHEDULE = '[Schedule] Fetch schedule',
  FETCH_SCHEDULE_COMPLETED = '[Schedule] Fetch schedule completed',
}

export const fetchSchedule = createAction(ScheduleActionTypes.FETCH_SCHEDULE);

export const fetchScheduleCompleted = createAction(
  ScheduleActionTypes.FETCH_SCHEDULE_COMPLETED,
  props<{ schedule: StreamingScheduleElement[] }>(),
);
