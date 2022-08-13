import { createAction, props } from '@ngrx/store';
import { ExistingPressRelease, NewPressRelease } from '../../core/models/press-release.model';

export enum PressReleasesActionTypes {
  FETCH_PRESS_RELEASES = '[Press Releases] Fetch press releases',
  FETCH_PRESS_RELEASES_COMPLETED = '[Press Releases] Fetch press releases completed',
  CREATE_PRESS_RELEASE = '[Press Releases] Create press release',
  CREATE_PRESS_RELEASE_COMPLETED = '[Press Releases] Create press release completed',
  UPDATE_PRESS_RELEASE = '[Press Releases] Update press release',
  UPDATE_PRESS_RELEASE_COMPLETED = '[Press Releases] Update press release completed',
  REMOVE_PRESS_RELEASE = '[Press Releases] Remove press release',
  REMOVE_PRESS_RELEASE_COMPLETED = '[Press Releases] Remove press release completed',
}

export const fetchPressReleases = createAction(PressReleasesActionTypes.FETCH_PRESS_RELEASES);

export const fetchPressReleasesCompleted = createAction(
  PressReleasesActionTypes.FETCH_PRESS_RELEASES_COMPLETED,
  props<{ pressReleases: ExistingPressRelease[] }>()
);

export const createPressRelease = createAction(
  PressReleasesActionTypes.CREATE_PRESS_RELEASE,
  props<{ newPressRelease: NewPressRelease }>()
);
export type CreatePressRelease = ReturnType<typeof createPressRelease>;

export const createPressReleaseCompleted = createAction(PressReleasesActionTypes.CREATE_PRESS_RELEASE_COMPLETED);

export const updatePressRelease = createAction(
  PressReleasesActionTypes.UPDATE_PRESS_RELEASE,
  props<{ updatedPressRelease: ExistingPressRelease }>()
);
export type UpdatePressRelease = ReturnType<typeof updatePressRelease>;

export const updatePressReleaseCompleted = createAction(PressReleasesActionTypes.UPDATE_PRESS_RELEASE_COMPLETED);

export const removePressRelease = createAction(PressReleasesActionTypes.REMOVE_PRESS_RELEASE, props<{ id: string }>());
export type RemovePressRelease = ReturnType<typeof removePressRelease>;

export const removePressReleaseCompleted = createAction(PressReleasesActionTypes.REMOVE_PRESS_RELEASE_COMPLETED);
