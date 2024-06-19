import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScheduleState } from './schedule.reducer';

export const selectScheduleFeatureState = createFeatureSelector<ScheduleState>('schedule');

export const selectSchedule = createSelector(selectScheduleFeatureState, (state: ScheduleState) => state.schedule);

export const selectIsScheduleFetched = createSelector(
  selectScheduleFeatureState,
  (state: ScheduleState) => state.scheduleFetched,
);
