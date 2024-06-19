import { createAction, props } from '@ngrx/store';
import { ExistingPressRelease } from '../../core/models/press-release.model';

export enum PressReleasesActionTypes {
  FETCH_PRESS_RELEASES = '[Press Releases] Fetch press releases',
  FETCH_PRESS_RELEASES_COMPLETED = '[Press Releases] Fetch press releases completed',
}

export const fetchPressReleases = createAction(PressReleasesActionTypes.FETCH_PRESS_RELEASES);

export const fetchPressReleasesCompleted = createAction(
  PressReleasesActionTypes.FETCH_PRESS_RELEASES_COMPLETED,
  props<{ pressReleases: ExistingPressRelease[] }>(),
);
