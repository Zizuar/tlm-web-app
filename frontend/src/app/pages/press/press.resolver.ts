import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Release, ReleasesService } from '../../services/releases.service';

@Injectable({
  providedIn: 'root',
})
export class PressResolver implements Resolve<Release[]> {
  constructor(private readonly releasesService: ReleasesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Release[]> {
    return this.releasesService.getAllReleases().pipe(
      map<Release[], Release[]>((releases) => {
        return releases.filter((release) => release.onPressPage);
      })
    );
  }
}
