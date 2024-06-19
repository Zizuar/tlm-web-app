import { StreamingScheduleElement } from '../../core/models/schedule-day.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as scheduleActions from './schedule.actions';

export interface ScheduleState {
  schedule: StreamingScheduleElement[];
  scheduleFetched: boolean;
}

export const initialState: ScheduleState = {
  schedule: [],
  scheduleFetched: false,
};

const scheduleReducerInternal = createReducer(
  initialState,

  on(scheduleActions.fetchScheduleCompleted, (state, { schedule }): ScheduleState => {
    return {
      ...state,
      schedule,
      scheduleFetched: true,
    };
  }),
);

export function scheduleReducer(state: ScheduleState | undefined, action: Action): ScheduleState {
  return scheduleReducerInternal(state, action);
}
