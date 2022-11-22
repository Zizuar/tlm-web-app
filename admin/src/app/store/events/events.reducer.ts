import { ExistingScheduledEvent } from '../../core/models/scheduled-event.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as eventsActions from './events.actions';

export interface EventsState {
  eventsFetched: boolean;
  events: ExistingScheduledEvent[];
}

export const initialState: EventsState = {
  eventsFetched: false,
  events: [],
};

const eventsReducerInternal = createReducer(
  initialState,

  on(eventsActions.fetchEventsCompleted, (state, { events }): EventsState => {
    return {
      ...state,
      events: events,
      eventsFetched: true,
    };
  })
);

export function eventsReducer(state: EventsState | undefined, action: Action): EventsState {
  return eventsReducerInternal(state, action);
}
