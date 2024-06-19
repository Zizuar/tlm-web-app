import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExistingRelease } from '../../../core/models/release.model';
import { Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPastReleases, selectReleasesFetched } from '../../../store/releases/releases.selectors';
import { fetchReleases } from '../../../store/releases/releases.actions';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.scss'],
})
export class ReleaseListComponent {
  releases: Observable<ExistingRelease[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly store: Store,
  ) {
    this.store
      .select(selectReleasesFetched)
      .pipe(take(1))
      .subscribe((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
      });
    this.releases = this.store.select(selectPastReleases).pipe(
      switchMap((releases: ExistingRelease[]) => {
        return this.activatedRoute.snapshot.params['category']
          ? of(releases.filter((release) => release.category === this.activatedRoute.snapshot.params['category']))
          : of(releases);
      }),
    );
  }
}
