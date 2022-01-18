import { createAction, props } from '@ngrx/store';
import { StreamingScheduleElement } from "../core/models/schedule-day.model";

export enum ScheduleActionTypes {
  FETCH_SCHEDULE = '[Schedule] Fetch schedule',
  FETCH_SCHEDULE_COMPLETED = '[Schedule] Fetch schedule completed',
  UPDATE_SCHEDULE = '[Schedule] Update schedule',
  UPDATE_SCHEDULE_COMPLETED = '[Schedule] Update schedule completed',
}

export const fetchSchedule = createAction(ScheduleActionTypes.FETCH_SCHEDULE);

export const fetchScheduleCompleted = createAction(
  ScheduleActionTypes.FETCH_SCHEDULE_COMPLETED,
  props<{ schedule: StreamingScheduleElement[] }>()
);

export const updateSchedule = createAction(
  ScheduleActionTypes.UPDATE_SCHEDULE,
  props<{ schedule: StreamingScheduleElement }>()
);
export type UpdateScheduleAction = ReturnType<typeof updateSchedule>;

export const updateScheduleCompleted = createAction(
  ScheduleActionTypes.UPDATE_SCHEDULE_COMPLETED
);
