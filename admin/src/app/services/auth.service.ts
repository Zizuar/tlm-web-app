import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { checkAuth } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn$ = this.authService.isAuthenticated$;
  user$ = this.authService.user$;

  constructor(public authService: AuthService, private readonly http: HttpClient, private readonly store: Store) {
    this.store.dispatch(checkAuth());
  }

  getAccessToken$(): Observable<string> {
    return this.authService.getAccessTokenSilently();
  }

  login(callbackUrl: string): void {
    this.authService.loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${environment.baseUrl}${callbackUrl}`,
      },
      appState: { target: callbackUrl },
    });
  }

  logout(): void {
    this.authService.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
