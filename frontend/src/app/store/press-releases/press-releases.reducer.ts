import { ExistingPressRelease } from '../../core/models/press-release.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as pressReleasesActions from './press-releases.actions';

export interface PressReleasesState {
  pressReleasesFetched: boolean;
  pressReleases: ExistingPressRelease[];
}

export const initialState: PressReleasesState = {
  pressReleasesFetched: false,
  pressReleases: [],
};

const pressReleasesReducerInternal = createReducer(
  initialState,

  on(pressReleasesActions.fetchPressReleasesCompleted, (state, { pressReleases }): PressReleasesState => {
    return {
      ...state,
      pressReleases,
      pressReleasesFetched: true,
    };
  }),
);

export function pressReleasesReducer(state: PressReleasesState | undefined, action: Action): PressReleasesState {
  return pressReleasesReducerInternal(state, action);
}
