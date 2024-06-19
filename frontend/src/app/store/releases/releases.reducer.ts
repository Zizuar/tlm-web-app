import { Action, createReducer, on } from '@ngrx/store';
import * as releasesActions from './releases.actions';
import { ExistingRelease } from '../../core/models/release.model';

export interface ReleasesState {
  releases: ExistingRelease[];
  releasesFetched: boolean;
}

export const initialState: ReleasesState = {
  releasesFetched: false,
  releases: [],
};

const releasesReducerInternal = createReducer(
  initialState,

  on(releasesActions.fetchReleasesCompleted, (state, { releases }): ReleasesState => {
    return {
      ...state,
      releases,
      releasesFetched: true,
    };
  }),
);

export function releasesReducer(state: ReleasesState | undefined, action: Action): ReleasesState {
  return releasesReducerInternal(state, action);
}
