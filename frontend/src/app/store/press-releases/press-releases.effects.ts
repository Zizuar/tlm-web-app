import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PressReleaseService } from '../../services/press-release.service';
import {
  CreatePressRelease,
  createPressReleaseCompleted,
  fetchPressReleases,
  fetchPressReleasesCompleted,
  PressReleasesActionTypes,
  RemovePressRelease,
  removePressReleaseCompleted,
  UpdatePressRelease,
  updatePressReleaseCompleted,
} from './press-releases.actions';
import { of, switchMap } from 'rxjs';
import { ExistingPressRelease } from '../../core/models/press-release.model';

@Injectable()
export class PressReleasesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly pressReleaseService: PressReleaseService
  ) {}

  fetchPressReleases$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PressReleasesActionTypes.FETCH_PRESS_RELEASES),
      switchMap(() => {
        return this.pressReleaseService.getPressReleases();
      }),
      switchMap((pressReleases: ExistingPressRelease[]) => {
        return of(fetchPressReleasesCompleted({ pressReleases }));
      })
    );
  });

  createPressRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreatePressRelease>(PressReleasesActionTypes.CREATE_PRESS_RELEASE),
      switchMap((action) => {
        return this.pressReleaseService.postPressRelease(
          action.newPressRelease
        );
      }),
      switchMap(() => {
        return of(createPressReleaseCompleted());
      })
    );
  });

  createPressReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PressReleasesActionTypes.CREATE_PRESS_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchPressReleases());
      })
    );
  });

  updatePressRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdatePressRelease>(PressReleasesActionTypes.UPDATE_PRESS_RELEASE),
      switchMap((action) => {
        return this.pressReleaseService.patchPressRelease(
          action.updatedPressRelease
        );
      }),
      switchMap(() => {
        return of(updatePressReleaseCompleted());
      })
    );
  });

  updatePressReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PressReleasesActionTypes.UPDATE_PRESS_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchPressReleases());
      })
    );
  });

  removePressRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RemovePressRelease>(PressReleasesActionTypes.REMOVE_PRESS_RELEASE),
      switchMap((action) => {
        return this.pressReleaseService.deletePressRelease(action.id);
      }),
      switchMap(() => {
        return of(removePressReleaseCompleted());
      })
    );
  });

  removePressReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PressReleasesActionTypes.REMOVE_PRESS_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchPressReleases());
      })
    );
  });
}
