import {AfterContentInit, Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {Release, ReleasesService} from '../../services/releases.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterContentInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  pageType = 'main';

  allReleases$: Observable<Release[]> = this.releasesService.getAllReleases();
  countdowns: Release[] = [];

  releases: Release[] = [];
  today: Date = new Date();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly viewportScroller: ViewportScroller,
    private readonly releasesService: ReleasesService,
  ) {
    // get upcoming-releases from observable
    this.sub = this.allReleases$.pipe(
      map<Release[], Release[]>(releaseArray => releaseArray.map<Release>(release => {
          return {
            ...release,
            date: new Date(release.releaseDate),
          };
        }),
      ),
      map<Release[], void>(releases => {
        this.countdowns = releases.filter(release => release.releaseDate > this.today);
      }),
    ).subscribe();
    // get releases from observable
    this.sub = this.allReleases$.pipe(
      map<Release[], Release[]>(releaseArray => releaseArray.map<Release>(release => {
          return {
            ...release,
            date: new Date(release.releaseDate),
          };
        }),
      ),
      map<Release[], void>(releaseArray => {
        this.releases = releaseArray.filter(release => release.releaseDate < this.today);
      }),
    ).subscribe();
  }

  ngAfterContentInit() {
    this.sub = this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private set sub(sub: Subscription) {
    this.subscriptions.push(sub);
  }

}
