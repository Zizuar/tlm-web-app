import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription, switchMap, take } from 'rxjs';
import { ExistingRelease } from '../../../core/models/release.model';
import {
  selectPastReleases,
  selectReleasesFetched,
} from '../../../store/releases/releases.selectors';
import { fetchReleases } from '../../../store/releases/releases.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss'],
})
export class ReleaseDetailsComponent implements OnDestroy {
  release: Observable<ExistingRelease | undefined>;
  paramsSub: Subscription = new Subscription();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store
  ) {
    this.store
      .select(selectReleasesFetched)
      .pipe(take(1))
      .subscribe((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
      });
    this.release = this.store.select(selectPastReleases).pipe(
      switchMap((releases) => {
        return of(
          releases.find(
            (release) =>
              this.activatedRoute.snapshot.params['id'] === release.id
          )
        );
      })
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
