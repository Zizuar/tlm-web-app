import {createAction, props} from "@ngrx/store";
import {ExistingEventVenue, NewEventVenue} from "../../core/models/event-venue.model";

export enum VenuesActionTypes {
  FETCH_VENUES = '[Venues] Fetch venues',
  FETCH_VENUES_COMPLETED = '[Venues] Fetch venues completed',
  CREATE_VENUE = '[Venues] Create venue',
  CREATE_VENUE_COMPLETED = '[Venues] Create venue completed',
  UPDATE_VENUE = '[Venues] Update venue',
  UPDATE_VENUE_COMPLETED = '[Venues] Update venue completed',
  REMOVE_VENUE = '[Venues] Remove venue',
  REMOVE_VENUE_COMPLETED = '[Venues] Remove venue completed',
}

export const fetchVenues = createAction(VenuesActionTypes.FETCH_VENUES);

export const fetchVenuesCompleted = createAction(
  VenuesActionTypes.FETCH_VENUES_COMPLETED,
  props<{ venues: ExistingEventVenue[] }>()
);

export const createVenue = createAction(VenuesActionTypes.CREATE_VENUE, props<{ venue: NewEventVenue }>());
export type CreateVenue = ReturnType<typeof createVenue>;

export const createVenueCompleted = createAction(VenuesActionTypes.CREATE_VENUE_COMPLETED);

export const updateVenue = createAction(
  VenuesActionTypes.UPDATE_VENUE,
  props<{ updatedVenue: ExistingEventVenue }>()
);
export type UpdateVenue = ReturnType<typeof updateVenue>;

export const updateVenueCompleted = createAction(VenuesActionTypes.UPDATE_VENUE_COMPLETED);

export const removeVenue = createAction(VenuesActionTypes.REMOVE_VENUE, props<{ id: string }>());
export type RemoveVenue = ReturnType<typeof removeVenue>;

export const removeVenueCompleted = createAction(VenuesActionTypes.REMOVE_VENUE_COMPLETED);
