import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  CHECK_AUTH = '[Auth] Check auth',
  LOGIN = '[Auth] Login',
  LOGIN_COMPLETED = '[Auth] Login completed',
  FETCH_SCOPES = '[Auth] Fetch user scopes',
  FETCH_SCOPES_COMPLETED = '[Auth] Fetch user scopes completed',
  LOGOUT = '[Auth] Logout',
  LOGOUT_COMPLETED = '[Auth] Logout completed',
}

export const checkAuth = createAction(AuthActionTypes.CHECK_AUTH);

export const login = createAction(AuthActionTypes.LOGIN, props<{ redirectUrl?: string }>());
export type LoginAction = ReturnType<typeof login>;

export const loginCompleted = createAction(
  AuthActionTypes.LOGIN_COMPLETED,
  props<{ profile: any; isLoggedIn: boolean }>()
);

export const fetchScopes = createAction(AuthActionTypes.FETCH_SCOPES);

export const fetchScopesCompleted = createAction(AuthActionTypes.FETCH_SCOPES_COMPLETED, props<{ scopes: string }>());

export const logout = createAction(AuthActionTypes.LOGOUT);

export const logoutCompleted = createAction(AuthActionTypes.LOGOUT_COMPLETED);
