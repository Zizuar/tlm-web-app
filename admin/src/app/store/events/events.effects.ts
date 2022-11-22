import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EventsService } from '../../services/events.service';
import {
  CreateEvent,
  createEventCompleted,
  EventsActionTypes,
  fetchEvents,
  fetchEventsCompleted,
  RemoveEvent,
  removeEventCompleted,
  UpdateEvent,
  updateEventCompleted,
} from './events.actions';
import { of, switchMap } from 'rxjs';
import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class EventsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly eventsService: EventsService,
    private readonly toastService: ToastService
  ) {}

  fetchEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActionTypes.FETCH_EVENTS),
      switchMap(() => {
        return this.eventsService.getAllEvents();
      }),
      switchMap((events: ExistingScheduledEvent[]) => {
        return of(fetchEventsCompleted({ events }));
      })
    );
  });

  createEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreateEvent>(EventsActionTypes.CREATE_EVENT),
      switchMap((action) => {
        return this.eventsService.postEvent(action.event);
      }),
      switchMap(() => {
        return of(createEventCompleted());
      })
    );
  });

  createEventCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActionTypes.CREATE_EVENT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Event successfully created',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchEvents());
      })
    );
  });

  updateEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateEvent>(EventsActionTypes.UPDATE_EVENT),
      switchMap((action) => {
        return this.eventsService.patchEvent(action.updatedEvent);
      }),
      switchMap(() => {
        return of(updateEventCompleted());
      })
    );
  });

  updateEventCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActionTypes.UPDATE_EVENT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Event successfully updated',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchEvents());
      })
    );
  });

  removeEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RemoveEvent>(EventsActionTypes.REMOVE_EVENT),
      switchMap((action) => {
        return this.eventsService.deleteEvent(action.id);
      }),
      switchMap(() => {
        return of(removeEventCompleted());
      })
    );
  });

  removeEventCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActionTypes.REMOVE_EVENT_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: 'Event successfully removed',
          classname: 'bg-success text-light',
          options: {
            delay: 10000,
          },
        });
        return of(fetchEvents());
      })
    );
  });
}
