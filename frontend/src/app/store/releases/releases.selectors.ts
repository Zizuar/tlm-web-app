import { ReleasesState } from './releases.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReleasesService } from '../../services/releases.service';

export const selectReleasesFeatureState = createFeatureSelector<ReleasesState>('releases');

export const selectReleases = createSelector(selectReleasesFeatureState, (state: ReleasesState) => state.releases);

export const selectFutureReleases = createSelector(selectReleasesFeatureState, (state: ReleasesState) => {
  const today = new Date();
  return state.releases.filter((release) => release.releaseDate > today).sort(ReleasesService.sortByDateDescending);
});

export const selectPastReleases = createSelector(selectReleasesFeatureState, (state: ReleasesState) => {
  const today = new Date();
  return state.releases.filter((release) => release.releaseDate <= today).sort(ReleasesService.sortByDateAscending);
});

export const selectReleasesFetched = createSelector(
  selectReleasesFeatureState,
  (state: ReleasesState) => state.releasesFetched,
);

export const selectReleasesForPress = createSelector(selectReleasesFeatureState, (state: ReleasesState) =>
  state.releases.filter((release) => release.onPressPage),
);
