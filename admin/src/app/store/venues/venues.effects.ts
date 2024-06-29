import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VenuesService } from "../../services/venues.service";
import { ToastService } from "../../services/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CreateVenue,
  createVenueCompleted,
  fetchVenues,
  fetchVenuesCompleted,
  RemoveVenue,
  removeVenueCompleted,
  UpdateVenue,
  updateVenueCompleted,
  VenuesActionTypes
} from "./venues.actions";
import { of, switchMap } from "rxjs";
import { ExistingEventVenue } from "../../core/models/event-venue.model";

@Injectable()
export class VenuesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly venuesService: VenuesService,
    private readonly toastService: ToastService,
    private readonly modalService: NgbModal,
  ) {}

  fetchVenues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActionTypes.FETCH_VENUES),
      switchMap(() => {
        return this.venuesService.getAllVenues();
      }),
      switchMap((venues: ExistingEventVenue[]) => {
        return of(fetchVenuesCompleted({ venues }));
      })
    );
  });

  createVenue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreateVenue>(VenuesActionTypes.CREATE_VENUE),
      switchMap((action) => {
        return this.venuesService.postVenue(action.venue);
      }),
      switchMap(() => {
        return of(createVenueCompleted());
      })
    );
  });

  createVenueCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActionTypes.CREATE_VENUE_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: "Venue created successfully",
          classname: "bg-success text-light",
          options: {
            delay: 10000,
          },
        });
        return of(fetchVenues());
      })
    );
  });

  updateVenue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateVenue>(VenuesActionTypes.UPDATE_VENUE),
      switchMap((action) => {
        return this.venuesService.patchVenue(action.updatedVenue);
      }),
      switchMap(() => {
        return of(updateVenueCompleted());
      })
    );
  });

  updateVenueCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActionTypes.UPDATE_VENUE_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: "Venue updated successfully",
          classname: "bg-success text-light",
          options: {
            delay: 10000,
          },
        });
        return of(fetchVenues());
      })
    );
  });

  removeVenue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RemoveVenue>(VenuesActionTypes.REMOVE_VENUE),
      switchMap((action) => {
        return this.venuesService.deleteVenue(action.id);
      }),
      switchMap(() => {
        return of(removeVenueCompleted());
      })
    );
  });

  removeVenueCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VenuesActionTypes.REMOVE_VENUE_COMPLETED),
      switchMap(() => {
        this.toastService.show({
          text: "Venue removed successfully",
          classname: "bg-success text-light",
          options: {
            delay: 10000,
          },
        });
        return of(fetchVenues());
      })
    );
  });
}
