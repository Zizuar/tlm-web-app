import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import dayjs from 'dayjs';
import { ExistingPressRelease } from '../../../core/models/press-release.model';
import { Store } from '@ngrx/store';
import {
  selectPressReleases,
  selectPressReleasesFetched,
} from '../../../store/press-releases/press-releases.selectors';
import { fetchPressReleases } from '../../../store/press-releases/press-releases.actions';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss'],
})
export class PressReleasesComponent implements OnInit, OnDestroy {
  pressReleases: Observable<ExistingPressRelease[]> = this.store.select(selectPressReleases);
  dayjs = dayjs;

  private readonly subscriptions = new Subscription();

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.subscriptions.add(
      this.store
        .select(selectPressReleasesFetched)
        .pipe(
          tap((arePressReleasesFetched) => {
            if (!arePressReleasesFetched) {
              this.store.dispatch(fetchPressReleases());
            }
          }),
        )
        .subscribe(),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
