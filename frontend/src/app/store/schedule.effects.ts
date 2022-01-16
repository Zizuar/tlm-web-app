import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StreamingScheduleService } from '../services/streaming-schedule.service';
import { ScheduleActionTypes, UpdateScheduleAction } from './schedule.actions';
import * as scheduleActions from './schedule.actions';
import { of, switchMap } from 'rxjs';

@Injectable()
export class ScheduleEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly scheduleService: StreamingScheduleService
  ) {}

  fetchSchedule$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ScheduleActionTypes.FETCH_SCHEDULE),
      switchMap(() => this.scheduleService.getSchedule()),
      switchMap((schedule) => {
        return of(scheduleActions.fetchScheduleCompleted({ schedule }));
      })
    );
  });

  updateSchedule$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateScheduleAction>(ScheduleActionTypes.UPDATE_SCHEDULE),
      switchMap((action) => {
        return this.scheduleService.updateSchedule(action.schedule);
      }),
      switchMap(() => {
        return of(scheduleActions.updateScheduleCompleted());
      })
    );
  });

  updateScheduleCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ScheduleActionTypes.UPDATE_SCHEDULE_COMPLETED),
      switchMap(() => {
        return of(scheduleActions.fetchSchedule());
      })
    );
  });
}
