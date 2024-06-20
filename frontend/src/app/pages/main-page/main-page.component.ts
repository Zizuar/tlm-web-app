import { AfterContentInit, Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ExistingRelease } from '../../core/models/release.model';
import { Store } from '@ngrx/store';
import {
  selectFutureReleases,
  selectPastReleases,
  selectReleasesFetched,
} from '../../store/releases/releases.selectors';
import { fetchReleases } from '../../store/releases/releases.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: { class: 'position-relative' },
})
export class MainPageComponent implements AfterContentInit {
  pageType = 'main';

  countdowns: Observable<ExistingRelease[]> = this.store.select(selectFutureReleases);
  releases: Observable<ExistingRelease[]> = this.store.select(selectPastReleases);

  today: Date = new Date();

  fragmentOnInit: string | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly viewportScroller: ViewportScroller,
    private readonly store: Store,
    private readonly router: Router,
  ) {
    // fetch releases if not fetched yet
    this.store
      .select(selectReleasesFetched)
      .pipe(take(1))
      .subscribe((areReleasesFetched) => {
        if (!areReleasesFetched) {
          this.store.dispatch(fetchReleases());
        }
      });
    // fragment-based scrolling
    const navigation = this.router.getCurrentNavigation();
    const navigationExtrasState =
      navigation && navigation.extras && navigation.extras.state ? navigation.extras.state : null;
    this.fragmentOnInit = navigationExtrasState ? navigationExtrasState['scrollToFragment'] : null;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      if (this.fragmentOnInit) {
        this.viewportScroller.scrollToAnchor(this.fragmentOnInit);
      }
    }, 500);
  }
}
