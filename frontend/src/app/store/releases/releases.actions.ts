import { createAction, props } from '@ngrx/store';
import { ExistingRelease } from '../../core/models/release.model';

export enum ReleasesActionTypes {
  FETCH_RELEASES = '[Releases] Fetch all releases',
  FETCH_RELEASES_COMPLETED = '[Releases] Fetch all releases completed',
}

export const fetchReleases = createAction(ReleasesActionTypes.FETCH_RELEASES);

export const fetchReleasesCompleted = createAction(
  ReleasesActionTypes.FETCH_RELEASES_COMPLETED,
  props<{ releases: ExistingRelease[] }>(),
);
