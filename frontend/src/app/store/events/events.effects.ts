import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EventsService } from '../../services/events.service';
import { EventsActionTypes, fetchEventsCompleted } from './events.actions';
import { of, switchMap } from 'rxjs';
import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';

@Injectable()
export class EventsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly eventsService: EventsService,
  ) {}

  fetchEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActionTypes.FETCH_EVENTS),
      switchMap(() => {
        return this.eventsService.getAllEvents();
      }),
      switchMap((events: ExistingScheduledEvent[]) => {
        return of(fetchEventsCompleted({ events }));
      }),
    );
  });
}
