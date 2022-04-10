import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import {
  selectReleases,
  selectReleasesFetched,
} from '../../../store/releases/releases.selectors';
import { fetchReleases } from '../../../store/releases/releases.actions';
import { Store } from '@ngrx/store';
import { ExistingRelease } from '../../../core/models/release.model';

@Injectable({
  providedIn: 'root',
})
export class ReleaseDetailsResolver
  implements Resolve<ExistingRelease | undefined>
{
  constructor(private readonly store: Store, private readonly router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExistingRelease | undefined> {
    this.store
      .select(selectReleasesFetched)
      .pipe(take(1))
      .subscribe((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
      });
    return this.store.select(selectReleases).pipe(
      switchMap((releases) => {
        const release = releases.find(
          (release) => release.id === route.params['id']
        );
        if (!release) {
          this.router.navigateByUrl('/releases');
        }
        return of(release);
      })
    );
  }
}
