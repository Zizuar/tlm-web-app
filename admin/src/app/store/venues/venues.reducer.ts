import {ExistingEventVenue} from "../../core/models/event-venue.model";
import {Action, createReducer, on} from "@ngrx/store";
import * as venuesActions from "./venues.actions";

export interface VenuesState {
  venuesFetched: boolean;
  venues: ExistingEventVenue[];
}

export const initialState: VenuesState = {
  venuesFetched: false,
  venues: [],
};

const venuesReducerInternal = createReducer(
  initialState,

  on(venuesActions.fetchVenuesCompleted, (state, { venues }): VenuesState => {
    return {
      ...state,
      venues: venues,
      venuesFetched: true,
    };
  })
);

export function venuesReducer(state: VenuesState | undefined, action: Action): VenuesState {
  return venuesReducerInternal(state, action);
}
