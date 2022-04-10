import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  CreateRelease,
  createReleaseCompleted,
  fetchReleases,
  fetchReleasesCompleted,
  ReleasesActionTypes,
  RemoveRelease,
  removeReleaseCompleted,
  UpdateRelease,
  updateReleaseCompleted,
} from './releases.actions';
import { ReleasesService } from '../../services/releases.service';
import { of, switchMap } from 'rxjs';
import { ExistingRelease } from '../../core/models/release.model';

@Injectable()
export class ReleasesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly releasesService: ReleasesService
  ) {}

  fetchReleases$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.FETCH_RELEASES),
      switchMap(() => {
        return this.releasesService.getAllReleases();
      }),
      switchMap((releases: ExistingRelease[]) => {
        return of(fetchReleasesCompleted({ releases }));
      })
    );
  });

  createRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.CREATE_RELEASE),
      switchMap((action: CreateRelease) => {
        return this.releasesService.postRelease(action.newRelease);
      }),
      switchMap(() => {
        return of(createReleaseCompleted());
      })
    );
  });

  createReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.CREATE_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchReleases());
      })
    );
  });

  updateRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.UPDATE_RELEASE),
      switchMap((action: UpdateRelease) => {
        return this.releasesService.patchRelease(action.updatedRelease);
      }),
      switchMap(() => {
        return of(updateReleaseCompleted());
      })
    );
  });

  updateReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.UPDATE_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchReleases());
      })
    );
  });

  removeRelease$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.REMOVE_RELEASE),
      switchMap((action: RemoveRelease) => {
        return this.releasesService.deleteRelease(action.category, action.id);
      }),
      switchMap(() => {
        return of(removeReleaseCompleted());
      })
    );
  });

  removeReleaseCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.REMOVE_RELEASE_COMPLETED),
      switchMap(() => {
        return of(fetchReleases());
      })
    );
  });
}
