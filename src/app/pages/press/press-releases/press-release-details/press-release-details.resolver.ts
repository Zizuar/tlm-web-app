import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PressRelease, PressReleaseService} from '../../../../services/press-release.service';

@Injectable({
  providedIn: 'root'
})
export class PressReleaseDetailsResolver implements Resolve<PressRelease | null> {
  constructor(
    private readonly pressReleasesService: PressReleaseService,
    private readonly router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PressRelease | null> {
    return this.pressReleasesService.getPressReleases().pipe(
      map<PressRelease[], PressRelease | null>(releases => {
        const release = releases.find(release => release.songId === route.params['songId']);
        if (release) {
          return release;
        }
        this.router.navigateByUrl('/press', {replaceUrl: true});
        return null;
      })
    );
  }
}
