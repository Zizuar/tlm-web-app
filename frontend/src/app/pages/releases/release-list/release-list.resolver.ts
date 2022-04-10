import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectReleases,
  selectReleasesFetched,
} from '../../../store/releases/releases.selectors';
import { ExistingRelease } from '../../../core/models/release.model';
import { fetchReleases } from '../../../store/releases/releases.actions';

@Injectable({
  providedIn: 'root',
})
export class ReleaseListResolver implements Resolve<ExistingRelease[]> {
  constructor(private readonly store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExistingRelease[]> {
    this.store
      .select(selectReleasesFetched)
      .pipe(take(1))
      .subscribe((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
      });
    if (route.params['category']) {
      return this.store
        .select(selectReleases)
        .pipe(
          switchMap((releases: ExistingRelease[]) =>
            of(
              releases.filter(
                (release) => release.category === route.params['category']
              )
            )
          )
        );
    } else {
      return this.store.select(selectReleases);
    }
  }
}
