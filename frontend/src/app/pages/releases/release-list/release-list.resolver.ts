import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Release, ReleasesService } from '../../../services/releases.service';

@Injectable({
  providedIn: 'root',
})
export class ReleaseListResolver implements Resolve<Release[]> {
  constructor(private readonly releasesService: ReleasesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Release[]> {
    if (route.params['category']) {
      return this.releasesService.getReleasesByCategory(
        route.params['category']
      );
    } else {
      return this.releasesService.getAllReleases();
    }
  }
}
