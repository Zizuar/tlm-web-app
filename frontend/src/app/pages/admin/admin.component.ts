import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth.actions';
import { Observable } from 'rxjs';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn,
} from '../../store/auth.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;

  constructor(
    private readonly store: Store,
  ) {
    this.loggedIn$ = this.store.select(selectIsLoggedIn);
    this.profile$ = this.store.select(selectCurrentUserProfile);
  }

  logout() {
    this.store.dispatch(logout());
  }

  login(redirectUrl: string) {
    this.store.dispatch(login({ redirectUrl }));
  }
}
