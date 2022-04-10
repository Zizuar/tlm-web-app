import { createAction, props } from '@ngrx/store';
import {
  ExistingRelease,
  NewRelease,
  ReleaseCategories,
} from '../../core/models/release.model';

export enum ReleasesActionTypes {
  FETCH_RELEASES = '[Releases] Fetch all releases',
  FETCH_RELEASES_COMPLETED = '[Releases] Fetch all releases completed',
  CREATE_RELEASE = '[Releases] Create new release',
  CREATE_RELEASE_COMPLETED = '[Releases] Create new release completed',
  UPDATE_RELEASE = '[Releases] Update existing release',
  UPDATE_RELEASE_COMPLETED = '[Releases] Update existing release completed',
  REMOVE_RELEASE = '[Releases] Remove release',
  REMOVE_RELEASE_COMPLETED = '[Releases] Remove release completed',
}

export const fetchReleases = createAction(ReleasesActionTypes.FETCH_RELEASES);

export const fetchReleasesCompleted = createAction(
  ReleasesActionTypes.FETCH_RELEASES_COMPLETED,
  props<{ releases: ExistingRelease[] }>()
);

export const createRelease = createAction(
  ReleasesActionTypes.CREATE_RELEASE,
  props<{ newRelease: NewRelease }>()
);
export type CreateRelease = ReturnType<typeof createRelease>;

export const createReleaseCompleted = createAction(
  ReleasesActionTypes.CREATE_RELEASE_COMPLETED
);

export const updateRelease = createAction(
  ReleasesActionTypes.UPDATE_RELEASE,
  props<{ updatedRelease: ExistingRelease }>()
);
export type UpdateRelease = ReturnType<typeof updateRelease>;

export const updateReleaseCompleted = createAction(
  ReleasesActionTypes.UPDATE_RELEASE_COMPLETED
);

export const removeRelease = createAction(
  ReleasesActionTypes.REMOVE_RELEASE,
  props<{ category: ReleaseCategories; id: string }>()
);
export type RemoveRelease = ReturnType<typeof removeRelease>;

export const removeReleaseCompleted = createAction(
  ReleasesActionTypes.REMOVE_RELEASE_COMPLETED
);
