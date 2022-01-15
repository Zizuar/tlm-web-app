import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export interface AuthState {
  userProfile: any;
  isLoggedIn: boolean;
  scopes: string;
}

export const initialState: AuthState = {
  userProfile: null,
  isLoggedIn: false,
  scopes: '',
};

const authReducerInternal = createReducer(
  initialState,

  on(
    authActions.loginCompleted,
    (state, { profile, isLoggedIn }): AuthState => {
      return {
        ...state,
        userProfile: profile,
        isLoggedIn,
      };
    }
  ),

  on(authActions.logoutCompleted, (state, {}): AuthState => {
    return {
      ...state,
      userProfile: null,
      isLoggedIn: false,
    };
  }),

  on(authActions.fetchScopesCompleted, (state, { scopes }): AuthState => {
    return {
      ...state,
      scopes,
    };
  })
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducerInternal(state, action);
}
