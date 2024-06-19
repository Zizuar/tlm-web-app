import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectReleasesFetched } from '../../../store/releases/releases.selectors';
import { fetchReleases } from '../../../store/releases/releases.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReleaseDetailsResolver {
  constructor(private readonly store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectReleasesFetched).pipe(
      take(1),
      map((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
        return areReleasesFetched;
      }),
    );
  }
}
