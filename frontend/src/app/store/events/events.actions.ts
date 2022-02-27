import { createAction, props } from '@ngrx/store';
import {
  ExistingScheduledEvent,
  NewScheduledEvent,
} from '../../core/models/scheduled-event.model';

export enum EventsActionTypes {
  FETCH_EVENTS = '[Events] Fetch events',
  FETCH_EVENTS_COMPLETED = '[Events] Fetch events completed',
  CREATE_EVENT = '[Events] Create event',
  CREATE_EVENT_COMPLETED = '[Events] Create event completed',
  UPDATE_EVENT = '[Events] Update event',
  UPDATE_EVENT_COMPLETED = '[Events] Update event completed',
  REMOVE_EVENT = '[Events] Remove event',
  REMOVE_EVENT_COMPLETED = '[Events] Remove event completed',
}

export const fetchEvents = createAction(EventsActionTypes.FETCH_EVENTS);

export const fetchEventsCompleted = createAction(
  EventsActionTypes.FETCH_EVENTS_COMPLETED,
  props<{ events: ExistingScheduledEvent[] }>()
);

export const createEvent = createAction(
  EventsActionTypes.CREATE_EVENT,
  props<{ event: NewScheduledEvent }>()
);
export type CreateEvent = ReturnType<typeof createEvent>;

export const createEventCompleted = createAction(
  EventsActionTypes.CREATE_EVENT_COMPLETED
);

export const updateEvent = createAction(
  EventsActionTypes.UPDATE_EVENT,
  props<{ updatedEvent: ExistingScheduledEvent }>()
);
export type UpdateEvent = ReturnType<typeof updateEvent>;

export const updateEventCompleted = createAction(
  EventsActionTypes.UPDATE_EVENT_COMPLETED
);

export const removeEvent = createAction(
  EventsActionTypes.REMOVE_EVENT,
  props<{ id: string }>()
);
export type RemoveEvent = ReturnType<typeof removeEvent>;

export const removeEventCompleted = createAction(
  EventsActionTypes.REMOVE_EVENT_COMPLETED
);
