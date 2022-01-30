import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth/auth.actions';
import { Observable } from 'rxjs';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
  selectScopes,
} from '../../store/auth/auth.selectors';
import { SCOPES } from '../../core/auth/scopes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  SCOPES = SCOPES;

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;
  scopes$: Observable<string>;

  constructor(private readonly store: Store) {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.profile$ = this.store.select(selectCurrentUserProfile);
    this.scopes$ = this.store.select(selectScopes);
  }

  logout() {
    this.store.dispatch(logout());
  }

  login(redirectUrl: string) {
    this.store.dispatch(login({ redirectUrl }));
  }
}
