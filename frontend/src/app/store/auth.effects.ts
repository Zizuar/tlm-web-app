import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../services/auth.service';
import {
  AuthActionTypes,
  LoginAction,
} from './auth.actions';
import * as authActions from './auth.actions';
import { combineLatest, of, switchMap, tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.LOGIN),
        tap((action) =>
          this.authService.login(action.redirectUrl ? action.redirectUrl : '')
        )
      );
    },
    { dispatch: false }
  );

  loginCompleted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN_COMPLETED),
      switchMap(() => {
        return of(authActions.fetchScopes());
      })
    );
  });

  fetchScopes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.FETCH_SCOPES),
      switchMap(() => this.authService.getScopes()),
      switchMap((response) => {
        return of(authActions.fetchScopesCompleted(response));
      })
    );
  });

  checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      // If an action with the type 'checkAuth' occurs in the actions$ stream...
      ofType(AuthActionTypes.CHECK_AUTH),
      // return an observable including the latest info from 'isLoggedIn' and 'userProfile'
      switchMap(() =>
        combineLatest([this.authService.isLoggedIn$, this.authService.user$])
      ),
      // Take it out and return the appropriate action based on if logged in or not
      switchMap(([isLoggedIn, profile]) => {
        if (isLoggedIn) {
          return of(authActions.loginCompleted({ profile, isLoggedIn }));
        }
        return of(authActions.logoutCompleted());
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.LOGOUT),
      tap(() => this.authService.logout()),
      switchMap(() => of(authActions.logoutCompleted()))
    );
  });
}
