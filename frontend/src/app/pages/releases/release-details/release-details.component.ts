import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { ExistingRelease } from '../../../core/models/release.model';
import { selectPastReleases } from '../../../store/releases/releases.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss'],
})
export class ReleaseDetailsComponent {
  release: Observable<ExistingRelease | undefined>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly router: Router,
  ) {
    this.release = combineLatest([this.store.select(selectPastReleases), this.activatedRoute.params]).pipe(
      switchMap(([releases, params]) => {
        const release = releases.find((release) => params['id'] === release.id);
        if (releases.length && !release) {
          this.router.navigate(['releases']);
        }
        return of(release);
      }),
    );
  }
}
