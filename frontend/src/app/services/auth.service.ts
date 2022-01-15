import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public authService: AuthService) {}

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
      redirect_uri: `${environment.baseUrl}${callbackUrl}`,
      appState: { target: callbackUrl },
    });
  }

  logout(): void {
    this.authService.logout({ returnTo: document.location.origin });
  }
}
