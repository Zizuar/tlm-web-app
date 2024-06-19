import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExistingRelease } from '../../core/models/release.model';
import { Store } from '@ngrx/store';
import { selectReleasesForPress } from '../../store/releases/releases.selectors';

@Injectable({
  providedIn: 'root',
})
export class PressResolver {
  constructor(private readonly store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExistingRelease[]> {
    return this.store.select(selectReleasesForPress);
  }
}
