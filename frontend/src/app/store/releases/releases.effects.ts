import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { fetchReleasesCompleted, ReleasesActionTypes } from './releases.actions';
import { ReleasesService } from '../../services/releases.service';
import { of, switchMap } from 'rxjs';
import { ExistingRelease } from '../../core/models/release.model';

@Injectable()
export class ReleasesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly releasesService: ReleasesService,
  ) {}

  fetchReleases$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReleasesActionTypes.FETCH_RELEASES),
      switchMap(() => {
        return this.releasesService.getAllReleases();
      }),
      switchMap((releases: ExistingRelease[]) => {
        return of(fetchReleasesCompleted({ releases }));
      }),
    );
  });
}
