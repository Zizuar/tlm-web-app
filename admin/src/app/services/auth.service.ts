import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public authService: AuthService, private readonly http: HttpClient) {}

  get isLoggedIn$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  getToken$(): Observable<string> {
    return this.authService.getAccessTokenSilently();
  }

  get user$(): Observable<any> {
    return this.authService.user$;
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

  async getScopes(): Promise<{ scopes: string }> {
    return await firstValueFrom(this.http.get<{ scopes: string }>(`${environment.apiBaseUrl}/v1/users/scopes`));
  }
}
