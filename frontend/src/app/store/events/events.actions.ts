import { createAction, props } from '@ngrx/store';
import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';

export enum EventsActionTypes {
  FETCH_EVENTS = '[Events] Fetch events',
  FETCH_EVENTS_COMPLETED = '[Events] Fetch events completed',
}

export const fetchEvents = createAction(EventsActionTypes.FETCH_EVENTS);

export const fetchEventsCompleted = createAction(
  EventsActionTypes.FETCH_EVENTS_COMPLETED,
  props<{ events: ExistingScheduledEvent[] }>()
);
