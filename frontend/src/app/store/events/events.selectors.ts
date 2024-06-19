import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducer';
import { EventsService } from '../../services/events.service';

export const selectEventsFeatureState = createFeatureSelector<EventsState>('events');

export const selectEvents = createSelector(selectEventsFeatureState, (state: EventsState) => state.events);

export const selectEventsAscendingByDate = createSelector(selectEventsFeatureState, (state: EventsState) => {
  return [...state.events].sort(EventsService.sortEventsByDateAscending);
});

export const selectFutureEvents = createSelector(selectEventsFeatureState, (state: EventsState) => {
  return EventsService.filterFutureEvents(state.events);
});

export const selectEventsFetched = createSelector(
  selectEventsFeatureState,
  (state: EventsState) => state.eventsFetched,
);

export const selectShowEventsInBrowserTimezone = createSelector(
  selectEventsFeatureState,
  (state: EventsState) => state.showEventsInBrowserTimezone,
);
