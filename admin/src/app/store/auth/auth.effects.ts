import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../services/auth.service';
import { AuthActionTypes, LoginAction } from './auth.actions';
import * as authActions from './auth.actions';
import { of, switchMap, tap, map, from, firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthEffects {
  constructor(private readonly actions$: Actions, private readonly authService: AuthenticationService) {}

  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.LOGIN),
        tap((action) => this.authService.login(action.redirectUrl ? action.redirectUrl : ''))
      );
    },
    { dispatch: false }
  );

  checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.CHECK_AUTH),
      switchMap(() =>
        from(
          Promise.all([
            firstValueFrom(this.authService.isLoggedIn$),
            firstValueFrom(this.authService.user$),
          ])
        )
      ),
      switchMap(([isLoggedIn, profile]) => {
        if (isLoggedIn) {
          return this.authService.getAccessToken$().pipe(
            map((accessToken) => {
              const decodedToken: { permissions: string[] } = jwtDecode(accessToken);
              const scopes = decodedToken.permissions.join(' ');
              return [
                authActions.loginCompleted({ profile, isLoggedIn: true }),
                authActions.fetchScopesCompleted({ scopes }),
              ];
            })
          );
        }
        return of([authActions.logoutCompleted()]);
      }),
      switchMap((actions) => actions)
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
