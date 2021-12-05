import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Release, ReleasesService} from '../../../services/releases.service';

@Injectable({
  providedIn: 'root'
})
export class ReleaseDetailsResolver implements Resolve<Release> {
  constructor(
    private readonly releasesService: ReleasesService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Release> {
    return this.releasesService.getReleaseById(route.params['category'], route.params['id'])
      .pipe(
        map((release: Release) => {
          return {
            ...release,
            releaseDate: new Date(release.releaseDate),
          }
        })
      );
  }
}
