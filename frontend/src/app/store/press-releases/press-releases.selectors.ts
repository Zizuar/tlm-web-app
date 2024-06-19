import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PressReleasesState } from './press-releases.reducer';

export const selectPressReleasesFeatureState = createFeatureSelector<PressReleasesState>('pressReleases');

export const selectPressReleases = createSelector(
  selectPressReleasesFeatureState,
  (state: PressReleasesState) => state.pressReleases,
);

export const selectPressReleasesFetched = createSelector(
  selectPressReleasesFeatureState,
  (state: PressReleasesState) => state.pressReleasesFetched,
);
