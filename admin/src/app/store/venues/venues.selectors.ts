import {createFeatureSelector, createSelector} from "@ngrx/store";
import { VenuesState } from "./venues.reducer";

export const selectVenuesFeatureState = createFeatureSelector<VenuesState>('venues');

export const selectVenues = createSelector(selectVenuesFeatureState, (state: VenuesState) => state.venues);

export const selectVenuesAscendingByName = createSelector(selectVenuesFeatureState, (state: VenuesState) => {
  return [...state.venues].sort((a, b) => a.name.localeCompare(b.name));
});

export const selectVenuesDescendingByName = createSelector(selectVenuesFeatureState, (state: VenuesState) => {
  return [...state.venues].sort((a, b) => b.name.localeCompare(a.name));
});

export const selectVenuesFetched = createSelector(
  selectVenuesFeatureState,
  (state: VenuesState) => state.venuesFetched
);
