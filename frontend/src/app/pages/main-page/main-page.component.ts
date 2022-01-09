import {AfterContentInit, Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
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

  fragmentOnInit: string | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly viewportScroller: ViewportScroller,
    private readonly releasesService: ReleasesService,
    private readonly router: Router,
  ) {
    // get upcoming-releases from observable
    this.sub = this.allReleases$.pipe(
      map<Release[], void>(releases => {
        this.countdowns = releases
          .filter(release => release.releaseDate > this.today)
          .sort((a, b) => {
            return a.releaseDate > b.releaseDate ? 1 : a.releaseDate < b.releaseDate ? -1 : 0;
          })
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
    const navigation = this.router.getCurrentNavigation();
    const navigationExtrasState = navigation && navigation.extras && navigation.extras.state ? navigation.extras.state : null;
    this.fragmentOnInit = navigationExtrasState ? navigationExtrasState['scrollToFragment'] : null;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      if (this.fragmentOnInit) {
        this.viewportScroller.scrollToAnchor(this.fragmentOnInit);
      }
    }, 500);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private set sub(sub: Subscription) {
    this.subscriptions.push(sub);
  }

}
