import { createAction, props } from '@ngrx/store';
import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';

export enum EventsActionTypes {
  FETCH_EVENTS = '[Events] Fetch events',
  FETCH_EVENTS_COMPLETED = '[Events] Fetch events completed',
  SET_SHOW_EVENTS_IN_BROWSER_TIMEZONE = '[Events] Set whether to show events in browser timezone',
}

export const fetchEvents = createAction(EventsActionTypes.FETCH_EVENTS);

export const fetchEventsCompleted = createAction(
  EventsActionTypes.FETCH_EVENTS_COMPLETED,
  props<{ events: ExistingScheduledEvent[] }>(),
);

export const setShowEventsInBrowserTimezone = createAction(
  EventsActionTypes.SET_SHOW_EVENTS_IN_BROWSER_TIMEZONE,
  props<{ showEventsInBrowserTimezone: boolean }>(),
);
