import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// get the `auth` property from the state object
export const selectAuthFeatureState = createFeatureSelector<AuthState>('auth');

// get the userProfile from the auth state
export const selectCurrentUserProfile = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.userProfile
);

// get the isLoggedIn from the auth state
export const selectIsLoggedIn = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);

// get the isLoggedIn from the auth state
export const selectScopes = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.scopes
);
