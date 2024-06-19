import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PressReleaseService } from '../../services/press-release.service';
import { fetchPressReleasesCompleted, PressReleasesActionTypes } from './press-releases.actions';
import { of, switchMap } from 'rxjs';
import { ExistingPressRelease } from '../../core/models/press-release.model';

@Injectable()
export class PressReleasesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly pressReleaseService: PressReleaseService,
  ) {}

  fetchPressReleases$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PressReleasesActionTypes.FETCH_PRESS_RELEASES),
      switchMap(() => {
        return this.pressReleaseService.getPressReleases();
      }),
      switchMap((pressReleases: ExistingPressRelease[]) => {
        return of(fetchPressReleasesCompleted({ pressReleases }));
      }),
    );
  });
}
